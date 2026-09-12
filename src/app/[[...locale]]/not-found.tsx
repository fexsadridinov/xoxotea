"use client";

import { usePathname } from "next/navigation";
import { getContent } from "@/content";
import { isLocale, localePath } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const maybe = pathname.split("/")[1];
  const locale = maybe && isLocale(maybe) && maybe !== "uk" ? maybe : "uk";
  const content = getContent(locale);

  return (
    <div className="container-site flex min-h-[70dvh] flex-col justify-center py-24">
      <p className="hand text-xl">{content.notFound.code}</p>
      <h1 className="t-h1 mt-6 max-w-xl">{content.notFound.title}</h1>
      <p className="t-body mt-6 max-w-md">{content.notFound.text}</p>
      <a href={localePath(locale)} className="mt-10 inline-flex min-h-11 items-center">
        {content.notFound.back}
      </a>
    </div>
  );
}
