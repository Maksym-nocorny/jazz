import * as React from "react";
import { cn } from "@/lib/utils";

// Atom: Badge / eyebrow label.
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-text-muted",
        className
      )}
      {...props}
    />
  );
}
