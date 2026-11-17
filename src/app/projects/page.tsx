import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Project archive", "Explore Shakil Mahmud’s software, AI research, academic systems design, and hardware projects with clear development stages.", "/projects");
export default function ProjectsPage() {
  return <main id="main" className="container inner-page" tabIndex={-1}><div className="page-intro"><span className="kicker">Project index / All disciplines</span><h1>The <em>archive.</em></h1><p>Software, research interfaces, and systems in progress. Explore the work, my contribution, and where each project stands.</p></div><ProjectArchive /></main>;
}
