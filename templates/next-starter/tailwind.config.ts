import type { Config } from "tailwindcss";

// Tailwind reads design tokens from CSS variables (see app/globals.css).
// Components use semantic class names; never hardcode hex/px values.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        primary: {
          DEFAULT: "var(--color-action-primary)",
          foreground: "var(--color-action-primary-foreground)",
          hover: "var(--color-action-primary-hover)",
        },
        border: "var(--color-border)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      borderRadius: {
        interactive: "var(--radius-interactive)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        md: "var(--shadow-md)",
      },
      ringColor: {
        focus: "var(--color-focus-ring)",
      },
    },
  },
  plugins: [],
};

export default config;
