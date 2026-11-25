import { Eyebrow, Reveal } from '@/components/shared';
import { site, whatsappLink } from '@/data/site';
import { useLang } from '@/i18n';

export function Gatherings() {
  const { c } = useLang();
  return (
    <section id="gatherings" className="relative overflow-hidden border-y border-border bg-card">
      <img
        src="./images/gatherings-solo-show.webp"
        alt={c.gatherings.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)' }}
      />
      <div className="absolute inset-0 bg-[rgba(13,9,5,0.55)]" />

      <div className="relative z-10 flex min-h-[80vh] items-end px-6 py-20 md:min-h-[75vh] md:items-center md:justify-center md:py-28">
        <Reveal className="mx-auto max-w-[700px] text-start md:text-center">
          <Eyebrow className="mb-5">{c.gatherings.eyebrow}</Eyebrow>
          <h2 className="font-serif text-5xl font-light leading-[1.05] text-foreground md:text-7xl">{c.gatherings.title}</h2>
          <h3 className="mt-4 text-2xl text-primary md:text-[28px]">{c.gatherings.subtitle}</h3>
          <p className="mt-6 text-[15px] text-foreground/80 md:text-base">{c.gatherings.body}</p>
          <a href={whatsappLink(c.gatherings.whatsapp)} target="_blank" rel="noreferrer" className="btn-gold mt-9">
            {c.gatherings.cta}
          </a>
          <p className="ui-label mt-8 leading-6 text-muted-foreground">{c.gatherings.details}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {c.gatherings.call}{' '}
            <a className="text-primary hover:underline" href={site.phoneHref} dir="ltr">
              {site.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
