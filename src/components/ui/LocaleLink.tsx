import Link from "next/link";
import { withLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function LocaleLink({ href, locale, className, children, onClick }: Props) {
  return (
    <Link href={withLocale(href, locale)} className={cn(className)} onClick={onClick}>
      {children}
    </Link>
  );
}
