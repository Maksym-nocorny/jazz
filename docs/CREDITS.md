# Credits & provenance

What's built in-house vs brought in, so the system stays maintainable.

## Built for Jazz (this repo, MIT)
- 8 agents — `.claude/agents/`
- 8 skills — `orchestration-protocol`, `anti-ai-design`, `design-tokens`, `ui-kit`, `imagery`,
  `visual-iteration`, `brief-intake`, `new-project`
- Templates (`templates/`), the Next.js starter, and docs.

## Vendored (third-party, with license)
| Component | Source | License | Where |
|---|---|---|---|
| `wireframe` skill | [Magdoub/claude-wireframe-skill](https://github.com/Magdoub/claude-wireframe-skill) | MIT | `.claude/skills/wireframe/` |

## Referenced (not vendored — install separately)
| Component | Source | License |
|---|---|---|
| design / engineering plugin skills | Claude Code marketplaces | per-plugin |
| `anthropics/skills` | [github](https://github.com/anthropics/skills) | per-repo |
| subagent prompt references | [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents), [wshobson/agents](https://github.com/wshobson/agents) | MIT |
| demo photography | [Pexels](https://www.pexels.com) (free for commercial use) — see `projects/_example-coffee/04_build/public/images/CREDITS.md` | Pexels License |

## Research sources behind the design laws
- Anthropic — [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents),
  [Multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Cognition — [Don't build multi-agents](https://cognition.ai/blog/dont-build-multi-agents)
- [Atomic Design (Brad Frost)](https://atomicdesign.bradfrost.com/)
- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [shadcn/ui theming](https://ui.shadcn.com/docs/theming)
- AI-design tells: designer write-ups on purple-gradient/glassmorphism/3-card "AI look" (see
  `methodology.md` and the `anti-ai-design` skill).

> When you vendor or reference new skills, add a row here with the version/date and license.
