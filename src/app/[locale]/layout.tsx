import { Manrope, Neucha } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { getContent } from "@/content";
import { isLocale, locales, localeHtmlLang, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { SiteShell } from "@/components/layout/SiteShell";
import { notFound } from "next/navigation";

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

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
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
