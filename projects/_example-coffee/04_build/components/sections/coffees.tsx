import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { coffees, type Coffee } from "@/lib/content";

function CoffeeCard({ c, featured = false }: { c: Coffee; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface-raised shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-8" : "p-6"}`}>
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
      </div>
    </article>
  );
}

export function Coffees() {
  const [first, ...rest] = coffees.items;
  return (
    <section id="kava" className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-balance text-3xl md:text-4xl">{coffees.heading}</h2>
          <a href="#kava" className="hidden shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline sm:block">
            {coffees.link} →
          </a>
        </div>

        {/* Asymmetric: one featured lot + a stacked pair */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CoffeeCard c={first} featured />
          </div>
          <div className="grid gap-6 lg:col-span-5">
            {rest.map((c) => (
              <CoffeeCard key={c.region} c={c} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
