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
  status: 'MVP' | 'Built' | 'Prototype' | 'Academic design' | 'Research demonstrator' | 'In development';
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
  status: 'Completed academic manuscript (unpublished)' | 'Completed team report (unpublished)' | 'Working manuscript' | 'Conceptual design' | 'Proposed research direction';
  summary: string;
  importantQualification: string;
};

export const portfolio = {
  identity: {
    name: 'Shakil Mahmud',
    firstName: 'Shakil',
    location: 'Dhaka, Bangladesh',
    role: 'Computer Science & Data Science Student',
    eyebrow: 'STUDENT / DEVELOPER / RESEARCHER',
    headline: 'Building useful software. Exploring intelligent systems. Designing better experiences.',
    introduction:
      'I am a Computer Science and Engineering undergraduate majoring in Data Science at United International University. I build full-stack applications, explore applied AI and human-centered research, and design structured digital workflows.',
    careerGoal:
      'Seeking internships and entry-level opportunities in software engineering, AI/data, and related technical roles, with an interest in systems and business operations.',
    availability: 'Open to relevant internship and entry-level opportunities',
    portrait: '/images/shakil-portrait.jpg',
    portraitAlt: 'Professional portrait of Shakil Mahmud',
  },
  contact: {
    email: 'shakilmahmud212121@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/shakil-mahmud212',
    github: 'https://github.com/shakil212',
    previousPortfolio: 'https://shakilmahmud-portfolio.vercel.app',
    // Deliberately omit the phone number from the public-facing site by default.
    resumeUrl: null as string | null, // e.g. '/resume.pdf' after user reviews file and uploads it.
  },
  about: {
    short:
      'My work sits at the intersection of software engineering, applied AI, research, and practical information systems. I enjoy turning complicated requirements into usable interfaces, repeatable workflows, and clearly documented projects.',
    long:
      'I am in the final year of my BSc in Computer Science and Engineering, majoring in Data Science at United International University in Dhaka. My experience spans full-stack web development, Python-based automation, machine-learning research, Figma prototyping, and academic system design. I value thoughtful interfaces, clear communication, and honest evaluation of what a project has—and has not—demonstrated. I am looking for opportunities to contribute, learn from experienced teams, and develop reliable real-world systems.',
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
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management',
        'Artificial Intelligence',
        'Neural Networks',
        'Software Engineering',
        'Human–Computer Interaction',
      ],
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
        'Completed a three-month AI & Machine Learning internship, applying ML fundamentals to project-based tasks.',
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
      limitations: 'Deployment hardening remains in progress; do not describe as production-ready.',
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
        'An academic system design covering sales, inventory, purchasing, digital prescriptions, and role-based access.',
      myWork: [
        'Documented POS, inventory, and procurement workflows.',
        'Mapped digital-prescription and access-control requirements.',
        'Organized system processes for an academic case study.',
      ],
      technologies: ['Requirements analysis', 'Process mapping', 'System design'],
      limitations: 'Requirements and process design only; do not claim a live pharmacy system.',
    },
    {
      slug: 'personal-portfolio',
      title: 'Personal Portfolio',
      category: 'Software',
      kind: 'Responsive portfolio and design exploration',
      status: 'Built',
      featured: false,
      summary:
        'A published responsive portfolio with an independent interactive 3D redesign concept being explored in Figma.',
      myWork: [
        'Developed responsive web layouts and reusable components.',
        'Published the existing web portfolio.',
        'Prototyped a separate interactive 3D concept in Figma.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
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
      technologies: ['React', 'Axios', 'YouTube Data API'],
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
      myWork: ['Exploring an integrated hardware and IoT system design.'],
      technologies: ['Raspberry Pi', 'Arduino Mega', 'IoT concepts'],
      limitations: 'No field validation is claimed.',
    },
  ] satisfies PortfolioProject[],
  research: [
    {
      title: 'MOT-SSL-GRU — Zero-Day IoT Intrusion Detection',
      status: 'Completed academic manuscript (unpublished)',
      summary:
        'Compared nine methods on held-out IoT attack families and documented evaluation results and cross-family limitations.',
      importantQualification: 'University-course manuscript; not peer-reviewed or published.',
    },
    {
      title: 'Prompted, Not Taught — Generative AI in Education',
      status: 'Completed team report (unpublished)',
      summary:
        'A university HCI team report based on 22 interviews (18 students and four teachers) investigating generative AI use in Bangladeshi education.',
      importantQualification: 'Team study; proposed user-centered interactions, not an independently published paper.',
    },
    {
      title: 'EcoToken-BN — Sustainable Bangla NLP',
      status: 'Working manuscript',
      summary:
        'Investigates Bangla tokenization and formula-derived energy allocations in low-resource NLP.',
      importantQualification:
        'Validation incomplete; do not claim directly measured hardware energy savings.',
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
      summary: 'A proposed direction for learning from non-stationary streams under memory constraints.',
      importantQualification: 'Research direction, not a validated study.',
    },
    {
      title: 'Cognitive State-Driven Generative Scaffolding',
      status: 'Proposed research direction',
      summary: 'A proposed framework connecting knowledge tracing to LLM-generated STEM learning hints.',
      importantQualification: 'Proposed framework; no validated outcomes.',
    },
  ] satisfies ResearchItem[],
  skills: {
    programming: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'C/C++ (academic)'],
    web: ['React', 'Next.js', 'Django', 'Django REST Framework', 'Tailwind CSS', 'REST APIs', 'Vite'],
    dataAndAI: ['PostgreSQL', 'Streamlit', 'Jupyter Notebook', 'Google Colab', 'ML fundamentals', 'GRU concepts', 'Self-supervised learning concepts', 'LLM concepts'],
    designAndResearch: ['Figma', 'Figma Make', 'Wireframing', 'Responsive UI', 'Prototyping', 'Requirements gathering', 'HCI research', 'Technical writing'],
    workflowsAndOffice: ['Microsoft 365', 'Word', 'PowerPoint', 'Excel (intermediate)', 'Reporting', 'Process mapping', 'Documentation'],
    developerTools: ['Git', 'GitHub', 'VS Code', 'LaTeX', 'pytest (basic)'],
  },
  achievements: [
    '1st Runner-Up — Object-Oriented Programming Contest, UIU Department of CSE',
    '1st Runner-Up — Electronics Lab Contest, UIU Department of CSE',
    'Presented iNotify (Java) at the UIU CSE Project Show',
    'Presented a Digital Wheelchair assistive-technology project at the UIU CSE Project Show',
  ],
  coursesAndTraining: [
    { name: 'Introduction to Generative AI', provider: 'Google', year: '2026' },
    { name: 'Introduction to Large Language Models', provider: 'Google', year: '2026' },
    { name: '5-Day AI Agents Intensive', provider: 'Google / Kaggle', year: '2025' },
  ],
  languages: ['Bangla (native)', 'English (working proficiency)'],
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
