import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function btnClass(variant: "solid" | "ghost" = "solid"): string {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors duration-200";
  if (variant === "ghost") {
    return `${base} border border-line bg-card text-ink hover:border-ink`;
  }
  return `${base} bg-orange text-paper hover:bg-orange-deep`;
}

export function AmazonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={btnClass(variant)}
    >
      {children}
      <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
