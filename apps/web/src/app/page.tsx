import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBand } from "@/components/ui/StatBand";
import { Button } from "@/components/ui/Button";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { ArrowRightIcon } from "@/components/icons";
import { heroSlides } from "@/content/products";
import { homeHighlights, homeCta } from "@/content/home";
import { stats } from "@/content/site";
import { industries } from "@/content/industries";
import { clients } from "@/content/clients";

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Complex equipment, delivered right the first time."
            description="From first sketch to site commissioning, every piece of equipment we ship carries our name on the nameplate."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {homeHighlights.map((item, i) => (
              <div key={item.title} className="border border-line p-8">
                <span className="font-display text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatBand stats={stats} />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Industries We Serve" title="Built for the sectors that can't afford to get it wrong." />
            <Link href="/industries" className="hidden items-center gap-2 text-sm font-semibold text-ink sm:flex">
              View all industries <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link key={industry.slug} href="/industries" className="group block">
                <PlaceholderArt className="aspect-[4/3] w-full" />
                <h3 className="mt-4 text-base font-semibold text-ink group-hover:text-accent">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-muted py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Trusted By" title="Partners who don't compromise on quality." align="center" />
          <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div key={client} className="flex items-center justify-center bg-paper-muted px-4 py-10">
                <span className="font-display text-lg text-ink/70">{client}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <Container className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <SectionHeading eyebrow={homeCta.eyebrow} title={homeCta.title} description={homeCta.body} tone="light" />
          </div>
          <Button href="/contact" variant="inverse" className="shrink-0">
            Request a Quote
          </Button>
        </Container>
      </section>
    </>
  );
}
