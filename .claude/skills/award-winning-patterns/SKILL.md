---
name: award-winning-patterns
description: A positive catalog of award-grade layout and interaction patterns (the "do" half that pairs with anti-ai-design's "don't"). Load at art direction and build to reach for distinctive, named patterns instead of inventing safe-but-generic layouts.
---

# Award-winning patterns (the "do" list)

`anti-ai-design` says what to avoid; this says what to reach for. These are named patterns from
high-end editorial/agency work (2024–2026). Pick the few that fit the client's **chosen direction**
(Law 1) — don't pile them all on. Most map to a Jazz `motion`/UI-kit component.

Format: **PATTERN** — when to use · how · Jazz component.

## Layout & composition
- **Pinned hero (scroll compression)** — bold landing hero · 200vh + sticky inner, title `fontSize`
  shrinks over scroll progress · `HeroPinned`. The signature move of the era.
- **Editorial asymmetric split** — content sites · offset columns, image bleeds off an edge, an
  overlapping card; break the grid on purpose · compose with `Reveal`.
- **Bento grid** — feature/overview sections · mixed-size cells in a 12-col grid, varied spans, one
  hero cell · build as a `BentoGrid`. Beats the generic identical 3-card row.
- **Sticky feature list** — 3–6 features each with a visual · sticky visual cross-fades as items
  scroll to center · `StickyFeatureList`.
- **Editorial quote / pull-quote** — testimonials, manifestos · oversized serif quote, line-staggered
  reveal · `SplitText` per line.
- **Logo / value marquee** — social proof or brand values · infinite ribbon, edge-masked · `Marquee`.
- **Dark tonal band** — mid-page rhythm shift · full-bleed inverse-surface section (optionally a
  subdued photo + scrim) to break a long light page.

## Typography
- **Split-text reveal** — hero headlines · word/line stagger with blur-in, text stays selectable ·
  `SplitText`. Headlines only.
- **Big confident display scale** — `clamp()` display sizes, tight leading, balanced wrapping
  (`text-wrap: balance`); deliberate scale jumps, generous measure (~60–75ch).
- **Editorial mono accents** — eyebrows, labels, metadata in a monospace for contrast with a serif/
  grotesk body.

## Interaction & motion
- **Blur reveal on scroll** — default section entrance · opacity + y + `blur()` → resting, fires just
  before the edge · `Reveal variant="blur"`.
- **Staggered children** — lists/grids entering · each child delayed by `index` · `Reveal index={i}`.
- **Magnetic button / CTA** — primary CTA on expressive directions · element eases toward the cursor
  (spring, ~12px) · opt-in `magnetic` prop on Button; honor reduced-motion.
- **Count-up stats** — metrics/proof · animate numbers on scroll-in, preserve `$`/`+`/suffix.
- **Nav morph** — transparent over hero → solid + backdrop-blur after scroll.
- **Smooth (inertial) scroll** — premium feel · Lenis, wired to keep `useScroll`/observers working.
- **Purposeful micro-interactions** — hover lift + image zoom on cards, focus rings, form feedback.

## Texture (use sparingly, on-direction)
- **Grain / noise overlay** — adds warmth and an analog, non-AI feel · a subtle fixed grain layer.
- **Warm wash** — replace flat backgrounds with a soft, low-contrast radial wash (not an AI gradient).

## How to apply
1. At **art direction**: pick 2–4 patterns that fit the direction; note them in `DECISIONS.md`.
2. At **build**: implement via the `motion` skill + shared UI-kit; keep values tokenized.
3. The **Judge** checks the page reaches for at least one distinctive pattern (not just safe blocks),
   while still passing `anti-ai-design`.
