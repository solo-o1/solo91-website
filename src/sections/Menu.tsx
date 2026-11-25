import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GoldUnderlineHeading, Eyebrow, Price, Reveal } from '@/components/shared';
import { formatPrice, menu, type MenuSection } from '@/data/menu';
import { EASE } from '@/lib/utils';

const gallery = [
  { src: './images/berry-shake.webp', alt: 'Berry milkshake with fresh strawberries' },
  { src: './images/cappuccino.webp', alt: 'Cappuccino dusted with chocolate' },
  { src: './images/lotus-cheesecake.webp', alt: 'Lotus cheesecake with caramel drizzle' },
  { src: './images/mojito.webp', alt: 'Lemon mint mojito' },
  { src: './images/oreo-cake.webp', alt: 'Oreo chocolate cake slice' },
];

function SectionGrid({ section }: { section: MenuSection }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-primary/40 pb-3">
        <h3 className="text-[28px] leading-tight text-foreground md:text-[32px]">{section.en}</h3>
        <span lang="ar" dir="rtl" className="text-base text-primary/80">
          {section.ar}
        </span>
        {section.note && <p className="w-full text-sm text-muted-foreground">{section.note}</p>}
      </div>
      <div ref={ref} className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {section.items.map((item, i) => (
          <motion.div
            key={item.en}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: Math.min(i, 10) * 0.08, ease: EASE }}
            className="flex cursor-default items-start justify-between gap-6 border-b border-border py-5 transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            <div className="min-w-0">
              <p className="font-serif text-xl leading-snug text-foreground">{item.en}</p>
              <p lang="ar" dir="rtl" className="mt-1 text-left text-[13px] font-light text-muted-foreground/80">
                {item.ar}
              </p>
              {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
            </div>
            <Price value={formatPrice(item.price)} className="pt-0.5" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const tab = menu.find((t) => t.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-background px-6 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-6">Zarqa Branch · Prices in Jordanian Dinar</Eyebrow>
            <GoldUnderlineHeading>The Menu</GoldUnderlineHeading>
          </div>
          <Reveal className="max-w-sm text-[15px] text-muted-foreground">
            Gourmet coffee, refreshing mocktails, flavorful dishes and indulgent desserts — from the first breakfast
            plate to the last shisha of the night.
          </Reveal>
        </div>

        <Reveal className="no-scrollbar -mx-6 mt-14 flex gap-3 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0">
          {gallery.map((g) => (
            <figure key={g.src} className="group relative aspect-[4/5] w-44 shrink-0 overflow-hidden border border-border md:w-auto">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </Reveal>

        <Tabs value={active} onValueChange={setActive} className="mt-16">
          <TabsList
            aria-label="Menu categories"
            className="flex-wrap gap-x-6 gap-y-1 border-b border-border md:gap-x-10"
          >
            {menu.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.label}
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
