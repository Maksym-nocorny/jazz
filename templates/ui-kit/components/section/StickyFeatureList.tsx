"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Feature = { title: string; body: string; visual: React.ReactNode };

/**
 * Premium organism — requires `framer-motion`. A sticky visual on the left cross-fades as the
 * matching feature scrolls to the viewport center (Apple/Linear/Stripe pattern). Active item gets
 * an accent rail. Reduced-motion drops the cross-fade.
 */
export function StickyFeatureList({ features }: { features: Feature[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="hidden lg:block">
        <div className="sticky top-24 aspect-[4/3] overflow-hidden rounded-lg border border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {features[active]?.visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <ol>
        {features.map((f, i) => (
          <li
            key={i}
            data-i={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`border-l-2 py-10 pl-6 transition-colors ${active === i ? "border-accent" : "border-border"}`}
          >
            <h3 className="font-display text-2xl">{f.title}</h3>
            <p className="mt-3 max-w-prose text-text-muted">{f.body}</p>
            <div className="mt-6 lg:hidden">{f.visual}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
