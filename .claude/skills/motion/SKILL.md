---
name: motion
description: Add purposeful, on-brand animation to a build — scroll reveals, staggered entrances, split-text headlines, marquees, and (optionally) pinned/sticky scroll organisms. Motion values are tokens; everything respects reduced-motion and a ?motion=0 static mode. Load during the build/final-design phase whenever a page needs movement.
---

# Motion

Motion is where a build goes from "static page" to "alive." Jazz's default motion is **library-free**
(no dependency), token-driven, scroll-triggered, and accessible. Reach for a library only for the
premium scroll organisms.

## Two laws of motion
1. **Motion values are tokens.** Curves and durations live in `motion.css` as CSS variables
   (`--ease-out`, `--ease-minimize`, `--duration-micro`, `--duration-section`). **Never hardcode a
   `cubic-bezier(...)` or a `0.3s` in a component** — that's Law 2 (design-tokens) for motion. Emit
   `motion.*` tokens from `design-tokens.json` to these CSS vars.
2. **Every animation degrades to its final state.** It respects `prefers-reduced-motion` **and** a
   `?motion=0` URL param renders the end state instantly — so no-JS users, reduced-motion users, and
   the `visual-iteration` screenshot loop all see the finished page (deterministic captures).

## The library-free core (default — use this)
Vendor the shared kit's motion files into the build (`04_build/ui-kit/`): `motion.css`,
`providers/MotionProvider.tsx`, and `components/motion/{Reveal,SplitText,Marquee}.tsx`.

Wire it once in `app/layout.tsx`:
```tsx
import { MotionProvider, MOTION_GUARD } from "@/ui-kit/providers/MotionProvider";
import "@/ui-kit/motion.css";
// in <body>, BEFORE content:
<script dangerouslySetInnerHTML={{ __html: MOTION_GUARD }} />
<MotionProvider />
```
Then opt elements in:
- `<Reveal variant="rise|blur|up|scale" index={n}>…</Reveal>` — reveal-on-scroll, `index` staggers.
- Or add `data-motion="blur"` + `style={{['--motion-index']:n}}` to any element.
- `<SplitText text="…" />` — word-by-word headline (stays selectable). Headlines only, not body.
- `<Marquee items={[…]} />` — infinite ribbon (decorative, `aria-hidden`).

How it works: a pre-paint `MOTION_GUARD` script adds `.motion-ready` to `<html>` (skipped on
reduced-motion / `?motion=0`); the CSS then hides `[data-motion]` elements; `MotionProvider`'s
IntersectionObserver flips them to `data-motion-state="visible"` as they enter view. Visible by
default → safe everywhere.

## The premium layer (opt-in: `framer-motion`, optional `lenis`)
When a project's direction wants scroll-native drama, add `framer-motion` and use the shared
organisms: `HeroPinned` (title compresses on scroll) and `StickyFeatureList` (sticky visual +
scrolling list), plus `lib/motion.ts` presets. Add **Lenis** smooth scroll only if you also keep
`useScroll`/observers working — re-dispatch a `scroll` event each Lenis tick (see the kit's
`LenisProvider`). Lenis is "table stakes" for award-level feel but a real dependency — log the choice.

## Match motion to the direction (Law 1)
- **Minimal / Swiss:** quiet reveals only; no marquee, no pinned hero.
- **Editorial / craft:** blur-reveal entrances, a split-text hero, maybe one marquee ribbon.
- **Expressive / maximal:** split-text, marquee, pinned hero, magnetic buttons.
- **Brutalist:** often little-to-no easing; instant or harsh transitions — that's correct there.

Over-animation is its own "AI tell." Motion must serve attention/feedback/hierarchy, never decorate.

## Definition of done
- [ ] Motion tokens (`--ease-*`, `--duration-*`) defined and used; no hardcoded curves/durations.
- [ ] Reveals are scroll-triggered (not page-load timers) and staggered where it helps.
- [ ] `prefers-reduced-motion` honored; `?motion=0` renders the final state (verified).
- [ ] Motion fits the chosen direction; nothing decorative-only.
- [ ] `visual-iteration` screenshots taken with `?motion=0` so captures are deterministic.
