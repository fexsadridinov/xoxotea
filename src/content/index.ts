import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import { uk, type Content } from "./uk";

const catalogs: Record<Locale, Content> = { uk, en, ru };

export function getContent(locale: Locale): Content {
  return catalogs[locale];
}

export type { Content };
