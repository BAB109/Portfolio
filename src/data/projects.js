export const allProjects = [
  // ── 1. FEATURED PROJECTS ──────────────────────────────────────────
  {
    id: "dsa-vault",
    title: "DSA Vault",
    tagline: "Algorithmic Problem Tracking & Revision Platform",
    category: "Featured Projects",
    filterCategory: "featured",
    featured: true,
    homepage: true,
    badge: "FEATURED PROJECT",
    accent: "#48E6C1",
    status: "Live Production",
    description:
      "A comprehensive full-stack learning platform to systematically track Data Structures & Algorithms problems, compare brute-force vs. optimal approaches, and manage topic revisions with spaced repetition.",
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

  // ── 2. FULL-STACK PROJECTS ─────────────────────────────────────────
  {
    id: "client-crm",
    title: "Client Lead Management CRM",
    tagline: "Inbound Sales Pipeline & Customer Interaction CRM",
    category: "Full-Stack Projects",
    filterCategory: "fullstack",
    featured: false,
    homepage: true,
    badge: "FULL-STACK PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A targeted customer relationship management platform engineered to capture inbound client leads, monitor sales funnel stages, and log chronological interaction history.",
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
    id: "metalscrap-tracker",
    title: "Metal Scrap Inventory Tracker",
    tagline: "Scrap Inventory Management & Authorization System",
    category: "Full-Stack Projects",
    filterCategory: "fullstack",
    featured: false,
    homepage: false,
    badge: "FULL-STACK PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A full-stack inventory tracking web application built to record metal scrap entries, manage warehouse volume, implement middleware-based authorization, and perform CRUD operations.",
    features: [
      "Full CRUD operations for recording and auditing scrap items",
      "Middleware-based authorization and session verification",
      "Dynamic views integrated with Express backend routes",
      "Relational record keeping for warehouse inventories"
    ],
    techStack: ["Node.js", "Express.js", "JavaScript", "REST APIs", "HTML5/CSS3"],
    githubUrl: "https://github.com/BAB109/metalScrap_Tracker",
    liveUrl: null
  },
  {
    id: "weather-web-app",
    title: "Weather Forecast Web App",
    tagline: "Live Meteorological Dashboard & City Lookups",
    category: "Full-Stack Projects",
    filterCategory: "fullstack",
    featured: false,
    homepage: false,
    badge: "FULL-STACK PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A responsive meteorological web application that consumes the OpenWeatherMap API to retrieve real-time weather metrics, temperature, wind speeds, and atmospheric humidity based on city and ISO country code.",
    features: [
      "Integration with OpenWeatherMap REST API for atmospheric data",
      "Dynamic search filtering by city name and international country codes",
      "Responsive weather statistics display with temperature and humidity",
      "Graceful error-handling for unmapped locations"
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "OpenWeatherMap API", "HTML5/CSS3"],
    githubUrl: "https://github.com/BAB109/weather_app",
    liveUrl: null
  },

  // ── 3. BACKEND & API PROJECTS ──────────────────────────────────────
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Agile Task Lifecycle & Workflow Management API",
    category: "Backend & API Projects",
    filterCategory: "backend",
    featured: false,
    homepage: true,
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
    id: "file-metadata-service",
    title: "File Metadata Microservice",
    tagline: "Multipart File Upload & Metadata Extraction API",
    category: "Backend & API Projects",
    filterCategory: "backend",
    featured: false,
    homepage: false,
    badge: "BACKEND MICROSERVICE",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A lightweight backend microservice that accepts multipart/form-data file uploads and returns detailed JSON metadata including file size, mime-type, and encoding.",
    features: [
      "Multipart file parsing with Multer middleware",
      "Instant file property extraction (bytes, MIME type, filename)",
      "Structured JSON response shaping",
      "RESTful API design following freeCodeCamp microservice specifications"
    ],
    techStack: ["Node.js", "Express.js", "Multer", "REST APIs"],
    githubUrl: "https://github.com/BAB109/File_metadata",
    liveUrl: null
  },

  // ── 4. LEARNING & EXPERIMENTAL PROJECTS ────────────────────────────
  {
    id: "inventory-system",
    title: "Inventory Management System",
    tagline: "Backend Stock Tracking & Caching Prototype",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: true,
    badge: "LEARNING PROJECT",
    accent: "#A78BFA",
    status: "In Development",
    description:
      "An active learning project exploring backend architectures for warehouse stock tracking, relational data schemas, and Redis caching integration.",
    features: [
      "Core inventory REST endpoints for item tracking and stock updates",
      "Relational database modeling for product catalogs and inventory levels",
      "Exploring Redis caching integration for fast SKU lookups",
      "Docker configuration in progress for local environment setup"
    ],
    techStack: ["Node.js", "Express.js", "SQL", "Redis", "Docker"],
    githubUrl: "https://github.com/BAB109/Inventory_management",
    liveUrl: null
  },
  {
    id: "custom-graph-ds",
    title: "Custom Graph Data Structure",
    tagline: "C++ Graph Implementation & Traversals From Scratch",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "EXPERIMENTAL",
    accent: "#A78BFA",
    status: "Experimental",
    description:
      "A foundational graph data structure implemented from scratch in C++ to deepen algorithmic understanding of adjacency lists, BFS, DFS, and edge representations.",
    features: [
      "Adjacency list representation using modern C++ STL structures",
      "Breadth-First Search (BFS) and Depth-First Search (DFS) traversals",
      "Cycle detection and connectivity algorithms",
      "Clean object-oriented architecture"
    ],
    techStack: ["C++", "Data Structures", "Graph Algorithms", "OOP"],
    githubUrl: "https://github.com/BAB109/custom_graph",
    liveUrl: null
  },
  {
    id: "discord-study-bot",
    title: "Discord Study & Productivity Bot",
    tagline: "Community Productivity & Session Automation",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "EXPERIMENTAL",
    accent: "#A78BFA",
    status: "Experimental",
    description:
      "An automated Discord bot engineered with Node.js and the Discord.js library to assist study sessions, track reminders, and facilitate community collaboration.",
    features: [
      "Event-driven architecture with Discord.js gateway handlers",
      "Custom slash commands for study timers and task reminders",
      "Modular command handler structure",
      "Error-resilient message dispatching"
    ],
    techStack: ["JavaScript", "Node.js", "Discord.js", "Bot APIs"],
    githubUrl: "https://github.com/BAB109/Discord-Study-Bot",
    liveUrl: null
  },
  {
    id: "universe-database",
    title: "Celestial Universe Database",
    tagline: "Relational Database Schema & SQL Scripts",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "DATABASE ARCHITECTURE",
    accent: "#A78BFA",
    status: "Completed",
    description:
      "A structured relational PostgreSQL database modeling celestial galaxies, stars, planets, and moons with strict foreign key constraints and SQL queries.",
    features: [
      "Normalized relational schema with primary and foreign key constraints",
      "Multi-table relationship queries and join operations",
      "Automated SQL seed and migration scripts",
      "Complex constraint validation"
    ],
    techStack: ["PostgreSQL", "SQL", "Schema Design", "Relational Modeling"],
    githubUrl: "https://github.com/BAB109/universe",
    liveUrl: null
  },
  {
    id: "hiretrack-ats",
    title: "HireTrack Applicant Tracking System",
    tagline: "Candidate Pipeline & Resume Tracking Prototype",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "IN DEVELOPMENT",
    accent: "#A78BFA",
    status: "In Development",
    description:
      "An applicant tracking system (ATS) prototype under active development designed to organize recruitment stages, candidate status, and interview pipelines.",
    features: [
      "Pipeline stage categorization (Applied, Screening, Interview, Offer)",
      "Candidate metadata tracking and status tags",
      "Responsive interface layouts"
    ],
    techStack: ["JavaScript", "CSS3", "HTML5", "UI Design"],
    githubUrl: "https://github.com/BAB109/hiretrack-ats",
    liveUrl: null
  },
  {
    id: "weather-cli-python",
    title: "Weather Query CLI Tool",
    tagline: "Python Meteorological API Query Script",
    category: "Learning & Experimental Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "CLI TOOL",
    accent: "#A78BFA",
    status: "Completed",
    description:
      "A Python command-line utility that queries meteorological APIs to fetch and format real-time temperature, humidity, and atmospheric conditions by city and country code.",
    features: [
      "Command-line arguments and input validation",
      "HTTP requests and JSON response parsing in Python",
      "Formatted terminal output with temperature unit conversion"
    ],
    techStack: ["Python", "REST APIs", "JSON Parsing", "CLI"],
    githubUrl: "https://github.com/BAB109/weather-temp_and_humidity-",
    liveUrl: null
  },

  // ── 5. PRACTICE PROJECTS ───────────────────────────────────────────
  {
    id: "cgpa-calculator",
    title: "Academic CGPA & SGPA Predictor",
    tagline: "Academic Grade Point & Future Performance Estimator",
    category: "Practice Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "PRACTICE PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A client-side calculator engineered to compute current SGPA/CGPA with previous semester weightage and project required target grades across remaining semesters.",
    features: [
      "Weighted average GPA and SGPA calculations",
      "Target CGPA projection logic based on remaining credits",
      "Instant responsive DOM updates without page reloads",
      "Clean input validation for course credits and grades"
    ],
    techStack: ["JavaScript", "DOM Manipulation", "HTML5", "CSS3"],
    githubUrl: "https://github.com/BAB109/Cgpa_calculator",
    liveUrl: null
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    tagline: "Financial Transaction & Budget Logging App",
    category: "Practice Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "PRACTICE PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "An intuitive budget logging application for recording daily expenses, categorizing costs, and tracking balance totals with persistent local state.",
    features: [
      "Income and expense transaction recording",
      "Dynamic balance and total spending calculation",
      "Local storage persistence across browser sessions",
      "Clean list management with transaction deletion"
    ],
    techStack: ["JavaScript", "Local Storage", "HTML5", "CSS3"],
    githubUrl: "https://github.com/BAB109/Expence_tracker",
    liveUrl: null
  },
  {
    id: "password-generator-java",
    title: "Credential & Password Generator",
    tagline: "Desktop Secure Credential Generator",
    category: "Practice Projects",
    filterCategory: "experiments",
    featured: false,
    homepage: false,
    badge: "PRACTICE PROJECT",
    accent: "#38BDF8",
    status: "Completed",
    description:
      "A Java utility developed to generate cryptographically strong, randomized passwords with configurable entropy, character sets, and email formats.",
    features: [
      "Randomized character distribution with custom entropy parameters",
      "Configurable password length, symbols, digits, and casing",
      "Object-oriented Java design principles",
      "Terminal-based interactive generation workflow"
    ],
    techStack: ["Java", "Security", "OOP", "CLI Tools"],
    githubUrl: "https://github.com/BAB109/email_password_generator_java",
    liveUrl: null
  }
];

// Helper export for homepage: The 4 flagship/core projects
export const homepageProjects = allProjects.filter((p) => p.homepage);

// Backward-compatible export
export const projects = homepageProjects;
