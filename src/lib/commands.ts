import { projects, research, sections } from "./portfolio";

export const commandEntries = [
  ...sections.map((section) => ({ label: section.label, tag: "Section", href: `/#${section.id}`, keywords: section.id })),
  ...projects.map((project) => ({ label: project.title, tag: project.category, href: `/projects/${project.slug}`, keywords: `${project.summary} ${project.technologies.join(" ")}` })),
  ...research.map((item) => ({ label: item.title, tag: "Research note", href: `/research/${item.slug}`, keywords: `${item.summary} ${item.status}` })),
];

export function searchCommands(query: string) {
  const words = query.toLowerCase().trim().split(/\s+/);
  return commandEntries.filter((item) => words.every((word) => `${item.label} ${item.tag} ${item.keywords}`.toLowerCase().includes(word)));
}
