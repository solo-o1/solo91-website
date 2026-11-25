import { GoldUnderlineHeading, Eyebrow, Reveal } from '@/components/shared';

export function Story() {
  return (
    <section id="story" className="grid grid-cols-1 gap-0 md:grid-cols-2">
      <div className="order-2 bg-background px-6 py-16 md:order-1 md:px-16 md:py-20 lg:px-20 lg:py-28">
        <Eyebrow className="mb-6">About Solo 91</Eyebrow>
        <GoldUnderlineHeading>Our Story</GoldUnderlineHeading>
        <div className="mt-10 max-w-xl space-y-6 text-[15px] text-foreground/80 md:text-base">
          <Reveal as="p">
            At Solo 91, the word impossible doesn’t exist in our dictionary. In a short time we have reached our goals,
            met unexpected challenges with confidence, and introduced a concept that redefines what a modern, luxurious
            café can be.
          </Reveal>
          <Reveal as="p" delay={0.08}>
            The atmosphere is distinctive and easy to enjoy — made for families and friends looking for a refined blend
            of elegance and comfort.
          </Reveal>
          <Reveal as="p" delay={0.16}>
            Every guest is invited on a premium journey: signature drinks, gourmet dishes, artisanal desserts and
            exceptional shisha, served by a highly trained and welcoming team.
          </Reveal>
        </div>
      </div>
      <div className="relative order-1 h-64 overflow-hidden sm:h-80 md:order-2 md:h-auto md:min-h-[640px]">
        <img
          src="./images/story-iced-latte.webp"
          alt="Iced latte over dry-ice smoke with scattered coffee beans at Solo 91"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
