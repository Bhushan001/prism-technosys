"use client";

import { useState } from "react";
import Link from "next/link";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Industry } from "@/content/industries";

export function IndustryShowcase({ industries }: { industries: Industry[] }) {
  const [index, setIndex] = useState(0);
  const total = industries.length;
  const industry = industries[index];

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <PlaceholderArt className="aspect-[4/3] w-full" />
        <div className="flex flex-col justify-center">
          <EyebrowLabel>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </EyebrowLabel>
          <h3 className="mt-5 font-display text-4xl text-ink sm:text-5xl">{industry.name}</h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{industry.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {industry.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink"
          >
            Discuss a project
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous industry"
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="flex h-10 w-10 items-center justify-center border border-line text-ink hover:bg-paper-muted"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next industry"
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="flex h-10 w-10 items-center justify-center border border-line text-ink hover:bg-paper-muted"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <div className="ml-2 flex gap-2">
          {industries.map((item, i) => (
            <button
              key={item.slug}
              aria-label={`Show ${item.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 transition-colors ${i === index ? "bg-accent" : "bg-line"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
