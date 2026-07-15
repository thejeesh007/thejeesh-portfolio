import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import Nav from "@/components/Nav";
import ContactStrip from "@/components/ContactStrip";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <Nav />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/#work"
            className="font-mono text-xs text-cyan hover:underline"
          >
            ← ALL PROJECTS
          </Link>

          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-cyan">
            {project.category.toUpperCase()}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold text-text md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-amber px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                VIEW ON GITHUB
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-cyan hover:text-cyan"
              >
                LIVE DEMO
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface/30">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan">
            // OVERVIEW
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text">
            {project.overview}
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan">
            // KEY HIGHLIGHTS
          </p>
          <ul className="mt-6 space-y-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber" />
                <span className="text-sm leading-relaxed text-text md:text-base">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.architecture && (
        <section className="border-b border-border/60 bg-surface/30">
          <div className="mx-auto max-w-4xl px-6 py-14">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan">
              // ARCHITECTURE
            </p>
            <ol className="mt-6 space-y-4">
              {project.architecture.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-muted md:text-base">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {project.metrics && (
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-14">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan">
              // RESULTS
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-xl font-semibold text-text">
                    {m.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.publication && (
        <section className="border-b border-border/60 bg-surface/30">
          <div className="mx-auto max-w-4xl px-6 py-14">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan">
              // PUBLICATION
            </p>
            <p className="mt-4 max-w-2xl text-sm italic leading-relaxed text-text md:text-base">
              &ldquo;{project.publication.name}&rdquo;
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              {project.publication.venue}
            </p>
          </div>
        </section>
      )}

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between rounded-lg border border-border bg-surface px-6 py-5 transition-colors hover:border-cyan/60"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Next project
              </p>
              <p className="font-display mt-1 text-lg font-semibold text-text">
                {next.title}
              </p>
            </div>
            <span className="font-mono text-cyan opacity-0 transition-opacity group-hover:opacity-100">
              →
            </span>
          </Link>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
