# Jazz Next.js starter

Minimal **token-driven** Next.js (App Router) + Tailwind + shadcn-style starter. Copy into a
project's `04_build/` and extend by composing UI-kit components.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also what Vercel runs)
```

## How theming works
- Tokens live as CSS variables in `app/globals.css` (`:root` / `.dark`), mirroring
  `03_design/tokens/design-tokens.json`.
- `tailwind.config.ts` maps semantic names to `var(--…)`.
- Components use semantic classes (`bg-primary`, `text-muted`, `rounded-interactive`) — **never**
  hardcoded hex/px. Swap the semantic tokens to re-theme everything.

## Rules
- Build the UI-kit page first; pages may only use declared components.
- No lorem ipsum; use the real copy deck.
- Run the `anti-ai-design` checklist before handoff.
