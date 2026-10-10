export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink?: string;
  image: string;
  category: "3D / WebGL" | "AI & Systems" | "Fintech HUD" | "Metaverse" | "Enterprise & Cloud" | "Full-Stack";
  year: string;
  metrics: string;
  /** Extended fields for the dedicated project detail page */
  role: string;
  extendedDescription: string;
  features: string[];
  challenges: string[];
  gallery: string[];
}

export interface SkillItem {
  name: string;
  category: "Frontend & UI" | "Backend & API" | "Databases & Tools" | "AI & Real-Time" | "Architecture & Soft Skills";
  proficiency: number;
  icon: string;
  desc: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  badge: string;
}

export interface PortfolioData {
  aboutMe: {
    name: string;
    title: string;
    location: string;
    tagline: string;
    shortBio: string;
    extendedBio: string;
    status: string;
    avatar: string;
    stats: {
      experienceYears: string;
      projectsCount: string;
      certificatesCount: string;
      awardsCount: string;
    };
    contact: {
      email: string;
      phone: string;
      github: string;
      linkedin: string;
      twitter: string;
      portfolioUrl: string;
      resumeUrl: string;
      location: string;
    };
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  testimonials: TestimonialItem[];
  awards: AwardItem[];
}

export const portfolioData: PortfolioData = {
  aboutMe: {
    name: "Deepu Paswan",
    title: "Full-Stack Developer // .NET Core & MERN Stack",
    location: "Rajasthan, India // Global Remote",
    tagline: "Architecting scalable enterprise applications, high-performance RESTful APIs, and AI-powered real-time platforms.",
    shortBio: "Full-Stack Developer with 2+ years of experience in the MERN stack (including internship) and 1+ year in .NET Core. Skilled in building scalable web applications, responsive UIs, and robust RESTful APIs. Proficient in MongoDB and MySQL with strong full-stack development expertise.",
    extendedBio: "Specialized in engineering enterprise-grade solutions across the entire lifecycle—from architecting .NET Core Web APIs and Angular modules to building real-time MERN applications integrated with OpenAI, WebSockets, and SSMS database optimization.",
    status: "SYSTEM READY // OPEN FOR FULL-STACK ROLES",
    avatar: "/profile.png",
    stats: {
      experienceYears: "2+ YRS",
      projectsCount: "2+ PROJ",
      certificatesCount: "2+ CERTS",
      awardsCount: "8.78 GPA",
    },
    contact: {
      email: "paswandeepu140@gmail.com",
      phone: "+91-89553-72970",
      github: "https://github.com/deepu-paswan-1123",
      linkedin: "https://github.com/deepu-paswan-1123",
      twitter: "https://github.com/deepu-paswan-1123",
      portfolioUrl: "https://dpportfolio87.netlify.app/",
      resumeUrl: "https://dpportfolio87.netlify.app/",
      location: "Rajasthan, India (UTC+5:30)",
    },
  },

  experience: [
    {
      company: "Apprido Solution",
      role: "MERN Developer (Full-time)",
      location: "Remote",
      period: "Month Year - Present",
      highlights: [
        "Frontend Development: Developed responsive and user-friendly interfaces using React.js, enhancing overall user experience.",
        "Backend Development: Built and maintained RESTful APIs using Node.js and Express.js, ensuring efficient application functionality.",
        "Database Management: Worked with MongoDB for data modeling, query optimization, and application scalability.",
        "Client Interaction: Collaborated with clients to gather requirements, provide updates, and deliver solutions aligned with business needs.",
      ],
    },
    {
      company: "Pizone Infotech",
      role: "FullStack Developer (Full-time)",
      location: "OnSite",
      period: "March 2025 - Present",
      highlights: [
        "Frontend Development (Angular): Developed and enhanced responsive user interfaces using Angular, improving user experience and application performance.",
        "Backend Development (C# & .NET Core): Worked on RESTful API development and integration using C# and .NET Core, ensuring secure and scalable data communication.",
        "Debugging & Performance Optimization: Identified and resolved application bugs, optimized API responses, and improved system stability across frontend and backend modules.",
        "UI & Feature Enhancement: Collaborated with cross-functional teams to enhance existing features and implement new functionalities based on business requirements.",
      ],
    },
    {
      company: "urbanchat",
      role: "FullStack Developer (Full-time)",
      location: "Remote",
      period: "Jan 2024 - Jan 2025",
      highlights: [
        "UI Enhancement & Performance Optimization: Redesigned and optimized the user interface to improve API response handling and enhance overall user experience, reducing load time and improving responsiveness.",
        "API Development & Integration: Developed and integrated RESTful APIs to enable seamless communication between frontend and backend services, ensuring efficient data flow and system scalability.",
        "Real-Time Features: WebSocket-based real-time updates for posts and threads to ensure low-latency communication and live content synchronization.",
      ],
    },
  ],

  education: [
    {
      institution: "Surendera Dental College and Research Institute",
      degree: "Bachelor of Technology - Computer Science and Engineering (CSE)",
      location: "Rajasthan, India",
      period: "July 2022 - June 2026",
      gpa: "8.78 GPA",
    },
  ],

  skills: [
    {
      name: ".NET Core Web API",
      category: "Backend & API",
      proficiency: 94,
      icon: "Cpu",
      desc: "Secure C# RESTful APIs, dependency injection, middleware, enterprise architecture",
    },
    {
      name: "React.js",
      category: "Frontend & UI",
      proficiency: 96,
      icon: "Layers",
      desc: "Component lifecycle, state management, hooks, responsive modern UI engineering",
    },
    {
      name: "Angular",
      category: "Frontend & UI",
      proficiency: 90,
      icon: "Sparkles",
      desc: "Enterprise modules, TypeScript services, RxJS observables, reactive forms",
    },
    {
      name: "Node.js & Express",
      category: "Backend & API",
      proficiency: 95,
      icon: "Server",
      desc: "High-throughput asynchronous servers, middleware pipelines, authentication",
    },
    {
      name: "C#",
      category: "Backend & API",
      proficiency: 92,
      icon: "Code2",
      desc: "Object-oriented programming, LINQ queries, asynchronous tasks, .NET runtime",
    },
    {
      name: "JavaScript & TypeScript",
      category: "Frontend & UI",
      proficiency: 96,
      icon: "Zap",
      desc: "Modern ES6+, strict type systems, async patterns, DOM manipulation",
    },
    {
      name: "MongoDB",
      category: "Databases & Tools",
      proficiency: 94,
      icon: "Box",
      desc: "NoSQL schema modeling, aggregation pipelines, query indexing & scalability",
    },
    {
      name: "SQL Server (SSMS) & MySQL",
      category: "Databases & Tools",
      proficiency: 92,
      icon: "Activity",
      desc: "Relational database schema design, stored procedures, joins, query optimization",
    },
    {
      name: "OpenAI API & AI Agents",
      category: "AI & Real-Time",
      proficiency: 90,
      icon: "Compass",
      desc: "Automated calling/chat agents, LLM integrations, intelligent web crawlers",
    },
    {
      name: "WebSockets & Real-Time",
      category: "AI & Real-Time",
      proficiency: 92,
      icon: "Radio",
      desc: "Low-latency live chat feeds, event streaming, thread synchronization",
    },
    {
      name: "GIT Version Control",
      category: "Databases & Tools",
      proficiency: 95,
      icon: "Flame",
      desc: "Branching strategies, pull requests, collaborative CI/CD workflows",
    },
    {
      name: "Leadership & Communication",
      category: "Architecture & Soft Skills",
      proficiency: 92,
      icon: "Palette",
      desc: "Client requirement analysis, team cross-collaboration, technical documentation, public speaking",
    },
  ],

  projects: [
    {
      id: "01",
      name: "FLEX – ENTERPRISE RESOURCE MANAGEMENT",
      tagline: "Enterprise Hospital & Organizational Operations System",
      description: "Enterprise-level application engineered for managing critical data and operations of hospitals and large organizations. Features modular Angular frontend interfaces, scalable C# .NET Core Web APIs, and high-performance SQL Server (SSMS) database design.",
      tech: ["Angular", ".NET Core Web API", "SQL Server (SSMS)", "C#", "TypeScript", "HTML5", "CSS3"],
      liveLink: "https://dpportfolio87.netlify.app/",
      githubLink: "https://github.com/deepu-paswan-1123",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      category: "Enterprise & Cloud",
      year: "2024 - 2025",
      metrics: "Enterprise Grade // Sub-50ms APIs",
      role: "Full-Stack Developer (.NET Core & Angular)",
      extendedDescription: "Flex is an enterprise-level resource management system designed for hospitals and large organizations. I was responsible for end-to-end development — from architecting the Angular frontend modules with lazy-loaded routes and reactive forms, to engineering high-performance .NET Core Web APIs with optimized SQL Server stored procedures. The system handles patient records, appointment scheduling, staff management, inventory tracking, and real-time operational dashboards. Built with enterprise security standards including JWT authentication, role-based access control, and audit logging.",
      features: [
        "Modular Angular frontend with lazy-loaded feature modules and shared component library",
        "RESTful .NET Core Web API with repository pattern and dependency injection",
        "SQL Server database with optimized stored procedures and indexed queries (sub-50ms response)",
        "JWT-based authentication with role-based access control (Admin, Doctor, Staff)",
        "Real-time operational dashboards with live data refresh and chart visualizations",
        "Patient record management with CRUD operations and advanced search/filter",
        "Appointment scheduling system with conflict detection and automated reminders",
        "Inventory and resource tracking module for hospital supply chain management",
        "Comprehensive audit logging for compliance and data integrity",
        "Responsive UI compatible across desktop, tablet, and mobile devices",
      ],
      challenges: [
        "Optimizing complex SQL queries with multiple JOINs to achieve sub-50ms API response times",
        "Implementing role-based access control across 15+ API endpoints with granular permissions",
        "Building a real-time dashboard that handles concurrent data updates without performance degradation",
        "Designing a modular Angular architecture that allows teams to develop features independently",
        "Managing state across deeply nested forms with cross-field validation and real-time error feedback",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551190822-a9ce113ac100?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      id: "02",
      name: "URBANCHAT – AI COMMUNICATION & BOOKING",
      tagline: "AI-Powered Automated Client Interaction & Calling Platform",
      description: "Full-stack AI-driven communication system featuring automated client interactions, meeting scheduling bots, and web crawlers that extract data to embed intelligent chat agents into external websites in real time.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Web Crawling", "WebSockets"],
      liveLink: "https://dpportfolio87.netlify.app/",
      githubLink: "https://github.com/deepu-paswan-1123",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      category: "AI & Systems",
      year: "2024",
      metrics: "OpenAI Integrated // Real-Time WebSockets",
      role: "Full-Stack Developer (MERN Stack & OpenAI Integration)",
      extendedDescription: "Urbanchat is an AI-powered communication and booking platform that automates client interactions through intelligent chat agents and automated calling systems. As the full-stack developer, I built the entire MERN stack application from the ground up — designing the React.js frontend with real-time WebSocket feeds, engineering the Node.js/Express backend with OpenAI API integrations, and implementing MongoDB for scalable data persistence. The platform includes web crawlers that extract business data to train custom AI agents, which are then embedded as chat widgets on client websites for 24/7 automated customer support and appointment booking.",
      features: [
        "OpenAI-powered intelligent chat agents with context-aware responses and conversation memory",
        "Automated calling system using AI voice agents for appointment scheduling and follow-ups",
        "Real-time WebSocket communication for live chat feeds with sub-second message delivery",
        "Web crawler engine that extracts and processes business data to train custom AI models",
        "Embeddable chat widget SDK for seamless integration into third-party websites",
        "Meeting scheduling bot with calendar integration and conflict resolution",
        "MongoDB aggregation pipelines for analytics dashboards and conversation insights",
        "Multi-tenant architecture supporting isolated data for multiple business clients",
        "Real-time notification system for new leads, bookings, and conversation alerts",
        "Responsive React.js frontend with optimistic UI updates and skeleton loading states",
      ],
      challenges: [
        "Integrating OpenAI API with streaming responses while maintaining conversation context across sessions",
        "Building a reliable WebSocket infrastructure that handles 1000+ concurrent connections",
        "Designing a web crawler that respects robots.txt while efficiently extracting structured business data",
        "Implementing real-time thread synchronization across multiple browser tabs and devices",
        "Optimizing MongoDB queries for chat history retrieval with pagination across millions of messages",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531746790095-6c10a5e8cd82?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ],

  certificates: [
    {
      id: "CERT-01",
      title: "Pizone Internship Certificate",
      issuer: "Pizone Infotech",
      date: "May 2023",
      credentialId: "PIZONE-INT-202305",
      verifyUrl: "https://github.com/deepu-paswan-1123",
      skills: ["FullStack Development", "Angular", ".NET Core", "RESTful APIs", "SQL Server"],
    },
    {
      id: "CERT-02",
      title: "Urbanchat Internship Certificate",
      issuer: "urbanchat",
      date: "September 2023",
      credentialId: "URBAN-INT-202309",
      verifyUrl: "https://github.com/deepu-paswan-1123",
      skills: ["MERN Stack", "React.js", "Node.js", "OpenAI Integration", "WebSockets"],
    },
  ],

  testimonials: [
    {
      id: "TEST-01",
      quote: "Deepu demonstrated exceptional full-stack problem solving on our enterprise systems. His mastery of .NET Core Web APIs and Angular delivered highly performant and secure architectures.",
      author: "Engineering Lead",
      role: "Senior Architect",
      company: "Pizone Infotech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: "TEST-02",
      quote: "Deepu's integration of the OpenAI API and real-time WebSocket communication in Urbanchat significantly boosted our client booking automation and response latency.",
      author: "Product Director",
      role: "Co-Founder",
      company: "urbanchat",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      rating: 5,
    },
  ],

  awards: [
    {
      id: "AWD-01",
      title: "Academic Excellence - B.Tech CSE (8.78 GPA)",
      organization: "Surendera Dental College & Research Institute",
      year: "2022 - 2026",
      category: "Computer Science Engineering",
      badge: "8.78 GPA",
    },
    {
      id: "AWD-02",
      title: "Full-Stack Project Delivery Award",
      organization: "Enterprise Solutions",
      year: "2024",
      category: ".NET Core & MERN Excellence",
      badge: "VERIFIED DEV",
    },
  ],
};

