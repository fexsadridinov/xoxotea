import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  tone?: "tea" | "clay";
};

export function HandNote({ children, className, rotate = -2, tone = "tea" }: Props) {
  return (
    <span
      className={cn(
        "hand inline-block text-[1.05rem] md:text-[1.15rem]",
        tone === "clay" ? "text-clay" : "text-tea-dark",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

export function HandKicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("hand text-[1.2rem] text-tea-dark md:text-[1.35rem]", className)}>{children}</p>;
}
