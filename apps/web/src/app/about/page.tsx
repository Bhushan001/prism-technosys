import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatBand } from "@/components/ui/StatBand";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { stats, siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story, facility and certifications behind Crystal Engineers.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <EyebrowLabel>Our Story</EyebrowLabel>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
              Built by engineers, run by craftsmen.
            </h1>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted">
              Crystal Engineers was founded in 1990 with a simple belief — that world-class process equipment could
              be engineered and manufactured in India for customers anywhere on earth.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Today, from our 120,000 sq.ft. facility in Pune, we design and fabricate pressure vessels, heat
              exchangers, columns and turnkey systems that operate at the heart of space programs, nuclear plants,
              and heavy chemical processing lines around the world.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">
              {siteSettings.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                  <dd className="text-sm font-medium text-ink">{cert}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <StatBand stats={stats} />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <EyebrowLabel>Let&apos;s Talk</EyebrowLabel>
            <h2 className="mt-5 max-w-lg font-display text-3xl text-ink sm:text-4xl">
              Want to see the facility for yourself?
            </h2>
          </div>
          <Button href="/contact">Get in Touch</Button>
        </Container>
      </section>
    </>
  );
}
