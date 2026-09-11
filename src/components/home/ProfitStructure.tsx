import type { Content } from "@/content";
import { opexShares } from "@/data/economics";

export function ProfitStructure({ content }: { content: Content }) {
  return (
    <div className="mt-24">
      <h3 className="t-h2 max-w-lg">{content.profit.headline}</h3>
      <ul className="mt-10 max-w-xl space-y-3">
        {content.profit.shares.map((share) => {
          const band = opexShares[share.id as keyof typeof opexShares];
          return (
            <li key={share.id} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <span className="text-foreground-muted">{share.label}</span>
              <span className="t-num">
                {Math.round(band.low * 100)}–{Math.round(band.high * 100)}%
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-foreground-muted">{content.profit.margin}</p>
      <p className="t-num mt-2 text-3xl tracking-[-0.04em]">
        {Math.round(opexShares.operatingMargin.low * 100)}–{Math.round(opexShares.operatingMargin.high * 100)}%
      </p>
      <p className="mt-8 max-w-2xl text-[0.88rem] leading-relaxed text-foreground-muted">{content.profit.disclaimer}</p>
    </div>
  );
}
