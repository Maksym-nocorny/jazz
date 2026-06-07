# Jazz shared UI-kit

Canonical, cross-project components — the single source of truth. Anything used on a page should
exist here (or be promoted here). Vendor this kit into a project build (copied into
`projects/<slug>/04_build/ui-kit/` at build time), compose pages from it, and **promote** new,
proven components back. This is how the 9th client inherits 8 clients' worth of hardening instead of
re-deriving a Button every time.

## Promotion rules (keep the kit tight)
- Build a component **locally in the project first**.
- Promote here only after **≥2 confirmed uses** (not anticipated) — single-use stays local.
- On promotion: move the file here, add an INDEX row with **when-to / when-NOT-to-use**, update
  `TOKENS`, and log it in the project `DECISIONS.md`.

## Motion — library-free core (no dependencies)
| File | What | When to use |
|---|---|---|
| `providers/MotionProvider.tsx` + `motion.css` | scroll-reveal engine via `data-motion`, with `?motion=0` static mode | always; mount `<MotionProvider/>` + the `MOTION_GUARD` script once in the layout |
| `components/motion/Reveal.tsx` | reveal-on-scroll wrapper (`rise`/`blur`/`up`/`scale` + stagger `index`) | section and element entrances |
| `components/motion/SplitText.tsx` | word-by-word headline reveal (text stays selectable) | hero / large headlines — **not** body copy |
| `components/motion/Marquee.tsx` | infinite CSS marquee (paused on reduced-motion) | logo / value ribbons — decorative only |

## Premium organisms — need `framer-motion` (+ optional `lenis` smooth scroll)
| File | What | When to use |
|---|---|---|
| `components/section/HeroPinned.tsx` | pinned hero; title compresses on scroll | a bold, scroll-native hero — not for content-dense pages |
| `components/section/StickyFeatureList.tsx` | sticky visual + scrolling feature list | 3–6 feature walkthroughs with a visual each |
| `lib/motion.ts` | framer presets (`EASE_OUT`, `durations`, `blurReveal`, `staggerChildren`) | only when using the framer organisms |

## Rules
- **Motion values are tokens** (`motion.css`: `--ease-out`, `--ease-minimize`, `--duration-*`) —
  never hardcode a curve or duration in a component (Law 2 extends to motion).
- **All motion respects `prefers-reduced-motion`** and a **`?motion=0`** URL param renders the final
  state instantly — the Judge checks this, and `visual-iteration` screenshots with `?motion=0`.
- Match motion to the client's chosen direction (Law 1): minimal directions use only quiet reveals;
  expressive directions can add split-text, marquee, pinned hero.
