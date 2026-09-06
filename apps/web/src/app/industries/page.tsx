import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "The manufacturing, healthcare, retail and financial-services industries Prism Technosys builds for.",
};

export default function IndustriesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <EyebrowLabel>Industries We Serve</EyebrowLabel>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
          Sectors we understand, not just sectors we bill.
        </h1>

        <div className="mt-16">
          <IndustryShowcase industries={industries} />
        </div>
      </Container>
    </section>
  );
}
