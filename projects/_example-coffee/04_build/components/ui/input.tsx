import * as React from "react";
import { cn } from "@/lib/utils";

// Atom: Input. Token-driven; supports an error state via aria-invalid.
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-interactive border border-border bg-surface-raised px-4 text-text",
        "placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 ring-offset-surface",
        "aria-[invalid=true]:border-danger",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
