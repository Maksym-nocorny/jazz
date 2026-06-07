# Review: visual quality — landing (Phase 7)

```
artifact: 04_build (rendered landing), screenshots: 03_design/final/
reviewed_by: judge
date: 2026-06-06
status: needs-revision  ->  approved (round 2)
```

> Visual-quality gate (looks *designed*, not a coded wireframe). The Judge reviews the designer's
> render screenshots, not just the code. Round 1 failed; round 2 passed.

## Findings (round 1)
```
- file: 04_build (rendered landing, all sections)
  where: every image slot (hero, coffee cards, story, process)
  severity: blocking
  message: Final ships placeholder colored rectangles instead of imagery. Reads as a wireframe, not
    a designed page — no focal point, flat composition. Fails the craft bar and Law 1 ("AI/templated
    look") despite being token-clean.
  suggested_fix: Apply the `imagery` skill — curated real photography under one lens via next/image —
    and run the `visual-iteration` loop (screenshot → critique → refine) until it reads as designed.
  resolution: Fixed in round 2 — curated Pexels photography added across hero/cards/process/story;
    hero rebuilt as an image-led editorial split; new process section; hover/motion polish. Verified
    against desktop + mobile screenshots in 03_design/final/.

- file: 04_build/app/page.tsx
  where: overall section rhythm
  severity: important
  message: Sections are uniform stacked blocks; no tonal shift or featured/asymmetric beat — the
    page feels flat top-to-bottom.
  suggested_fix: Introduce an asymmetric hero, a featured-vs-stacked product layout, and a dark
    tonal band; vary section structure.
  resolution: Fixed — asymmetric hero with overlap card, featured + stacked coffee layout, dark
    espresso story band with photo texture, alternating image/text process section.
```

## Summary
Round 1 blocked on the biggest "unfinished" tell — placeholder imagery and flat composition. Round 2
applied the `imagery` + `visual-iteration` skills: real curated photography and an editorial,
asymmetric composition. Re-reviewed against the render screenshots → **approved**. This is exactly
the gap the new visual-quality gate exists to catch.
