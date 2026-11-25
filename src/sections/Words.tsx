import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GoldUnderlineHeading, Reveal } from '@/components/shared';
import { useLang } from '@/i18n';

export function Words() {
  const [index, setIndex] = useState(0);
  const { c, lang } = useLang();
  const quotes = c.words.quotes;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, [index, quotes.length]);

  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[640px] text-center">
        <GoldUnderlineHeading>{c.words.title}</GoldUnderlineHeading>
        <Reveal className="mt-14 flex min-h-[220px] items-center justify-center md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={`${lang}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
            >
              <blockquote className="font-serif text-[24px] italic leading-snug text-foreground md:text-[28px]">
                “{quotes[index].text}”
              </blockquote>
              <figcaption className="ui-label mt-6 text-primary">— {quotes[index].by}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </Reveal>
        <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label={c.words.choose}>
          {quotes.map((q, i) => (
            <button
              key={q.by}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={c.words.quoteN(i + 1)}
              onClick={() => setIndex(i)}
              className="p-1"
            >
              <span className={`block h-1.5 w-1.5 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-primary/30'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
