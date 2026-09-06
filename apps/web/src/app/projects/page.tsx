import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Photo } from "@/components/ui/Photo";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects delivered by Prism Technosys across manufacturing, healthcare, retail and financial services.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <EyebrowLabel>Our Work</EyebrowLabel>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
          A track record built one project at a time.
        </h1>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug}>
              <Photo src={project.image} alt="" className="aspect-[4/3] w-full" />
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-muted">
                {project.industry}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.outcome}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
