# DECISIONS — ВОВК Coffee Roasters

> ADR-style log of every meaningful choice and why. Append-only; never rewrite history.

<!-- Template for each entry:

## D1: <title> — <YYYY-MM-DD>
Context: <why this came up>
Options: <the 2–3 we weighed>
Decision: <what we chose>
Why: <rationale, tied to research / brief>
Consequences: <follow-ups, scope impact, what it locks in>

-->

## D1: needs_backend = no — commerce via a hosted service — 2026-05-19
Context: ВОВК needs an online store (cart + card payment), an email-signup form, and a wholesale
lead form, but has no budget/time for a custom backend and wants no customer accounts for v1.
Options: (a) custom backend (own API + DB + auth + PCI handling); (b) hosted commerce/forms service
embedded into the site; (c) keep selling via Instagram DM (status quo).
Decision: **(b)** — no project-owned backend for v1; cart, checkout and forms via a hosted
commerce + forms service. `needs_backend: no`.
Why: smallest, fastest, safest path — provider carries PCI scope; no accounts needed; matches the
~5–6 week timeline and the brief. (c) is the pain we're solving.
Consequences: Phase 8 (Backend) is **skipped** — recorded in STATE. Product/price/origin data lives
in the service + copy-deck. Revisit if custom logic (e.g. bespoke subscription rules) is later
required. Devops integrates the service in Phase 9.

## D2: Hosting = Vercel — 2026-05-19
Context: Default Jazz web stack is Next.js; we need hosting + CI + the domain `vovk.coffee`.
Options: Vercel; Netlify; a generic VPS.
Decision: **Vercel.**
Why: first-class Next.js support, preview deploys per change (useful for the client preview gate),
trivial domain + SSL, generous for a small DTC site. Matches the house default in CLAUDE.md.
Consequences: Devops (Phase 9) wires repo → Vercel, attaches `vovk.coffee`, sets env for the hosted
commerce service. `hosting: vercel` in STATE.

## D3: Design direction = Craft Editorial (A) — 2026-05-25
Context: Phase 3 art-direction gate. Need one direction to drive Law 1 for the whole build.
Options: **A Craft Editorial** (roaster's-notebook, warm, asymmetric, origin-data hero);
**B Industrial/Brutalist** (raw, mono, high-contrast); **C Nordic Minimal** (white, thin type).
Decision: **A — Craft Editorial.** (Details in `03_design/art-direction/direction.md`.)
Why: research showed local competitors read either generic-startup or sterile-minimal; a warm
editorial voice with **visible origin data** is the clearest way to look like a real craft roaster,
not AI-generated. B reads cold for a warm product and risks alienating a broad DTC audience; C sits
too close to the "AI-minimal default" and is hard to differentiate. Client chose A on the call.
Consequences: locks Law-1 guardrails (asymmetry, earthy palette, real photography, descriptive UA
microcopy; no purple/glass/3-identical-cards). Feeds wireframes (D6), tokens (D4/D5), build.

## D4: Font pairing = Spectral + Golos Text — 2026-05-25
Context: Craft Editorial needs a characterful display + a clean body, both with real **Cyrillic**.
Options: Spectral (display serif) × Golos Text (grotesk body); a single neutral grotesk everywhere;
default Inter/Roboto.
Decision: **Spectral (display) + Golos Text (body).**
Why: Spectral gives editorial, magazine-grade headlines with proper Cyrillic; Golos Text is
purpose-built for Cyrillic and reads clean at body sizes. Deliberately **anti-default** — avoids the
Inter/Roboto/Poppins "AI tell" (Law 1) and the broken-Cyrillic look common to competitors.
Consequences: tokenized as `font.family.display` / `font.family.body` in `design-tokens.json`; both
loaded as web fonts (Cyrillic subset). No other families ship.

## D5: Color scheme = Espresso (over Forest) — 2026-06-03
Context: Phase 6 design-system gate. Two earthy schemes were built on the same semantic token names.
Options: **Espresso** (espresso brown `action-primary` `#6F3B26`, cream paper `#F7F0E6`, ember
terracotta accent `#C5683B`, pine focus `#2C4A3B`); **Forest** (pine-led primary, espresso as accent).
Decision: **Espresso.**
Why: coffee-true and warmest; espresso brown as the primary action color ties straight to the
product and the "теплий/чесний" feeling-words; ember accent adds the "дикий" spark; pine stays as a
quiet focus/secondary. Forest read greener/herbal — slightly off-product. Client picked Espresso.
Consequences: semantic layer is identical across schemes, so this is a primitive swap — re-themeable
later without touching components (Law 2). Espresso primitives are the shipped values in
`design-tokens.json`. WCAG AA contrast verified for text on surfaces.

## D6: Wireframe variant A + "coffees higher" edit — 2026-06-02
Context: Phase 5 wireframe gate. Three lo-fi variants presented (A Origin-first editorial /
B Shop-first / C Story-first); client feedback in CLIENT_LOG Phase 5.
Options: A (9/10), B (7/10), C (6/10) against the goal (DTC sales + wholesale leads).
Decision: **Variant A**, with the edit to **move the "3 coffees" section above "Принципи"** (right
after the hero), plus a softer headline tone. Round 2 approved.
Why: A is the only variant that keeps both goals together — early trust via origin data *and* an
early path to purchase — in the chosen editorial style. Moving the coffees up shortens time-to-cart
for the Instagram mobile traffic without losing the editorial feel. B risked blending in; C delayed
the buy action.
Consequences: canonical landing section order = Variant A (post-edit) in `wireframes/NOTES.md`; this
order drives Phase 7 build and the copy-deck section sequence. Scope for v1 stays a single landing.
