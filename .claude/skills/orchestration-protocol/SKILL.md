---
name: orchestration-protocol
description: The step-by-step procedure the Jazz PM follows to run a client web project — phase pipeline, ticket lifecycle, the Judge loop and the client loop, STATE.md/DECISIONS.md/CLIENT_LOG.md formats, and escalation rules. Load this when orchestrating a Jazz project.
---

# Jazz orchestration protocol

This is the PM's operating procedure. It assumes the workspace layout and golden rules in
`CLAUDE.md`. The PM is the only agent that talks to the client.

## State machine (per project)

`STATE.md` is the single source of truth. Keep it current at all times:

```
# STATE — <client name>
slug: <client-slug>
client_language: <e.g. uk>
needs_backend: <yes|no|tbd>
hosting: <vercel|other|tbd>
current_phase: <0–11>
design_direction: <chosen direction, once set>
chosen_scheme: <color/type scheme, once set>
live_url: <set by devops>

| Phase | Name | Owner | Status | Notes / Next |
|-------|------|-------|--------|--------------|
| 0 | Intake | pm | done | language=uk |
| 1 | Research | researcher | in-progress | ... |
| ... |
```

Status values: `todo | in-progress | review | needs-revision | client-review | done | blocked | skipped`.

## Ticket lifecycle (one task at a time)

1. **Open** a ticket from `templates/task-ticket.md` into the relevant phase folder. Fill the goal,
   acceptance criteria (Definition of Done), the upstream files to read, and the output location.
   Set `Iteration: 0/3`.
2. **Delegate** to exactly one specialist. In the prompt include: the ticket, the exact paths of
   upstream `.md` to read, the `client_language`, the chosen `design_direction`, and where to write.
   Never assume the specialist remembers prior context — inject the files.
3. **Judge gate.** When the artifact returns, send it to the `judge`. Read `reviews/<artifact>.md`.
   - `approved` → promote the draft to its canonical name, set the phase `Status` forward.
   - `needs-revision` → increment `Iteration`, return the findings to the author, repeat.
   - On `Iteration 3/3` still failing → **escalate**: stop, summarize the blocker, and bring the
     client options (or ask the human operator). Log it in `DECISIONS.md`.
4. **Client gate (✅ phases only).** Present 2–3 options + a recommendation. Run the **client loop**.

## The two loops

- **Judge loop (internal, bounded to 3):** specialist → judge → (revise → judge)×≤3 → approved.
- **Client loop (until approval):** PM presents → client feedback/edits → log round N in
  `CLIENT_LOG.md` → route to the right specialist → that specialist applies *those* edits → judge
  re-checks → PM re-presents → repeat until the client approves. Only then mark the phase `done`.

`CLIENT_LOG.md` round format:
```
## Phase <n> — <name> — round <k> — <date>
Shown: <what was presented + paths>
Client said: <verbatim-ish feedback and edits>
Decision: <approved | revise: …>
Routed to: <agent> — <what to change>
```

`DECISIONS.md` entry (ADR-style):
```
## D<k>: <title> — <date>
Context: <why this came up>
Options: <the 2–3 we weighed>
Decision: <what we chose>
Why: <rationale>
Consequences: <follow-ups / scope impact>
```

## Phase pipeline (skip optional phases via the Lite route; record skips in DECISIONS.md)

0 Intake · 1 Research · 2 Discovery interview · 3 Art direction · 4 Content · 5 Wireframes ·
6 Design system · 7 Final + build · 8 Backend (conditional) · 9 DevOps/deploy · 10 E2E test ·
11 Review & handoff. See `CLAUDE.md` for the table and which phases have ✅ client gates.

## Routing map (which agent owns what)

research → `researcher`; interview/art-direction/wireframes/tokens/UI-kit/components/build →
`designer`; copy → `copywriter`; APIs/DB/auth → `backend` (only if `needs_backend: yes`);
repo/CI/deploy/services → `devops`; every artifact review → `judge`; the running site → `tester`.

## Handoff (Phase 11) — give the client their own repo

The project lives in `projects/<slug>/` in the local Jazz workspace during the engagement and is
**gitignored from the public Jazz repo** (only the demo is tracked). At handoff the PM has `devops`:
extract the deliverable (`04_build/` + owned assets), create a **separate, private, client-owned
repo** (`gh repo create <slug> --private --source … --push`), re-link Vercel to it, and transfer the
project/domain. Record the repo + live URL in `DEPLOY.md` and `STATE.md`. Never push client work to
the public Jazz repo.

## Anti-patterns to avoid

- Don't carry context in conversation memory — write it to files first.
- Don't run two specialists on the same subtree at once (clobbering).
- Don't let a revision loop exceed 3 — escalate instead.
- Don't present a single design option — always 2–3 with a recommendation.
- Don't advance a ✅ phase without a logged client approval.
