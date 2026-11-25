import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'ar';

const pad = (m: number) => (m === 0 ? '00' : String(m));

const en = {
  meta: { title: 'Solo 91 Cafe & Restaurant — Zarqa, Jordan' },
  toggle: { label: 'عربي', labelLang: 'ar' as Lang, aria: 'عرض الموقع بالعربية' },
  nav: {
    links: [
      { label: 'Menu', href: '#menu' },
      { label: 'Our Story', href: '#story' },
      { label: 'Gatherings', href: '#gatherings' },
      { label: 'Reserve', href: '#reserve' },
    ],
    reserve: 'Reserve a Table',
    open: 'Open menu',
    close: 'Close menu',
    dialog: 'Site navigation',
    home: 'Solo 91 Cafe & Restaurant — home',
  },
  hero: {
    eyebrow: 'Cafe & Restaurant — Zarqa, Jordan',
    line1: 'Where the',
    line2: 'Luxury Happens',
    sub: 'An experience out of the ordinary — signature drinks, gourmet dishes, artisanal desserts and exceptional shisha.',
    primary: 'Reserve Your Table',
    secondary: 'View the Menu',
    scroll: 'Scroll to explore',
  },
  story: {
    eyebrow: 'About Solo 91',
    title: 'Our Story',
    paragraphs: [
      'At Solo 91, the word impossible doesn’t exist in our dictionary. In a short time we have reached our goals, met unexpected challenges with confidence, and introduced a concept that redefines what a modern, luxurious café can be.',
      'The atmosphere is distinctive and easy to enjoy — made for families and friends looking for a refined blend of elegance and comfort.',
      'Every guest is invited on a premium journey: signature drinks, gourmet dishes, artisanal desserts and exceptional shisha, served by a highly trained and welcoming team.',
    ],
    alt: 'Iced latte over dry-ice smoke with scattered coffee beans at Solo 91',
  },
  menu: {
    eyebrow: 'Zarqa Branch · Prices in Jordanian Dinar',
    title: 'The Menu',
    blurb:
      'Gourmet coffee, refreshing mocktails, flavorful dishes and indulgent desserts — from the first breakfast plate to the last shisha of the night.',
    gallery: [
      'Berry milkshake with fresh strawberries',
      'Cappuccino dusted with chocolate',
      'Lotus cheesecake with caramel drizzle',
      'Lemon mint mojito',
      'Oreo chocolate cake slice',
    ],
    tabsAria: 'Menu categories',
    unit: 'JD',
  },
  signature: {
    eyebrow: 'House Signatures',
    title1: 'Only at',
    title2: 'Solo 91',
    body: 'Across the menu, a handful of creations carry our name. Order the Solo Platter for the table, then let the Solo Coffee or a Solo Mojito carry the evening.',
    quote: '“Taste the adventure — global flavor awaits.”',
    alt: 'Hot chocolate with cream beside a plate with Solo written in chocolate',
  },
  gatherings: {
    eyebrow: 'Families · Friends · Celebrations',
    title: 'An Evening All Your Own',
    subtitle: 'Gatherings at Solo 91',
    body: 'Birthdays, reunions or a long night out with friends — tell us what you’re celebrating, how many are coming and when, and our team will have the table, the drinks and the shisha ready before you arrive.',
    cta: 'Plan Your Gathering',
    details: 'Open every day 9:00 AM – 12:30 AM · Breakfast to late night · Classic & fresh shisha',
    call: 'Or call',
    whatsapp: 'Hello Solo 91, I would like to plan a gathering. Date: , Guests: , Occasion: ',
    alt: 'A celebration night at Solo 91 with balloons, bubbles and flames',
  },
  words: {
    title: 'In Our Words',
    quotes: [
      { text: 'At Solo 91, the word impossible doesn’t exist in our dictionary.', by: 'The Solo 91 Team' },
      {
        text: 'Whether it’s a classic cappuccino, a signature entrée or something sweet, we’re here to make every visit unforgettable.',
        by: 'Our Promise',
      },
      { text: 'Every visit is a journey of taste and ambiance.', by: 'The Solo 91 Experience' },
    ],
    choose: 'Choose quote',
    quoteN: (n: number) => `Quote ${n}`,
  },
  reserve: {
    title: 'Reserve Your Table',
    sub: 'We look forward to welcoming you.',
    date: 'Date',
    time: 'Time',
    timePh: 'Select a time',
    party: 'Party Size',
    partyPh: 'Number of guests',
    name: 'Full Name',
    namePh: 'Your name',
    phone: 'Phone Number',
    email: 'Email Address',
    emailPh: 'Optional',
    submit: 'Confirm Reservation',
    error: 'Please choose a date, time and party size, and add your name and phone number.',
    sent: 'Your request is ready in WhatsApp — press send and we’ll confirm your table shortly.',
    notePrefix: 'Reservations are confirmed by phone or WhatsApp on',
    noteSuffix: '. Walk-ins always welcome.',
    dateLocale: 'en-GB',
    timeLabel: (h24: number, m: number) => `${h24 % 12 === 0 ? 12 : h24 % 12}:${pad(m)} ${h24 < 12 ? 'AM' : 'PM'}`,
    partyLabel: (v: string) => (v === '12+' ? '12+ guests' : `${v} ${v === '1' ? 'guest' : 'guests'}`),
    message: (d: { date: string; time: string; party: string; name: string; phone: string; email: string }) =>
      [
        'Hello Solo 91, I would like to reserve a table.',
        `Date: ${d.date}`,
        `Time: ${d.time}`,
        `Party size: ${d.party}`,
        `Name: ${d.name}`,
        `Phone: ${d.phone}`,
        d.email ? `Email: ${d.email}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  footer: {
    tagline: 'Where the luxury happens.',
    sub: 'Cafe & Restaurant · Zarqa, Jordan',
    explore: 'Explore',
    home: 'Home',
    signatures: 'Signatures',
    hours: 'Hours',
    everyday: 'Every day',
    hoursValue: '9:00 AM – 12:30 AM',
    visit: 'Visit',
    address: ['Madinat Al-Sharq', 'Near the Court of First Instance', 'Zarqa, Jordan'],
    addressAlt: 'مدينة الشرق، بالقرب من محكمة البداية، الزرقاء',
    addressAltLang: 'ar' as Lang,
    rights: (y: number) => `© ${y} Solo 91 Cafe & Restaurant. All rights reserved.`,
    crafted: 'Crafted with care in Jordan',
  },
};

export type Copy = typeof en;

const arParty = (v: string) => {
  if (v === '12+') return '12+ شخصاً';
  const n = Number(v);
  if (n === 1) return 'شخص واحد';
  if (n === 2) return 'شخصان';
  if (n <= 10) return `${n} أشخاص`;
  return `${n} شخصاً`;
};

const ar: Copy = {
  meta: { title: 'سولو 91 كافيه ومطعم — الزرقاء، الأردن' },
  toggle: { label: 'EN', labelLang: 'en', aria: 'View the site in English' },
  nav: {
    links: [
      { label: 'المنيو', href: '#menu' },
      { label: 'قصتنا', href: '#story' },
      { label: 'المناسبات', href: '#gatherings' },
      { label: 'الحجز', href: '#reserve' },
    ],
    reserve: 'احجز طاولة',
    open: 'فتح القائمة',
    close: 'إغلاق القائمة',
    dialog: 'التنقل في الموقع',
    home: 'سولو 91 كافيه ومطعم — الرئيسية',
  },
  hero: {
    eyebrow: 'كافيه ومطعم — الزرقاء، الأردن',
    line1: 'هنا',
    line2: 'تبدأ الفخامة',
    sub: 'تجربة خارجة عن المألوف — مشروبات مميزة، أطباق فاخرة، حلويات مصنوعة بإتقان، وأرجيلة استثنائية.',
    primary: 'احجز طاولتك',
    secondary: 'تصفّح المنيو',
    scroll: 'مرّر للاستكشاف',
  },
  story: {
    eyebrow: 'عن سولو 91',
    title: 'قصتنا',
    paragraphs: [
      'في سولو 91، كلمة «مستحيل» غير موجودة في قاموسنا. خلال وقت قصير حققنا أهدافنا وتجاوزنا التحديات بثقة، وقدّمنا مفهوماً جديداً يعيد تعريف الكافيه العصري الفاخر.',
      'أجواء مميزة وممتعة، مصمّمة للعائلات والأصدقاء الباحثين عن مزيج راقٍ من الأناقة والراحة.',
      'ندعو كل ضيف إلى رحلة مميزة: مشروبات خاصة، أطباق فاخرة، حلويات مصنوعة بإتقان، وأرجيلة استثنائية، يقدّمها فريق مدرّب ومرحّب.',
    ],
    alt: 'آيس لاتيه فوق دخان الثلج الجاف مع حبوب القهوة في سولو 91',
  },
  menu: {
    eyebrow: 'فرع الزرقاء · الأسعار بالدينار الأردني',
    title: 'المنيو',
    blurb: 'قهوة مختصة، موكتيلات منعشة، أطباق غنية وحلويات لا تقاوَم — من أول طبق فطور حتى آخر أرجيلة في الليل.',
    gallery: ['ميلك شيك التوت مع الفراولة', 'كابتشينو مع الشوكولاتة', 'تشيز كيك لوتس بصوص الكراميل', 'موهيتو ليمون ونعنع', 'قطعة كيك أوريو بالشوكولاتة'],
    tabsAria: 'أقسام المنيو',
    unit: 'د.أ',
  },
  signature: {
    eyebrow: 'أصناف سولو الخاصة',
    title1: 'فقط في',
    title2: 'سولو 91',
    body: 'في كل أقسام المنيو أصناف تحمل اسمنا. اطلب سولو بلاتر للطاولة، ودع سولو كوفي أو موهيتو سولو يكمّلان السهرة.',
    quote: '«عِش المغامرة — نكهات من حول العالم بانتظارك.»',
    alt: 'هوت تشوكلت مع الكريمة بجانب صحن كُتب عليه سولو بالشوكولاتة',
  },
  gatherings: {
    eyebrow: 'عائلات · أصدقاء · مناسبات',
    title: 'سهرة على ذوقك',
    subtitle: 'المناسبات في سولو 91',
    body: 'عيد ميلاد، لمّة أصدقاء أو سهرة طويلة — أخبرونا بالمناسبة وعدد الضيوف والموعد، وسيجهّز فريقنا الطاولة والمشروبات والأرجيلة قبل وصولكم.',
    cta: 'خطّط لمناسبتك',
    details: 'مفتوح يومياً 9:00 صباحاً – 12:30 بعد منتصف الليل · من الفطور حتى آخر الليل · أرجيلة كلاسيك وفريش',
    call: 'أو اتصل على',
    whatsapp: 'مرحباً سولو 91، أرغب بترتيب مناسبة. التاريخ: ، عدد الضيوف: ، المناسبة: ',
    alt: 'سهرة احتفال في سولو 91 مع بالونات وفقاعات ونار',
  },
  words: {
    title: 'بكلماتنا',
    quotes: [
      { text: 'في سولو 91، كلمة «مستحيل» غير موجودة في قاموسنا.', by: 'فريق سولو 91' },
      { text: 'سواء كان كابتشينو كلاسيكياً، طبقاً مميزاً أو شيئاً حلواً، نحن هنا لنجعل كل زيارة لا تُنسى.', by: 'وعدنا' },
      { text: 'كل زيارة رحلة من المذاق والأجواء.', by: 'تجربة سولو 91' },
    ],
    choose: 'اختر العبارة',
    quoteN: (n: number) => `العبارة ${n}`,
  },
  reserve: {
    title: 'احجز طاولتك',
    sub: 'يسعدنا استقبالكم.',
    date: 'التاريخ',
    time: 'الوقت',
    timePh: 'اختر الوقت',
    party: 'عدد الأشخاص',
    partyPh: 'عدد الضيوف',
    name: 'الاسم الكامل',
    namePh: 'اسمك',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    emailPh: 'اختياري',
    submit: 'تأكيد الحجز',
    error: 'يرجى اختيار التاريخ والوقت وعدد الأشخاص، وإدخال الاسم ورقم الهاتف.',
    sent: 'طلبك جاهز في واتساب — اضغط إرسال وسنؤكد حجزك قريباً.',
    notePrefix: 'يتم تأكيد الحجوزات عبر الهاتف أو واتساب على',
    noteSuffix: '. أهلاً بكم دائماً بدون حجز.',
    dateLocale: 'ar-JO-u-nu-latn',
    timeLabel: (h24: number, m: number) => `${h24 % 12 === 0 ? 12 : h24 % 12}:${pad(m)} ${h24 < 12 ? 'ص' : 'م'}`,
    partyLabel: arParty,
    message: (d) =>
      [
        'مرحباً سولو 91، أرغب بحجز طاولة.',
        `التاريخ: ${d.date}`,
        `الوقت: ${d.time}`,
        `عدد الأشخاص: ${d.party}`,
        `الاسم: ${d.name}`,
        `الهاتف: ${d.phone}`,
        d.email ? `البريد: ${d.email}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
  },
  footer: {
    tagline: 'هنا تبدأ الفخامة.',
    sub: 'كافيه ومطعم · الزرقاء، الأردن',
    explore: 'تصفّح',
    home: 'الرئيسية',
    signatures: 'أصناف سولو',
    hours: 'ساعات العمل',
    everyday: 'يومياً',
    hoursValue: '9:00 ص – 12:30 ص',
    visit: 'زورونا',
    address: ['مدينة الشرق', 'بالقرب من محكمة البداية', 'الزرقاء، الأردن'],
    addressAlt: 'Madinat Al-Sharq, near the Court of First Instance, Zarqa',
    addressAltLang: 'en',
    rights: (y: number) => `© ${y} سولو 91 كافيه ومطعم. جميع الحقوق محفوظة.`,
    crafted: 'صُنع بعناية في الأردن',
  },
};

const copy: Record<Lang, Copy> = { en, ar };
const KEY = 'solo91-lang';

function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'ar' || fromUrl === 'en') return fromUrl;
    const saved = localStorage.getItem(KEY);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    /* storage blocked: fall back to English */
  }
  return 'en';
}

type Ctx = { lang: Lang; isAr: boolean; dir: 'ltr' | 'rtl'; c: Copy; toggle: () => void };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const isAr = lang === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = isAr ? 'rtl' : 'ltr';
    document.title = copy[lang].meta.title;
    try {
      localStorage.setItem(KEY, lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    } catch {
      /* ignore */
    }
  }, [lang, isAr]);

  const value: Ctx = { lang, isAr, dir: isAr ? 'rtl' : 'ltr', c: copy[lang], toggle: () => setLang(isAr ? 'en' : 'ar') };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
