import { BriefcaseBusiness, Code2, Compass, Cpu, Fingerprint, Users } from "lucide-react";
import { careerFocus } from "@/content/portfolio";
import { courseAnchor, projects } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DirectoryEntry } from "@/components/ui/DirectoryEntry";
import { ProjectLinks } from "@/components/ui/ProjectLinks";

const icons = { software: Code2, "ai-data": Cpu, design: Fingerprint, business: BriefcaseBusiness, people: Users, research: Compass };

export function CareerFocus() {
  return (
    <section id="careers" className="section directory-section" tabIndex={-1}>
      <div className="container">
        <SectionHeading kicker="Professional interests" title={<>Career <em>focus.</em></>}>
          Choose a pathway to see the projects, coursework and transferable skills I would bring to an early-career role.
        </SectionHeading>
        <div className="directory-grid">
          {careerFocus.map((pathway) => {
            const Icon = icons[pathway.id];
            return (
              <DirectoryEntry key={pathway.id} id={`career-${pathway.id}`} title={pathway.title} icon={<Icon />} preview={pathway.interests.slice(0, 2).join(" · ")}>
                <dl className="evidence-list">
                  <div><dt>Demonstrated skills</dt><dd>{pathway.practice}</dd></div>
                  <div><dt>Transferable abilities</dt><dd>{pathway.transferable}</dd></div>
                  <div><dt>Related projects</dt><dd><ProjectLinks items={projects.filter((project) => project.careers.includes(pathway.id))} /></dd></div>
                  <div><dt>Relevant coursework</dt><dd><ul className="evidence-links">{pathway.courses.map((course) => <li key={course}><a className="inline-link" href={`#${courseAnchor(course)}`}>{course}</a></li>)}</ul></dd></div>
                  <div><dt>Roles I’m exploring</dt><dd>{pathway.interests.join(" · ")}</dd></div>
                </dl>
              </DirectoryEntry>
            );
          })}
        </div>
      </div>
    </section>
  );
}
