import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { SplitText } from "@/ui-kit/components/motion/SplitText";
import { hero, coffees } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="hero-wash relative overflow-hidden">
      <Container className="grid items-center gap-12 py-16 md:py-20 lg:min-h-[88vh] lg:grid-cols-12 lg:gap-8">
        {/* Headline — editorial, left, word-by-word reveal */}
        <div className="lg:col-span-6 lg:pr-10">
          <Badge data-motion="blur">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {hero.eyebrow}
          </Badge>
          <h1 className="mt-6 text-balance text-[clamp(2.9rem,7vw,5.5rem)] font-semibold tracking-[-0.01em]">
            <SplitText text={hero.title} variant="blur" />
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-muted" data-motion="blur">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4" data-motion="blur">
            <ButtonLink href="#kava" size="lg">
              {hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#proces" variant="ghost" size="lg">
              {hero.ctaSecondary}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-text-muted" data-motion="blur">
            {hero.ctaNote}
          </p>
        </div>

        {/* Image + overlapping "now roasting" card */}
        <div className="relative lg:col-span-6">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-md sm:aspect-[16/10] lg:aspect-[5/6]"
            data-motion="blur"
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div
            className="mt-5 rounded-lg border border-border bg-surface-raised p-6 shadow-md lg:absolute lg:-bottom-8 lg:-left-10 lg:mt-0 lg:w-72"
            data-motion="up"
          >
            <p className="text-sm uppercase tracking-wide text-text-muted">Зараз у обсмажці</p>
            <ul className="mt-4 divide-y divide-border">
              {coffees.items.map((c) => (
                <li key={c.region} className="flex items-baseline justify-between gap-3 py-2.5">
                  <span className="font-display text-base">
                    {c.origin} · {c.region}
                  </span>
                  <span className="shrink-0 text-sm text-text-muted">{c.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
