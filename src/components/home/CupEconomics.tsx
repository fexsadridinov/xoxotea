import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import {
  illustrativeCup,
  cupDirectCost,
  cupGrossProfit,
  cupGrossMargin,
  formatPct,
  money,
} from "@/data/economics";
import { HandNote, HandKicker } from "@/components/hand/HandNote";
import { ArrowDoodle } from "@/components/hand/Doodles";
import { Reveal } from "@/components/motion/Reveal";

export function CupEconomics({ content, locale }: { content: Content; locale: Locale }) {
  const direct = cupDirectCost(illustrativeCup.ingredients, illustrativeCup.packaging);
  const profit = cupGrossProfit(illustrativeCup.price, illustrativeCup.ingredients, illustrativeCup.packaging);
  const margin = cupGrossMargin(illustrativeCup.price, illustrativeCup.ingredients, illustrativeCup.packaging);

  const rows = [
    { label: content.cup.price, value: money(illustrativeCup.price, locale) },
    { label: content.cup.ingredients, value: money(illustrativeCup.ingredients, locale) },
    { label: content.cup.packaging, value: money(illustrativeCup.packaging, locale) },
    { label: content.cup.direct, value: money(direct, locale) },
    { label: content.cup.profit, value: money(profit, locale) },
    { label: content.cup.margin, value: formatPct(margin) },
  ];

  return (
    <div>
      <HandKicker>{content.cup.kicker}</HandKicker>
      <Reveal>
        <h2 className="t-h1 mt-4 max-w-2xl whitespace-pre-line">{content.cup.headline}</h2>
      </Reveal>
      <p className="label-stamp mt-6">{content.cup.label}</p>
      <dl className="mt-12 max-w-lg divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-4">
            <dt className="text-foreground-muted">{row.label}</dt>
            <dd className="t-num text-xl tracking-[-0.04em]">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex items-center gap-3">
        <HandNote>{content.cup.note}</HandNote>
        <ArrowDoodle className="w-14 opacity-70" />
      </div>
      <p className="mt-8 max-w-lg text-[0.88rem] leading-relaxed text-foreground-muted">{content.cup.disclaimer}</p>
    </div>
  );
}
