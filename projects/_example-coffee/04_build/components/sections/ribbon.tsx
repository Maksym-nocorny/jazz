import { Marquee } from "@/ui-kit/components/motion/Marquee";
import { ribbon } from "@/lib/content";

// A thin dark value-ribbon between the hero and the catalog — tonal beat + motion.
export function Ribbon() {
  return (
    <section aria-hidden className="overflow-hidden border-y border-border bg-surface-inverse py-4 text-text-on-inverse">
      <Marquee
        speed={5}
        items={ribbon.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-lg">
            {t}
            <span className="text-accent">•</span>
          </span>
        ))}
      />
    </section>
  );
}
