import { Container } from "@/components/ui/Container";

export function StatBand({ stats }: { stats: readonly { value: string; label: string }[] }) {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-5xl text-white sm:text-6xl">{stat.value}</div>
            <div className="mt-3 h-px w-10 bg-accent" aria-hidden="true" />
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
