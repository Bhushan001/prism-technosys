import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { lifecycleSteps, facilityStats } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Design, fabrication, testing and commissioning capabilities at Crystal Engineers' 120,000 sq. ft. Pune facility.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative flex min-h-[460px] items-end overflow-hidden">
        <PlaceholderArt className="absolute inset-0" />
        <Container className="relative z-10 w-full pb-16 pt-28">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Capabilities
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
            End-to-end capability, from concept to commissioning.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            A 120,000 sq. ft. facility, 300+ engineers and craftsmen, and a single-minded focus on getting complex
            equipment right.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What We Do" title="Every step of the equipment lifecycle." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {lifecycleSteps.map((step) => (
              <div key={step.title}>
                <PlaceholderArt className="aspect-video w-full" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <Container className="grid grid-cols-2 gap-8 sm:max-w-md">
          {facilityStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-5xl text-white">{stat.value}</div>
              <div className="mt-3 h-px w-10 bg-accent" aria-hidden="true" />
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">{stat.label}</div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
