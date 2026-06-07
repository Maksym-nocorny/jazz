import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { coffees, type Coffee } from "@/lib/content";

function CoffeeCard({ c, featured = false }: { c: Coffee; featured?: boolean }) {
  return (
    <article
      className={`flex flex-col rounded-lg border border-border bg-surface-raised p-7 shadow-sm transition-shadow hover:shadow-md ${
        featured ? "md:p-9" : ""
      }`}
    >
      {/* Bean visual placeholder — real product photography goes here ([CLIENT: photos]) */}
      <div
        className={`mb-6 rounded-interactive bg-surface-inverse/90 ${featured ? "aspect-[4/3]" : "aspect-[3/2]"}`}
        role="img"
        aria-label={`Фото кави ${c.origin} ${c.region}`}
      />
      <p className="text-sm uppercase tracking-wide text-text-muted">{c.origin}</p>
      <h3 className={`mt-1 font-display ${featured ? "text-3xl" : "text-2xl"}`}>{c.region}</h3>
      <p className="mt-3 text-text">{c.notes}</p>
      <p className="mt-1 text-sm text-text-muted">
        {c.method} · {c.detail}
      </p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <span className="font-display text-lg">{c.price}</span>
        <Button size="sm" aria-label={`Додати ${c.origin} ${c.region} до кошика`}>
          До кошика
        </Button>
      </div>
    </article>
  );
}

export function Coffees() {
  const [first, ...rest] = coffees.items;
  return (
    <section id="kava" className="border-b border-border py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl">{coffees.heading}</h2>
          <a href="#kava" className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline">
            {coffees.link} →
          </a>
        </div>

        {/* Asymmetric: one featured lot + a stacked pair (not three identical cards) */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <CoffeeCard c={first} featured />
          </div>
          <div className="grid gap-6 md:col-span-5">
            {rest.map((c) => (
              <CoffeeCard key={c.region} c={c} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
