export function ProjectLinks({ items }: { items: readonly { slug: string; title: string }[] }) {
  return <ul className="evidence-links">{items.map((project) => (
    <li key={project.slug}><a className="inline-link" href={`/projects/${project.slug}`}>{project.title}</a></li>
  ))}</ul>;
}
