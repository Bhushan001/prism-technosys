import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatBand } from "@/components/ui/StatBand";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { stats, siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story and approach behind Prism Technosys.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <EyebrowLabel>Our Story</EyebrowLabel>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
              Built by builders, trusted by growing businesses.
            </h1>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted">
              Prism Technosys exists to help businesses turn ideas into working software — websites, platforms and
              tools that are simple to use and built to last.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We work as an extension of your team: understanding your users, designing around their needs, and
              shipping code we&apos;re proud to hand over — fully documented, fully yours.
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
              Have a project you&apos;d like to talk through?
            </h2>
          </div>
          <Button href="/contact">Get in Touch</Button>
        </Container>
      </section>
    </>
  );
}
