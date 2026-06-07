import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { subscribe } from "@/lib/content";

export function Subscribe() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <Container className="grid gap-6 md:grid-cols-12">
        {/* Subscription — primary, wide */}
        <div className="flex flex-col justify-between gap-8 rounded-lg bg-primary p-9 text-primary-foreground md:col-span-7 md:p-12" data-motion="blur">
          <div>
            <h2 className="text-3xl md:text-4xl">{subscribe.heading}</h2>
            <p className="mt-4 max-w-prose text-lg opacity-90">{subscribe.subtitle}</p>
          </div>
          <div>
            <Button variant="inverse" size="lg">
              {subscribe.cta}
            </Button>
          </div>
        </div>

        {/* Wholesale — secondary, narrow */}
        <div id="hurt" className="flex flex-col justify-between gap-8 rounded-lg border border-border bg-surface-raised p-9 md:col-span-5 md:p-12" data-motion="blur">
          <div>
            <h3 className="font-display text-2xl">{subscribe.wholesaleTitle}</h3>
            <p className="mt-4 text-text-muted">{subscribe.wholesaleBody}</p>
          </div>
          <div>
            <Button variant="ghost">{subscribe.wholesaleCta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
