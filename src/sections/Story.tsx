import { GoldUnderlineHeading, Eyebrow, Reveal } from '@/components/shared';
import { useLang } from '@/i18n';

export function Story() {
  const { c } = useLang();
  return (
    <section id="story" className="grid grid-cols-1 gap-0 md:grid-cols-2">
      <div className="order-2 bg-background px-6 py-16 md:order-1 md:px-16 md:py-20 lg:px-20 lg:py-28">
        <Eyebrow className="mb-6">{c.story.eyebrow}</Eyebrow>
        <GoldUnderlineHeading>{c.story.title}</GoldUnderlineHeading>
        <div className="mt-10 max-w-xl space-y-6 text-[15px] text-foreground/80 md:text-base">
          {c.story.paragraphs.map((p, i) => (
            <Reveal key={p} as="p" delay={i * 0.08}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>
      <div className="relative order-1 h-64 overflow-hidden sm:h-80 md:order-2 md:h-auto md:min-h-[640px]">
        <img
          src="./images/story-iced-latte.webp"
          alt={c.story.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
