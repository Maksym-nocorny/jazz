# Roles

Eight agents. Full system prompts live in `.claude/agents/`. The PM is the only one that talks to
the client; specialists deliver artifacts and options.

| Agent | One-liner | File |
|---|---|---|
| **pm** | Orchestrator: plan, route, gate, client comms, owns STATE/DECISIONS/CLIENT_LOG | [pm](../.claude/agents/pm.md) |
| **researcher** | Market, competitor, audience research; positioning | [researcher](../.claude/agents/researcher.md) |
| **designer** | Interviews, art direction, wireframes, tokens, UI-kit, components, build | [designer](../.claude/agents/designer.md) |
| **copywriter** | Site copy in the client's language, after research | [copywriter](../.claude/agents/copywriter.md) |
| **backend** | APIs, data, auth — only if the project needs it | [backend](../.claude/agents/backend.md) |
| **devops** | Repo, CI, hosting (Vercel), services, deploy | [devops](../.claude/agents/devops.md) |
| **judge** | Per-artifact critic; machine-readable findings; adversarial | [judge](../.claude/agents/judge.md) |
| **tester** | End-to-end validation of the running site (Playwright) | [tester](../.claude/agents/tester.md) |

## Judge vs Tester (the one distinction people get wrong)

- **Judge** = is this *artifact* correct, against the brief + rubric? Static, before integration,
  bounded to 3 revision rounds. Writes `reviews/`.
- **Tester** = does the *whole running product* work as planned, for a user? Dynamic, in a browser,
  after integration. Writes `tests/` (and files bugs to `reviews/`).

## Model routing

Opus: pm, researcher, designer, backend, judge. Sonnet: copywriter, devops, tester. Haiku for
ad-hoc routine work. Only spawn the agents a project needs (backend & devops are conditional).
