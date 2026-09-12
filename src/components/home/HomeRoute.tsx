import type { Metadata } from "next";
import { getContent } from "@/content";
import { HomePage } from "@/components/home/HomePage";
import { SiteShell } from "@/components/layout/SiteShell";
import { localeHtmlLang, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export function homeMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  return buildMetadata(locale, {
    title: content.meta.title,
    description: content.meta.description,
    path: "/",
    absoluteTitle: true,
  });
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

export function HomeRoute({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <SiteShell locale={locale} content={content}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(localeHtmlLang[locale])};`,
        }}
      />
      <JsonLd locale={locale} />
      <HomePage content={content} locale={locale} />
    </SiteShell>
  );
}
