---
name: visual-iteration
description: Make a build actually look designed, not like a coded wireframe. Render the page, SCREENSHOT it, look at it, critique against the chosen direction and a craft checklist, then refine — repeat a few rounds. Load during the build/final-design phase, before handing a page to the client. The Judge checks correctness and the Tester checks behavior; this loop is what produces visual quality.
---

# Visual iteration (look → critique → refine)

The single biggest reason AI-built sites look primitive: nobody **looks at the render and refines
it**. Correctness gates (Judge) and behavior gates (Tester) don't make a page beautiful. You must
see what you built, judge it honestly, and iterate. Do this **before** showing the client.

## The loop (2–4 rounds, until it would pass a senior designer's glance)

1. **Render** the running page: `next dev`/`next start` locally (or the deploy URL).
2. **Screenshot** it — and actually view the image, don't reason from code:
   - Desktop full-page + a hero close-up, and **mobile** (≈390px) full-page.
   - Via the **Playwright MCP** (`mcp__playwright__browser_take_screenshot`), or the Playwright CLI
     to a local file you can open:
     ```bash
     npx playwright screenshot --full-page --wait-for-timeout=3000 \
       --viewport-size=1280,900 http://localhost:3000 /tmp/page-desktop.png
     npx playwright screenshot --full-page --viewport-size=390,844 \
       http://localhost:3000 /tmp/page-mobile.png
     ```
     (Lazy images need the wait; full-page scroll triggers their load. If the build has motion, add
     **`?motion=0`** to the URL for a deterministic final-state capture — no mid-animation frames.)
3. **Critique** against the chosen design direction and the checklist below. Name the 3–5
   highest-impact problems.
4. **Fix** those, rebuild, screenshot again. Stop when the craft checklist passes and there are no
   "unfinished" tells.

## Craft checklist (what separates "designed" from "wireframe")

- **No placeholder imagery.** Empty colored rectangles where photos/illustration belong is the #1
  "unfinished" tell. Every image slot has a real, on-lens asset (see the `imagery` skill).
- **A focal point.** The hero earns attention — a strong image, a confident headline, real
  composition. Not centered text + two buttons on blank background.
- **Type with intent.** Large, confident display sizes; deliberate scale jumps; comfortable measure
  (~60–75ch); tight leading on headings. Not one flat size everywhere.
- **Composition & rhythm.** Asymmetry and varied section structure (image-left/right, a tonal band,
  a featured + stacked pair) — not identical stacked blocks. Sections breathe (generous, uneven
  whitespace).
- **Depth & detail.** Considered radius/shadow scale, image treatment (cover, consistent ratios),
  subtle hover (card lift, image zoom), purposeful motion. No flat gray boxes.
- **Real content.** The copy deck, real prices/specifics — never lorem.
- **Contrast & a11y.** Text over images/bands stays WCAG AA; focus states visible.
- **Mobile is designed too** — not just "it doesn't overflow." Stacks read well, image order makes
  sense, tap targets comfortable.

## Anti-AI tie-in
This loop is also where Law 1 is enforced in practice: while looking, kill any templated tell
(default purple gradient, generic identical 3-card grid, glassmorphism, emoji icons, default
Inter/Poppins) unless the direction deliberately calls for it.

## Output
Keep a short `03_design/final/visual-notes.md`: the rounds, what you changed, and the before/after
screenshots. Hand the final screenshots to the PM to show the client.
