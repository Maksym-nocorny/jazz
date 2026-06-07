import * as React from "react";

type MarqueeProps = {
  items: React.ReactNode[];
  /** Seconds per item (lower = faster). */
  speed?: number;
  className?: string;
  itemClassName?: string;
};

/**
 * Infinite marquee (pure CSS, no JS, paused on reduced-motion). The row is duplicated so the
 * `translateX(-50%)` loop is seamless. Decorative → `aria-hidden`.
 */
export function Marquee({ items, speed = 5, className, itemClassName }: MarqueeProps) {
  const row = [...items, ...items];
  const duration = Math.max(items.length * speed, 16);
  return (
    <div
      className={`marquee ${className ?? ""}`}
      aria-hidden
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className={itemClassName}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
