# Methodology

Jazz recreates the experience of working with a real studio, as code. The design choices below are
deliberate; this doc explains *why*.

## 1. Orchestrator-worker, not a free-for-all
One **PM** owns the plan, the state, and the client relationship; specialists do scoped work and
return. This is the orchestrator-worker pattern from
[Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).
A single owner of the thread avoids the coordination chaos that
[Cognition warns about](https://cognition.ai/blog/dont-build-multi-agents).

## 2. Files are the memory (blackboard)
Agents don't share a conversation; they share a workspace of Markdown files. Every decision,
client exchange, and review is written down, so context survives handoffs and even a cold restart.
This is the single most important guard against the classic multi-agent failure: lost context.

## 3. Two independent QA roles
- **Judge** reviews each *artifact* statically against a rubric — adversarial, bounded to 3
  revision rounds (an evaluator-optimizer loop).
- **Tester** validates the *running* product dynamically in a real browser (Playwright).

They never overlap: one checks the part, the other checks the whole.

## 4. Quality is enforced by construction
Three laws make "good" the default, checked by the Judge:
1. **Anti-AI design** — output matches a chosen, defensible design direction and avoids templated
   AI tells. Avoiding the [AI look](https://www.anthropic.com/engineering/building-effective-agents)
   is a first-class requirement, not a nice-to-have.
2. **Design tokens** — every value is a named token (W3C DTCG → CSS variables), so nothing is
   hardcoded and the whole site re-themes from one file.
3. **Atomic + UI-kit** — the component system and a kitchen-sink page are built before pages, so
   nothing undeclared ships.

## 5. Always options, always a decision log
At every design gate the client sees 2–3 options with a recommendation and chooses. The choice and
its rationale are recorded (ADR-style). This is what makes the engagement feel like a studio and
keeps revisions from sprawling.

## 6. Bounded loops
Internal revision is capped at 3 rounds before escalation; the client loop repeats until approval
but logs every round and fixes scope in `DECISIONS.md`. Bounded loops keep cost and time finite.

## References
- Anthropic — [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents),
  [Multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Cognition — [Don't build multi-agents](https://cognition.ai/blog/dont-build-multi-agents)
- [Atomic Design (Brad Frost)](https://atomicdesign.bradfrost.com/) ·
  [W3C Design Tokens](https://www.w3.org/community/design-tokens/) ·
  [shadcn theming](https://ui.shadcn.com/docs/theming)
