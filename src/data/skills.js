export const skillTiers = [
  {
    id: "core",
    tier: "Core Skills",
    badge: "Independently Proficient",
    description: "Technologies I independently work with, build production features in, and can explain in depth.",
    accent: "#48E6C1",
    accentGlow: "rgba(72, 230, 193, 0.15)",
    borderHover: "hover:border-[#48E6C1]/50",
    iconBg: "bg-[#48E6C1]/10 text-[#48E6C1] border-[#48E6C1]/20",
    skills: [
      {
        name: "C++",
        note: "Primary language for DSA & problem solving",
        icon: "Terminal"
      },
      {
        name: "Data Structures & Algorithms",
        note: "140+ LeetCode problems solved",
        icon: "Cpu"
      },
      {
        name: "JavaScript (ES6+)",
        note: "Asynchronous programming, closures & DOM",
        icon: "Code2"
      },
      {
        name: "Node.js",
        note: "Backend runtime & modular server architecture",
        icon: "Server"
      },
      {
        name: "Express.js",
        note: "RESTful routing, middleware & controllers",
        icon: "Layers"
      },
      {
        name: "PostgreSQL",
        note: "Relational schema design & SQL queries",
        icon: "Database"
      },
      {
        name: "Git & GitHub",
        note: "Version control, branching & PR workflows",
        icon: "GitBranch"
      }
    ]
  },
  {
    id: "familiar",
    tier: "Familiar With",
    badge: "Practical Application",
    description: "Technologies and concepts applied in projects with practical understanding, without claiming advanced mastery.",
    accent: "#38BDF8",
    accentGlow: "rgba(56, 189, 248, 0.15)",
    borderHover: "hover:border-[#38BDF8]/50",
    iconBg: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
    skills: [
      {
        name: "React",
        note: "Component state, hooks & SPA architecture",
        icon: "Atom"
      },
      {
        name: "REST APIs",
        note: "HTTP methods, status codes & request lifecycle",
        icon: "Network"
      },
      {
        name: "SQL",
        note: "Relational joins, constraints & data modeling",
        icon: "Database"
      },
      {
        name: "Tailwind CSS",
        note: "Responsive utility styling & design systems",
        icon: "Palette"
      },
      {
        name: "Python",
        note: "Scripting & foundational programming concepts",
        icon: "Code2"
      },
      {
        name: "HTML5 & CSS3",
        note: "Semantic page structure & responsive layouts",
        icon: "Layers"
      }
    ]
  },
  {
    id: "learning",
    tier: "Currently Learning",
    badge: "Active Exploration",
    description: "Technologies and systems concepts I am actively studying, experimenting with, and deepening.",
    accent: "#A78BFA",
    accentGlow: "rgba(167, 139, 250, 0.15)",
    borderHover: "hover:border-[#A78BFA]/50",
    iconBg: "bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/20",
    skills: [
      {
        name: "Zod",
        note: "Runtime schema validation & type inference",
        icon: "CheckSquare"
      },
      {
        name: "JWT Authentication",
        note: "Token-based auth flows & route security",
        icon: "ShieldCheck"
      },
      {
        name: "Redis",
        note: "In-memory caching & session management",
        icon: "Zap"
      },
      {
        name: "Docker",
        note: "Containerization basics & isolated environments",
        icon: "Container"
      },
      {
        name: "System Design",
        note: "Scalability, caching layers & latency trade-offs",
        icon: "Boxes"
      },
      {
        name: "Applied Generative AI",
        note: "Prompt engineering & LLM integration (IISc/GCP)",
        icon: "Sparkles"
      }
    ]
  }
];

export const technicalPillars = [
  {
    title: "Backend Focus",
    description: "Architecting clean, scalable REST APIs with Node.js, Express, and PostgreSQL."
  },
  {
    title: "Algorithmic Rigor",
    description: "Consistent practice in C++ with 140+ LeetCode problems solved across core DSA topics."
  },
  {
    title: "Full-Stack Execution",
    description: "Connecting responsive React frontends with reliable backend databases and auth."
  }
];
