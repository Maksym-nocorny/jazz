---
name: brief-intake
description: Phase 0 of Jazz — the PM's intake procedure. Detect the client's language, run a structured intake survey, and produce the project brief that every later phase builds on. Load at the start of a new client project.
---

# Brief & intake (Phase 0)

The PM runs this with the client. Goal: a complete, written brief and the client's language, so the
whole orchestra works from the same facts. Output to `projects/<slug>/00_brief/`.

## First: detect & set language

Determine the language the client is writing in and record it in `STATE.md` as
`client_language: <code>`. Conduct intake and write all client-facing artifacts (brief, survey,
copy) in that language. Keep internal notes/structure in English.

## The intake survey (`00_brief/intake-survey.md`)

Ask in plain language; group so it isn't a wall. Adapt, but cover:

**Business & goal**
- What does the business do, and who is it for?
- What is the #1 goal of this site? (sell, book, generate leads, inform, portfolio…)
- What does success look like in 3 months? Any metric?

**Audience**
- Describe your ideal customer. What do they care about? What worries them?
- What action do you want them to take?

**Scope & content**
- What pages/sections do you imagine? Any must-have features (booking, store, blog, forms)?
- Do you need a backend / accounts / payments, or is it mostly content? (drives `needs_backend`)
- Who provides content (text, photos, logo)? What exists already?

**Brand & taste**
- 2–3 sites you love and 2–3 you dislike — and why.
- Existing brand assets (logo, colors, fonts)? Hard constraints?
- Three words for how the site should feel.

**Practical**
- Timeline, budget range, domain, languages, accessibility/legal needs.
- Who is the decision-maker and who approves at each step?

## The brief (`00_brief/BRIEF.md`)

Synthesize answers into a one-page brief: business, goal + success metric, audience, scope (pages +
features), `needs_backend` yes/no, content ownership, brand constraints, three feeling-words,
timeline/budget, approvals. List **open questions** to resolve before Phase 1.

## Definition of done

- [ ] `client_language` set in `STATE.md`.
- [ ] `intake-survey.md` filled with the client's answers.
- [ ] `BRIEF.md` written and approved by the client (✅ gate) — log the approval in `CLIENT_LOG.md`.
- [ ] `needs_backend` and `hosting` recorded in `STATE.md`/`DECISIONS.md`.
