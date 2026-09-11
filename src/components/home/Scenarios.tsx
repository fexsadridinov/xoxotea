import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { daysPerMonth, formatRange, money, monthlyRevenue, scenarios } from "@/data/economics";
import { HandNote } from "@/components/hand/HandNote";
import { ArrowDoodle } from "@/components/hand/Doodles";

const keys = ["conservative", "base", "strong"] as const;

export function Scenarios({ content, locale }: { content: Content; locale: Locale }) {
  const base = scenarios.base;
  const baseRevenue = monthlyRevenue(base.orders, base.ticket);

  return (
    <div>
      <p className="hand text-xl">{content.scenarios.kicker}</p>
      <h2 className="t-h1 mt-4 max-w-2xl whitespace-pre-line">{content.scenarios.headline}</h2>
      <p className="mt-8 font-mono text-[0.92rem] text-foreground-muted">{content.scenarios.formula}</p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {keys.map((key) => {
          const scenario = scenarios[key];
          const revenue = monthlyRevenue(scenario.orders, scenario.ticket);
          return (
            <article key={key} className="border-t border-border pt-6">
              <h3 className="text-[1.15rem] tracking-[-0.03em]">{content.scenarios.labels[key]}</h3>
              <p className="mt-5 text-foreground-muted">
                {scenario.orders} {content.scenarios.orders}
              </p>
              <p className="text-foreground-muted">
                {money(scenario.ticket, locale)} {content.scenarios.ticket}
              </p>
              <p className="t-num mt-6 text-2xl tracking-[-0.04em] md:text-3xl">{money(revenue, locale, true)}</p>
              <p className="mt-2 text-[0.82rem] text-foreground-muted">{content.scenarios.monthly}</p>
              <p className="mt-6 text-[0.92rem] text-foreground-muted">
                {content.profit.possible}
                <span className="mt-1 block t-num text-foreground">
                  {formatRange(scenario.profit.low, scenario.profit.high, locale, true)}
                </span>
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-16 max-w-xs font-mono text-[1.15rem] leading-8 tracking-[-0.03em]">
        <p>{money(base.ticket, locale)}</p>
        <p>× {base.orders}</p>
        <p>× {daysPerMonth}</p>
        <p className="mt-2 border-t border-border-strong pt-2">{money(baseRevenue, locale, true)}</p>
        <div className="mt-3 flex items-center gap-2">
          <ArrowDoodle className="w-12 opacity-70" />
          <HandNote>{content.calculator.note}</HandNote>
        </div>
      </div>
    </div>
  );
}
