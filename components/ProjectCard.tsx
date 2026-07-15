import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-cyan/60 hover:bg-surface-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
          {project.category}
        </span>
        <span className="h-2 w-2 shrink-0 rounded-full bg-amber schematic-node" />
      </div>

      <h3 className="font-display mt-4 text-lg font-semibold text-text">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.tagline}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-amber opacity-0 transition-opacity group-hover:opacity-100">
        VIEW DETAILS →
      </span>
    </Link>
  );
}
