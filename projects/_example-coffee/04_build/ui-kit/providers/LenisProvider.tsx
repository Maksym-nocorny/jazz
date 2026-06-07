"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Premium organism — requires `lenis`. Smooth (inertial) scroll. Skipped on reduced-motion and
 * `?motion=0`. Coexists with the `data-motion` reveal engine because IntersectionObserver is
 * position-based, not scroll-event-based. Also makes in-page anchor links glide.
 */
export function LenisProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (new URLSearchParams(window.location.search).get("motion") === "0") return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const href = anchor?.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -72 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
