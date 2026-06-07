// Framer Motion presets — the OPTIONAL premium layer (install `framer-motion` to use the
// scroll-driven organisms). Library-free reveals don't need this; see MotionProvider + motion.css.
// Values mirror the motion tokens in motion.css — keep them in sync; never hardcode elsewhere.

export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // fast-in, gentle-out, no overshoot
export const EASE_MINIMIZE = [0.4, 0, 0.2, 1] as const;

export const durations = { micro: 0.15, menu: 0.15, modal: 0.2, section: 0.6 } as const;

export const motionPresets = {
  enterFromBelow: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: durations.section, ease: EASE_OUT },
  },
  blurReveal: {
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: durations.section, ease: EASE_OUT },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: durations.section, ease: EASE_OUT },
  },
  staggerChildren: (stagger = 0.06) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-10%" },
    variants: { visible: { transition: { staggerChildren: stagger } } },
  }),
};
