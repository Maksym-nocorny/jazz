---
name: design-tokens
description: Law 2 of Jazz — declare every color, font, spacing, shadow, radius, and motion value as a design token (W3C DTCG JSON → CSS variables, three tiers) and forbid hardcoded values in components. Load when building the design system, defining color/type schemes, or wiring tokens into Next.js + Tailwind + shadcn/ui.
---

# Design Tokens (Law 2)

Every visual value is a **token** — a named decision — not a magic hex/px in a component. Tokens
are the single source of truth; changing the semantic layer re-themes the whole site. **No
hardcoded colors/spacing/radii/shadows in components.** The Judge greps for them.

## Three tiers (never skip the semantic tier)

1. **Primitive** — raw values, named by appearance: `color.brand.600`, `space.4`, `radius.md`,
   `font.family.display`. The palette/scale, no meaning attached.
2. **Semantic** — intent, referencing primitives: `color.action.primary`, `color.text.muted`,
   `color.surface.raised`, `space.section`, `radius.interactive`. **This is the layer components
   use.** It decouples meaning from appearance, so a rebrand = swap primitives behind the same names.
3. **Component** — scoped to one element when needed: `button.primary.bg`, `input.border`. Tune a
   component without side effects.

## Source format — W3C DTCG (`03_design/tokens/design-tokens.json`)

```json
{
  "color": {
    "brand": { "600": { "$type": "color", "$value": "#7A3B2E" } },
    "action": { "primary": { "$type": "color", "$value": "{color.brand.600}" } },
    "text": { "default": { "$type": "color", "$value": "{color.ink.900}" } }
  },
  "space": { "section": { "$type": "dimension", "$value": "{space.20}" } },
  "radius": { "interactive": { "$type": "dimension", "$value": "{radius.md}" } },
  "font": { "family": { "display": { "$type": "fontFamily", "$value": "\"GT Sectra\", Georgia, serif" } } }
}
```

Provide **2–3 complete color schemes and a type pairing**, consistent with the chosen design
direction, so the client can compare. Keep all of them as alternate primitive sets behind the same
semantic names — switching schemes is then a one-file change.

## Emit → CSS variables (the shadcn pattern)

Map semantic tokens to CSS custom properties under `:root` and `.dark`, then have Tailwind read
them. Pair each surface with its foreground.

```css
:root {
  --color-action-primary: #7A3B2E;
  --color-action-primary-foreground: #FDF6EF;
  --color-surface: #FDF6EF;
  --color-text: #1A1410;
  --color-text-muted: #6B5D52;   /* must pass WCAG AA on --color-surface */
  --radius-interactive: 0.5rem;
  --space-section: 5rem;
}
.dark { --color-surface: #1A1410; --color-text: #FDF6EF; /* … */ }
```

```js
// tailwind.config — theme maps to the variables, components never hardcode
extend: {
  colors: {
    primary: "var(--color-action-primary)",
    "primary-foreground": "var(--color-action-primary-foreground)",
    surface: "var(--color-surface)",
    text: { DEFAULT: "var(--color-text)", muted: "var(--color-text-muted)" },
  },
  borderRadius: { interactive: "var(--radius-interactive)" },
}
```

Components then use `bg-primary text-primary-foreground rounded-interactive` — semantic, themeable,
no raw values. (If using Style Dictionary, generate the CSS/Tailwind from the JSON; otherwise keep
the JSON and the CSS in sync and treat the JSON as the spec of record.)

## Naming rules

- `category.property.variant`, kebab/dot, **named by purpose not appearance** at the semantic tier.
- Interactive states are tokens: `action.primary.{default,hover,active,disabled}`.
- T-shirt sizes for scales: `space.{xs..2xl}`, `radius.{sm,md,lg}`, `shadow.{sm,md,lg}`.

## Definition of done

- [ ] All colors/type/space/shadow/radius/motion are tokens (3 tiers); nothing hardcoded.
- [ ] 2–3 schemes + a type pairing, all swappable via the semantic layer.
- [ ] Every text/background pair passes **WCAG AA** contrast.
- [ ] Tailwind/shadcn consume `var(--…)`; `grep` of `04_build/` finds no stray hex/px in components.
