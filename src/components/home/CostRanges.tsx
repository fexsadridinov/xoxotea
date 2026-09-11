import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { categoryEconomics, formatRange } from "@/data/economics";
import { Reveal } from "@/components/motion/Reveal";

export function CostRanges({ content, locale }: { content: Content; locale: Locale }) {
  return (
    <div className="mt-24">
      <h3 className="t-h2 max-w-lg">{content.ranges.headline}</h3>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {content.ranges.rows.map((row) => {
          const band = categoryEconomics[row.id as keyof typeof categoryEconomics];
          return (
            <Reveal key={row.id} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
              <p className="md:col-span-4">{row.label}</p>
              <p className="text-foreground-muted md:col-span-4">
                {content.ranges.retail}
                <span className="t-num ml-3 text-foreground">{formatRange(band.retail.low, band.retail.high, locale)}</span>
              </p>
              <p className="text-foreground-muted md:col-span-4">
                {content.ranges.cogs}
                <span className="t-num ml-3 text-foreground">{formatRange(band.cogs.low, band.cogs.high, locale)}</span>
              </p>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 max-w-2xl text-[0.88rem] leading-relaxed text-foreground-muted">{content.ranges.note}</p>
    </div>
  );
}
