import { projects } from "@/lib/projects";

function getHubSkills() {
  const map = new Map<string, number>();
  projects.forEach((p) =>
    p.hubSkills.forEach((s) => map.set(s, (map.get(s) ?? 0) + 1))
  );
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
}

export default function SkillsGraph() {
  const hubs = getHubSkills();

  const groups: { label: string; items: string[] }[] = [
    {
      label: "Languages",
      items: ["Python", "Java", "C / C++", "JavaScript / TypeScript"],
    },
    {
      label: "Backend & Data",
      items: ["Node.js / Express", "Neo4j", "REST APIs", "System Design"],
    },
    {
      label: "AI / ML",
      items: [
        "PyTorch",
        "scikit-learn",
        "Graph Neural Networks",
        "Quantum Computing",
      ],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Three.js", "Tailwind CSS"],
    },
  ];

  return (
    <section id="skills" className="border-b border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-cyan">
          // HUB SKILLS
        </p>
        <h2 className="font-display mt-3 text-2xl font-semibold text-text md:text-3xl">
          The nodes every project connects through
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Every project above traces back to a small set of core skills — the
          same way a real knowledge graph works.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {hubs.map(([skill, count]) => (
            <span
              key={skill}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-text"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {skill}
              <span className="text-muted">×{count}</span>
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-cyan">
                {g.label}
              </p>
              <ul className="mt-3 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-text">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
