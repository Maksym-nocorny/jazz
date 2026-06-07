# CLIENT LOG — ВОВК Coffee Roasters

> Every client exchange, in order. What we showed, what they said (verbatim-ish), their edits, the
> round number, and the outcome. This is how the client loop stays auditable and context never
> lives only in memory.

<!-- Template for each round:

## Phase <n> — <name> — round <k> — <YYYY-MM-DD>
Shown: <what was presented + file paths>
Client said: <feedback and requested edits, close to verbatim>
Decision: <approved | revise>
Routed to: <agent> — <exactly what to change>

-->

## Phase 0 — Intake / brief approval — round 1 — 2026-05-19
Shown: `00_brief/BRIEF.md` (synthesized from the intake call) + `00_brief/intake-survey.md`.
Client said: «Так, усе по суті. Метрика — хай буде орієнтир 50 замовлень на місяць, я б тішився.
Бекенд свій точно не пишемо — нема ні часу, ні грошей; беремо готовий сервіс. І зафіксуйте, що
лого ВОВК не чіпаємо.»
Decision: approved.
Routed to: pm — record needs_backend=no, hosting=vercel in STATE/DECISIONS (D1, D2); proceed to research.

## Phase 2 — Discovery interview — round 1 — 2026-05-26
Shown: discovery questions (live call); notes captured to `03_design/art-direction/interview-notes.md`.
Client said: «Хочу як хороший журнал про каву — багато повітря, великий чесний шрифт, справжні
фото зерна. Тільки не стартапні шаблони з фіолетовими градієнтами і трьома однаковими картками —
це не про каву. Три слова: теплий, чесний, дикий. Походження має бути видно, як на упаковці. І щоб
вовк відчувався — але як уважний звір, не як крик.»
Decision: approved (notes confirmed accurate).
Routed to: designer — synthesize into art-direction options for Phase 3.

## Phase 3 — Art direction — round 1 — 2026-05-25
Shown: three directions — **A Craft Editorial**, **B Industrial/Brutalist**, **C Nordic Minimal**
(`03_design/art-direction/direction.md`) with a recommendation for A.
Client said: «А — однозначно. Саме так я це й уявляв: тепло, землисто, видно дані про зерно. B
занадто холодне й жорстке для нашої кави. C — гарне, але якесь порожнє й безлике, таких сайтів
тисячі. Беремо A.»
Decision: approved — direction = Craft Editorial.
Routed to: designer — lock A; log D3/D4; proceed to content + wireframes.

## Phase 5 — Wireframes — round 1 — 2026-06-02
Shown: three lo-fi landing variants — **A Origin-first editorial**, **B Shop-first**,
**C Story-first** (`03_design/wireframes/NOTES.md`), recommendation A (9/10).
Client said: «A найближче. Але каву — три лоти — підніміть вище, хай буде одразу після героя, бо
це те, що продає; не хочу, щоб людина спершу читала принципи. І заголовок трохи м'якше — зараз
звучить майже різко, а ми теплі. В решті — добре.»
Decision: revise (round 2 needed).
Routed to: designer — (1) move the "Кава — 3 лоти" section above "Принципи" (right after hero);
(2) soften the H1 tone; keep variant A's structure otherwise.

## Phase 5 — Wireframes — round 2 — 2026-06-02
Shown: revised variant A — coffees moved up (after hero, before principles); headline tone softened
in the copy-deck (`02_content/copy-deck.md` H1 «Кава для тих, хто чує різницю.»).
Client said: «О, тепер так. Кава одразу видно, і заголовок звучить по-нашому — тепло. Затверджую.»
Decision: approved — variant A (post-edit) is the landing structure.
Routed to: pm — lock D6; proceed to design system (tokens + UI-kit).

## Phase 6 — Design system / scheme pick — round 1 — 2026-06-03
Shown: two color schemes on the same components — **Espresso** (espresso-brown primary, cream paper,
ember accent, pine focus) vs **Forest** (pine-led primary, espresso accent) — via the UI-kit.
Client said: «Espresso. Воно «кавове» й тепле, коричневий як головний — прямо про продукт. Forest
трохи зелене, як трав'яний чай, не наше. Помаранчевий акцент — це той «дикий» іскрик, лишаємо.»
Decision: approved — scheme = Espresso.
Routed to: designer — ship Espresso primitives in `design-tokens.json` (D5); build final landing.

## Phase 7 — Final preview — round 1 — 2026-06-05
Shown: built landing preview (Next.js, Vercel preview deploy) with real copy, Espresso scheme,
Spectral × Golos Text, asymmetric origin list, dark «Чому вовк» story band.
Client said: «Дуже круто, саме той настрій. Видно, що крафт, а не шаблон. Фото зерна лягли добре,
кнопка «Обрати каву» одразу під рукою. Затверджую — запускаємо.»
Decision: approved — preview accepted; proceed to deploy + E2E test.
Routed to: devops — deploy to `vovk.coffee`; tester — E2E on the live URL.
