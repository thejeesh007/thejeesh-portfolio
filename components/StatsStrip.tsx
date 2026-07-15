const stats = [
  { label: "Publications", value: "1 IEEE" },
  { label: "Featured Projects", value: "8" },
  { label: "LeetCode Solved", value: "301+" },
  { label: "Domains Covered", value: "6" },
];

export default function StatsStrip() {
  return (
    <section className="border-b border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold text-text md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
