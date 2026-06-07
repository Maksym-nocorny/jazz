import * as React from "react";

type SplitTextProps = {
  text: string;
  /** Motion variant per word (default "blur" for the editorial blur-in). */
  variant?: "rise" | "blur" | "up";
  /** Seconds of extra delay before the first word (× index handled in CSS). */
  startIndex?: number;
  className?: string;
};

/**
 * Word-by-word reveal (library-free). Each word is a `[data-motion]` inline-block staggered by its
 * index; whitespace is preserved as real text nodes so the headline stays copy-paste-selectable.
 * Reveals on scroll via MotionProvider; above-the-fold headlines reveal on mount.
 */
export function SplitText({ text, variant = "blur", startIndex = 0, className }: SplitTextProps) {
  const parts = text.split(/(\s+)/);
  let wordIndex = startIndex;
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) return <React.Fragment key={i}>{part}</React.Fragment>;
        const idx = wordIndex++;
        return (
          <span
            key={i}
            data-motion={variant}
            style={{ display: "inline-block", "--motion-index": idx } as React.CSSProperties}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
}
