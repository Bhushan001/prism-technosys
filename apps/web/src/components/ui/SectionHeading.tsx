import { ReactNode } from "react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <EyebrowLabel tone={tone}>{eyebrow}</EyebrowLabel>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.1] text-balance sm:text-5xl ${
          tone === "dark" ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed ${tone === "dark" ? "text-muted" : "text-white/75"} ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
