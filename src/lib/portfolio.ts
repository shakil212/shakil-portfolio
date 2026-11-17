import { portfolio, type PortfolioProject } from "@/content/portfolio";

export const projects: readonly PortfolioProject[] = portfolio.projects;
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
  { id: "work", label: "Featured work" },
  { id: "archive", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function searchProjects(query: string, category = "All") {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    const text = [project.title, project.kind, project.category, project.status, project.summary, ...project.technologies, ...project.myWork].join(" ").toLowerCase();
    return (category === "All" || category === project.category) && words.every((word) => text.includes(word));
  });
}
