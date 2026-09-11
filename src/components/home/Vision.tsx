import Image from "next/image";
import type { Content } from "@/content";
import { drinks } from "@/data/menu";
import { HandNote, HandKicker } from "@/components/hand/HandNote";
import { ArrowDoodle, CupHands } from "@/components/hand/Doodles";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export function Vision({ content }: { content: Content }) {
  const image = drinks.find((drink) => drink.id === "grape-cloud") ?? drinks[0];

  return (
    <section id="vision" className="bg-surface">
      <div className="container-site py-20 md:py-32">
        <div className="mx-auto max-w-xl">
          <Image
            src={image.image}
            alt={content.menu.drinks["grape-cloud"].name}
            width={900}
            height={1100}
            className="h-auto w-full object-contain"
          />
        </div>
        <HandKicker className="mt-16">{content.vision.kicker}</HandKicker>
        <h2 className="t-h1 mt-4 max-w-3xl whitespace-pre-line">{content.vision.headline}</h2>
        <p className="t-lede mt-8 max-w-xl">{content.vision.lede}</p>
        <ol className="mt-16 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          {content.vision.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="text-2xl tracking-[-0.04em]">{step}</span>
              {index < content.vision.steps.length - 1 ? (
                <>
                  <span className="hand text-2xl md:hidden" aria-hidden>
                    ↓
                  </span>
                  <span className="hand hidden text-2xl md:inline" aria-hidden>
                    →
                  </span>
                </>
              ) : null}
            </li>
          ))}
        </ol>
        <HandNote className="mt-6 block" tone="clay">{content.vision.note}</HandNote>
      </div>

      <div className="container-site grid gap-10 border-t border-border py-20 md:grid-cols-2 md:py-28">
        {content.opportunity.items.map((item) => (
          <article key={item.code} className="max-w-md">
            <p className="hand text-lg">{item.code}</p>
            <h3 className="mt-3 text-2xl tracking-[-0.04em]">{item.title}</h3>
            <p className="t-body mt-4">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="container-site py-20 md:py-28">
        <div className="flex items-start gap-4">
          <CupHands className="mt-2 w-16 shrink-0 opacity-80" />
          <div>
            <h2 className="t-h1 max-w-2xl">{content.whyXoxo.headline}</h2>
            <p className="t-lede mt-6 max-w-xl">{content.whyXoxo.lede}</p>
            <p className="mt-8 text-[1.15rem] tracking-[-0.03em]">
              {content.whyXoxo.parts.join("  +  ")}
            </p>
            <HandNote className="mt-6 block">{content.whyXoxo.note}</HandNote>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cta({ content }: { content: Content }) {
  const email = site.email || "hello@xoxotea.com";

  return (
    <section id="contact" className="bg-tea-dark py-20 text-background md:py-32">
      <div className="container-site">
        <h2 className="t-h1 max-w-xl whitespace-pre-line">{content.cta.headline}</h2>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-relaxed text-sage">{content.cta.text}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${email}?subject=XoXo Tea`} variant="invert">
            {content.cta.primary}
          </ButtonLink>
          <ButtonLink href={`mailto:${email}`} variant="ghostOnDark">
            {content.cta.secondary}
          </ButtonLink>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <HandNote className="text-clay-soft">{content.cta.note}</HandNote>
          <ArrowDoodle className="w-14 text-clay-soft opacity-90" />
        </div>
      </div>
    </section>
  );
}
