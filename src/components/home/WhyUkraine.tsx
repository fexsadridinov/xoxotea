import type { Content } from "@/content";
import { HandNote, HandKicker } from "@/components/hand/HandNote";
import { CircleDoodle, Marks } from "@/components/hand/Doodles";
import { Reveal } from "@/components/motion/Reveal";

const established = new Set(["specialty-coffee", "energy", "soft-drinks", "juice", "desserts", "bubble-tea"]);

function dotsFor(id: string): number {
  if (id === "modern-tea") return 1;
  if (id === "bubble-tea") return 2;
  if (id === "specialty-coffee") return 5;
  if (id === "energy" || id === "soft-drinks") return 4;
  return 3;
}

export function WhyUkraine({ content }: { content: Content }) {
  return (
    <section id="why-ukraine" className="bg-background-soft py-20 md:py-28">
      <div className="container-site">
        <HandKicker>{content.why.kicker}</HandKicker>
        <Reveal>
          <h2 id="why-title" className="t-h1 mt-4 max-w-3xl whitespace-pre-line">
            {content.why.headline}
          </h2>
        </Reveal>
        <div className="mt-12 max-w-xl space-y-5">
          {content.why.paragraphs.map((paragraph) => (
            <p key={paragraph} className="t-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="t-h2 max-w-sm">{content.gap.headline}</h3>
            <p className="t-lede mt-6 max-w-md">{content.gap.lede}</p>
          </div>
          <div className="relative lg:col-span-6 lg:col-start-7">
            <ul className="space-y-4">
              {content.gap.items.map((item) => {
                const highlight = item.id === "modern-tea";
                const count = dotsFor(item.id);
                return (
                  <li key={item.id} className="flex items-center justify-between gap-4 border-b border-border pb-3">
                    <span className={highlight ? "text-[1.15rem] tracking-[-0.03em]" : "text-foreground-muted"}>
                      {item.label}
                    </span>
                    <span className="relative flex items-center gap-1.5" aria-hidden>
                      {Array.from({ length: count }).map((_, index) => (
                        <span
                          key={index}
                          className={highlight ? "h-2.5 w-2.5 rounded-full bg-tea-dark" : "h-2 w-2 rounded-full bg-border-strong"}
                        />
                      ))}
                      {highlight ? (
                        <CircleDoodle className="pointer-events-none absolute -right-3 -top-3 w-24 opacity-70" />
                      ) : null}
                    </span>
                    <span className="sr-only">
                      {established.has(item.id) ? content.gap.established : content.gap.emerging}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <Marks className="w-8 opacity-70" />
              <HandNote rotate={-1}>{content.gap.note}</HandNote>
            </div>
            <p className="mt-8 max-w-md text-[0.82rem] leading-relaxed text-foreground-muted">{content.gap.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
