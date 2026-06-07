import { Container } from "@/components/ui/container";
import { Newsletter } from "@/components/sections/newsletter";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer id="footer" className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-bold">ВОВК</p>
            <p className="mt-3 max-w-xs text-text-muted">
              Крафтова обсмажка спешелті-кави зі Львова.
            </p>
            <div className="mt-8">
              <Newsletter />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {footer.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h4 className="font-display text-lg">{col.title}</h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#footer" className="text-sm text-text-muted underline-offset-4 hover:text-text hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <ul className="flex gap-6">
            {footer.legalLinks.map((l) => (
              <li key={l}>
                <a href="#footer" className="underline-offset-4 hover:text-text hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
