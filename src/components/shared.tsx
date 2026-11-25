import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Languages } from 'lucide-react';
import { useLang } from '@/i18n';
import { EASE, cn } from '@/lib/utils';

export function GoldUnderlineHeading({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { isAr } = useLang();
  return (
    <div ref={ref} className={cn('relative inline-block', className)}>
      <h2 className="text-4xl font-light tracking-wide text-foreground md:text-6xl">{children}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        style={{ originX: isAr ? 1 : 0, backgroundColor: 'var(--primary)', height: '1px', width: '100%', marginTop: '8px' }}
      />
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'p' | 'li';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const Comp = motion[as];
  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('ui-label text-primary', className)}>{children}</p>;
}

export function Price({ value, className }: { value: string; className?: string }) {
  const { c } = useLang();
  return (
    <span className={cn('whitespace-nowrap font-serif text-lg italic text-primary', className)}>
      <span lang="en">{value}</span>
      <span className="ms-1 text-xs not-italic tracking-[0.15em] text-primary/70">{c.menu.unit}</span>
    </span>
  );
}

export function LangToggle({ className }: { className?: string }) {
  const { c, toggle } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={c.toggle.aria}
      className={cn(
        'inline-flex items-center gap-2 border border-primary/40 px-3 py-2 text-primary transition-colors hover:border-primary hover:bg-primary/10',
        className,
      )}
    >
      <Languages className="h-4 w-4" strokeWidth={1.25} />
      <span lang={c.toggle.labelLang} className="ui-label text-[12px] leading-none">
        {c.toggle.label}
      </span>
    </button>
  );
}

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        mixBlendMode: 'overlay',
      }}
    />
  );
}
