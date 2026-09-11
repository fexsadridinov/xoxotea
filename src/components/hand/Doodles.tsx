import { cn } from "@/lib/cn";

type SvgProps = {
  className?: string;
  title?: string;
};

export function ArrowDoodle({ className, title }: SvgProps) {
  return (
    <svg
      viewBox="0 0 88 28"
      fill="none"
      className={cn("text-tea-dark", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M2 16c18-10 38-12 62-6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M57 6.5c6 4 10 8 16 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M68 22c4-1 7-2 10-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function CircleDoodle({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 72 40" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path
        d="M8 22c2-10 18-16 36-14 16 2 24 10 22 18-2 9-18 12-34 10C16 34 6 30 8 22Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UnderlineDoodle({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 120 14" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path
        d="M2 9c18-5 38-6 58-3 20 3 38 4 58 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafDoodle({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 40 48" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path
        d="M20 44c0-16 12-24 16-36-14 2-26 14-28 32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M20 28c6-6 10-10 14-16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function GrapeDoodle({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 36 44" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path d="M18 4c2 6 1 10-2 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="14" cy="22" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="23" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="19" cy="32" r="5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function StrawClimber({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 36 56" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path d="M18 4v48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="18" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 22h12M14 28c2 6 4 8 8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function CupHands({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path d="M24 10h16l2 18H22l2-18Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M40 14h6c3 0 4 3 3 6-1 3-3 4-7 4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 28c6 4 12 6 20 6M56 28c-6 4-12 6-20 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Marks({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 28 16" fill="none" className={cn("text-tea-dark", className)} aria-hidden>
      <path d="M3 3l6 8M9 3L3 11M17 4l6 8M23 4l-6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
