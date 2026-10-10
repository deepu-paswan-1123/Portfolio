import { portfolioData } from "@/data/portfolioData";

export interface AIResponse {
  answer: string;
  category: "experience" | "skills" | "projects" | "education" | "contact" | "general";
  quickSuggestions?: string[];
  confidence: number;
}

const RESUME_KNOWLEDGE_BASE = {
  name: portfolioData.aboutMe.name,
  title: portfolioData.aboutMe.title,
  location: portfolioData.aboutMe.location,
  email: portfolioData.aboutMe.contact.email,
  phone: portfolioData.aboutMe.contact.phone,
  github: portfolioData.aboutMe.contact.github,
  portfolio: portfolioData.aboutMe.contact.portfolioUrl,
  education: portfolioData.education[0],
  experience: portfolioData.experience,
  skills: portfolioData.skills,
  projects: portfolioData.projects,
  certificates: portfolioData.certificates,
  stats: portfolioData.aboutMe.stats,
};

export function queryDeepuAI(userQuery: string): AIResponse {
  const query = userQuery.toLowerCase().trim();

  // 1. Contact / Hire / Phone / Email / GitHub
  if (
    query.includes("contact") ||
    query.includes("hire") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("mobile") ||
    query.includes("reach") ||
    query.includes("call") ||
    query.includes("github") ||
    query.includes("portfolio") ||
    query.includes("connect")
  ) {
    return {
      category: "contact",
      confidence: 0.98,
      answer: `You can easily connect with **Deepu Paswan** through any of the following direct channels:

• **📧 Email**: [${RESUME_KNOWLEDGE_BASE.email}](mailto:${RESUME_KNOWLEDGE_BASE.email})
• **📱 Mobile / Phone**: [${RESUME_KNOWLEDGE_BASE.phone}](tel:${RESUME_KNOWLEDGE_BASE.phone})
• **💻 GitHub Profile**: [github.com/deepu-paswan-1123](${RESUME_KNOWLEDGE_BASE.github})
• **🌐 Live Portfolio**: [${RESUME_KNOWLEDGE_BASE.portfolio}](${RESUME_KNOWLEDGE_BASE.portfolio})
• **📍 Location**: ${RESUME_KNOWLEDGE_BASE.location}

Deepu is currently **actively open for full-stack developer roles** (Remote or On-Site) across MERN and .NET Core stacks!`,
      quickSuggestions: [
        "What is Deepu's tech stack?",
        "Tell me about the Urbanchat AI project",
        "What is his work experience?",
      ],
    };
  }

  // 2. Urbanchat / AI Project / Web Crawling / OpenAI
  if (
    query.includes("urbanchat") ||
    query.includes("ai project") ||
    query.includes("openai") ||
    query.includes("booking") ||
    query.includes("crawler") ||
    query.includes("calling agent") ||
    query.includes("chat agent")
  ) {
    const project = RESUME_KNOWLEDGE_BASE.projects.find((p) => p.name.includes("URBANCHAT")) || RESUME_KNOWLEDGE_BASE.projects[1];
    return {
      category: "projects",
      confidence: 0.96,
      answer: `**${project.name}** is an AI-powered communication and automated client booking platform engineered by Deepu Paswan:

• **Key Capabilities**:
  - Developed AI-based calling and chat agents that interact naturally with users and automate meeting scheduling.
  - Engineered intelligent web crawlers to scrape data and dynamically embed interactive chat widgets into external client websites.
  - Implemented real-time low-latency WebSocket synchronization for instant live communication and thread updates.
• **Technology Stack**: \`MongoDB\`, \`Express.js\`, \`React.js\`, \`Node.js\`, \`OpenAI API\`, \`WebSockets\`, \`Web Crawling\`.
• **Impact**: Drastically reduced scheduling overhead with intelligent automated conversational workflows.`,
      quickSuggestions: [
        "Tell me about the Flex ERM project",
        "What is his experience in MERN stack?",
        "How do I contact Deepu?",
      ],
    };
  }

  // 3. Flex Project / Enterprise Resource Management / Hospital System
  if (
    query.includes("flex") ||
    query.includes("erm") ||
    query.includes("hospital") ||
    query.includes("enterprise") ||
    query.includes("management system")
  ) {
    const project = RESUME_KNOWLEDGE_BASE.projects.find((p) => p.name.includes("FLEX")) || RESUME_KNOWLEDGE_BASE.projects[0];
    return {
      category: "projects",
      confidence: 0.96,
      answer: `**${project.name}** is an enterprise-grade hospital and organizational operations platform:

• **Role & Architecture**:
  - Built responsive, modular front-end applications using **Angular** and TypeScript.
  - Architected scalable, secure RESTful APIs using **C# & .NET Core Web API**.
  - Designed relational database schemas and optimized complex queries in **SQL Server (SSMS)**.
• **Technology Stack**: \`Angular\`, \`.NET Core Web API\`, \`SQL Server (SSMS)\`, \`C#\`, \`TypeScript\`, \`HTML5\`, \`CSS3\`.
• **Outcome**: Delivered sub-50ms API endpoints and streamlined mission-critical administrative workflows.`,
      quickSuggestions: [
        "Tell me about Urbanchat AI project",
        "What is Deepu's experience in .NET Core?",
        "What are his core technical skills?",
      ],
    };
  }

  // 4. Work Experience / Companies / Apprido / Pizone / Urbanchat
  if (
    query.includes("experience") ||
    query.includes("company") ||
    query.includes("companies") ||
    query.includes("work") ||
    query.includes("apprido") ||
    query.includes("pizone") ||
    query.includes("job") ||
    query.includes("roles")
  ) {
    return {
      category: "experience",
      confidence: 0.95,
      answer: `**Deepu Paswan** has **2+ years of full-stack engineering experience** across MERN and .NET Core stacks:

1. **Apprido Solution** *(Remote)* — **MERN Developer (Full-time)**
   • Built responsive React.js interfaces and scalable Node.js/Express REST APIs.
   • Handled MongoDB data modeling, query indexing, and client requirement delivery.

2. **Pizone Infotech** *(OnSite)* — **FullStack Developer (Full-time)** [March 2025 – Present]
   • Engineered Angular front-end modules and C# .NET Core RESTful APIs.
   • Resolved system bottlenecks, optimized API responses, and collaborated with cross-functional teams.

3. **urbanchat** *(Remote)* — **FullStack Developer (Full-time)** [Jan 2024 – Jan 2025]
   • Redesigned UI for improved API response handling and latency reduction.
   • Built WebSocket-based real-time synchronized features and OpenAI conversational agents.`,
      quickSuggestions: [
        "What are Deepu's technical skills?",
        "Where did he study and what is his GPA?",
        "How can I get in touch with Deepu?",
      ],
    };
  }

  // 5. Skills / Tech Stack / Languages / Frameworks / Databases
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("language") ||
    query.includes("framework") ||
    query.includes("react") ||
    query.includes("angular") ||
    query.includes(".net") ||
    query.includes("node") ||
    query.includes("c#") ||
    query.includes("mongo") ||
    query.includes("sql") ||
    query.includes("database")
  ) {
    return {
      category: "skills",
      confidence: 0.97,
      answer: `Here is a breakdown of **Deepu Paswan's technical competencies**:

• **💻 Programming Languages**: \`C#\`, \`JavaScript (ES6+)\`, \`TypeScript\`, \`SQL\`
• **⚡ Frameworks & Runtimes**: \`React.js\`, \`Angular\`, \`.NET Core Web API\`, \`Node.js\`, \`Express.js\`
• **🗄️ Databases & Tools**: \`MongoDB\`, \`SQL Server (SSMS)\`, \`MySQL\`, \`GIT\`, \`Postman\`
• **🤖 AI & Real-Time**: \`OpenAI API\`, \`WebSockets\`, \`Web Crawling\`, \`RESTful APIs\`
• **🤝 Soft & Leadership Skills**: \`Technical Leadership\`, \`Client Interaction\`, \`Technical Writing\`, \`Public Speaking\``,
      quickSuggestions: [
        "Tell me about the Flex ERM project",
        "Tell me about the Urbanchat AI project",
        "What is his education background?",
      ],
    };
  }

  // 6. Education / College / Degree / GPA
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("university") ||
    query.includes("degree") ||
    query.includes("gpa") ||
    query.includes("study") ||
    query.includes("graduation") ||
    query.includes("b.tech") ||
    query.includes("bachelor")
  ) {
    const edu = RESUME_KNOWLEDGE_BASE.education;
    return {
      category: "education",
      confidence: 0.96,
      answer: `**Academic Background**:

• **Degree**: ${edu.degree}
• **Institution**: **${edu.institution}**, Rajasthan, India
• **Duration**: ${edu.period}
• **Academic Merit**: **${edu.gpa}** (Strong foundations in algorithms, data structures, DBMS, OOP, and software architecture)`,
      quickSuggestions: [
        "What certifications does Deepu have?",
        "What is his work experience?",
        "How can I contact Deepu?",
      ],
    };
  }

  // 7. Certifications
  if (
    query.includes("cert") ||
    query.includes("credential") ||
    query.includes("internship") ||
    query.includes("achievement")
  ) {
    return {
      category: "general",
      confidence: 0.94,
      answer: `**Verified Certifications & Internships**:

1. **Pizone Internship Certificate** *(Pizone Infotech — May 2023)*
   • Focus: Full-Stack Development with Angular, .NET Core Web API, and SQL Server.

2. **Urbanchat Internship Certificate** *(urbanchat — September 2023)*
   • Focus: MERN Stack Architecture, OpenAI Integration, and WebSocket real-time event streaming.`,
      quickSuggestions: [
        "What are his core technical skills?",
        "Tell me about the Urbanchat project",
        "How can I hire Deepu?",
      ],
    };
  }

  // 8. General / Intro / Summary
  return {
    category: "general",
    confidence: 0.88,
    answer: `**Deepu Paswan** is a **Full-Stack Developer** with **2+ years of hands-on experience** in the **MERN Stack** (MongoDB, Express, React, Node.js) and **1+ year in .NET Core / C# / Angular**.

He specializes in:
• Designing scalable RESTful APIs with **.NET Core Web API** and **Node.js**
• Building modern responsive frontends in **React.js** and **Angular**
• Managing enterprise data in **MongoDB**, **SQL Server (SSMS)**, and **MySQL**
• Developing AI-powered applications with **OpenAI API** and real-time **WebSockets**

What specific information would you like to know about Deepu?`,
    quickSuggestions: [
      "⚡ What is Deepu's tech stack?",
      "🤖 Tell me about the Urbanchat AI project",
      "💼 What is his work experience?",
      "🎓 What is his education & GPA?",
      "📬 How can I contact or hire Deepu?",
    ],
  };
}
