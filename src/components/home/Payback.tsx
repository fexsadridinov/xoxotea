import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { formatRange, modelledPaybackRange, scenarios, startupCost } from "@/data/economics";

export function Payback({ content, locale }: { content: Content; locale: Locale }) {
  const range = modelledPaybackRange();

  return (
    <div className="mt-24 border-t border-border pt-16">
      <p className="label-stamp">{content.stamps.modelledPayback}</p>
      <h3 className="t-h2 mt-5">{content.payback.headline}</h3>
      <dl className="mt-10 max-w-lg space-y-6">
        <div className="flex justify-between gap-4 border-b border-border pb-4">
          <dt className="text-foreground-muted">{content.payback.investment}</dt>
          <dd className="t-num">{formatRange(startupCost.total.low, startupCost.total.high, locale, true)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border pb-4">
          <dt className="text-foreground-muted">{content.payback.profit}</dt>
          <dd className="t-num">
            {formatRange(scenarios.base.profit.low, scenarios.strong.profit.high, locale, true)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-foreground-muted">{content.payback.result}</dt>
          <dd className="t-num text-2xl tracking-[-0.04em]">
            {range.low}–{range.high}+ {content.calculator.months}
          </dd>
        </div>
      </dl>
      <p className="hand mt-6 text-lg">{content.payback.not}</p>
    </div>
  );
}
