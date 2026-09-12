import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { resolveLocaleSegments } from "@/lib/i18n";
import { HomePage } from "@/components/home/HomePage";

type LocaleParams = { locale?: string[] };

export default async function Page({ params }: { params: Promise<LocaleParams> }) {
  const { locale: segments } = await params;
  const locale = resolveLocaleSegments(segments);
  if (!locale) notFound();
  const content = getContent(locale);
  return <HomePage content={content} locale={locale} />;
}
