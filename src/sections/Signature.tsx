import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Eyebrow, Price, Reveal } from '@/components/shared';
import { formatPrice, signatures } from '@/data/menu';

export function Signature() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} id="signatures" className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[70vh]">
      <motion.div style={{ y }} className="absolute inset-x-0 -bottom-[60px] top-0">
        <img
          src="./images/signature-hot-chocolate.webp"
          alt="Hot chocolate with cream beside a plate with Solo written in chocolate"
          loading="lazy"
          className="h-full w-full object-cover object-[75%_center] md:object-[85%_center]"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)' }}
      />
      <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(13,9,5,0.95) 35%, rgba(13,9,5,0.4) 100%)' }} />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-16 md:pt-40">
        <Reveal>
          <Eyebrow className="mb-4">House Signatures</Eyebrow>
          <h2 className="font-serif text-5xl font-light text-foreground md:text-7xl">
            Only at <em className="italic">Solo 91</em>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] text-foreground/80 md:text-base">
            Across the menu, a handful of creations carry our name. Order the Solo Platter for the table, then let the
            Solo Coffee or a Solo Mojito carry the evening.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 grid max-w-2xl grid-cols-1 gap-x-12 sm:grid-cols-2">
          {signatures.map((s) => (
            <div key={s.en} className="flex items-baseline justify-between gap-4 border-b border-border/70 py-3">
              <span className="font-serif text-lg text-foreground">{s.en}</span>
              <Price value={formatPrice(s.price)} className="text-base" />
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg font-serif text-2xl italic text-primary">“Taste the adventure — global flavor awaits.”</p>
        </Reveal>
      </div>
    </section>
  );
}
