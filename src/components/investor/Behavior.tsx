"use client";
import { useEffect } from "react";
import { connection } from "@/lib/investor-content";
export function track(
  name: string,
  props: Record<string, string | number> = {},
) {
  const w = window as Window & {
    plausible?: (
      name: string,
      options: { props: Record<string, string | number> },
    ) => void;
  };
  w.plausible?.(name, { props });
}
export function getAttribution() {
  try {
    return JSON.parse(
      sessionStorage.getItem("xoxo-attribution") || "{}",
    ) as Record<string, string>;
  } catch {
    return {};
  }
}
export function Behavior({ locale }: { locale: "uk" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    const params = new URLSearchParams(location.search),
      attribution: Record<string, string> = {};
    for (const key of [
      "ref",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]) {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 150);
    }
    try {
      if (Object.keys(attribution).length)
        sessionStorage.setItem("xoxo-attribution", JSON.stringify(attribution));
    } catch {}
    const click = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-track]",
      );
      if (target) track("CTA", { action: target.dataset.track || "", locale });
    };
    document.addEventListener("click", click);
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            track("Investor section", { section: entry.target.id, locale });
          }
        }),
      { threshold: 0.2 },
    );
    document
      .querySelectorAll("[data-investor]")
      .forEach((el) => observer.observe(el));
    const depths = new Set<number>();
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max <= 0) return;
      const pct = (scrollY / max) * 100;
      for (const depth of [25, 50, 75, 100])
        if (pct >= depth - 1 && !depths.has(depth)) {
          depths.add(depth);
          track("Scroll depth", { depth, locale });
        }
    };
    addEventListener("scroll", scroll, { passive: true });
    let script: HTMLScriptElement | undefined;
    if (
      connection.plausible &&
      !document.querySelector("[data-xoxo-analytics]")
    ) {
      script = document.createElement("script");
      script.defer = true;
      script.src = "https://plausible.io/js/script.manual.js";
      script.dataset.domain = connection.plausible;
      script.dataset.xoxoAnalytics = "true";
      document.head.append(script);
      script.onload = () => track("pageview");
    }
    return () => {
      document.removeEventListener("click", click);
      removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, [locale]);
  return null;
}
