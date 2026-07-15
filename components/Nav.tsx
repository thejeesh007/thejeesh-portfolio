import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-text"
        >
          THEJEESH<span className="text-amber">.</span>G
        </Link>
        <div className="flex items-center gap-6 font-mono text-xs text-muted">
          <a href="/#work" className="transition-colors hover:text-cyan">
            WORK
          </a>
          <a href="/#skills" className="transition-colors hover:text-cyan">
            SKILLS
          </a>
          <a href="/#contact" className="transition-colors hover:text-cyan">
            CONTACT
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-amber/40 px-3 py-1.5 text-amber transition-colors hover:bg-amber/10"
          >
            RESUME
          </a>
        </div>
      </nav>
    </header>
  );
}
