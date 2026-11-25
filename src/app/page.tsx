import { AcademicProfile, Learning, Recognition } from "@/components/sections/AcademicProfile";
import { CareerFocus } from "@/components/sections/CareerFocus";
import { SkillsDirectory } from "@/components/sections/SkillsDirectory";
import { FragmentNavigation } from "@/components/navigation/FragmentNavigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { ResearchList } from "@/components/sections/ResearchList";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { portfolio } from "@/content/portfolio";

export const metadata = {
  ...pageMetadata("Technology, Business & Innovation", portfolio.identity.introduction, "/"),
  title: { absolute: portfolio.identity.siteTitle },
};
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <FragmentNavigation /><Hero /><About /><CareerFocus /><FeaturedWork />
      <section className="section archive-section" id="archive" tabIndex={-1}><div className="container">
        <SectionHeading kicker="Project index" title={<>The <em>archive.</em></>}>Filter by discipline or career focus to explore my contribution and the current stage of each project.</SectionHeading>
        <ProjectArchive />
      </div></section>
      <section id="skills" className="section" tabIndex={-1}><div className="container">
        <SectionHeading kicker="Skills & competencies" title={<>Skills in <em>practice.</em></>}>Search for a tool or ability, or open a category to see related work.</SectionHeading>
        <SkillsDirectory />
      </div></section>
      <AcademicProfile /><ResearchList /><Recognition /><Learning /><Contact />
    </main>
  );
}
