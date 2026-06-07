import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jazz starter",
  description: "Token-driven Next.js + Tailwind + shadcn starter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
