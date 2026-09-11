import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => {
    const path = localePath(locale);
    return {
      url: path === "/" ? site.url : `${site.url}${path}`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly" as const,
      priority: 1,
    };
  });
}
