import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { CupEconomics } from "@/components/home/CupEconomics";
import { CostRanges } from "@/components/home/CostRanges";
import { Scenarios } from "@/components/home/Scenarios";
import { ProfitStructure } from "@/components/home/ProfitStructure";
import { Calculator } from "@/components/home/Calculator";
import { Payback } from "@/components/home/Payback";

export function Numbers({ content, locale }: { content: Content; locale: Locale }) {
  return (
    <section id="economics" className="bg-background-soft py-20 md:py-28">
      <div className="container-site">
        <CupEconomics content={content} locale={locale} />
        <CostRanges content={content} locale={locale} />
        <div className="mt-28">
          <Scenarios content={content} locale={locale} />
        </div>
        <ProfitStructure content={content} />
        <Calculator content={content} locale={locale} />
        <Payback content={content} locale={locale} />
      </div>
    </section>
  );
}
