# STATE — ВОВК Coffee Roasters

> Single source of truth. The PM updates this before and after every step. A fresh session must be
> able to continue the project from this file plus the workspace `.md` files alone.

```
slug: _example-coffee
client_language: uk         # set at Intake
needs_backend: no           # commerce + forms via a hosted service (D1)
hosting: vercel             # D2
design_direction: Craft Editorial   # A, chosen at Art direction (D3)
chosen_scheme: Espresso     # chosen at Design system (D5)
current_phase: 11
live_url: https://vovk-coffee.vercel.app   # set by devops at deploy
```

## Phases

| # | Phase | Owner | Status | Iteration | Notes / Next |
|---|-------|-------|--------|-----------|--------------|
| 0 | Intake | pm | done | 0/3 | language=uk; brief approved (CLIENT_LOG P0); needs_backend=no, hosting=vercel |
| 1 | Research | researcher | done | 0/3 | competitors + SUMMARY; Judge approved (1 nit fixed) |
| 2 | Discovery interview | designer | done | 0/3 | interview-notes synthesized; client confirmed |
| 3 | Art direction | designer | done | 0/3 | direction=Craft Editorial (A); client picked A (D3) |
| 4 | Content | copywriter | done | 0/3 | copy-deck.md (uk); H1 softened per P5 edit |
| 5 | Wireframes | designer | done | 0/3 | 3 variants; Judge needs-revision→fixed; client picked A + coffees-higher (D6) |
| 6 | Design system | designer | done | 0/3 | tokens (Espresso + Forest) + UI-kit; client picked Espresso (D5) |
| 7 | Final + build | designer | done | 1/3 | built; Judge: token-fix + visual-quality needs-revision (placeholder imagery)→fixed with real photography + visual-iteration; client r1 too plain→r2 approved |
| 8 | Backend | backend | skipped | 0/3 | no custom backend — hosted commerce/forms service (D1) |
| 9 | DevOps / deploy | devops | done | 0/3 | deployed to Vercel (next@14.2.35) → https://vovk-coffee.vercel.app; favicon added |
| 10 | E2E test | tester | done | 0/3 | Playwright on PROD: PASS (render, fonts, contrast 16.24, form invalid/valid, mobile no-overflow); see tests/report.md |
| 11 | Review & handoff | pm | done | 0/3 | prod live + accepted; handoff package compiled |

Status: `todo · in-progress · review · needs-revision · client-review · done · blocked · skipped`
