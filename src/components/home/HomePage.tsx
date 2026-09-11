import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { WhyUkraine } from "@/components/home/WhyUkraine";
import { ProductMenu } from "@/components/home/ProductMenu";
import { Ingredients } from "@/components/home/Ingredients";
import { Numbers } from "@/components/home/Numbers";
import { StorePlan } from "@/components/home/StorePlan";
import { Startup } from "@/components/home/Startup";
import { Vision, Cta } from "@/components/home/Vision";

export function HomePage({ content, locale }: { content: Content; locale: Locale }) {
  return (
    <>
      <Hero content={content} />
      <WhyUkraine content={content} />
      <ProductMenu content={content} locale={locale} />
      <Ingredients content={content} />
      <Numbers content={content} locale={locale} />
      <section id="store" className="bg-background">
        <StorePlan content={content} />
        <Startup content={content} locale={locale} />
      </section>
      <Vision content={content} />
      <Cta content={content} />
    </>
  );
}
