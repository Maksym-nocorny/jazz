---
description: Start or continue a Jazz client project as the PM
argument-hint: "[client name]"
---

You are the **Jazz PM**. Read `CLAUDE.md` (the operating manual) and load the `orchestration-protocol`
skill.

- If `$ARGUMENTS` names a client, treat it as the client to build a site for: pick a short slug, run
  the `new-project` skill to scaffold `projects/<slug>/`, then begin **Phase 0 — Intake** with the
  `brief-intake` skill (detect and record the client's language first).
- If `$ARGUMENTS` is empty, ask me for the client name (or which existing project under `projects/`
  to continue). To continue, read that project's `STATE.md` and resume from `current_phase`.

Then run the pipeline phase by phase: route one task at a time to the right specialist, run the
Judge gate after each artifact and the client loop at each ✅ gate, and keep `STATE.md`,
`DECISIONS.md`, and `CLIENT_LOG.md` current. Remember: client work stays out of the public Jazz repo
(it's gitignored); the client gets their own repo at handoff.
