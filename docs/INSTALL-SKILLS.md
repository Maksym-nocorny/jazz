# Installing the skills Jazz uses

Jazz's agents reference three kinds of skills: **built-in** (shipped in this repo), **plugin**
(installed from marketplaces), and **vendored** (copied in with attribution). You only need the
plugin ones if you want the richest behavior — the orchestra works without them, but they make the
specialists much stronger.

## Built-in (already here — `.claude/skills/`)
`orchestration-protocol`, `anti-ai-design`, `design-tokens`, `ui-kit`, `brief-intake`,
`new-project`. No install needed.

## Vendored (already here, MIT, attributed)
- **wireframe** — multi-variant wireframing, from
  [Magdoub/claude-wireframe-skill](https://github.com/Magdoub/claude-wireframe-skill). See
  `.claude/skills/wireframe/`. To update: re-clone and copy `SKILL.md` over.

## Plugin skills the agents reference (install from a marketplace)
These map onto roles and dramatically improve them:

- **design** plugin — `user-research`, `research-synthesis`, `design-system`, `design-critique`,
  `accessibility-review`, `design-handoff`, `ux-copy`.
- **engineering** plugin — `architecture`, `system-design`, `code-review`, `testing-strategy`,
  `deploy-checklist`, `incident-response`, `standup`.
- **deep-research**, **verify**, **security-review** — research and validation helpers.

Install official skills and browse plugins in Claude Code:
```text
/plugin marketplace add anthropics/skills
/plugin                       # browse & install design/engineering plugins
```

Curated community sources (verify before installing):
- [anthropics/skills](https://github.com/anthropics/skills) — official.
- [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) — 154+ subagents (MIT), good reference for backend/devops/qa prompts.
- [wshobson/agents](https://github.com/wshobson/agents) — large multi-harness marketplace (MIT).
- [claudemarketplaces.com](https://claudemarketplaces.com/) — community directory.

> Note: a marketplace at `skills.sh` could not be verified at the time of writing — prefer the
> sources above. Always read a third-party skill before installing it.

## The Playwright MCP (for the tester)
The tester drives a real browser via the Playwright MCP (`mcp__playwright__*`). Ensure it's
connected in your Claude Code MCP settings.
