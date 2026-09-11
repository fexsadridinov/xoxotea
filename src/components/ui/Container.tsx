import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("container-site", className)}>{children}</Tag>;
}

export function Grid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("site-grid", className)}>{children}</div>;
}
