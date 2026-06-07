// Site copy (uk) — source of truth is 02_content/copy-deck.md. No lorem ipsum.
// Photography: curated Pexels (free for commercial use); credits in public/images/CREDITS.md.

export const images = {
  hero: "/images/hero.jpg",
  roaster: "/images/roaster.jpg",
  barista: "/images/barista.jpg",
  bag: "/images/bag.jpg",
};

export const nav = [
  { label: "Кава", href: "#kava" },
  { label: "Обсмажка", href: "#proces" },
  { label: "Історія", href: "#istoriya" },
  { label: "Гурт", href: "#hurt" },
];

export const hero = {
  eyebrow: "Спешелті-обсмажка · Львів",
  title: "Кава для тих,\nхто чує різницю.",
  subtitle:
    "Мікролоти, обсмажені малими партіями у Львові. Знаємо ферму, висоту й дату врожаю кожного зерна — і пакуємо впродовж доби.",
  ctaPrimary: "Обрати каву",
  ctaSecondary: "Як ми обсмажуємо",
  ctaNote: "Безкоштовна доставка від 700 ₴",
  image: "/images/hero.jpg",
  imageAlt: "Свіжообсмажені зерна кави висипаються з ростера",
};

export const principles = {
  heading: "Без компромісів\nна жодному етапі",
  items: [
    { n: "01", title: "Малі партії", body: "Обсмажуємо до 12 кг за раз і пакуємо протягом 24 годин. Ви п'єте каву на піку смаку." },
    { n: "02", title: "Прозоре походження", body: "Для кожного лоту знаємо ферму, висоту, сорт, обробку й дату врожаю. Усе — на упаковці." },
    { n: "03", title: "48 годин до чашки", body: "Відправляємо Новою поштою одразу після обсмаження. Без складів і місяців на полиці." },
  ],
};

export type Coffee = {
  origin: string;
  region: string;
  notes: string;
  method: string;
  detail: string;
  price: string;
  image: string;
  alt: string;
};

export const coffees = {
  heading: "Що зараз у обсмажці",
  link: "Уся кава",
  items: [
    {
      origin: "Ефіопія", region: "Ґуджі",
      notes: "персик, жасмин, чорний чай",
      method: "фільтр", detail: "натуральна обробка · 1950–2100 м",
      price: "380 ₴ / 250 г",
      image: "/images/bean-ethiopia.jpg", alt: "Зерна кави Ефіопія Ґуджі крупним планом",
    },
    {
      origin: "Колумбія", region: "Уїла",
      notes: "молочний шоколад, карамель, червоне яблуко",
      method: "еспресо / фільтр", detail: "мита обробка · 1700 м",
      price: "340 ₴ / 250 г",
      image: "/images/bean-colombia.jpg", alt: "Чашка кави Колумбія Уїла поруч із зернами",
    },
    {
      origin: "Бразилія", region: "Серрадо",
      notes: "фундук, какао, коричневий цукор",
      method: "еспресо", detail: "натуральна обробка · 1100 м",
      price: "300 ₴ / 250 г",
      image: "/images/bean-brazil.jpg", alt: "Зерна кави Бразилія Серрадо",
    },
  ] as Coffee[],
};

export const process = {
  eyebrow: "Як ми обсмажуємо",
  heading: "Кожна партія проходить через руки, а не конвеєр",
  body:
    "Зелене зерно куштуємо ще до обсмаження, будуємо профіль під кожен лот і обсмажуємо малими партіями на барабанному ростері. Калібруємо за смаком, не за таймером — і записуємо профіль, щоб наступна партія була такою ж точною.",
  stats: [
    { value: "≤ 12 кг", label: "одна партія" },
    { value: "24 год", label: "до пакування" },
    { value: "6", label: "країн походження" },
  ],
  image: "/images/roaster.jpg",
  imageAlt: "Барабанний ростер під час обсмаження кави",
};

export const story = {
  eyebrow: "Наша історія",
  heading: "Чому вовк",
  body:
    "Вовк чує те, чого не чують інші. Так і ми: шукаємо в зерні смак, який легко проґавити поспіхом. ВОВК почався 2019 року з однієї ростери у львівській майстерні й упертого правила — обсмажувати тільки те, що п'ємо самі. Сьогодні нас більше, партії досі малі, а правило не змінилося.",
  sign: "Андрій Вовк, засновник і обсмажувач",
  image: "/images/barista.jpg",
  imageAlt: "Бариста за роботою у кав'ярні ВОВК",
};

export const subscribe = {
  heading: "Кава, що приходить сама",
  subtitle: "Підписка на щомісячну доставку — обираєте каву, періодичність і помел. Скасувати можна будь-коли.",
  cta: "Оформити підписку",
  wholesaleTitle: "Для кав'ярень",
  wholesaleBody: "Гуртові ціни, стабільний профіль обсмаження, навчання бариста.",
  wholesaleCta: "Стати партнером",
};

export const newsletter = {
  heading: "Лист про нові лоти й знижки",
  placeholder: "Ваш email",
  cta: "Підписатися",
  error: "Введіть коректний email.",
  success: "Готово — перевірте пошту.",
  note: "Без спаму. Один лист на 2 тижні.",
};

export const footer = {
  columns: [
    { title: "Кава", links: ["Уся кава", "Підписка", "Набори", "Сертифікати"] },
    { title: "Про нас", links: ["Історія", "Обсмажка", "Журнал", "Гурт"] },
    { title: "Контакти", links: ["Львів, вул. Кравчука, 12", "hello@vovk.coffee", "Instagram", "Telegram"] },
  ],
  legal: "© 2026 ВОВК Coffee Roasters",
  legalLinks: ["Політика конфіденційності", "Публічна оферта"],
};
