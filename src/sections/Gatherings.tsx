import { Eyebrow, Reveal } from '@/components/shared';
import { site, whatsappLink } from '@/data/site';

export function Gatherings() {
  return (
    <section id="gatherings" className="relative overflow-hidden border-y border-border bg-card">
      <img
        src="./images/gatherings-solo-show.webp"
        alt="A celebration night at Solo 91 with balloons, bubbles and flames"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)' }}
      />
      <div className="absolute inset-0 bg-[rgba(13,9,5,0.55)]" />

      <div className="relative z-10 flex min-h-[80vh] items-end px-6 py-20 md:min-h-[75vh] md:items-center md:justify-center md:py-28">
        <Reveal className="mx-auto max-w-[700px] text-left md:text-center">
          <Eyebrow className="mb-5">Families · Friends · Celebrations</Eyebrow>
          <h2 className="font-serif text-5xl font-light leading-[1.05] text-foreground md:text-7xl">An Evening All Your Own</h2>
          <h3 className="mt-4 text-2xl text-primary md:text-[28px]">Gatherings at Solo 91</h3>
          <p className="mt-6 text-[15px] text-foreground/80 md:text-base">
            Birthdays, reunions or a long night out with friends — tell us what you’re celebrating, how many are coming
            and when, and our team will have the table, the drinks and the shisha ready before you arrive.
          </p>
          <a
            href={whatsappLink('Hello Solo 91, I would like to plan a gathering. Date: , Guests: , Occasion: ')}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-9"
          >
            Plan Your Gathering
          </a>
          <p className="ui-label mt-8 leading-6 text-muted-foreground">
            Open every day 9:00 AM – 12:30 AM · Breakfast to late night · Classic &amp; fresh shisha
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Or call <a className="text-primary hover:underline" href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
