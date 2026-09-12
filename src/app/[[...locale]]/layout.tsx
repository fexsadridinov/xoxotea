import { Manrope, Neucha } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { localeHtmlLang, prefixedLocales, resolveLocaleSegments, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";

const manrope = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const neucha = Neucha({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-neucha",
  display: "swap",
});

type LocaleParams = { locale?: string[] };

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams(): LocaleParams[] {
  return [{ locale: [] }, ...prefixedLocales.map((code) => ({ locale: [code] }))];
}

export const dynamicParams = false;

function localeFromParams(params: LocaleParams): Locale {
  const locale = resolveLocaleSegments(params.locale);
  if (!locale) notFound();
  return locale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const locale = localeFromParams(await params);
  const content = getContent(locale);
  return {
    ...buildMetadata(locale, {
      title: content.meta.title,
      description: content.meta.description,
      path: "/",
      absoluteTitle: true,
    }),
    metadataBase: new URL(site.url),
    icons: { icon: "/icon" },
    keywords: ["XoXo Tea", "modern tea", "Ukraine", "Mykolaiv", "Миколаїв", "Николаев", "bubble tea"],
    robots: { index: true, follow: true },
  };
}

function JsonLd({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: content.meta.description,
    url: site.url,
    areaServed: "UA",
    address: {
      "@type": "PostalAddress",
      addressLocality: content.footer.city,
      addressCountry: "UA",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
}) {
  const locale = localeFromParams(await params);
  const content = getContent(locale);

  return (
    <html lang={localeHtmlLang[locale]} className={`${manrope.variable} ${neucha.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd locale={locale} />
        <SiteShell locale={locale} content={content}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
