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
  ...pageMetadata("Software, Data & Research", portfolio.identity.introduction, "/"),
  title: { absolute: "Shakil Mahmud — Software, Data & Research" },
};
export default function Home() {
  return <main id="main" tabIndex={-1}><Hero /><FeaturedWork /><section className="section archive-section" id="archive" tabIndex={-1}><div className="container"><SectionHeading kicker="02 / Project index" title={<>The <em>archive.</em></>}>Filter by discipline. Explore my contribution, the tools used, and the current stage of each project.</SectionHeading><ProjectArchive /></div></section><ResearchList /><About /><Contact /></main>;
}
