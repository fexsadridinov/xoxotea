import Image from "next/image";
import type { Content } from "@/content";
import { ingredientKeys, type IngredientKey } from "@/data/menu";
import { HandKicker } from "@/components/hand/HandNote";
import { Reveal } from "@/components/motion/Reveal";

const images: Record<IngredientKey, string> = {
  tea: "/ingredients/tea.png",
  fruit: "/ingredients/fruit.png",
  milk: "/ingredients/milk.png",
  boba: "/ingredients/boba.png",
  cloud: "/ingredients/cloud.png",
  matcha: "/ingredients/matcha.png",
};

export function Ingredients({ content }: { content: Content }) {
  return (
    <section id="ingredients" className="bg-background py-20 md:py-28">
      <div className="container-site">
        <HandKicker>{content.ingredients.kicker}</HandKicker>
        <h2 className="t-h1 mt-4">{content.ingredients.headline}</h2>
        <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
          {ingredientKeys.map((key, index) => {
            const item = content.ingredients.items[key];
            return (
              <Reveal key={key} delay={index * 0.05} className="min-w-[220px] snap-start md:min-w-0">
                <div className="aspect-square overflow-hidden bg-surface">
                  <Image
                    src={images[key]}
                    alt={item.title}
                    width={640}
                    height={640}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 220px, 16vw"
                  />
                </div>
                <h3 className="mt-4 text-[1.15rem] tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-foreground-muted">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
