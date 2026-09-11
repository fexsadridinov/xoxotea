import Image from "next/image";
import type { Content } from "@/content";
import { drinks, type DrinkId } from "@/data/menu";
import { formatRange } from "@/data/economics";
import type { Locale } from "@/lib/i18n";
import { HandNote, HandKicker } from "@/components/hand/HandNote";
import { GrapeDoodle, LeafDoodle } from "@/components/hand/Doodles";
import { MaskReveal, Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  content: Content;
  locale: Locale;
};

export function ProductMenu({ content, locale }: Props) {
  return (
    <section id="tea" className="bg-background">
      <div className="container-site py-20 md:py-28">
        <HandKicker>{content.product.kicker}</HandKicker>
        <Reveal>
          <h2 className="t-h1 mt-4 max-w-3xl whitespace-pre-line">{content.product.headline}</h2>
        </Reveal>
        <p className="t-lede mt-8 max-w-xl">{content.product.lede}</p>
        <ul className="mt-10 max-w-md space-y-2">
          {content.product.principles.map((item) => (
            <li key={item} className="flex items-baseline gap-3 text-[1.02rem]">
              <span className="hand text-tea-dark">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <MaskReveal>
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Image
            src={drinks.find((drink) => drink.id === "mango-cloud")?.image ?? drinks[3].image}
            alt={content.menu.drinks["mango-cloud"].name}
            width={1200}
            height={1400}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </MaskReveal>

      <div className="container-site pb-8 pt-16 md:pt-24">
        <HandKicker>{content.menu.kicker}</HandKicker>
        <h2 className="t-h1 mt-4 max-w-xl whitespace-pre-line">{content.menu.headline}</h2>
        <p className="label-stamp mt-6">{content.stamps.developmentMenu}</p>
      </div>

      <div className="flex flex-col">
        {drinks.map((drink, index) => {
          const copy = content.menu.drinks[drink.id as DrinkId];
          const reverse = drink.layout === "right";
          const wide = drink.layout === "wide";

          return (
            <article
              key={drink.id}
              className={cn(
                "border-t border-border py-12 md:py-16 bg-surface",
                index === drinks.length - 1 && "border-b",
              )}
            >
              <div className={cn("container-site grid items-center gap-8", wide ? "lg:grid-cols-1" : "lg:grid-cols-12")}>
                <div className={cn(wide ? "" : reverse ? "lg:col-span-5 lg:col-start-8 lg:row-start-1" : "lg:col-span-5")}>
                  <p className="t-num text-foreground-muted">{drink.code}</p>
                  <h3 className="t-h2 mt-3">{copy.name}</h3>
                  <p className="t-body mt-5 max-w-md">{copy.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-[0.92rem] text-foreground-muted">
                    {copy.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[0.95rem]">
                    <span className="t-meta text-foreground-muted">{content.menu.priceLabel}</span>
                    <span className="mt-2 block t-num text-xl tracking-[-0.04em]">
                      {formatRange(drink.price.low, drink.price.high, locale)}
                    </span>
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    {drink.id.includes("grape") ? <GrapeDoodle className="w-6 opacity-70" /> : <LeafDoodle className="h-8 w-6 opacity-70" />}
                    <HandNote rotate={index % 2 === 0 ? -2 : 2}>{copy.note}</HandNote>
                  </div>
                </div>

                <MaskReveal
                  className={cn(
                    wide ? "mx-auto max-w-xl" : reverse ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7",
                  )}
                >
                  <Image
                    src={drink.image}
                    alt={copy.name}
                    width={wide ? 1100 : 900}
                    height={wide ? 1100 : 1200}
                    className="mx-auto h-auto w-full max-w-[520px] object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </MaskReveal>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container-site py-10">
        <p className="max-w-xl text-[0.88rem] leading-relaxed text-foreground-muted">{content.menu.disclaimer}</p>
      </div>
    </section>
  );
}
