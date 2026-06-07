import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { hero, coffees } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <Container className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
        {/* Headline column — intentionally wide and offset (editorial, not centered) */}
        <div className="md:col-span-7">
          <Badge>
            <span className="h-px w-8 bg-accent" aria-hidden />
            {hero.eyebrow}
          </Badge>
          <h1 className="mt-6 text-[clamp(2.75rem,7vw,5.25rem)] font-semibold">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-muted">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#kava" size="lg">
              {hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#istoriya" variant="ghost" size="lg">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-text-muted">{hero.ctaNote}</p>
        </div>

        {/* Offset "now roasting" card — asymmetric counterweight, real data */}
        <aside className="md:col-span-5 md:pt-16">
          <div className="rounded-lg border border-border bg-surface-raised p-7 shadow-md">
            <p className="text-sm uppercase tracking-wide text-text-muted">Зараз у обсмажці</p>
            <ul className="mt-5 divide-y divide-border">
              {coffees.items.map((c) => (
                <li key={c.region} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-display text-lg">
                    {c.origin} · {c.region}
                  </span>
                  <span className="shrink-0 text-sm text-text-muted">{c.price}</span>
                </li>
              ))}
            </ul>
            <a href="#kava" className="mt-5 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
              {coffees.link} →
            </a>
          </div>
        </aside>
      </Container>
    </section>
  );
}
