# HANDOFF — ВОВК Coffee Roasters

> Delivery bible. (This demo lives in the public Jazz repo as documentation; a real client project
> would be its own private repo, transferred at handoff.)

## Live & repo
- Live URL: https://vovk-coffee.vercel.app
- Repo: demo (public Jazz repo) · real clients get a private repo + Vercel transfer
- Deploy: Vercel · root directory = `04_build` · rollback: `vercel rollback`

## 🔴 Must fix before launch
| # | Item | Where | Owner |
|---|------|-------|-------|
| 1 | Wire the newsletter form to a real service (currently client-side validation only) | `components/sections/newsletter.tsx` | dev |
| 2 | Replace `[CLIENT: …]` placeholders (founder name/photo, address, phone, email) | story / footer | client |

## 🟠 Needs client input / confirm
| Item | Where | Note |
|------|------|------|
| Founder name & photo | Story | currently "Андрій Вовк" `[CLIENT: confirm]` |
| Real contacts (address, phone, email) | Footer | tagged `[CLIENT]` |
| Real product photography | hero / coffee cards | curated Pexels stock — swap for the client's beans/bags |

## Content & assets
- Copy: real (from the copy deck) except items tagged `[CLIENT: …]`.
- Imagery: curated Pexels (free for commercial use; see `04_build/public/images/CREDITS.md`).

## Integrations & env
| Service | Env var (name only) | Status |
|------|------|------|
| Newsletter / commerce | `NEXT_PUBLIC_…` | to wire (v1 ships none — D1) |

## How to run
```bash
npm install && npm run dev   # local
npm run build                # production (what Vercel runs)
```

## Known limitations / deferred
- v1 = a single landing page; Кава / Підписка / Гурт pages deferred.
- No custom backend (D1) — commerce/forms via a hosted service when added.

## Accessibility & performance
- WCAG AA contrast verified; semantic landmarks; keyboard focus visible.
- **Motion**: all reveals respect `prefers-reduced-motion`; `?motion=0` renders the final state.
- First Load JS ≈ 101 kB; all routes static.
