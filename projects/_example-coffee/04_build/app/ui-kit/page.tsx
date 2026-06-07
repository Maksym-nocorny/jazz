import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "UI Kit — ВОВК" };

const swatches = [
  ["surface", "bg-surface"],
  ["surface-raised", "bg-surface-raised"],
  ["surface-inverse", "bg-surface-inverse"],
  ["primary", "bg-primary"],
  ["accent", "bg-accent"],
  ["text", "bg-text"],
  ["danger", "bg-danger"],
];

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

// Kitchen sink (Law 3): every token + component + state. The contract for the build.
export default function UIKit() {
  return (
    <Container className="py-16">
      <p className="text-sm uppercase tracking-wide text-text-muted">ВОВК · Design system</p>
      <h1 className="mt-2 text-4xl">UI Kit — kitchen sink</h1>
      <p className="mt-3 max-w-prose text-text-muted">
        Кожен токен і компонент у кожному стані. Сторінки використовують лише те, що тут.
      </p>

      <Row title="Color (semantic tokens)">
        <div className="flex flex-wrap gap-4">
          {swatches.map(([name, cls]) => (
            <div key={name}>
              <div className={`h-20 w-24 rounded-interactive border border-border ${cls}`} />
              <p className="mt-1 text-sm text-text-muted">{name}</p>
            </div>
          ))}
        </div>
      </Row>

      <Row title="Type scale (Spectral × Golos Text)">
        <p className="font-display text-[clamp(2.75rem,7vw,5.25rem)]">Дисплей</p>
        <h3 className="mt-2 text-3xl">Заголовок секції</h3>
        <p className="mt-2 text-lg">Підзаголовок — більший текст для вступів.</p>
        <p className="mt-2">Основний текст — швидка бура лисиця.</p>
        <p className="mt-2 text-sm text-text-muted">Підпис / приглушений</p>
      </Row>

      <Row title="Buttons — variants × sizes × states">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="inverse">Accent</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Row>

      <Row title="Input — default · error · disabled">
        <div className="flex flex-wrap gap-6">
          <div className="w-64">
            <Input placeholder="you@vovk.coffee" />
          </div>
          <div className="w-64">
            <Input defaultValue="not-an-email" aria-invalid />
            <p className="mt-1 text-sm text-danger">Введіть коректний email.</p>
          </div>
          <div className="w-64">
            <Input placeholder="Disabled" disabled />
          </div>
        </div>
      </Row>

      <Row title="Badge / eyebrow">
        <Badge>
          <span className="h-px w-8 bg-accent" aria-hidden /> Спешелті · Львів
        </Badge>
      </Row>
    </Container>
  );
}
