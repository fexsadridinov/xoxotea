import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { withHash } from "@/lib/i18n";
import { site } from "@/lib/site";
import { footerItems } from "@/data/navigation";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteFooter({ locale, content }: Props) {
  const email = site.email || "hello@xoxotea.com";
  const instagram = site.instagram || "https://instagram.com/xoxotea";

  return (
    <footer className="bg-tea-dark text-background">
      <div className="container-site flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between md:py-14">
        <div>
          <a href={withHash(locale, "#home")} className="text-[1.05rem] tracking-[-0.04em]">
            {content.nav.brand} tea
          </a>
          <p className="hand mt-2 text-[1.05rem] text-sage">{content.footer.line}</p>
          <p className="mt-4 text-[0.9rem] text-sage">
            {content.footer.city}
            <br />
            {content.footer.country}
          </p>
        </div>
        <nav className="flex flex-col gap-1 text-[0.92rem] text-sage" aria-label={content.a11y.primaryNav}>
          {footerItems.map((item) => (
            <a key={item.id} href={item.hash} className="inline-flex min-h-11 items-center hover:text-background">
              {content.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-[0.92rem] text-sage">
          <a href={instagram} className="inline-flex min-h-11 items-center hover:text-background">
            {content.footer.instagram}
          </a>
          <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center hover:text-background">
            {content.footer.email}
          </a>
          <LanguageSwitch locale={locale} label={content.a11y.language} inverted />
        </div>
      </div>
    </footer>
  );
}
