// Shared chrome strings for the static guide pages (see build-pages.mjs).
// The guide bodies themselves live in ./<lang>.mjs, one file per language,
// keyed by the same slugs as GUIDE_SLUGS below.

// Order here is the order guides are listed on the hub, in the footer and in
// the sitemap. The slug is the URL segment in every language.
export const GUIDE_SLUGS = [
  'tech-stack-for-agency',
  'tech-stack-for-business',
  'start-an-agency',
  'start-a-business',
  'business-email-and-domain',
  'crm-for-small-business',
];

// Bump when guide copy changes meaningfully; feeds Article dateModified.
export const GUIDES_PUBLISHED = '2026-09-18';
export const GUIDES_MODIFIED = '2026-09-18';

export const UI = {
  en: {
    guides: 'Guides',
    hubTitle: 'Guides: tech stack and launching an agency or business',
    hubSeoTitle: 'Guides — tech stack, starting an agency or business | Sikra',
    hubDesc: 'Practical guides on the tech stack for an agency or business, starting an agency, starting a business, work email, domains and CRM.',
    hubIntro: 'Short, practical guides from the team that sets up the digital side of agencies and businesses every week: which tools you actually need, in what order, and what to avoid.',
    home: 'Home', services: 'Services', stack: 'Toolkit', contact: 'Contact',
    onThisPage: 'On this page',
    faq: 'Frequently asked questions',
    related: 'More guides',
    read: 'Read the guide',
    ctaTitle: 'Want this set up for you?',
    ctaSub: 'Tell us about your agency or business — we reply within one business day with a scope and timeline.',
    ctaBtn: 'Discuss your launch',
    updated: 'Updated',
    footer: 'Sikra helps launch agencies and businesses: website, domain and email, campaigns, databases, CRM, forms and payments.',
    privacy: 'Privacy',
  },
  ru: {
    guides: 'Гайды',
    hubTitle: 'Гайды: технический стек и создание агентства или бизнеса',
    hubSeoTitle: 'Гайды — технический стек, создание агентства и бизнеса | Sikra',
    hubDesc: 'Практические гайды: технический стек для агентства и бизнеса, создание агентства, создание бизнеса, корпоративная почта, домен и CRM.',
    hubIntro: 'Короткие практические гайды от команды, которая каждую неделю собирает цифровую часть агентств и бизнесов: какие инструменты действительно нужны, в каком порядке их подключать и чего избегать.',
    home: 'Главная', services: 'Услуги', stack: 'Инструменты', contact: 'Контакты',
    onThisPage: 'Содержание',
    faq: 'Частые вопросы',
    related: 'Другие гайды',
    read: 'Читать гайд',
    ctaTitle: 'Хотите, чтобы это настроили за вас?',
    ctaSub: 'Расскажите про агентство или бизнес — ответим за один рабочий день с составом работ и сроками.',
    ctaBtn: 'Обсудить запуск',
    updated: 'Обновлено',
    footer: 'Sikra помогает запускать агентства и бизнесы: сайт, домен и почта, рассылки, базы данных, CRM, формы и оплаты.',
    privacy: 'Конфиденциальность',
  },
  uk: {
    guides: 'Гайди',
    hubTitle: 'Гайди: технічний стек і створення агентства чи бізнесу',
    hubSeoTitle: 'Гайди — технічний стек, створення агентства і бізнесу | Sikra',
    hubDesc: 'Практичні гайди: технічний стек для агентства і бізнесу, створення агентства, створення бізнесу, корпоративна пошта, домен і CRM.',
    hubIntro: 'Короткі практичні гайди від команди, яка щотижня збирає цифрову частину агентств і бізнесів: які інструменти справді потрібні, у якому порядку їх підключати і чого уникати.',
    home: 'Головна', services: 'Послуги', stack: 'Інструменти', contact: 'Контакти',
    onThisPage: 'Зміст',
    faq: 'Часті запитання',
    related: 'Інші гайди',
    read: 'Читати гайд',
    ctaTitle: 'Хочете, щоб це налаштували за вас?',
    ctaSub: 'Розкажіть про агентство чи бізнес — відповімо за один робочий день зі складом робіт і термінами.',
    ctaBtn: 'Обговорити запуск',
    updated: 'Оновлено',
    footer: 'Sikra допомагає запускати агентства і бізнеси: сайт, домен і пошта, розсилки, бази даних, CRM, форми та оплати.',
    privacy: 'Конфіденційність',
  },
  hu: {
    guides: 'Útmutatók',
    hubTitle: 'Útmutatók: tech stack, ügynökség és vállalkozás indítása',
    hubSeoTitle: 'Útmutatók — tech stack, ügynökség és vállalkozás indítása | Sikra',
    hubDesc: 'Gyakorlati útmutatók: tech stack ügynökségnek és vállalkozásnak, ügynökség indítása, vállalkozás indítása, céges e-mail, domain és CRM.',
    hubIntro: 'Rövid, gyakorlati útmutatók attól a csapattól, amely hétről hétre felépíti ügynökségek és vállalkozások digitális oldalát: milyen eszközökre van valóban szükség, milyen sorrendben, és mit érdemes elkerülni.',
    home: 'Főoldal', services: 'Szolgáltatások', stack: 'Eszközök', contact: 'Kapcsolat',
    onThisPage: 'Tartalom',
    faq: 'Gyakori kérdések',
    related: 'További útmutatók',
    read: 'Elolvasom',
    ctaTitle: 'Szeretnéd, hogy mi állítsuk be?',
    ctaSub: 'Mesélj az ügynökségedről vagy vállalkozásodról — egy munkanapon belül válaszolunk a munkák körével és határidőkkel.',
    ctaBtn: 'Beszéljünk az indításról',
    updated: 'Frissítve',
    footer: 'A Sikra ügynökségek és vállalkozások indításában segít: weboldal, domain és e-mail, hírlevelek, adatbázisok, CRM, űrlapok és fizetés.',
    privacy: 'Adatvédelem',
  },
};
