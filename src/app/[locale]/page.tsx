import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/home/HomePage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return buildMetadata(locale, {
    title: content.meta.title,
    description: content.meta.description,
    path: "/",
    absoluteTitle: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  return <HomePage content={content} locale={locale} />;
}
