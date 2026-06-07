# HANDOFF — <Client Name>

> The delivery bible. Kept current through the build, finalized at Phase 11. Tells the client / next
> developer what's done, what's a placeholder, what must change before launch, and how to run it.

## Live & repo
- Live URL: <…>
- Repo: <…> (private; transferred to the client at handoff)
- Deploy: Vercel · root directory = `04_build` · rollback: `vercel rollback`

## 🔴 Must fix before launch
| # | Item | Where | Owner |
|---|------|-------|-------|
| 1 | <e.g. wire the contact form to a real endpoint (currently logs to console)> | <file> | client/dev |

## 🟠 Needs client input / confirm
| Item | Where | Note |
|---|------|------|
| <e.g. founder photo, real address & phone> | <section> | tagged `[CLIENT: …]` in the build |

## Content & assets
- Copy: real (from the copy deck) except items tagged `[CLIENT: …]`.
- Imagery: <source + license, e.g. Pexels (free for commercial use)>; swap for client photography where noted.

## Integrations & env
| Service | Env var (name only) | Status |
|---|------|------|
| <e.g. forms / commerce / analytics> | <NEXT_PUBLIC_…> | to wire |

## How to run
```bash
npm install && npm run dev   # local dev
npm run build                # production build (what Vercel runs)
```

## Known limitations / deferred
- <e.g. backend skipped for v1; only the landing page; blog not built>

## Accessibility & performance notes
- <WCAG AA status, Lighthouse highlights, reduced-motion / ?motion=0 supported>
