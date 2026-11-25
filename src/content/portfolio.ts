/**
 * Portfolio content consolidated from the supplied resumes, Nov 2026.
 * All status labels matter: do not portray research concepts as tested products.
 * Review public links and any resume before deployment.
 */
export type PortfolioProject = {
  slug: string;
  title: string;
  category: 'Software' | 'AI & Research' | 'Systems Design' | 'Hardware & IoT';
  kind: string;
  status: 'MVP' | 'Built' | 'Prototype' | 'Academic design' | 'Research demonstrator' | 'In development' | 'Presented academic project' | 'Frontend experience';
  featured: boolean;
  summary: string;
  myWork: readonly string[];
  technologies: readonly string[];
  limitations?: string;
  links?: { source?: string; demo?: string; report?: string };
  image?: string;
};

export type ResearchItem = {
  title: string;
  status: 'Completed academic manuscript (unpublished)' | 'Completed team report (unpublished)' | 'Working manuscript' | 'Conceptual design' | 'Proposed research direction' | 'Proposed research framework';
  summary: string;
  importantQualification: string;
};

export const portfolio = {
  identity: {
    name: 'Shakil Mahmud',
    firstName: 'Shakil',
    location: 'Dhaka, Bangladesh',
    role: 'Computer Science & Engineering Undergraduate',
    positioning: 'Technology | Business | Innovation',
    headline: ['Building Digital Solutions.', 'Solving Real-World Problems.'],
    siteTitle: 'Shakil Mahmud | Technology, Business & Innovation',
    introduction:
      'Computer Science and Engineering undergraduate with academic and project experience in software development, AI/ML, data analysis, UI/UX, automation, research and business operations.',
    availability: 'Open to internships and entry-level opportunities.',
    portrait: '/images/shakil-portrait.jpg',
    portraitAlt: 'Professional portrait of Shakil Mahmud',
  },
  contact: {
    headline: ["Let’s Build", "Something Meaningful."],
    description: 'Open to professional opportunities, internships, collaborations and meaningful conversations.',
    email: 'shakilmahmud212121@gmail.com',
    facebook: 'https://www.facebook.com/shakilmahmud2121',
    instagram: 'https://www.instagram.com/shakil__735/',
    youtube: 'https://www.youtube.com/@LifeBytesWithShakil',
    linkedIn: 'https://www.linkedin.com/in/shakil-mahmud212',
    github: 'https://github.com/shakil212',
    previousPortfolio: 'https://shakilmahmud-portfolio.vercel.app',
    // Deliberately omit the phone number from the public-facing site by default.
    resumeUrl: null as string | null, // e.g. '/resume.pdf' after user reviews file and uploads it.
  },
  about: {
    short:
      'I study Computer Science and Engineering at United International University in Dhaka, where I major in Data Science. I build software, study how people use AI, and turn requirements into interfaces and workflows that others can follow.',
    long:
      'In my final year, that work ranges from documenting machine-learning experiments to prototyping employee training workflows. Figma sketches, team interviews and structured reports help me explain technical decisions to people with different backgrounds. I want to bring that same care to software, research and corporate teams while learning from the people I work with.',
    interests: [
      'Full-stack software engineering',
      'Applied machine learning',
      'Bangla and low-resource NLP',
      'Human-centered AI',
      'IoT systems',
      'Workflow automation',
    ],
  },
  education: [
    {
      institution: 'United International University (UIU)',
      location: 'Dhaka, Bangladesh',
      degree: 'BSc in Computer Science and Engineering',
      specialization: 'Data Science major (in progress)',
      start: 'June 2022',
      expectedGraduation: 'May 2027 (expected)',
      status: 'Undergraduate student',
      additionalExposure: 'Neural Networks',
    },
  ],
  experience: [
    {
      title: 'Artificial Intelligence & Machine Learning Intern',
      organization: 'CodeAlpha',
      arrangement: 'Remote',
      start: 'January 2026',
      end: 'March 2026',
      description:
        'Completed a three-month internship in Artificial Intelligence and Machine Learning.',
    },
  ],
  projects: [
    {
      slug: 'careerpath-ai',
      title: 'CareerPath AI',
      category: 'Software',
      kind: 'Full-stack career-guidance application',
      status: 'MVP',
      featured: true,
      summary:
        'An integrated career-guidance MVP that organizes user profiles and guidance flows through reusable application interfaces.',
      myWork: [
        'Developed an integrated full-stack MVP.',
        'Built structured user-profile and career-guidance interfaces.',
        'Worked with reusable frontend components and a database-backed API.',
      ],
      technologies: ['Next.js', 'TypeScript', 'Django REST Framework', 'PostgreSQL'],
      limitations: 'Deployment hardening is ongoing. Production readiness has yet to be validated.',
    },
    {
      slug: 'mot-ssl-gru-dashboard',
      title: 'MOT-SSL-GRU Research Dashboard',
      category: 'AI & Research',
      kind: 'Research interface demonstrator',
      status: 'Research demonstrator',
      featured: true,
      summary:
        'A Streamlit demonstrator supporting experiment notes, file submission, and research pipeline views.',
      myWork: [
        'Built a research-oriented interface with controlled data-submission workflows.',
        'Organized experiment notes and pipeline-state views.',
        'Included basic repository-based UI checks and documentation.',
      ],
      technologies: ['Python', 'Streamlit', 'pytest (basic)'],
      limitations: 'The demonstrator does not integrate live trained-model inference.',
    },
    {
      slug: 'personal-automation-system',
      title: 'Personal Automation System',
      category: 'Software',
      kind: 'Bilingual productivity utility',
      status: 'Built',
      featured: true,
      summary:
        'A Python productivity tool for schedules, reminders, file organization, and notifications in a bilingual workflow.',
      myWork: [
        'Implemented recurring scheduling and reminder functionality.',
        'Built file-organization and notification workflows.',
        'Designed the utility for bilingual use.',
      ],
      technologies: ['Python'],
    },
    {
      slug: 'corporate-training-skill-evaluation',
      title: 'Corporate Training & Employee Skill Evaluation',
      category: 'Systems Design',
      kind: 'Academic employee-development prototype',
      status: 'Prototype',
      featured: false,
      summary:
        'A prototype for employee assessments, training assignments, progress tracking, reporting, and role-based follow-up.',
      myWork: [
        'Designed assessment and training-assignment workflows.',
        'Mapped progress tracking, reporting, and follow-up needs.',
        'Documented role-based interactions.',
      ],
      technologies: ['Workflow design', 'Requirements documentation', 'Prototyping'],
      limitations: 'Academic prototype, not a deployed enterprise HR product.',
    },
    {
      slug: 'pharvo',
      title: 'PHARVO — Smart Pharmacy Management',
      category: 'Systems Design',
      kind: 'Academic pharmacy-system requirements and design',
      status: 'Academic design',
      featured: false,
      summary:
        'An academic system design covering sales, inventory, purchasing, digital prescriptions, reporting, and role-based access.',
      myWork: [
        'Documented POS, inventory, and procurement workflows.',
        'Mapped digital-prescription and access-control requirements.',
        'Organized system processes for an academic case study.',
      ],
      technologies: ['Requirements analysis', 'Process mapping', 'System design'],
      limitations: 'The academic deliverables cover requirements and process design. A live pharmacy deployment is outside their scope.',
    },
    {
      slug: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Software',
      kind: 'Responsive portfolio and design exploration',
      status: 'Built',
      featured: false,
      summary:
        'A personal portfolio spanning an earlier published site, this interactive Next.js edition, and a separate 3D design exploration in Figma.',
      myWork: [
        'Developed responsive web layouts and reusable components.',
        'Built the interactive edition with a sticky project showcase, keyboard navigation and reduced-motion support.',
        'Published the existing web portfolio.',
        'Prototyped a separate interactive 3D concept in Figma.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Motion', 'GSAP'],
      limitations: 'The 3D redesign is a concept in progress, not a completed production feature.',
      links: { demo: 'https://shakilmahmud-portfolio.vercel.app' },
    },
    {
      slug: 'inotify',
      title: 'iNotify',
      category: 'Software',
      kind: 'Java notification application',
      status: 'Built',
      featured: false,
      summary:
        'A Java notification application created with object-oriented programming principles and presented at the UIU CSE Project Show.',
      myWork: [
        'Developed a Java application focused on notifications.',
        'Presented the project at a university CSE project show.',
      ],
      technologies: ['Java', 'Object-Oriented Programming'],
    },
    {
      slug: 'youtube-video-app',
      title: 'YouTube Video App',
      category: 'Software',
      kind: 'Frontend API integration exercise',
      status: 'Built',
      featured: false,
      summary:
        'A React learning-project interface for video search using YouTube Data API responses.',
      myWork: [
        'Integrated YouTube Data API responses into a search interface.',
        'Organized UI into reusable React components.',
      ],
      technologies: ['React', 'JavaScript', 'Axios', 'YouTube Data API'],
    },
    {
      slug: 'project-savior',
      title: 'Project Savior — Search & Rescue Rover',
      category: 'Hardware & IoT',
      kind: 'In-development rescue-rover concept',
      status: 'In development',
      featured: false,
      summary:
        'An in-development search-and-rescue rover design using Raspberry Pi, Arduino Mega, and IoT concepts.',
      myWork: ['Exploring an integrated hardware and IoT design for hazard monitoring, victim detection, mapping and communication.'],
      technologies: ['Raspberry Pi', 'Arduino Mega', 'IoT concepts'],
      limitations: 'No field validation is claimed.',
    },
    {
      slug: 'digital-wheelchair',
      title: 'Digital Wheelchair with Advanced Functionality',
      category: 'Hardware & IoT',
      kind: 'Assistive-technology academic project',
      status: 'Presented academic project',
      featured: false,
      summary: 'An academic assistive-technology project presented at the UIU CSE Project Show.',
      myWork: ['Presented the Digital Wheelchair project at the UIU CSE Project Show.'],
      technologies: [],
    },
    {
      slug: 'eid-salami',
      title: 'Eid Salami',
      category: 'Software',
      kind: 'Interactive frontend',
      status: 'Frontend experience',
      featured: false,
      summary: 'A small interactive frontend experience for Eid Salami.',
      myWork: [],
      technologies: [],
    },
  ] satisfies PortfolioProject[],
  research: [
    {
      title: 'MOT-SSL-GRU — Zero-Day IoT Intrusion Detection',
      status: 'Completed academic manuscript (unpublished)',
      summary:
        'Studied GRU-based temporal self-supervised representations for zero-day IoT intrusion detection. The course manuscript compares nine methods on held-out attack families and documents cross-family limitations.',
      importantQualification: 'University-course manuscript; not peer-reviewed or published.',
    },
    {
      title: 'Prompted, Not Taught — Generative AI in Education',
      status: 'Completed team report (unpublished)',
      summary:
        'A university HCI team report based on 22 interviews (18 students and four teachers) about generative AI in Bangladeshi schools and colleges. The team proposed staged hints, comprehension checks, verification prompts and bilingual support.',
      importantQualification: 'Team study; proposed user-centered interactions, not an independently published paper.',
    },
    {
      title: 'EcoToken-BN — Sustainable Bangla NLP',
      status: 'Working manuscript',
      summary:
        'Investigates Bangla tokenization, energy allocation prediction and token reduction simulation in low-resource NLP.',
      importantQualification:
        'Validation is incomplete. The energy estimates are formula-derived allocations. Hardware power savings have yet to be measured.',
    },
    {
      title: 'FGAP — Feature-Gated Adaptive Probing',
      status: 'Conceptual design',
      summary:
        'A final-year architecture concept exploring confidence-gated LLM routing through adaptive probing.',
      importantQualification: 'Conceptual design stage; no experimentally verified performance.',
    },
    {
      title: 'Memory-Efficient Task-Free Continual Learning',
      status: 'Proposed research direction',
      summary: 'A proposed direction exploring catastrophic forgetting in continual learning from non-stationary data streams under memory constraints.',
      importantQualification: 'Research direction, not a validated study.',
    },
    {
      title: 'Cognitive State-Driven Generative Scaffolding',
      status: 'Proposed research framework',
      summary: 'A proposed framework connecting deep knowledge tracing to LLM-generated hints for adaptive STEM tutoring.',
      importantQualification: 'Proposed framework; no validated outcomes.',
    },
  ] satisfies ResearchItem[],
  achievements: [
    'Object-Oriented Programming Contest',
    'Electronics Lab Contest',
  ],
  awardResult: 'First Runner-up',
  awardOrganizer: 'UIU Department of CSE',
  activities: [
    'Presented iNotify and Digital Wheelchair with Advanced Functionality at the UIU CSE Project Show.',
    'Collaborated on academic projects and team-based HCI research.',
    'Gave technical presentations on university project work.',
  ],
  coursesAndTraining: [
    { name: 'Introduction to Generative AI', provider: 'Google', date: 'April 2026' },
    { name: 'Introduction to Large Language Models', provider: 'Google', date: 'April 2026' },
    { name: '5-Day AI Agents Intensive Course with Google', provider: 'Kaggle / Google', date: 'December 2025' },
  ],
  languages: ['Bangla · Native proficiency', 'English · Working proficiency'],
  siteSettings: {
    visualStyle: 'Original cinematic, dark, editorial, motion-rich; inspired by the feel of vividmotion.co, never copied',
    baseColor: '#0B0B0E',
    secondaryColor: '#19191F',
    textColor: '#F4F1EC',
    accentColor: '#C7A6F8',
    mutedColor: '#91909B',
    theme: 'dark',
    priorityAudience: 'Recruiters and internship hiring teams',
    featuredProjectSlugs: [
      'careerpath-ai',
      'mot-ssl-gru-dashboard',
      'personal-automation-system',
    ],
  },
} as const;

export type Portfolio = typeof portfolio;

export type ProjectSlug = typeof portfolio.projects[number]['slug'];

export const courseGroups = [
  { title: "Programming & computing fundamentals", courses: ["Structured Programming Language", "Data Structure and Algorithms", "Object-Oriented Programming"] },
  { title: "Artificial intelligence & data science", courses: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Digital Image Processing"] },
  { title: "Software engineering & system design", courses: ["Software Engineering", "System Analysis and Design", "Human-Computer Interaction"] },
  { title: "Database, systems & networking", courses: ["Database Management System", "Operating System", "Computer Network", "Computer Security"] },
  { title: "Business & management", courses: ["Project Management"] },
] as const;

export type CourseName = typeof courseGroups[number]['courses'][number];

export const careerFocus = [
  {
    id: "software", title: "Software & technology",
    interests: ["Software Engineering", "Frontend Development", "Backend Development", "Full-Stack Development", "Web Development", "Software QA and Testing", "IT Support", "Technical Operations"],
    practice: "Reusable interfaces and database-backed APIs in CareerPath AI and basic pytest interface checks in the research dashboard.",
    transferable: "Debugging, documenting decisions and explaining how a workflow fits together.",
    courses: ["Structured Programming Language", "Data Structure and Algorithms", "Object-Oriented Programming", "Software Engineering", "System Analysis and Design", "Database Management System", "Operating System", "Computer Network", "Computer Security"],
  },
  {
    id: "ai-data", title: "AI & data",
    interests: ["Artificial Intelligence", "Machine Learning", "Junior Data Analysis", "MIS and Reporting", "Data Operations", "Process Automation", "AI Research"],
    practice: "Python and Streamlit for organizing research inputs, comparing experiments and displaying pipeline stages.",
    transferable: "Interpreting data, writing structured reports and communicating the limits of an experiment.",
    courses: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Digital Image Processing", "Database Management System", "Data Structure and Algorithms"],
  },
  {
    id: "design", title: "Design & digital",
    interests: ["UI/UX Design", "Digital Content", "Digital Marketing", "Social Media Marketing", "User and Audience Research"],
    practice: "Responsive components, Figma prototypes and interviews about how students and teachers use generative AI.",
    transferable: "Turning user feedback into design proposals and presenting ideas visually.",
    courses: ["Human-Computer Interaction", "System Analysis and Design"],
  },
  {
    id: "business", title: "Business & corporate",
    interests: ["Business Operations", "General Corporate", "Administration", "Office Support", "Management Trainee", "Graduate Trainee", "Project Support and Coordination"],
    practice: "Employee training assignments, pharmacy procurement and role-based reporting mapped in academic designs.",
    transferable: "Organizing records, documenting requirements and following up on tasks.",
    courses: ["Project Management", "System Analysis and Design", "Database Management System"],
  },
  {
    id: "people", title: "People & customer-focused roles",
    interests: ["Human Resources Support", "Recruitment Support", "Talent Acquisition Internships", "Customer Relations", "Customer Service", "Business Development", "Sales Support"],
    practice: "Assessment records, training assignment and role-based follow-up in an academic employee-development prototype.",
    transferable: "Listening during interviews, organizing information and communicating next steps.",
    courses: ["Human-Computer Interaction", "Project Management", "System Analysis and Design"],
  },
  {
    id: "research", title: "Research & innovation",
    interests: ["Academic Research", "Research Internships", "Emerging Technology", "IoT and System Innovation"],
    practice: "Documented experiment comparisons, user interviews and an in-development IoT rover design.",
    transferable: "Formulating questions, comparing evidence and presenting limitations.",
    courses: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Human-Computer Interaction", "Computer Security"],
  },
] as const satisfies readonly {
  id: string; title: string; interests: readonly string[]; practice: string;
  transferable: string; courses: readonly CourseName[];
}[];

export type CareerId = typeof careerFocus[number]['id'];
export type ProjectContext = {
  careers: readonly CareerId[];
  courses: readonly CourseName[];
  relevance: string;
  transferable: string;
};

export const projectContext: Record<ProjectSlug, ProjectContext> = {
  "careerpath-ai": {
    careers: ["software", "ai-data", "design", "business"], courses: ["Software Engineering", "System Analysis and Design", "Database Management System"],
    relevance: "Structuring career guidance around profiles gives a user a clear next step.", transferable: "Requirements analysis and workflow design",
  },
  "mot-ssl-gru-dashboard": {
    careers: ["software", "ai-data", "research"], courses: ["Artificial Intelligence", "Machine Learning", "Software Engineering"],
    relevance: "A shared pipeline view makes it easier to track research inputs and experiment notes.", transferable: "Experiment documentation and comparison",
  },
  "personal-automation-system": {
    careers: ["software", "ai-data", "business"], courses: ["Structured Programming Language", "Software Engineering"],
    relevance: "Recurring reminders and file organization address routine administrative work.", transferable: "Task organization and structured follow-up",
  },
  "corporate-training-skill-evaluation": {
    careers: ["business", "people", "ai-data"], courses: ["System Analysis and Design", "Database Management System", "Project Management"],
    relevance: "The prototype connects employee skill assessments to training assignments, records and follow-up.", transferable: "Information coordination and structured reporting",
  },
  "pharvo": {
    careers: ["business", "software", "ai-data"], courses: ["System Analysis and Design", "Database Management System", "Software Engineering"],
    relevance: "Mapping purchasing, stock and sales clarifies how information moves between pharmacy roles.", transferable: "Requirements documentation and process analysis",
  },
  "personal-portfolio": {
    careers: ["software", "design"], courses: ["Software Engineering", "Human-Computer Interaction"],
    relevance: "Direct case-study links and keyboard navigation help recruiters find relevant evidence.", transferable: "Visual presentation and written communication",
  },
  "inotify": {
    careers: ["software"], courses: ["Object-Oriented Programming"],
    relevance: "The university project show provided a setting to explain an object-oriented application.", transferable: "Technical presentation",
  },
  "youtube-video-app": {
    careers: ["software", "design"], courses: ["Structured Programming Language", "Software Engineering"],
    relevance: "A search interface translates API responses into browsable results.", transferable: "Breaking an interface into reusable components",
  },
  "project-savior": {
    careers: ["research", "software"], courses: ["System Analysis and Design", "Computer Network"],
    relevance: "The concept explores communication and hazard monitoring for search and rescue.", transferable: "System planning",
  },
  "digital-wheelchair": {
    careers: ["research"], courses: [],
    relevance: "The UIU CSE Project Show provided a setting to present an assistive-technology project.", transferable: "Academic technical presentation",
  },
  "eid-salami": {
    careers: ["design", "software"], courses: [],
    relevance: "", transferable: "",
  },
};

export type SkillGroup = { id: string; title: string; skills: readonly string[]; projects: readonly ProjectSlug[] };

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "programming", title: "Programming languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Object-Oriented Programming"],
    projects: ["inotify", "careerpath-ai"],
  },
  {
    id: "web", title: "Web & software development",
    skills: ["React", "Next.js", "Django", "Django REST Framework", "Tailwind CSS", "Vite", "REST APIs", "Responsive Web Development", "Component-Based Development", "Reusable Components", "Software Development Fundamentals"],
    projects: ["careerpath-ai", "youtube-video-app"],
  },
  {
    id: "ai", title: "Artificial intelligence & machine learning",
    skills: ["Artificial Intelligence Fundamentals", "Machine Learning Fundamentals", "Generative AI", "Large Language Model Concepts", "GRU Concepts", "Self-Supervised Learning Concepts", "Python Automation", "Experiment Documentation", "AI-Assisted Research"],
    projects: ["mot-ssl-gru-dashboard", "personal-automation-system"],
  },
  {
    id: "reporting", title: "Data analysis, MIS & reporting",
    skills: ["Data Analysis", "Data Management", "Data Handling", "PostgreSQL", "SQL", "Database Management Systems", "Microsoft Excel", "Structured Reporting", "Jupyter Notebook", "Google Colab", "Streamlit", "Experiment Comparison", "Research Data Interpretation"],
    projects: ["mot-ssl-gru-dashboard", "corporate-training-skill-evaluation"],
  },
  {
    id: "design", title: "UI/UX & digital design",
    skills: ["Figma", "Figma Make", "Wireframing", "Interactive Prototyping", "User-Centered Design", "Responsive UI Design", "Reusable UI Components", "Accessibility Basics", "Visual Presentation", "User Research"],
    projects: ["personal-portfolio"],
  },
  {
    id: "office", title: "Microsoft Office & administration",
    skills: ["Microsoft Office", "Microsoft 365", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Data Entry", "Excel Formulas", "Excel Charts", "Document Formatting", "Presentation Preparation", "Report Preparation", "Documentation", "Record Organization", "Information Coordination"],
    projects: ["corporate-training-skill-evaluation"],
  },
  {
    id: "operations", title: "Business & operations",
    skills: ["Workflow Design", "Process Analysis", "Requirements Gathering", "Requirements Documentation", "Information Management", "Task Organization", "Coordination", "Project Coordination Concepts", "Structured Reporting", "Organized Follow-up", "Business Process Understanding", "Process Mapping"],
    projects: ["pharvo", "corporate-training-skill-evaluation"],
  },
  {
    id: "content", title: "Digital content & marketing foundations",
    skills: ["Audience Research", "Content Ideation", "Presentation Writing", "Visual Content Organization", "AI-Assisted Content Ideation", "AI-Assisted Research", "Written Communication"],
    projects: ["personal-portfolio"],
  },
  {
    id: "qa", title: "Software QA & technical support",
    skills: ["Software Debugging", "Basic pytest UI Checks", "Interface Verification", "Application Workflow Verification", "Structured Problem Analysis", "Technical Documentation", "Software Troubleshooting Fundamentals"],
    projects: ["mot-ssl-gru-dashboard"],
  },
  {
    id: "academic", title: "Research & academic competencies",
    skills: ["Research Analysis", "Academic Writing", "User Interviews", "Research Summaries", "Technical Writing", "Experiment Documentation", "Research Reporting", "LaTeX", "Overleaf", "HCI Research"],
    projects: ["mot-ssl-gru-dashboard"],
  },
  {
    id: "tools", title: "Development tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "Motion", "GSAP"],
    projects: ["personal-portfolio"],
  },
  {
    id: "exposure", title: "Additional academic exposure",
    skills: ["C", "C++", "Node.js", "WordPress", "Raspberry Pi", "Arduino Mega", "IoT System Design Concepts"],
    projects: ["project-savior"],
  },
  {
    id: "professional", title: "Professional & interpersonal skills",
    skills: ["Communication", "Written Communication", "Teamwork", "Problem-Solving", "Analytical Thinking", "Adaptability", "Attention to Detail", "Presentation Skills", "Organizational Skills", "Task Coordination", "Organized Follow-up"],
    projects: ["inotify", "corporate-training-skill-evaluation"],
  },
  {
    id: "languages", title: "Languages",
    skills: portfolio.languages,
    projects: [],
  },
];

export const learningGroups = [
  { id: "hr", title: "Human resources & recruitment", topics: ["CV Screening", "Shortlisting", "Candidate Sourcing", "Interview Scheduling", "Applicant Databases and Trackers", "Candidate Communication", "Talent-Market Research"] },
  { id: "marketing", title: "Digital marketing", topics: ["Social Media Marketing", "Online Marketing", "Content Calendars", "Brand Messaging", "Campaign Monitoring", "Web Analytics"] },
  { id: "qa", title: "Software QA", topics: ["Manual Test Cases", "Regression Testing", "Issue Reporting", "API Testing"] },
  { id: "business", title: "Business development", topics: ["Customer Inquiry Handling", "Lead Follow-up", "Sales Coordination"] },
  { id: "support", title: "IT support", topics: ["Help-Desk Workflows", "Infrastructure Support Processes"] },
] as const;
