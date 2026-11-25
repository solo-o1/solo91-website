import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
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
  return (
    <section id="top" className="relative h-screen min-h-[620px] w-full overflow-hidden">
      <video
        autoPlay={!reduce}
        loop
        muted
        playsInline
        preload="auto"
        poster="./media/hero-poster.jpg"
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full scale-110 object-cover object-[72%_center] md:object-center"
      >
        <source src="./media/hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(13,9,5,0.6) 0%, transparent 30%, transparent 60%, rgba(13,9,5,0.95) 100%)' }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to right, rgba(13,9,5,0.85) 0%, rgba(13,9,5,0.4) 50%, transparent 100%)' }}
      />

      <motion.div
        className="absolute bottom-24 left-6 right-6 z-20 max-w-5xl md:bottom-16 md:left-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="ui-label mb-6 tracking-[0.3em] text-primary">
          Cafe &amp; Restaurant — Zarqa, Jordan
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[52px] font-light leading-[0.95] text-foreground md:text-[72px] lg:text-[104px] xl:text-[120px]"
        >
          Where the
          <br />
          <em className="font-light italic">Luxury Happens</em>
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
          An experience out of the ordinary — signature drinks, gourmet dishes, artisanal desserts and exceptional shisha.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#reserve" className="btn-gold">
            Reserve Your Table
          </a>
          <a href="#menu" className="btn-ghost">
            View the Menu
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary md:flex"
        aria-label="Scroll to explore"
      >
        <span className="ui-label text-[10px] text-muted-foreground">Scroll to explore</span>
        <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" strokeWidth={1.25} />
        </motion.span>
      </a>
    </section>
  );
}
