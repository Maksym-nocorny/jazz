"use client";

import { useEffect } from "react";

/*
  Library-free scroll-reveal engine. Reveals every `[data-motion]` element when it scrolls into
  view by flipping `data-motion-state="visible"` (the CSS in motion.css does the animating).

  Robustness:
  - `MOTION_GUARD` runs in <head>/top-of-<body> BEFORE paint and adds `.motion-ready` to <html>,
    which arms the hidden initial state — so there is no flash, and if JS never runs the content
    stays visible.
  - It does NOT add `.motion-ready` when `prefers-reduced-motion` or `?motion=0` — both render the
    final state instantly (the latter makes screenshots deterministic for the visual-iteration loop).
*/
export const MOTION_GUARD =
  "(function(){try{var p=new URLSearchParams(location.search);var r=matchMedia('(prefers-reduced-motion: reduce)').matches;if(p.get('motion')!=='0'&&!r){document.documentElement.classList.add('motion-ready')}}catch(e){}})()";

export function MotionProvider() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion-ready")) return; // reduced / ?motion=0
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-motion]:not([data-motion-state="visible"])')
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-motion-state", "visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
