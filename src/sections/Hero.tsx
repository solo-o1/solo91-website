import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useLang } from '@/i18n';
import { EASE } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const { c, isAr, lang } = useLang();
  // The Arabic version uses a mirrored edit of the video: product on the left, text on the right.
  const video = isAr ? './media/hero-rtl.mp4' : './media/hero.mp4';
  const poster = isAr ? './media/hero-rtl-poster.jpg' : './media/hero-poster.jpg';

  return (
    <section id="top" className="relative h-screen min-h-[620px] w-full overflow-hidden">
      <video
        key={lang}
        autoPlay={!reduce}
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden
        className={`absolute inset-0 z-0 h-full w-full scale-110 object-cover md:object-center ${isAr ? 'object-[28%_center]' : 'object-[72%_center]'}`}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(13,9,5,0.6) 0%, transparent 30%, transparent 60%, rgba(13,9,5,0.95) 100%)' }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to ${isAr ? 'left' : 'right'}, rgba(13,9,5,0.85) 0%, rgba(13,9,5,0.4) 50%, transparent 100%)`,
        }}
      />

      <motion.div
        key={`content-${lang}`}
        className="absolute bottom-24 end-6 start-6 z-20 max-w-5xl md:bottom-16 md:start-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="ui-label mb-6 tracking-[0.3em] text-primary">
          {c.hero.eyebrow}
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[52px] font-light leading-[0.95] text-foreground md:text-[72px] lg:text-[104px] xl:text-[120px]"
        >
          {c.hero.line1}
          <br />
          <em className="font-light italic">{c.hero.line2}</em>
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
          {c.hero.sub}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#reserve" className="btn-gold">
            {c.hero.primary}
          </a>
          <a href="#menu" className="btn-ghost">
            {c.hero.secondary}
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary md:flex"
        aria-label={c.hero.scroll}
      >
        <span className="ui-label text-[10px] text-muted-foreground">{c.hero.scroll}</span>
        <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
        </motion.span>
      </a>
    </section>
  );
}
