import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { clients } from "@/content/clients";

export const metadata: Metadata = {
  title: "Clients",
  description: "The manufacturers, research institutions and PSUs Crystal Engineers has delivered process equipment to.",
};

export default function ClientsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <EyebrowLabel>Our Clients</EyebrowLabel>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
          A partial list of the partners we serve.
        </h1>

        <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {clients.map((client) => (
            <div key={client} className="flex min-h-[140px] items-center justify-center bg-white px-4 text-center">
              <span className="font-display text-lg text-ink/80">{client}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
