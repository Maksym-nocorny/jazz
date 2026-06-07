---
name: ui-kit
description: Law 3 of Jazz — atomic design plus a mandatory UI-kit (kitchen-sink) page built BEFORE any real page, so nothing undeclared ships. Load when building the component library, the UI-kit page, or composing pages from components.
---

# Atomic design + UI-kit (Law 3)

Build the **system**, then the pages. Pages may only use components and tokens that already exist
in the UI-kit. The Judge verifies that every component used on a page appears in the kit.

## Atomic structure

- **Atoms** — irreducible elements consuming tokens only: button, input, label, icon, text/heading,
  link, badge, divider.
- **Molecules** — small groups: form field (label+input+hint+error), search bar, card, nav item.
- **Organisms** — sections: header/nav, hero, feature section, testimonial block, footer, form.
- **Templates** — page skeletons with slots, no final content.
- **Pages** — templates filled with the real copy deck.

Each atom/molecule/organism is one component, reused everywhere. No one-off buttons or fonts.

## The UI-kit / kitchen-sink page — build this FIRST

`03_design/ui-kit/index.html` (or a Storybook page / a `/ui-kit` route in the Next app) that shows
**every component in every state** plus the token reference. It is the contract: if it's not here,
it doesn't go on a page.

Must include:
- **Token reference**: the color palette (each semantic color named, with its hex and a contrast
  note), the type scale (display→caption with the actual fonts), the spacing scale, the radius
  scale, the shadow scale.
- **Atoms** with all states: Button (variants × default/hover/focus/active/disabled/loading × sizes),
  Input (default/focus/error/disabled/with-icon), Link, Badge, Icon set, Typography specimens.
- **Molecules**: form field (all validation states), card variants, nav item, alert/toast.
- **Organisms**: header (desktop+mobile), hero, feature section, testimonial, footer, a full form.
- **States to never forget**: empty, loading, error, long-content overflow, mobile width.

## Workflow

1. Tokens exist (Law 2) → 2. Build atoms from tokens → 3. Compose molecules/organisms →
4. Assemble the UI-kit page showing them all → 5. PM shows the kit; client can react →
6. Only then build pages by composing kit organisms with real copy.

## Definition of done

- [ ] UI-kit page exists and renders every component + state.
- [ ] Every component consumes tokens only (no hardcoded values).
- [ ] Atoms → molecules → organisms → templates → pages hierarchy is real (reused, not duplicated).
- [ ] No element appears on a page that isn't in the kit.
- [ ] Responsive at mobile/tablet/desktop; states (empty/loading/error) covered.
