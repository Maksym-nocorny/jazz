# UI-kit (kitchen sink)

For this project the UI-kit is implemented as a **live route** in the build, so it stays in sync
with the real components and tokens (Law 3):

- Source: [`04_build/app/ui-kit/page.tsx`](../../04_build/app/ui-kit/page.tsx)
- Live: https://vovk-coffee.vercel.app/ui-kit

It shows every token (color, type scale) and every atom in its states (Button variants × sizes ×
disabled, Input default/error/disabled, Badge). The landing page composes only these declared
components — nothing undeclared ships.
