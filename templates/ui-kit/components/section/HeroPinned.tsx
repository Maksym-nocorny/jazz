"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Premium organism — requires `framer-motion`. Pinned hero whose title compresses as you scroll
 * (the signature 2024–2026 pattern). 200vh outer + sticky inner; title font-size animates over the
 * first 60% of progress, lede fades in. Reduced-motion renders the static start state.
 */
export function HeroPinned({ title, lede }: { title: string; lede?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const fontSize = useTransform(scrollYProgress, [0, 0.6], ["clamp(48px,9vw,140px)", "clamp(32px,4.5vw,64px)"]);
  const ledeOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <section ref={ref} style={{ height: "200vh" }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col items-start justify-center">
        <motion.h1
          className="font-display font-semibold leading-[1.02]"
          style={reduce ? { fontSize: "clamp(48px,9vw,140px)" } : { fontSize }}
        >
          {title}
        </motion.h1>
        {lede ? (
          <motion.p
            className="mt-6 max-w-prose text-lg text-text-muted"
            style={reduce ? undefined : { opacity: ledeOpacity }}
          >
            {lede}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
