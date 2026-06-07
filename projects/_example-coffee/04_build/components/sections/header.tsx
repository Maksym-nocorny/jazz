import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { nav } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight" aria-label="ВОВК Coffee — на головну">
          ВОВК
        </a>
        <nav aria-label="Головна навігація" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#kava" size="sm">
          Обрати каву
        </ButtonLink>
      </Container>
    </header>
  );
}
