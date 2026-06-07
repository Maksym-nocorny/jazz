"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletter } from "@/lib/content";

// Molecule: newsletter form with client-side validation (demo — no backend; v1 uses a form service).
export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<"idle" | "error" | "success">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setState(ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-md">
      <h3 className="font-display text-xl">{newsletter.heading}</h3>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          {newsletter.placeholder}
        </label>
        <Input
          id="newsletter-email"
          type="email"
          inputMode="email"
          placeholder={newsletter.placeholder}
          value={email}
          aria-invalid={state === "error"}
          aria-describedby="newsletter-msg"
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "idle") setState("idle");
          }}
        />
        <Button type="submit" className="shrink-0">
          {newsletter.cta}
        </Button>
      </div>
      <p
        id="newsletter-msg"
        role="status"
        className={`mt-2 text-sm ${state === "error" ? "text-danger" : "text-text-muted"}`}
      >
        {state === "error" ? newsletter.error : state === "success" ? newsletter.success : newsletter.note}
      </p>
    </form>
  );
}
