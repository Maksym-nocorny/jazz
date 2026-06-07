import { Container } from "@/components/ui/container";
import { principles } from "@/lib/content";

// Deliberately NOT a 3-identical-card grid: a sticky heading + an editorial numbered list.
export function Principles() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:sticky md:top-24">{principles.heading}</h2>
        </div>
        <ol className="md:col-span-8">
          {principles.items.map((item, i) => (
            <li
              key={item.n}
              className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="font-display text-2xl text-accent" aria-hidden>
                {item.n}
              </span>
              <h3 className="self-center text-xl font-semibold">{item.title}</h3>
              <p className="col-start-2 max-w-prose text-text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
