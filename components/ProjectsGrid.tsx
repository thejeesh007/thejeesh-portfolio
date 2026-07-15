import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-cyan">
              // SELECTED WORK
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-text md:text-3xl">
              8 systems, 6 domains, one throughline
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
