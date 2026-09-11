"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { observedSectionIds } from "@/data/navigation";
import {
  locales,
  localeLabels,
  localeNames,
  localePath,
  type Locale,
} from "@/lib/i18n";

const STORAGE = "xoxo-locale";

type Props = {
  locale: Locale;
  label: string;
  className?: string;
  inverted?: boolean;
};

export function LanguageSwitch({ locale, label, className, inverted = false }: Props) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const apply = (next: string) => {
      if (next) setHash(next.startsWith("#") ? next : `#${next}`);
    };

    apply(window.location.hash);

    const onHash = () => apply(window.location.hash);
    window.addEventListener("hashchange", onHash);

    const nodes = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer =
      nodes.length > 0
        ? new IntersectionObserver(
            (entries) => {
              const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
              const id = visible[0]?.target.id;
              if (id) apply(`#${id}`);
            },
            { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
          )
        : null;

    nodes.forEach((node) => observer?.observe(node));

    return () => {
      window.removeEventListener("hashchange", onHash);
      observer?.disconnect();
    };
  }, []);

  function persist(next: Locale) {
    try {
      window.localStorage.setItem(STORAGE, next);
    } catch {
      /* private mode */
    }
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-[0.8rem] tracking-[0.14em]",
        inverted ? "text-sage" : "text-foreground-muted",
        className,
      )}
      aria-label={label}
    >
      {locales.map((code) => (
        <a
          key={code}
          href={`${localePath(code)}${hash}`}
          hrefLang={code}
          onClick={() => persist(code)}
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center transition-colors",
            locale === code
              ? inverted
                ? "text-background"
                : "text-foreground"
              : inverted
                ? "hover:text-background"
                : "hover:text-foreground",
          )}
          aria-label={localeNames[code]}
          aria-current={locale === code ? "page" : undefined}
        >
          <span className="relative">
            {localeLabels[code]}
            {locale === code ? (
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
                  inverted ? "bg-background" : "bg-tea-dark",
                )}
                aria-hidden
              />
            ) : null}
          </span>
        </a>
      ))}
    </div>
  );
}
