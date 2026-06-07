import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="proces" className="border-t border-border py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-6" data-motion="blur">
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg shadow-md">
            <Image
              src={process.image}
              alt={process.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6" data-motion="blur">
          <Badge>
            <span className="h-px w-8 bg-accent" aria-hidden />
            {process.eyebrow}
          </Badge>
          <h2 className="mt-6 text-balance text-3xl md:text-4xl">{process.heading}</h2>
          <p className="mt-5 max-w-prose text-lg text-text-muted">{process.body}</p>
          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {process.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-primary md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
