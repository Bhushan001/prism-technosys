import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { RulerIcon, ShieldCheckIcon, LayersIcon } from "@/components/icons";
import { servicesHero, serviceValueProps, services, servicesCta } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, UI/UX design, custom software and CMS/e-commerce services from Prism Technosys.",
};

const valuePropIcons = [RulerIcon, ShieldCheckIcon, LayersIcon];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-end overflow-hidden">
        <Photo src={servicesHero.image} alt="" overlay className="absolute inset-0" />
        <Container className="relative z-10 w-full pb-16 pt-28">
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
            {servicesHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">{servicesHero.copy}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          {serviceValueProps.map((prop, i) => {
            const Icon = valuePropIcons[i];
            return (
              <div key={prop.title} className="border border-line p-8">
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{prop.body}</p>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-paper-muted py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our Services" title="Four core services, tailored to your project." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="flex flex-col bg-white p-8">
                <Photo src={service.image} alt="" className="aspect-video w-full" />
                <h3 className="mt-6 font-display text-2xl text-ink">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="border border-line px-3 py-1 text-xs font-medium text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 sm:py-0">
        <Container className="grid items-center gap-10 sm:grid-cols-2">
          <div className="py-20 sm:py-28">
            <EyebrowLabel tone="light">{servicesCta.eyebrow}</EyebrowLabel>
            <h2 className="mt-5 max-w-md font-display text-3xl text-white sm:text-4xl">{servicesCta.title}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">{servicesCta.body}</p>
            <Button href="/contact" variant="inverse" className="mt-8">
              Request a Quote
            </Button>
          </div>
          <Photo src={servicesCta.image} alt="" className="h-full min-h-[320px] w-full" />
        </Container>
      </section>
    </>
  );
}
