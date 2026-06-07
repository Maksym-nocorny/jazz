import type { Config } from "tailwindcss";

// Tailwind maps to design tokens (CSS variables in app/globals.css, mirroring
// 03_design/tokens/design-tokens.json). Components NEVER hardcode hex/px.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "var(--color-surface)",
          raised: "var(--color-surface-raised)",
          inverse: "var(--color-surface-inverse)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          "on-inverse": "var(--color-text-on-inverse)",
        },
        primary: {
          DEFAULT: "var(--color-action-primary)",
          foreground: "var(--color-action-primary-foreground)",
          hover: "var(--color-action-primary-hover)",
        },
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        interactive: "var(--radius-interactive)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
