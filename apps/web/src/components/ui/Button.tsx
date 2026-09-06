import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "inverse" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  inverse: "bg-white text-ink hover:bg-paper-muted",
  outline: "border border-white/70 text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
