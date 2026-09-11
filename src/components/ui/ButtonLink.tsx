import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "invert" | "ghostOnDark";
  className?: string;
};

export function ButtonLink({ href, children, variant = "ghost", className }: Props) {
  const styles =
    variant === "solid"
      ? "bg-tea-dark text-background hover:bg-tea-hover"
      : variant === "invert"
        ? "bg-background text-tea-dark hover:bg-surface"
        : variant === "ghostOnDark"
          ? "border border-background/35 text-background hover:bg-background/10"
          : "border border-tea-dark text-tea-dark hover:bg-sage/40";

  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-[0.95rem] tracking-[-0.02em] transition-colors duration-300",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}
