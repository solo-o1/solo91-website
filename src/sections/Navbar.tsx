import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { LangToggle } from '@/components/shared';
import { site } from '@/data/site';
import { useLang } from '@/i18n';
import { EASE, cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { c } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-40 h-16 border-b md:h-20',
          scrolled ? 'border-primary/80 backdrop-blur-md' : 'border-transparent',
        )}
        style={{
          background: scrolled ? 'rgba(13,9,5,0.95)' : 'transparent',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-6 md:px-10 lg:px-16">
          <a href="#top" className="flex items-center gap-3" aria-label={c.nav.home}>
            <img src="./images/logo.png" alt="" width={36} height={36} className="h-8 w-8 md:h-9 md:w-9" />
            <span lang="en" dir="ltr" className="font-serif text-[18px] font-normal tracking-[0.2em] text-foreground">
              {site.name}
            </span>
          </a>

          <ul className="hidden items-center gap-6 md:flex lg:gap-12">
            {c.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="ui-label text-primary transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <LangToggle />
            <a href="#reserve" className="btn-outline">
              {c.nav.reserve}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangToggle className="px-2.5" />
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
              aria-label={c.nav.open}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="h-px w-6 bg-primary" />
              <span className="h-px w-6 bg-primary" />
              <span className="h-px w-6 bg-primary" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[45] flex flex-col bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={c.nav.dialog}
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span lang="en" dir="ltr" className="font-serif text-[18px] tracking-[0.2em]">
                {site.name}
              </span>
              <button type="button" aria-label={c.nav.close} onClick={() => setOpen(false)} className="p-2 text-primary">
                <X className="h-6 w-6" strokeWidth={1.25} />
              </button>
            </div>
            <motion.ul
              className="flex flex-1 flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
            >
              {[...c.nav.links, { label: c.nav.reserve, href: '#reserve' }].map((l, i) => (
                <motion.li
                  key={l.label}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn('font-serif text-[32px] font-light', i === c.nav.links.length ? 'italic text-primary' : 'text-foreground')}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="flex flex-col items-center gap-5 pb-10">
              <LangToggle />
              <a href={site.phoneHref} dir="ltr" className="ui-label text-muted-foreground">
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
