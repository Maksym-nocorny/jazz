import * as React from "react";
import { cn } from "@/lib/utils";

// Layout atom: centered max-width container with responsive gutters.
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)} {...props} />;
}
