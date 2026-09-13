import uk from "../../content/uk.json";
import en from "../../content/en.json";
export type Locale = "uk" | "en";
export type Copy = typeof en;
export function copy(locale: Locale): Copy {
  return locale === "uk" ? uk : en;
}
export function route(locale: Locale, path = "") {
  return `${locale === "en" ? "/en" : ""}/${path ? path + "/" : ""}`;
}
export const origin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://xoxotea.vercel.app";
export const connection = {
  endpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "",
  calendar: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  plausible: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
};
