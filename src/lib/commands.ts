import { careerFocus, courseGroups, learningGroups, portfolio, skillGroups } from "@/content/portfolio";
import { courseAnchor, projects, research, sections } from "./portfolio";

export const commandEntries = [
  ...sections.map((section) => ({ label: section.label, tag: "Section", href: `/#${section.id}`, keywords: section.id })),
  ...projects.map((project) => ({ label: project.title, tag: project.category, href: `/projects/${project.slug}`, keywords: [project.summary, ...project.technologies, ...project.courses, project.transferable].join(" ") })),
  ...research.map((item) => ({ label: item.title, tag: "Research note", href: `/research/${item.slug}`, keywords: `${item.summary} ${item.status}` })),
  ...careerFocus.map((item) => ({ label: item.title, tag: "Career focus", href: `/#career-${item.id}`, keywords: [item.practice, item.transferable, ...item.interests, ...item.courses].join(" ") })),
  ...courseGroups.flatMap((group) => group.courses.map((name) => ({ label: name, tag: "Course", href: `/#${courseAnchor(name)}`, keywords: `academic coursework education ${group.title}` }))),
  ...skillGroups.map((group) => ({ label: group.title, tag: "Skills", href: `/#skills-${group.id}`, keywords: group.skills.join(" ") })),
  ...learningGroups.map((group) => ({ label: group.title, tag: "Learning", href: `/#learning-${group.id}`, keywords: group.topics.join(" ") })),
  { label: "Academic coursework", tag: "Education", href: "/#coursework", keywords: "UIU university undergraduate" },
  { label: "CodeAlpha internship", tag: "Experience", href: "/#internship", keywords: portfolio.experience[0].title },
  { label: "Awards & achievements", tag: "Recognition", href: "/#awards", keywords: portfolio.achievements.join(" ") },
  { label: "Certifications", tag: "Training", href: "/#credentials", keywords: portfolio.coursesAndTraining.map((item) => `${item.name} ${item.provider}`).join(" ") },
  { label: "University activities", tag: "Academic", href: "/#activities", keywords: portfolio.activities.join(" ") },
];

export function searchCommands(query: string) {
  const words = query.toLowerCase().replace(/\bhr\b/g, "human resources").trim().split(/\s+/);
  const matches = commandEntries.filter((item) => words.every((word) => `${item.label} ${item.tag} ${item.keywords}`.toLowerCase().includes(word)));
  const term = query.trim().toLowerCase();
  const priority = (label: string) => label.toLowerCase() === term ? 2 : Number(label.toLowerCase().includes(term));
  return term ? matches.sort((a, b) => priority(b.label) - priority(a.label)) : matches;
}
