# E2E test report — ВОВК Coffee landing

```
tested_by: tester
date: 2026-06-07
target: https://vovk-coffee.vercel.app  (production, Vercel)
tool: Playwright MCP (real browser)
verdict: PASS
```

## Scope
Validate the running, deployed landing page from a user's point of view against the brief's
acceptance criteria: it renders, the key journeys work, it's accessible, and it works on mobile.

## What was checked

| Check | Result |
|---|---|
| Page loads at the production URL, correct `<title>` | ✅ "ВОВК — крафтова обсмажка спешелті-кави зі Львова" |
| Console errors on load | ✅ 0 errors |
| Semantic structure (landmarks, heading order h1→h4, labelled nav) | ✅ banner/main/contentinfo, 3 labelled `nav`s, single h1 |
| Fonts loaded (chosen pairing) | ✅ Spectral (display) + Golos Text (body) both active |
| Heading text contrast on surface | ✅ 16.24:1 (WCAG AA ✓) |
| Body/muted text token (`#6E5A48` on cream) | ✅ ~5:1 (WCAG AA ✓) |
| Favicon | ✅ `/icon.svg` served (no 404) |
| All real content present, no lorem ipsum | ✅ copy matches the approved deck |
| "До кошика" buttons have descriptive labels | ✅ e.g. "Додати Ефіопія Ґуджі до кошика" |
| Newsletter — invalid email | ✅ shows "Введіть коректний email." in danger color, `aria-invalid=true` |
| Newsletter — valid email | ✅ shows "Готово — перевірте пошту.", `aria-invalid=false` |
| Skip-link / keyboard focus visible | ✅ skip-link present; focus ring via `--color-focus-ring` |
| Mobile (390×844): nav collapses, no horizontal overflow | ✅ desktop nav hidden, scrollWidth = innerWidth (390) |
| Motion: scroll reveals fire; `?motion=0` + reduced-motion render the final state | ✅ 24 `data-motion` els reveal on scroll, 0 stuck; `?motion=0` deterministic; 0 console errors |

## Token / anti-AI spot checks (objective)
- `grep` of `app/` + `components/` for hardcoded hex / `rgb()` / `px` literals → **none** (Law 2 ✓).
- Layout is editorial/asymmetric (offset hero + "now roasting" card; one featured coffee + a
  stacked pair; dark espresso story band) — not a generic 3-card AI grid (Law 1 ✓).
- Pairing is Spectral × Golos Text, not the default Inter/Poppins; palette is espresso/ember/pine,
  no purple gradient (Law 1 ✓).

## Bugs filed
None blocking. (One earlier nit — missing favicon, a `/favicon` 404 — was fixed by adding
`app/icon.svg` and redeploying; re-verified above.)

## Notes
- The Playwright session was attached to a browser with an unrelated tab (`tracer.nocorny.com`)
  that intermittently stole focus; each measurement was guarded to assert `host === vovk-coffee`
  before trusting results.
- Screenshots are produced by the MCP into its own output dir; evidence here is the accessibility
  snapshot + DOM measurements, which are more precise for an automated gate.
