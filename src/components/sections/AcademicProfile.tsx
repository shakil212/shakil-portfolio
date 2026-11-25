import { BookOpen, BriefcaseBusiness, Code2, Cpu, Database, Network, Trophy } from "lucide-react";
import { careerFocus, courseGroups, learningGroups, portfolio } from "@/content/portfolio";
import { courseAnchor, projects } from "@/lib/portfolio";
import { DirectoryEntry } from "@/components/ui/DirectoryEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectLinks } from "@/components/ui/ProjectLinks";

const courseIcons = [Code2, Cpu, Network, Database, BriefcaseBusiness];

export function AcademicProfile() {
  return (
    <div className="section profile-section"><div className="container">
      <section id="experience" className="profile-spread" tabIndex={-1} aria-labelledby="experience-title">
        <div><span className="kicker">Professional experience</span><h2 className="profile-title" id="experience-title">Internship.</h2></div>
        <div className="timeline">{portfolio.experience.map((item) => (
          <article key={item.organization} id="internship" tabIndex={-1}>
            <p className="record-meta">{item.start} – {item.end} · {item.arrangement}</p>
            <h3>{item.title}</h3><p className="record-org">{item.organization}</p><p>{item.description}</p>
          </article>
        ))}</div>
      </section>
      <section id="education" className="profile-spread" tabIndex={-1} aria-labelledby="education-title">
        <div><span className="kicker">Academic background</span><h2 className="profile-title" id="education-title">Education.</h2></div>
        <div>{portfolio.education.map((item) => <article className="education-record" key={item.institution}>
          <p className="record-meta">{item.start} – {item.expectedGraduation}</p>
          <h3>{item.degree}</h3><p className="record-org">{item.institution}</p>
          <p>{item.status} · {item.specialization} · {item.location}</p>
          <p>Additional academic exposure in {item.additionalExposure.toLowerCase()}.</p>
        </article>)}
        <h3 className="profile-subtitle" id="coursework" tabIndex={-1}>Academic coursework</h3>
        <div className="course-list">{courseGroups.map((group, index) => {
          const Icon = courseIcons[index] ?? BookOpen;
          return <DirectoryEntry key={group.title} title={group.title} icon={<Icon />} preview={`${group.courses.length} course${group.courses.length === 1 ? "" : "s"}`}>
            <ul className="course-names">{group.courses.map((course) => <li id={courseAnchor(course)} tabIndex={-1} key={course}>{course}</li>)}</ul>
            <p className="detail-label">Career connections</p>
            <ul className="evidence-links">{careerFocus.filter((pathway) => pathway.courses.some((course) => group.courses.some((name) => name === course))).map((pathway) => <li key={pathway.id}><a className="inline-link" href={`#career-${pathway.id}`}>{pathway.title}</a></li>)}</ul>
            <p className="detail-label">Related projects</p><ProjectLinks items={projects.filter((project) => project.courses.some((course) => group.courses.some((name) => name === course)))} />
          </DirectoryEntry>;
        })}</div>
        </div>
      </section>
    </div></div>
  );
}

export function Recognition() {
  return (
    <section id="recognition" tabIndex={-1} className="section"><div className="container">
      <SectionHeading kicker="Academic & professional development" title={<>Recognition <em>& training.</em></>} />
      <div className="recognition-grid">
        <div><h3 id="awards" className="detail-label" tabIndex={-1}>Awards & achievements</h3>
          <div className="award-list">{portfolio.achievements.map((title) => <article key={title}><Trophy aria-hidden="true" size={21} /><div><span>{portfolio.awardResult}</span><h4>{title}</h4><small>{portfolio.awardOrganizer}</small></div></article>)}</div>
        </div>
        <div><h3 id="credentials" className="detail-label" tabIndex={-1}>Certifications & training</h3>
          <ul className="training-list">{portfolio.coursesAndTraining.map((item) => <li key={item.name}><strong>{item.name}</strong><small>{item.provider} · {item.date}</small></li>)}</ul>
          <h3 id="activities" className="detail-label mt-10" tabIndex={-1}>University activities</h3>
          <ul className="recognition-list">{portfolio.activities.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </div></section>
  );
}

export function Learning() {
  return <section id="learning" tabIndex={-1} className="section directory-section"><div className="container">
    <SectionHeading kicker="Professional development" title={<>Currently <em>exploring.</em></>}>These are areas I’m learning about as I explore future roles.</SectionHeading>
    <div className="directory-grid">{learningGroups.map((group) => <DirectoryEntry key={group.id} id={`learning-${group.id}`} title={group.title}><ul className="course-names">{group.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></DirectoryEntry>)}</div>
  </div></section>;
}
