import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { formatRange, startupCost } from "@/data/economics";
import { HandKicker } from "@/components/hand/HandNote";

export function Startup({ content, locale }: { content: Content; locale: Locale }) {
  const max = startupCost.total.high;
  const labels = content.startup.items;

  return (
    <section className="py-16 md:py-20">
      <div className="container-site">
        <HandKicker>{content.startup.kicker}</HandKicker>
        <h2 className="t-h1 mt-4 max-w-2xl">{content.startup.headline}</h2>
        <p className="label-stamp mt-6">{content.stamps.planningEstimate}</p>
        <p className="mt-10 text-foreground-muted">{content.startup.total}</p>
        <p className="t-num mt-2 text-4xl tracking-[-0.05em] md:text-5xl">
          ≈ {formatRange(startupCost.total.low, startupCost.total.high, locale, true)}
        </p>
        <ul className="mt-14 space-y-5">
          {startupCost.items.map((item) => {
            const label = labels[item.id as keyof typeof labels];
            return (
              <li key={item.id}>
                <div className="mb-2 flex items-baseline justify-between gap-4 text-[0.95rem]">
                  <span>{label}</span>
                  <span className="t-num text-foreground-muted">
                    {formatRange(item.low, item.high, locale, true)}
                  </span>
                </div>
                <div className="h-[2px] bg-border">
                  <div className="h-[2px] bg-tea-dark/70" style={{ width: `${(item.high / max) * 100}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 max-w-2xl text-[0.88rem] leading-relaxed text-foreground-muted">{content.startup.note}</p>
      </div>
    </section>
  );
}
