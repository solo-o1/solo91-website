import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GoldUnderlineHeading, Eyebrow, Price, Reveal } from '@/components/shared';
import { formatPrice, menu, type MenuSection } from '@/data/menu';
import { useLang } from '@/i18n';
import { EASE } from '@/lib/utils';

const gallery = [
  './images/berry-shake.webp',
  './images/cappuccino.webp',
  './images/lotus-cheesecake.webp',
  './images/mojito.webp',
  './images/oreo-cake.webp',
];

function SectionGrid({ section }: { section: MenuSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { isAr } = useLang();
  // Primary line in the page language, the other language underneath.
  const second = isAr ? { lang: 'en', dir: 'ltr' as const } : { lang: 'ar', dir: 'rtl' as const };
  const sectionNote = isAr ? section.noteAr ?? section.note : section.note;

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-primary/40 pb-3">
        <h3 className="text-[28px] leading-tight text-foreground md:text-[32px]">{isAr ? section.ar : section.en}</h3>
        <span lang={second.lang} dir={second.dir} className="text-base text-primary/80">
          {isAr ? section.en : section.ar}
        </span>
        {sectionNote && <p className="w-full text-sm text-muted-foreground">{sectionNote}</p>}
      </div>
      <div ref={ref} className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {section.items.map((item, i) => {
          const note = isAr ? item.noteAr ?? item.note : item.note;
          return (
            <motion.div
              key={item.en}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: Math.min(i, 10) * 0.08, ease: EASE }}
              className="flex cursor-default items-start justify-between gap-6 border-b border-border py-5 transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="font-serif text-xl leading-snug text-foreground">{isAr ? item.ar : item.en}</p>
                <p lang={second.lang} dir={second.dir} className="mt-1 text-end text-[13px] font-light text-muted-foreground/80">
                  {isAr ? item.en : item.ar}
                </p>
                {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
              </div>
              <Price value={formatPrice(item.price)} className="pt-0.5" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const { c, isAr } = useLang();
  const tab = menu.find((t) => t.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-background px-6 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-6">{c.menu.eyebrow}</Eyebrow>
            <GoldUnderlineHeading>{c.menu.title}</GoldUnderlineHeading>
          </div>
          <Reveal className="max-w-sm text-[15px] text-muted-foreground">{c.menu.blurb}</Reveal>
        </div>

        <Reveal className="no-scrollbar -mx-6 mt-14 flex gap-3 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0">
          {gallery.map((src, i) => (
            <figure key={src} className="group relative aspect-[4/5] w-44 shrink-0 overflow-hidden border border-border md:w-auto">
              <img
                src={src}
                alt={c.menu.gallery[i]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </Reveal>

        <Tabs value={active} onValueChange={setActive} className="mt-16" dir={isAr ? 'rtl' : 'ltr'}>
          <TabsList aria-label={c.menu.tabsAria} className="flex-wrap gap-x-6 gap-y-1 border-b border-border md:gap-x-10">
            {menu.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {isAr ? t.labelAr : t.label}
                {active === t.id && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-px bg-primary"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent key={tab.id} value={tab.id} forceMount asChild>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="pt-12"
              >
                {tab.sections.map((s) => (
                  <SectionGrid key={s.en} section={s} />
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
