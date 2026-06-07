import { Container } from "@/components/ui/container";
import { story } from "@/lib/content";

// Full-bleed dark espresso band — a tonal shift mid-page (editorial rhythm, not uniform sections).
export function Story() {
  return (
    <section id="istoriya" className="bg-surface-inverse py-24 text-text-on-inverse md:py-32">
      <Container className="grid gap-10 md:grid-cols-12">
        <h2 className="text-4xl md:col-span-4 md:text-5xl">{story.heading}</h2>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xl leading-relaxed md:text-2xl">{story.body}</p>
          <p className="mt-8 font-display text-lg opacity-80">— {story.sign}</p>
        </div>
      </Container>
    </section>
  );
}
