---
name: anti-ai-design
description: Law 1 of Jazz — make sites that don't look AI-generated or templated. A concrete checklist of AI "tells" to avoid and bespoke moves to use, judged against the project's chosen design direction. Load this when setting art direction, designing/building UI, or reviewing design for an "AI look."
---

# Anti-AI Design (Law 1)

Goal: output that looks like a human studio made it on purpose — matched to the **chosen design
direction** (recorded in `DECISIONS.md`), not the median of every Tailwind tutorial. This is
**not a blanket ban**: a tell is only a problem if it's an unintentional default. If the chosen
direction deliberately uses something on the "avoid" list, that's allowed — **log it in
DECISIONS.md with the reason.**

## The "AI tells" — avoid by default

Each is a real, named signal that reads as machine-generated when used as an unconsidered default:

- **Default purple→blue / indigo gradient** as the brand look ("the official color of 'we used AI'").
- **Generic three-card feature grid** — identical icon+title+text cards, equal size, no hierarchy.
- **Decorative glassmorphism** — frosted translucent cards floating on pastel, used for vibe not function.
- **Default sans everywhere** — Inter / Roboto / Poppins with no intent, especially paired with the above.
- **Emoji as icons / bullets / section markers** (🚀✨😊) instead of a real icon system.
- **3D blobs, gradient meshes, faceless 3D figures** holding glowing orbs / floating UI.
- **Uniform border-radius** on everything — one rounded value applied globally with no reason.
- **Low-contrast gray body text** (#999 on #fff) — fails accessibility and signals no real review.
- **Perfectly even, symmetrical rhythm** — every section the same height/structure, no editorial beats.
- **Shipped placeholder** — lorem ipsum or "Lorem"-flavored filler copy in anything real.
- **Stocky AI imagery** — too-glossy, impossible lighting, generic "happy team" with edge artifacts.
- **Centered hero + subhead + two buttons** as the only idea, with no point of view.

## Bespoke moves — prefer these

- **Intentional type pairing** chosen for the direction (e.g. a characterful display + readable
  body); consider a less-defaulted typeface. Document the pairing as tokens.
- **Editorial / asymmetric layout** — break the grid on purpose, vary card sizes, offset blocks,
  let a hero image and text overlap; guide the eye through a narrative.
- **A distinctive, semantic palette** with a reason (tie it to the brand story), not indigo-by-default.
- **Real content first** — design around the actual copy deck, never placeholder.
- **Custom or curated icons** (one consistent set), real or art-directed photography/illustration.
- **Purposeful motion** — feedback, progress, reveal; never decorative auto-animation.
- **Considered details** — deliberate radius/shadow scale, generous and uneven whitespace,
  micro-typography (measure, leading, tracking).

## Direction → what's appropriate

The chosen direction decides the rules. Examples:
- **Editorial / Swiss**: strong type, grid + deliberate grid-breaks, restrained color, real imagery.
- **Brutalist / anti-design**: system fonts, exposed structure, high contrast, raw — here Inter/Arial
  and hard edges are *correct*, gradients/glass are wrong.
- **Minimal**: very few elements, type and space do the work; one accent color, never a gradient default.
- **Maximal / expressive**: bold color, layered type, motion — but still tokenized and intentional.
- **Corporate-clean**: a neutral grotesk (even Inter) can be right — log the choice so the Judge passes it.

## Self-check before handoff (and the Judge re-runs it)

1. Could a "make me a modern landing page" prompt have produced this? If yes, add intent.
2. Is every color/gradient/font a deliberate, tokenized choice consistent with the direction?
3. Is there a real point of view (layout, type, color) — or is it safe and symmetrical?
4. Real content everywhere? Contrast passes WCAG AA? Icons consistent and non-emoji?
5. Any "avoid" item present — and if so, is it justified by the direction and logged?

Reviewers: cite the specific tell, the file, and the fix. Don't reject a direction's deliberate
choices — reject *unintentional* defaults.
