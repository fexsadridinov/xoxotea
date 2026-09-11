import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localeOg, localePath } from "@/lib/i18n";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

function abs(locale: Locale, path = "/"): string {
  const localized = localePath(locale);
  const extra = path === "/" ? "" : path;
  if (localized === "/") return extra ? `${site.url}${extra}` : site.url;
  return `${site.url}${localized}${extra}`;
}

export function buildMetadata(locale: Locale, page: PageMeta): Metadata {
  const url = abs(locale, page.path);
  const title = page.absoluteTitle ? { absolute: page.title } : page.title;

  return {
    title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        "uk-UA": abs("uk", page.path),
        en: abs("en", page.path),
        ru: abs("ru", page.path),
        "x-default": abs("uk", page.path),
      },
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url,
      siteName: site.name,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
