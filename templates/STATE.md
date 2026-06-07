# STATE — <Client Name>

> Single source of truth. The PM updates this before and after every step. A fresh session must be
> able to continue the project from this file plus the workspace `.md` files alone.

```
slug: <client-slug>
client_language: tbd        # set at Intake (e.g. uk, en)
needs_backend: tbd          # yes | no
hosting: tbd                # vercel | other
design_direction: tbd       # set at Art direction
chosen_scheme: tbd          # set at Design system
current_phase: 0
live_url: tbd               # set by devops
```

## Phases

| # | Phase | Owner | Status | Iteration | Notes / Next |
|---|-------|-------|--------|-----------|--------------|
| 0 | Intake | pm | todo | 0/3 | detect language, fill brief |
| 1 | Research | researcher | todo | 0/3 | |
| 2 | Discovery interview | designer | todo | 0/3 | |
| 3 | Art direction | designer | todo | 0/3 | sets design_direction |
| 4 | Content | copywriter | todo | 0/3 | |
| 5 | Wireframes | designer | todo | 0/3 | ≥3 variants |
| 6 | Design system | designer | todo | 0/3 | tokens + UI-kit |
| 7 | Final + build | designer | todo | 0/3 | Next.js |
| 8 | Backend | backend | todo | 0/3 | conditional |
| 9 | DevOps / deploy | devops | todo | 0/3 | Vercel |
| 10 | E2E test | tester | todo | 0/3 | Playwright |
| 11 | Review & handoff | pm | todo | 0/3 | |

Status: `todo · in-progress · review · needs-revision · client-review · done · blocked · skipped`
