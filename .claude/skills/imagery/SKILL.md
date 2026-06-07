---
name: imagery
description: Source and place real visuals (photography / illustration) so a site looks finished, not like a wireframe. Default is curated, license-clean stock under a single consistent "lens"; placeholders never ship to a final. Load during design/build when a page needs imagery. Pairs with visual-iteration and the anti-ai-design law.
---

# Imagery strategy

Great visuals make or break the look. **Placeholder colored rectangles are the #1 "unfinished /
AI" tell** — they must never reach a final page. Decide the imagery approach early (record it in
`DECISIONS.md`) and give every image slot a real, on-brand asset.

## Approaches (pick per project; default = curated real photography)

1. **Curated real photography (default, safest vs the "AI look").** Hand-pick license-clean photos
   that share one **lens** — same color temperature, lighting, and subject treatment — so the set
   feels art-directed, not random stock.
2. **AI-generated with strict art direction.** Fast and unique, but **risks the AI look** — only
   with a tight brief (style, palette, composition) and a human-style cull. Avoid generic 3D
   blobs / faceless figures. Log the choice.
3. **Custom SVG / illustration / patterns.** Distinctive and photo-free; more time, not right for
   every brand.
4. **Client-provided.** Best when it exists; give the client a shot list and an in-brand lens.

## Curated-stock method (the default)

- **Sources:** Pexels and Unsplash (both free for commercial use; Pexels needs no attribution,
  Unsplash appreciates it). Credit anyway in `public/images/CREDITS.md`.
- **Pick a lens first**, then select to it: e.g. "warm, natural light, shallow depth, hands-and-
  product, no glossy stock smiles." Reject anything off-lens even if it's a nice photo.
- **Download, don't hotlink.** Fetch into `public/images/` so the build is self-contained and
  fast — fragile remote URLs break. Verify each file is a real image (`file`, size > ~20KB).
  ```bash
  # Pexels CDN pattern (id from the photo page URL):
  curl -L "https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=1600" \
    -o public/images/<name>.jpg
  ```
- **One image per real slot:** hero, each product, a process/story shot, an about shot. Distinct
  images for distinct items (don't reuse one photo for three products).

## Placement (Next.js)

- Use **`next/image`**: `fill` inside a `relative` aspect-ratio container with `object-cover`,
  a `sizes` hint, and `priority` on the hero (LCP). Local `public/` images need no remote config.
- **Alt text is real and descriptive**, in the client's language; decorative/background images get
  `alt=""` + `aria-hidden`.
- Text over an image needs a scrim/overlay to keep **WCAG AA** contrast.
- Keep consistent aspect ratios and the token radius/shadow scale.

## Definition of done

- [ ] Every image slot in the final has a real, on-lens asset — **zero placeholder rectangles**.
- [ ] Distinct images for distinct items; one coherent lens across the page.
- [ ] `next/image` with alt text (client language); hero is `priority`.
- [ ] Overlaid text passes WCAG AA; ratios/radius consistent.
- [ ] License recorded in `public/images/CREDITS.md`; approach logged in `DECISIONS.md`.
