import { careerFocus, portfolio, projectContext, type PortfolioProject, type ProjectSlug, type ProjectContext } from "@/content/portfolio";

export const projects: readonly (PortfolioProject & ProjectContext & { slug: ProjectSlug })[] =
  portfolio.projects.map((project) => ({ ...project, ...projectContext[project.slug] }));

export function courseAnchor(name: string) {
  return "course-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
export const featuredProjects = portfolio.siteSettings.featuredProjectSlugs.flatMap(
  (slug) => projects.filter((project) => project.slug === slug),
);
export const categories = ["All", ...new Set(projects.map((project) => project.category))] as const;
export const research = portfolio.research.map((item) => ({
  ...item,
  slug: item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
}));
export const sections = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "careers", label: "Career focus" },
  { id: "work", label: "Featured work" },
  { id: "archive", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "recognition", label: "Recognition" },
  { id: "learning", label: "Currently learning" },
  { id: "contact", label: "Contact" },
] as const;

export function searchProjects(query: string, category = "All", career = "All") {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    const pathways = careerFocus.filter((pathway) => project.careers.includes(pathway.id));
    const text = [project.title, project.kind, project.category, project.status, project.summary,
      ...project.technologies, ...project.myWork, ...project.courses, project.relevance, project.transferable,
      ...pathways.map((pathway) => pathway.title)].join(" ").toLowerCase();
    return (category === "All" || category === project.category)
      && (career === "All" || pathways.some((pathway) => pathway.id === career))
      && words.every((word) => text.includes(word));
  });
}
