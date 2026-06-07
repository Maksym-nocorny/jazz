# Visual iteration — landing (Phase 7)

Record of the render → screenshot → critique → refine loop (`visual-iteration` skill). Screenshots
in this folder: `landing-desktop.png`, `landing-mobile.png` (final).

## Round 1 — placeholder build (rejected)
First build was token-clean and correct but used **colored-rectangle placeholders** for every
image. Critique (and the client): reads as a coded wireframe, not a designed site — no focal point,
flat composition, no real photography. → revise.

## Round 2 — imagery + composition
- Added curated Pexels photography (one warm, natural-light lens): hero coffee pour, three distinct
  lot shots, a drum-roaster band, a barista story image. Served via `next/image`.
- Rebuilt the **hero** as an image-led editorial split with an overlapping "Зараз у обсмажці" card.
- Product cards now lead with real photos + hover (lift + image zoom).
- Added a **«Як ми обсмажуємо»** section (roaster photo + stats: ≤12 кг / 24 год / 6).
- **Story band** now uses the barista photo as a subdued texture under the espresso scrim.

## Round 3 — polish
- Type: larger, confident display scale; balanced headline wrapping.
- Warm radial "wash" behind the hero (replaces flat cream) — not an AI gradient.
- Entrance motion on the hero; consistent radius/shadow scale; mobile order checked.

## Result
Desktop + mobile screenshots captured from the running build and reviewed. Real imagery, clear
focal point, editorial asymmetry, considered detail — passes the craft checklist. Verdict: ready
for the client (approved, CLIENT_LOG Phase 7 r2) and for deploy.

Live: https://vovk-coffee.vercel.app
