import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { navLinks, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-primary px-6 pt-20 md:px-16" style={{ background: 'var(--footer)' }}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="./images/logo.png" alt="" width={44} height={44} className="h-11 w-11" loading="lazy" />
            <span className="font-serif text-2xl tracking-[0.2em]">{site.name}</span>
          </div>
          <p className="mt-5 font-serif text-xl italic text-primary">{site.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">Cafe &amp; Restaurant · Zarqa, Jordan</p>
        </div>

        <div>
          <p className="ui-label mb-5 text-primary">Explore</p>
          <ul className="space-y-3 text-sm">
            {[{ label: 'Home', href: '#top' }, ...navLinks.slice(0, 1), { label: 'Signatures', href: '#signatures' }, ...navLinks.slice(1)].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-foreground/80 transition-colors hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="ui-label mb-5 text-primary">Hours</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Every day</li>
            <li className="font-serif text-xl text-foreground">9:00 AM – 12:30 AM</li>
          </ul>
        </div>

        <div>
          <p className="ui-label mb-5 text-primary">Visit</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 text-sm text-foreground/80 hover:text-primary">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.25} />
            <span>
              {site.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              <span lang="ar" dir="rtl" className="mt-1 block text-xs text-muted-foreground">{site.addressAr}</span>
            </span>
          </a>
          <a href={site.phoneHref} className="mt-4 flex items-center gap-3 text-sm text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4 text-primary" strokeWidth={1.25} />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>
          <div className="mt-6 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label={`Instagram ${site.instagramHandle}`} className="flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" strokeWidth={1.25} />
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
        <p>Crafted with care in Jordan</p>
      </div>
    </footer>
  );
}
