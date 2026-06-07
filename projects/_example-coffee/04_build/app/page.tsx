import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { Coffees } from "@/components/sections/coffees";
import { Story } from "@/components/sections/story";
import { Subscribe } from "@/components/sections/subscribe";
import { Footer } from "@/components/sections/footer";

// Landing page — composed only from declared UI-kit organisms (Law 3), real copy (no lorem).
export default function Home() {
  return (
    <>
      <a
        href="#kava"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-interactive focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Перейти до кави
      </a>
      <Header />
      <main>
        <Hero />
        <Coffees />
        <Principles />
        <Story />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
