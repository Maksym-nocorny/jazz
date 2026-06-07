# RETRO — ВОВК Coffee Roasters

> Private learning journal — not shown to the client. Read at the start of every session so past
> mistakes are pre-applied, not re-discovered.

## 2026-06-06 — Phase 7 build — designer
- Took longer than it should have: rebuilt the whole landing once because v1 shipped with image
  *placeholders* and read as a coded wireframe.
- Missed (caught by the client): real photography. Placeholder rectangles are the #1 "unfinished"
  tell — never ship them to a final.
- Will do differently: source curated photography (`imagery`) **before** building sections, and run
  the `visual-iteration` loop (screenshot → look → refine) before the client ever sees a preview.

## 2026-06-06 — Phase 7 motion — designer
- Took longer than it should have: motion tokens existed in `design-tokens.json` but were never
  wired to CSS vars, and `globals.css` hardcoded the curve — so "motion" was a dead decoration.
- Missed: scroll-triggered reveals; the old `.animate-rise` fired on page-load, so below-the-fold
  content animated unseen.
- Will do differently: use the `motion` skill's `data-motion` system from the start; tokenize all
  curves/durations; always verify `?motion=0` **and** `prefers-reduced-motion` render the final state.

## 2026-06-05 — Phase 7 type — designer
- Missed: the hero headline orphaned "тих," on its own line at the largest clamp size.
- Will do differently: use `text-balance` and check headline wrapping at the clamp max during
  visual-iteration.
