export const locales = ["uk", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export const localeLabels: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
  ru: "RU",
};

export const localeHtmlLang: Record<Locale, string> = {
  uk: "uk",
  en: "en",
  ru: "ru",
};

export const localeOg: Record<Locale, string> = {
  uk: "uk_UA",
  en: "en_US",
  ru: "ru_RU",
};

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  ru: "Русский",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function withLocale(pathname: string, locale: Locale): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pathOnly = clean.split("#")[0] || "/";
  const hash = clean.includes("#") ? `#${clean.split("#").slice(1).join("#")}` : "";
  if (locale === defaultLocale) {
    return `${pathOnly === "/" ? "/" : pathOnly}${hash}`;
  }
  if (pathOnly === "/") return `/${locale}${hash}`;
  return `/${locale}${pathOnly}${hash}`;
}

export function withHash(locale: Locale, hash = ""): string {
  const path = localePath(locale);
  if (!hash) return path;
  const h = hash.startsWith("#") ? hash : `#${hash}`;
  return path === "/" ? `/${h}` : `${path}${h}`;
}

export function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }
  return pathname;
}
