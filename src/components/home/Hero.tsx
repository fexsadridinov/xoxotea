import Image from "next/image";
import type { Content } from "@/content";
import { drinks } from "@/data/menu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HandNote } from "@/components/hand/HandNote";
import { ArrowDoodle } from "@/components/hand/Doodles";
import { MaskReveal, Reveal } from "@/components/motion/Reveal";

export function Hero({ content }: { content: Content }) {
  const drink = drinks[0];

  return (
    <section id="home" className="relative overflow-hidden bg-background pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-site">
        <HandNote className="text-clay">{content.hero.note}</HandNote>

        <div className="mt-6 grid items-end gap-8 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-6" y={18}>
            <h1 className="t-display">{content.hero.title}</h1>
            <p className="t-h2 mt-8 max-w-md whitespace-pre-line text-foreground">{content.hero.statement}</p>
            <p className="mt-6 max-w-sm text-[1.05rem] text-foreground-muted">{content.hero.support}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="#why-ukraine" variant="solid">
                {content.hero.cta}
              </ButtonLink>
              <ButtonLink href="#contact">{content.hero.ctaInvestor}</ButtonLink>
            </div>
          </Reveal>

          <div className="relative lg:col-span-6">
            <MaskReveal>
              <div className="relative mx-auto max-w-[420px]">
                <Image
                  src={drink.image}
                  alt={content.menu.drinks["jasmine-cloud"].name}
                  width={900}
                  height={1200}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </MaskReveal>
            <div className="mt-3 flex items-center justify-end gap-2 pr-4">
              <HandNote rotate={3} tone="clay">
                {content.hero.arrow}
              </HandNote>
              <ArrowDoodle className="w-16 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
