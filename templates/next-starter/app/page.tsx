import { Button } from "@/components/ui/button";

// Minimal token-driven page. Replace with real organisms composed from the UI-kit.
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-text-muted">Jazz starter</p>
      <h1 className="mt-2 text-5xl">Token-driven by default.</h1>
      <p className="mt-4 max-w-prose text-text-muted">
        Every color, font, radius, and shadow on this page comes from a design token. Swap the
        semantic tokens in <code>globals.css</code> and the whole site re-themes.
      </p>
      <div className="mt-8 flex gap-4">
        <Button>Primary action</Button>
        <Button variant="ghost">Secondary</Button>
      </div>
    </main>
  );
}
