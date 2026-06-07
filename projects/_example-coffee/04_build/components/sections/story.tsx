import Image from "next/image";
import { Container } from "@/components/ui/container";
import { story } from "@/lib/content";

// Full-bleed dark espresso band with a subdued photo texture (editorial tonal shift).
export function Story() {
  return (
    <section id="istoriya" className="relative isolate overflow-hidden bg-surface-inverse text-text-on-inverse">
      <Image
        src={story.image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-surface-inverse/65" aria-hidden />
      <Container className="relative grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <p className="text-sm uppercase tracking-wide opacity-70">{story.eyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{story.heading}</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-balance text-xl leading-relaxed md:text-2xl">{story.body}</p>
          <p className="mt-8 font-display text-lg opacity-80">— {story.sign}</p>
        </div>
      </Container>
    </section>
  );
}
