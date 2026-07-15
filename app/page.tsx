import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGraph from "@/components/SkillsGraph";
import ContactStrip from "@/components/ContactStrip";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsStrip />
      <ProjectsGrid />
      <SkillsGraph />
      <ContactStrip />
    </main>
  );
}
