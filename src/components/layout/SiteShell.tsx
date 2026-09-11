import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

type Props = {
  locale: Locale;
  content: Content;
  children: React.ReactNode;
};

export function SiteShell({ locale, content, children }: Props) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:bg-tea-dark focus:px-4 focus:py-2 focus:text-background"
      >
        {content.a11y.skip}
      </a>
      <SiteHeader locale={locale} content={content} />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} content={content} />
    </>
  );
}
