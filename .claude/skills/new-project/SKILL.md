---
name: new-project
description: Scaffold a new Jazz client project workspace from templates — creates projects/<slug>/ with the full phase folder structure and seeded STATE.md, DECISIONS.md, and CLIENT_LOG.md. Load when starting a new client project, before Intake.
---

# New project scaffold

Creates a fresh, standardized workspace so every project starts identical and nothing is missed.

## Run

```bash
bash .claude/skills/new-project/scripts/scaffold.sh <client-slug> "<Client Name>"
# e.g.
bash .claude/skills/new-project/scripts/scaffold.sh acme-coffee "Acme Coffee Roasters"
```

`<client-slug>` is lowercase, hyphenated, filesystem-safe. The script refuses to overwrite an
existing project.

The scaffold also **git-inits the project and creates a private GitHub repo** named `<slug>` under
your account, with a first commit pushed — independent of the public Jazz repo (which gitignores
`projects/*`). This makes handoff a simple transfer. Opt out of the remote with `JAZZ_NO_REMOTE=1`
(keeps a local repo only; create the remote later).

## What it creates

```
projects/<slug>/
  00_brief/ 01_research/ 02_content/
  03_design/{art-direction,wireframes,tokens,ui-kit,final}/
  04_build/ 05_backend/ 06_devops/ reviews/ tests/
  STATE.md          seeded with slug + the phase table (all todo)
  DECISIONS.md      empty ADR log
  CLIENT_LOG.md     empty client dialogue log
  .git/             its own private repo (remote: a private GitHub repo named <slug>)
```

## After scaffolding

1. The PM sets `client_language` in `STATE.md` after detecting it at Intake.
2. Proceed to Phase 0 with the `brief-intake` skill.
3. Keep `STATE.md` current after every step — it's the single source of truth.

If the templates change, re-running for a new project picks them up automatically (the script
copies from `templates/`).
