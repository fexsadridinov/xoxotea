"use client";

import { useEffect, useState } from "react";
import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { withHash } from "@/lib/i18n";
import { contactItem, navItems, observedSectionIds, type SectionId } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

type Props = {
  locale: Locale;
  content: Content;
};

export function SiteHeader({ locale, content }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActive(id as SectionId);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const previousHtml = html.style.overflow;
    const previousBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "relative z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-border bg-[rgba(243,239,231,0.92)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-site flex h-14 items-center justify-between gap-4 lg:h-16">
          <a
            href={withHash(locale, "#home")}
            className="text-[1.05rem] tracking-[-0.04em]"
            aria-label={content.a11y.home}
          >
            {content.nav.brand}
          </a>

          <nav className="hidden items-center justify-center gap-7 text-[0.92rem] text-foreground-muted xl:flex" aria-label={content.a11y.primaryNav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.hash}
                className={cn(
                  "relative inline-flex min-h-11 items-center hover:text-foreground",
                  active === item.id && "text-foreground",
                )}
                aria-current={active === item.id ? "location" : undefined}
              >
                {content.nav[item.key]}
                {active === item.id ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-tea-dark" aria-hidden />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={contactItem.hash}
              className="hidden min-h-11 items-center rounded-lg border border-tea-dark px-3 text-[0.9rem] text-tea-dark hover:bg-sage/40 xl:inline-flex"
            >
              {content.nav.contact}
            </a>
            <LanguageSwitch locale={locale} label={content.a11y.language} className="hidden xl:flex" />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center xl:hidden"
              aria-label={open ? content.nav.close : content.nav.open}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="hand text-xl text-tea-dark">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn("fixed inset-0 z-40 bg-background xl:hidden", open ? "flex" : "hidden")}
        style={{ height: "100dvh" }}
        hidden={!open}
        inert={!open}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open}
        aria-label={content.a11y.mobileNav}
        onClick={close}
      >
        <div
          className="flex h-full w-full flex-col px-6 pb-10 pt-24"
          onClick={(event) => event.stopPropagation()}
        >
          <LanguageSwitch locale={locale} label={content.a11y.language} className="mb-8 justify-start" />
          <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto" aria-label={content.a11y.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.hash}
                onClick={close}
                className="t-h1 py-1"
                aria-current={active === item.id ? "location" : undefined}
              >
                {content.nav[item.key]}
              </a>
            ))}
            <a
              href={contactItem.hash}
              onClick={close}
              className="t-h1 py-1"
              aria-current={active === "contact" ? "location" : undefined}
            >
              {content.nav.contact}
            </a>
          </nav>
          <p className="hand mt-6 text-lg">{content.footer.line}</p>
        </div>
      </div>
    </header>
  );
}
