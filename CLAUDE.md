# Jazz — operating manual for the agent orchestra

**Jazz is an agency-as-code.** A team of specialized Claude Code subagents runs a client's web
project end-to-end the way a real studio would: research → strategy → design → copy → build →
ship → QA. A **PM** agent breaks the work into phases, routes tasks to specialists, runs quality
gates, and is the single point of contact with the client. Agents do **not** chat with each
other in memory — they coordinate through Markdown files in a per-project workspace.

> Read this file first, every session. It is the shared source of truth for how the orchestra
> operates. Role-specific detail lives in `.claude/agents/*.md`; reusable procedures live in
> `.claude/skills/*`.

---

## Kickoff — just say the word

No long incantation needed. When the user expresses intent to start or continue client work — e.g.
**"давай зробимо новий проєкт"**, **"новий клієнт"**, **"let's start a project"**, or simply names a
business to build a site for — **immediately act as the PM**:

1. If no client name/language was given, ask for them.
2. Run the `new-project` skill to scaffold `projects/<slug>/`.
3. Begin **Phase 0 — Intake** with the `brief-intake` skill, and keep `STATE.md` current afterward.

To resume later: **"продовжуємо <client>"** → read that project's `STATE.md` first, then continue from
`current_phase`. Explicit shortcut: **`/jazz [client name]`**.

---

## Golden rules (non-negotiable)

1. **Everything in files, nothing only in memory.** Every client conversation, decision, edit,
   and review is written to `.md` in the project workspace. Any agent (or a future session)
   must be able to reconstruct full context from files alone. Conversation memory is never the
   source of truth. → see *File conventions*.
2. **The PM is the only agent that talks to the client.** Specialists deliver artifacts and
   options; the PM presents them, records feedback, and routes revisions back.
3. **Nothing ships that isn't declared.** Every color, font, shadow, spacing, radius is a
   **design token**; every UI element exists in the **UI-kit** before it appears on a page.
   → Laws 2 & 3.
4. **No "AI look."** Output must match the client's chosen design direction and avoid templated
   AI tells. → Law 1.
5. **Loops are bounded.** Judge↔specialist ≤ **3 iterations**, then escalate. The client loop
   repeats until the client approves a phase, with **every round logged** in `CLIENT_LOG.md`.

---

## The 8 agents (`.claude/agents/`)

| Agent | Owns | Key skills |
|---|---|---|
| **pm** | Plan, phases, routing, gates, client comms, `STATE.md` / `DECISIONS.md` / `CLIENT_LOG.md` | `orchestration-protocol`, `brief-intake`, `new-project`, engineering:standup |
| **researcher** | Market, competitor, audience research; positioning | deep-research, design:user-research, design:research-synthesis |
| **designer** | Interviews, art direction, wireframes, design tokens, UI-kit, atomic components, final UI, frontend build | wireframe, design:design-system, design:design-critique, design:accessibility-review, `anti-ai-design`, `design-tokens`, `ui-kit`, `imagery`, `visual-iteration` |
| **copywriter** | Site copy (in the client's language) | design:ux-copy |
| **backend** | APIs, data model, auth — **only if the project needs it** | engineering:architecture, engineering:system-design |
| **devops** | Repo, CI/CD, hosting (Vercel), domains, services, env, deploy | engineering:deploy-checklist, engineering:incident-response |
| **judge** | Per-artifact critic: reviews each deliverable against a rubric; writes machine-readable findings | engineering:code-review, design:design-critique, design:accessibility-review, security-review, `anti-ai-design` |
| **tester** | End-to-end validation of the *running* site from the user's POV (Playwright) | engineering:testing-strategy, verify |

**Judge ≠ Tester.** Judge checks each **artifact** against the brief + rubric *statically*, before
integration. Tester checks the **integrated, running** product *dynamically*, in a real browser.

---

## The pipeline (PM's default playbook)

Phases run in order; the PM may skip optional ones (Lite route) and records that in `DECISIONS.md`.

| # | Phase | Agent | Output | Client gate ✅ |
|---|---|---|---|---|
| 0 | Intake | pm | brief + intake survey; **detect & record client language** | ✅ brief |
| 1 | Research | researcher | market / competitors / audience / positioning | — |
| 2 | Discovery interview | designer | interview script + results | ✅ interview |
| 3 | Art direction | designer | moodboard + **chosen design direction/style** (drives Law 1) | ✅ direction |
| 4 | Content | copywriter | copy deck (client language) | — |
| 5 | Wireframes | designer | **≥3 lo-fi variants** + recommendation + scoring | ✅ pick/merge + edits |
| 6 | Design system | designer | tokens (**2–3 schemes**), **UI-kit**, atoms | ✅ pick scheme + edits |
| 7 | Final + build | designer | pages in Next.js from tokens + components + copy + **real imagery**; visual-iteration loop | ✅ preview + edits |
| 8 | Backend | backend | API / DB / auth (**conditional**) | — |
| 9 | DevOps | devops | repo / CI / services + **deploy to Vercel** | — |
| 10 | E2E test | tester | Playwright on the live URL vs acceptance criteria → bugs to `reviews/` | — |
| 11 | Review & handoff | pm | presentation, feedback, delivery | ✅ acceptance |

### Two feedback loops

- **Judge loop (internal):** PM reads `STATE.md` + ticket → injects the relevant `.md` into the
  agent's prompt → agent writes the artifact → **Judge gate**. If `needs-revision`, PM returns the
  findings to the author (max **3** iterations, then escalate) → promote + update `STATE.md`.
- **Client loop (at ✅ gates):** PM presents 2–3 options / a preview → client feedback & edits go
  to `CLIENT_LOG.md` → PM routes to the right agent → agent applies *those* edits → Judge re-checks
  → PM re-presents → **repeat until the client approves**. Only then is the phase `done`. Each
  round is numbered and logged; scope is fixed in `DECISIONS.md` to control scope-creep.

---

## File conventions (the message bus)

Every project is one folder under `projects/<client-slug>/`, stamped from `templates/` by the
`new-project` skill:

```
projects/<slug>/
  00_brief/        intake survey + brief + client answers (client language)
  01_research/     market, competitors, audience, positioning
  02_content/      copy per page / section
  03_design/
    art-direction/ moodboard + chosen direction/style
    wireframes/    variant-a|b|c (lo-fi)
    tokens/        design-tokens.json (W3C DTCG) + color/type schemes
    ui-kit/        kitchen-sink page: every component & state
    final/         hi-fi UI / component specs
  04_build/        the site (Next.js + Tailwind + shadcn/ui)
  05_backend/      (conditional)
  06_devops/       infra, deploy notes, env examples
  reviews/         Judge findings (machine-readable .md)
  tests/           Tester reports
  STATE.md         ⭐ single source of truth: phase, statuses, owner, Next
  DECISIONS.md     decision log (ADR-style): chosen variants + why
  CLIENT_LOG.md    ⭐ full client dialogue: shown, feedback, edits, approval rounds
```

**Ownership & anti-clobber:**
- Each agent writes **only inside its own subtree** (designer → `03_design/`, copywriter →
  `02_content/`, etc.). Judge writes only to `reviews/`; Tester only to `tests/`; PM owns
  `STATE.md` / `DECISIONS.md` / `CLIENT_LOG.md`.
- Drafts are versioned in the filename (`wireframe_v2.html`); the PM **promotes** the approved
  draft to the canonical name.
- `STATE.md` is updated transactionally: read → change → write, before and after every agent call.

**Machine-readable Judge finding** (one block per issue, in `reviews/<artifact>.md`):
```
status: approved | needs-revision | rejected
- file: <path>
  where: <component / line / node>
  severity: blocking | important | nit
  message: <what's wrong>
  suggested_fix: <concrete change>
  resolution: <filled by the author when fixed>
```

---

## Repos & privacy

Real client projects live in `projects/<slug>/` **in your local Jazz workspace during the project,
but are gitignored from this public repo** — only the `_example-coffee` demo is tracked here. **Never
push client work to the public Jazz repo.** Deploy previews straight from `projects/<slug>/04_build`
with Vercel (no GitHub repo needed). At **handoff (Phase 11)** the `devops` agent creates a
**separate repo the client owns** (private by default) containing just the deliverable, connects
Vercel to it, and transfers it. See the `devops` agent and `orchestration-protocol`.

## Model routing (cost control)

| Tier | Agents | When |
|---|---|---|
| **Opus** | pm, researcher, designer, backend, judge | Planning, architecture, design, adversarial review |
| **Sonnet** | copywriter, devops, tester | Drafting copy, config, browser testing |
| **Haiku** | (ad-hoc) | Routine reformatting, link checks, file moves |

Only spawn the agents a project needs (backend & DevOps are conditional). Batch work per phase
(e.g. designer builds all atoms in one pass) instead of one call per page.

---

## Language policy

- **Internals are English**: agent prompts, code, tokens, docs, commit messages, file/dir names.
- **Client-facing artifacts follow the client's language**, detected at Intake (phase 0) and
  recorded in `STATE.md` (`client_language: …`). Briefs, surveys, interview scripts, and **all
  site copy** use that language. The UI-kit labels and design tokens stay in English.

---

## The three laws of quality (enforced by skills + the Judge rubric)

1. **Anti-AI Design** (`anti-ai-design`) — output is judged against the client's **chosen design
   direction** (phase 3), not a blanket ban. Avoid templated AI tells by default (purple→blue
   gradient default, generic 3-card grids, decorative glassmorphism, default Inter/Roboto/Poppins,
   emoji bullets, 3D blobs / faceless figures, uniform border-radius, low-contrast gray text,
   shipped lorem ipsum). Allowed only when the direction deliberately calls for it — and recorded
   in `DECISIONS.md`.
2. **Design Tokens** (`design-tokens`) — all colors/typography/spacing/shadows/radii are tokens in
   W3C DTCG JSON → CSS variables, three tiers (primitive → semantic → component). Tailwind reads
   the CSS variables. **No hardcoded hex/px in components.** Swapping the semantic layer re-themes
   the whole site.
3. **Atomic + UI-kit** (`ui-kit`) — structure is atoms → molecules → organisms → templates →
   pages. **Build the UI-kit (kitchen-sink) before pages.** Pages may only compose declared
   atoms/tokens. The Judge verifies every used component appears in the UI-kit.

---

## Running a project

1. PM: `Skill new-project` → stamps `projects/<slug>/` and an initial `STATE.md`.
2. PM works the pipeline phase by phase, opening one ticket per task, injecting the relevant `.md`
   into each specialist's prompt, and running the Judge gate after every artifact.
3. At each ✅ gate the PM presents options to the client and runs the client loop to approval.
4. Tester validates the running site; bugs go back through the PM.
5. PM presents the final and hands off.

**Default web stack:** Next.js (App Router) + Tailwind CSS + shadcn/ui. Tokens are exposed as CSS
variables under `:root` / `.dark`; Tailwind theme maps to `var(--…)`; shadcn components consume
semantic tokens. A minimal starter lives in `templates/next-starter/`.
