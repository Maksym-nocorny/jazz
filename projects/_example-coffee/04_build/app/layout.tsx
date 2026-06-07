import type { Metadata } from "next";
import { Spectral, Golos_Text } from "next/font/google";
import "./globals.css";
import "@/ui-kit/motion.css";
import { MotionProvider, MOTION_GUARD } from "@/ui-kit/providers/MotionProvider";

// Cyrillic-capable, deliberately non-default pairing (Law 1): editorial serif + clean grotesk.
const display = Spectral({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-spectral",
  display: "swap",
});
const body = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ВОВК — крафтова обсмажка спешелті-кави зі Львова",
  description:
    "Мікролоти спешелті-кави, обсмажені малими партіями у Львові. Прозоре походження, доставка за 48 годин.",
  openGraph: {
    title: "ВОВК Coffee — свіжообсмажена спешелті-кава зі Львова",
    description:
      "Мікролоти, обсмажені малими партіями. Знаємо ферму, висоту й дату врожаю кожного зерна.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${display.variable} ${body.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: MOTION_GUARD }} />
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
