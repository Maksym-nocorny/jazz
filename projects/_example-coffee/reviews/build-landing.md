# Review: build — landing page (Next.js)

```
artifact: 04_build (landing route + footer), tokens: 03_design/tokens/design-tokens.json
reviewed_by: judge
date: 2026-06-04
status: needs-revision
```

> Phase 7 build, Judge gate before the client preview. One blocking token violation (Law 2) and one
> accessibility nit. Both resolved by the author; resolutions filled below.

## Findings
```
- file: 04_build/components/sections/story.tsx (+ components/ui/button.tsx)
  where: dark "Чому вовк" story band background + the accent "Оформити підписку" button
  severity: blocking
  message: Hardcoded hex in an earlier draft — `background:#5A3120` on the dark story band and
    `#C5683B` on the accent button, instead of semantic tokens. Violates Law 2 (no hardcoded
    hex/px in components) and breaks re-theming: a scheme swap (Espresso→Forest) would leave the
    band and button stuck on espresso/ember.
  suggested_fix: Use the surface-inverse token (`bg-surface-inverse` = color.espresso.800) for the
    band and the accent token (`bg-accent` = color.ember.500) for the button. No raw hex in
    components — pull every color from the CSS variables.
  resolution: Fixed — the story band uses `bg-surface-inverse` / `text-text-on-inverse` and the
    button uses the `accent` token; grepped the build, no remaining raw hex/px in components
    (only the tokens JSON).

- file: 04_build/components/sections/coffees.tsx
  where: coffee-lot meta line (метод / обробка / висота), muted text
  severity: nit
  message: The lot metadata uses `text-muted` (color.ink.500 `#6E5A48`) on the white card; the
    tasting notes above it are the page's most important proof content (per SUMMARY) and must read
    crisply, not be de-emphasized.
  suggested_fix: Keep the tasting-notes line at full-contrast `text`; only the secondary meta may be
    muted, and it must still clear WCAG AA on the card surface.
  resolution: Confirmed — tasting notes use full-contrast `text` (ink.900); the secondary meta keeps
    `text-muted`, which meets WCAG AA on the card. Primary proof (notes + price) stays crisp.
```

## Summary
One blocker, one nit. The blocker is a Law-2 violation — hardcoded espresso/ember hex in the story
band and accent button that would survive a theme swap; fixed by switching to the `surface-inverse`
and `accent` tokens. The nit kept the secondary lot meta muted while ensuring the tasting notes (the
site's whole differentiator) stay full-contrast `text`. Both resolved → ready to present the preview.
