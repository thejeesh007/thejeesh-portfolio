import NodeGraph from "./NodeGraph";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <NodeGraph />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <p className="animate-fade-up font-mono text-xs tracking-[0.2em] text-cyan">
          FINAL-YEAR CS ENGINEER — VIT CHENNAI
        </p>
        <h1
          className="animate-fade-up font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] text-text md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          I build backend, ML &amp; graph systems —{" "}
          <span className="text-amber">then explain why they work.</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base text-muted md:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          IEEE-published researcher. Shipped projects spanning knowledge
          graphs, blockchain, GNNs, quantum ML, and real-time systems — each
          one built for depth, not just a demo.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#work"
            className="rounded bg-amber px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            VIEW WORK
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
