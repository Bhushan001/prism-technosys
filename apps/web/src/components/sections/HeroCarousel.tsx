"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Slide = { eyebrow: string; title: string; copy: string };

export function HeroCarousel({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const slide = slides[index];

  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden">
      <PlaceholderArt className="absolute inset-0" />
      <Container className="relative z-10 w-full pb-20 pt-32">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {slide.eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{slide.copy}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/products" variant="inverse">
            Explore Products
          </Button>
          <Button href="/contact" variant="outline">
            Request a Quote
          </Button>
        </div>

        <div className="mt-14 flex items-center gap-6">
          <div className="flex gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-8 transition-colors ${i === index ? "bg-accent" : "bg-white/30"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 hover:bg-white/10"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 hover:bg-white/10"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
            <span className="text-xs tracking-widest">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
