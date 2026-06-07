# Review: wireframes (landing v1, lo-fi)

```
artifact: 03_design/wireframes/NOTES.md
reviewed_by: judge
date: 2026-06-01
status: needs-revision
```

> First pass = needs-revision; the author resolved both findings in the same artifact (no new draft
> needed — these were spec/notes issues, not a code change). Re-review note at the bottom.

## Findings
```
- file: 03_design/wireframes/NOTES.md
  where: variants A / B / C — overall differentiation
  severity: important
  message: Variants read as the same editorial layout with sections reordered, not three genuinely
    distinct UX philosophies. A vs C especially overlap (both story-forward); the spec doesn't make
    the *information-architecture* difference explicit enough for the client to choose meaningfully.
  suggested_fix: Sharpen each variant's thesis and make the trade-off legible — A = origin/data-first
    (trust early), B = shop-first (cart earliest), C = story-first (emotion before product) — and
    score each against the actual goal (DTC sales + wholesale leads), not "overall UX".
  resolution: Fixed — each variant now states a distinct thesis + section order, with a scoring
    table scored against the goal (A 9 / B 7 / C 6) and an explicit time-to-cart vs trust trade-off.

- file: 03_design/wireframes/NOTES.md
  where: variant A hero (lo-fi)
  severity: nit
  message: Lo-fi hero leans on a single large image block beside the H1; at narrow widths the text
    column risks dropping below ~45 char measure and the CTA could fall below the fold on small
    phones — worth flagging since traffic is mobile-first (from Instagram).
  suggested_fix: Note a mobile stacking order in the spec (H1 → CTA → image) so the primary CTA stays
    above the fold on phones; confirm in the Phase 7 build.
  resolution: Fixed — mobile stacking order (H1 → CTA → image) added to the variant A notes; to be
    verified live by the tester in Phase 10.
```

## Summary
The blocker was variant differentiation: the three options read too similar to give the client a
real choice. After revision each variant has a distinct IA thesis and is scored against the business
goal, which also surfaced the recommendation (A). The mobile-CTA nit is documented for the build.
**Re-review: both resolved → status now effectively approved; PM may present variants to the client.**
