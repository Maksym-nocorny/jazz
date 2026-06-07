import * as React from "react";

type RevealVariant = "rise" | "blur" | "up" | "scale";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  variant?: RevealVariant;
  /** Stagger position among siblings — adds index * 70ms delay. */
  index?: number;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * Reveal-on-scroll wrapper (library-free). Drives the `data-motion` contract in motion.css via
 * MotionProvider. Visible by default → safe with no JS / reduced-motion / ?motion=0.
 */
export function Reveal<T extends React.ElementType = "div">({
  as,
  variant = "rise",
  index = 0,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  return (
    <Tag
      data-motion={variant}
      style={{ ...(style as React.CSSProperties), "--motion-index": index } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
