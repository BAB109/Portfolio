export const projects = [
  {
    id: "dsa-vault",
    title: "DSA Vault",
    tagline: "Algorithmic Problem Tracking & Revision Platform",
    featured: true,
    badge: "FEATURED PROJECT",
    accent: "#48E6C1",
    status: "Live Production",
    description:
      "A full-stack web application designed to systematically log Data Structures & Algorithms problems, document both brute-force and optimal approaches, and manage topic revisions.",
    features: [
      "User authentication with JWT and bcrypt password hashing",
      "Relational PostgreSQL schema with parameterized SQL queries",
      "Problem solution logging with approach comparison (brute-force vs optimal)",
      "Topic categorization, difficulty tracking, and revision timelines",
      "Full-stack production deployment on Vercel (client) and Render (API)"
    ],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/BAB109/DSA_VAULT",
    liveUrl: "https://dsa-vault-a4zd.vercel.app/"
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Agile Task & Workflow Management API",
    featured: false,
    badge: "BACKEND PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A modular task management backend service built to orchestrate task lifecycles, project boards, and status transitions through clean RESTful API endpoints.",
    features: [
      "RESTful API architecture for complete task lifecycle management",
      "Status transitions (To Do, In Progress, Review, Completed)",
      "Priority tagging, due dates, and structured query filtering",
      "Modular controller separation and request validation"
    ],
    techStack: ["Node.js", "Express.js", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/BAB109/Taskmanager",
    liveUrl: null
  },
  {
    id: "client-crm",
    title: "Client Lead Management CRM",
    tagline: "Inbound Lead & Sales Pipeline Tracking",
    featured: false,
    badge: "FULL-STACK PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A customer relationship management tool designed to capture inbound sales leads, track pipeline stages, and maintain a chronological log of client communications.",
    features: [
      "Lead lifecycle progression tracking across sales funnel stages",
      "Contact information storage and communication history logging",
      "RESTful backend endpoints for fast data retrieval and updates",
      "Responsive frontend interface for lead oversight"
    ],
    techStack: ["React", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/BAB109/FUTURE_FS_02",
    liveUrl: null
  },
  {
    id: "inventory-system",
    title: "Inventory Management",
    tagline: "Backend Stock Tracking & Caching Prototype",
    featured: false,
    badge: "LEARNING PROJECT",
    accent: "#A78BFA",
    status: "Learning / In Development",
    description:
      "An active learning project exploring backend architectures for warehouse stock tracking, relational data schemas, and caching layers.",
    features: [
      "Core inventory REST endpoints for item tracking and stock updates",
      "Relational database modeling for product catalogs and inventory levels",
      "Exploring Redis caching integration for fast SKU lookups",
      "Docker configuration in progress for local environment setup"
    ],
    techStack: ["Node.js", "Express.js", "SQL", "Redis", "Docker"],
    githubUrl: "https://github.com/BAB109/Inventory_management",
    liveUrl: null
  }
];
