export default function ContactStrip() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-cyan">
          // GET IN TOUCH
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-xl text-2xl font-semibold text-text md:text-4xl">
          Open to off-campus SDE &amp; backend roles.
        </h2>
        <p className="mt-4 text-sm text-muted">
          Always happy to talk shop about graphs, systems, or anything above.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:thejeesh.g2023@vitstudent.ac.in"
            className="rounded bg-amber px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            EMAIL ME
          </a>
          <a
            href="https://www.linkedin.com/in/thejeeshg/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/thejeesh007"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            GITHUB
          </a>
        </div>
      </div>

      <footer className="border-t border-border/60 py-6 text-center font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} Thejeesh G — built with Next.js.
      </footer>
    </section>
  );
}
