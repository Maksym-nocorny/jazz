# Deploy — ВОВК Coffee

```
host: Vercel
project: vovk-coffee  (scope: maksym-nocornys-projects)
live_url: https://vovk-coffee.vercel.app
source: projects/_example-coffee/04_build
framework: Next.js 14.2.35 (App Router), auto-detected
build_command: next build
output: Next.js default
node: 20.x
```

## How it was deployed
From `04_build/`, authenticated as `maksym-nocorny`:
```bash
vercel link --yes --project vovk-coffee
vercel deploy --prod --yes
```
`.vercelignore` excludes `node_modules`, `.next`, `.git` (Vercel builds remotely).

## Env vars
None required for v1 (no custom backend — D1). When commerce/forms are wired:
- `NEXT_PUBLIC_COMMERCE_*` and any form-service key → set in the Vercel dashboard / `vercel env`,
  never in the repo. Document only the **names** here.

## Domains
Production alias: `vovk-coffee.vercel.app`. To attach the real domain `vovk.coffee`:
`vercel domains add vovk.coffee` then point DNS per Vercel's instructions [CLIENT: provide domain].

## Rollback
`vercel ls vovk-coffee` to list deployments, then
`vercel promote <previous-deployment-url>` (or `vercel rollback`) to restore the prior production
build instantly.

## Notes
- Static site (all routes prerendered). First Load JS ≈ 95 kB on `/`.
- Bumped `next` 14.2.15 → 14.2.35 to clear a published security advisory before going public.
