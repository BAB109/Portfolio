# Babji Tata — Developer Portfolio

A modern developer portfolio engineered with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Featuring deep navy palettes, mint/turquoise accents, an animated interactive particle constellation background, typewriter effect, transparent hero background avatar, clean non-flip project cards, vertical academic timeline, and a dedicated **All Projects Catalog (`/projects`)** with real-time search and category filtering.

---

## 📑 Table of Contents

- [Live Demo & Profiles](#-live-demo--profiles)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [Routing & Navigation Architecture](#-routing--navigation-architecture)
- [How to Modify Content (No JSX editing needed)](#-how-to-modify-content)
  - [Personal Info, Bio & Social Links](#1-personal-info-bio--social-links)
  - [Skills & Vertical Categories](#2-skills--vertical-categories)
  - [Projects & Catalog (Homepage + All Projects)](#3-projects--catalog-homepage--all-projects)
  - [Education & Coding Milestones](#4-education--coding-milestones)
  - [Replacing Images & Resume](#5-replacing-images--resume)
- [How to Add a New Section (Step-by-Step)](#-how-to-add-a-new-section)
- [Design System & Theme Variables](#-design-system--theme-variables)
- [Debugging & Troubleshooting Guide](#-debugging--troubleshooting-guide)
- [Deployment Guide](#-deployment-guide)

---

## 🚀 Live Demo & Profiles

- **Live Flagship Project (DSA Vault):** [dsa-vault-a4zd.vercel.app](https://dsa-vault-a4zd.vercel.app/)
- **GitHub:** [github.com/BAB109](https://github.com/BAB109)
- **LinkedIn:** [linkedin.com/in/babji-tata](https://www.linkedin.com/in/babji-tata-044aa0363/)
- **LeetCode:** [leetcode.com/u/bab109_1/](https://leetcode.com/u/bab109_1/)

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 19 + Vite 8
- **Routing:** Lightweight zero-dependency HTML5 History API Router (`src/router.jsx`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation:** Framer Motion (`framer-motion`) + HTML5 Canvas
- **Icons:** Lucide React (`lucide-react`) + Custom SVG Icons (`src/components/ui/Icons.jsx`)
- **Linter:** Oxlint (`oxlint` — 0 warnings, 0 errors)
- **Typography:**
  - Headings: `Space Grotesk` (`font-heading`)
  - Body: `Inter`
  - Code / Numbers: `JetBrains Mono` (`font-mono`)

---

## 📂 Directory Structure

```text
portfolio/
├── index.html                   # HTML entry point, SEO meta, Open Graph, Google Fonts
├── package.json                 # Dependencies & build scripts
├── vercel.json                  # SPA routing rewrite & HTTP security headers
├── vite.config.js               # Vite + React + Tailwind v4 configuration
│
├── public/
│   ├── favicon.svg              # Custom hexagonal BT favicon
│   ├── robots.txt               # SEO crawler rules
│   ├── sitemap.xml              # Search engine sitemap
│   ├── files/
│   │   └── Babji_resume.pdf     # Downloadable resume PDF
│   └── images/
│       ├── profile.png          # Transparent hero background avatar
│       └── profile.jpeg         # Original profile photo
│
└── src/
    ├── App.jsx                  # Main application orchestrator & router view switcher
    ├── index.css                # Design system variables & custom scrollbar
    ├── main.jsx                 # React root renderer
    ├── router.jsx               # Zero-dependency HTML5 router (RouterProvider, useRouter, Link)
    │
    ├── pages/
    │   └── AllProjects.jsx      # Dedicated /projects catalog with search & category filters
    │
    ├── data/                    # 💡 ALL CONTENT IS MANAGED HERE
    │   ├── config.js            # Bio, contact, education, statistics
    │   ├── skills.js            # Core / Familiar / Learning vertical skill tiers
    │   ├── projects.js          # Centralized catalog of all 15 projects & homepage selection
    │   ├── milestones.js        # CBIT Education timeline & 140+ LeetCode milestones
    │   └── achievements.js      # Certifications & competition details
    │
    └── components/
        ├── layout/
        │   ├── Navbar.jsx       # Fixed header with active route tracking & resume download
        │   └── Footer.jsx       # Minimal footer with verified links & scroll-to-top
        │
        ├── sections/            # Homepage sections
        │   ├── Hero.jsx         # Section 00: Transparent avatar backdrop, Typewriter, CTAs
        │   ├── About.jsx        # Section 01: Engineering bio, pillars, highlights
        │   ├── Skills.jsx       # Section 02: Vertical categories with horizontal tech chips
        │   ├── Projects.jsx     # Section 03: Asymmetric grid with modern non-flip cards
        │   ├── Education.jsx    # Section 04: Dedicated CBIT B.Tech academic timeline
        │   ├── Achievements.jsx # Section 05: 140+ LeetCode card + Certifications grid
        │   ├── Contact.jsx      # Section 06: Direct email (mailto:), GitHub, LinkedIn
        │   │
        │   └── projects/        # Project Card Components
        │       └── ProjectCard.jsx       # Modern non-flip card with directly visible details
        │
        └── ui/                  # Reusable UI primitives
            ├── Button.jsx               # Button variants (primary, outline, ghost)
            ├── ConstellationCanvas.jsx  # Interactive particle constellation background
            ├── Icons.jsx                # Custom SVGs (GithubIcon, LinkedinIcon)
            ├── SectionTitle.jsx         # Numbered section header
            └── TypewriterText.jsx       # Animated role typing effect
```

---

## 🏃 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Opens at `http://localhost:5173/`.

### 3. Build for production

```bash
npm run build
```

Generates optimized bundle into `dist/`.

### 4. Preview production build locally

```bash
npm run preview
```

### 5. Lint codebase

```bash
npm run lint
```

Runs Oxlint across all 27 files in milliseconds (`0 warnings, 0 errors`).

---

## 🧭 Routing & Navigation Architecture

The project features a **zero-dependency HTML5 History API Router** in [`src/router.jsx`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/router.jsx):

- **Homepage (`/`)**: Renders `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Education`, `Achievements`, `Contact`, and `Footer`.
- **All Projects Catalog (`/projects`)**: Renders `Navbar`, `AllProjects`, and `Footer`.
- **Navbar Links**: `Home`, `About`, `Skills`, `Projects`, `Contact`.
  - Clicking `Projects` routes to `/projects`.
  - Clicking any section link from `/projects` (e.g. `Home` or `About`) smoothly returns to `/#home` or `/#about`.
- **Direct Link & Refresh Support**: Direct access to `https://your-domain.com/projects` or refreshing the page works seamlessly without 404 errors due to the rewrite rule in `vercel.json`:
  ```json
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  ```

---

## ✏️ How to Modify Content

All text, links, projects, and skills are decoupled into `src/data/` files. **You do not need to edit JSX components to update text, links, or projects.**

### 1. Personal Info, Bio & Social Links

File: [`src/data/config.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/config.js)

```js
export const personalInfo = {
  name: "Babji Tata",
  formalName: "BABJI TATA",
  roleTitles: [
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Problem Solver"
  ],
  bioExcerpt: "Your short hero bio...",
  about: [
    "Paragraph 1...",
    "Paragraph 2..."
  ],
  location: "Hyderabad, Telangana, India",
  email: "tatababji297@gmail.com",
  github: "https://github.com/BAB109",
  linkedin: "https://www.linkedin.com/in/babji-tata-044aa0363/",
  leetcode: "https://leetcode.com/u/bab109_1/",
  profileImage: "/images/profile.png",
  resumePath: "/files/Babji_resume.pdf"
};
```

---

### 2. Skills & Vertical Categories

File: [`src/data/skills.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/skills.js)

Skills are organized into **vertically stacked tiers** with horizontal wrapping chips:
- **Core Skills** (`#48E6C1` Mint)
- **Familiar With** (`#38BDF8` Sky Blue)
- **Currently Learning** (`#A78BFA` Lavender)

To add a new skill to any category, add an object to its `skills` array:

```js
{
  name: "Go (Golang)",
  note: "Concurrency with goroutines & channels",
  icon: "Terminal" // Any Lucide icon name (e.g. Code2, Server, Database, Layers)
}
```

---

### 3. Projects & Catalog (Homepage + All Projects)

File: [`src/data/projects.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/projects.js)

All 15 repositories are defined in the `allProjects` array across 5 categories:
1. `Featured Projects` (`filterCategory: "featured"`)
2. `Full-Stack Projects` (`filterCategory: "fullstack"`)
3. `Backend & API Projects` (`filterCategory: "backend"`)
4. `Learning & Experimental Projects` (`filterCategory: "experiments"`)
5. `Practice Projects` (`filterCategory: "experiments"`)

```js
{
  id: "dsa-vault",
  title: "DSA Vault",
  tagline: "Algorithmic Problem Tracking & Revision Platform",
  category: "Featured Projects",
  filterCategory: "featured",
  featured: true,               // true = Flagship 2x2 card on homepage
  homepage: true,               // true = Also rendered on homepage selected work grid
  badge: "FEATURED PROJECT",
  accent: "#48E6C1",
  status: "Live Production",    // or "Completed", "In Development", "Experimental"
  description: "Comprehensive description visible directly on the card...",
  features: [
    "Feature 1...",
    "Feature 2...",
    "Feature 3..."
  ],
  techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT"],
  githubUrl: "https://github.com/BAB109/DSA_VAULT",
  liveUrl: "https://dsa-vault-a4zd.vercel.app/" // If null, the Live Demo button is automatically hidden!
}
```

- **Homepage Projects:** Automatically derived using `homepageProjects = allProjects.filter(p => p.homepage)`.
- **Live Demo Link:** If `liveUrl: null`, the card only displays the `Source Code` button.

---

### 4. Education & Coding Milestones

File: [`src/data/milestones.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/milestones.js)

- **`educationTimeline`**: Displays your verified academic degrees (CBIT B.Tech CSE, CGPA 7.91, coursework, highlights).
- **`codingMilestones`**: LeetCode milestone card (`140+ Problems Solved`, metric callout, profile URL `https://leetcode.com/u/bab109_1/`).
- **`certificationsAndActivities`**: NPTEL Generative AI, Google Cloud Vertex AI badge, and CTF participation.

---

### 5. Replacing Images & Resume

1. **Avatar Image:**
   - Place your transparent PNG image in: `portfolio/public/images/profile.png`
   - It renders seamlessly in the background on the right side of the Hero section.
2. **Resume PDF (Direct Download):**
   - Place your updated PDF in: `portfolio/public/files/Babji_resume.pdf`
   - All "Resume", "CV", and "Download Resume" buttons across the Navbar, Hero, and Footer are configured with `download="Developer_Resume.pdf"` for instant download.
3. **Favicon:**
   - Update `portfolio/public/favicon.svg` with your custom SVG icon.

---

## ➕ How to Add a New Section

To add a new section (e.g. `Certificates` or `Experience`):

### Step 1: Create the Component

Create `src/components/sections/Experience.jsx`:

```jsx
import { motion, useReducedMotion } from 'framer-motion';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-14">
          <p className="font-mono text-[#48E6C1] text-xs tracking-[0.2em] uppercase mb-3">
            07 — Experience
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] font-heading">
              Work <span className="text-[#48E6C1]">Experience</span>
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#101D32]/70 border border-[rgba(148,163,184,0.15)]">
          <p className="text-[#94A3B8]">Content goes here...</p>
        </div>
      </div>
    </section>
  );
}
```

### Step 2: Register in `App.jsx`

Open `src/App.jsx`, import your component, and place it inside the homepage `<main>`:

```jsx
import Experience from './components/sections/Experience';

// Inside MainApp():
<main className="relative z-10">
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Education />
  <Achievements />
  <Experience /> {/* <-- Added here */}
  <Contact />
</main>
```

### Step 3: Add to Navbar

Open `src/components/layout/Navbar.jsx`:

1. Add your section ID to the scroll-spy array:
   ```js
   const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'experience', 'contact'];
   ```
2. Add the link to `navLinks`:
   ```js
   { label: 'Experience', href: isProjectsPage ? '/#experience' : '#experience', id: 'experience', num: '06' },
   ```

---

## 🎨 Design System & Theme Variables

All colors and visual tokens are defined in [`src/index.css`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/index.css):

```css
:root {
  --color-bg-primary: #0B172B;      /* Deep Navy background */
  --color-bg-secondary: #101D32;    /* Card & container background */
  --color-text-primary: #F1F5F9;    /* Clean white headings & primary text */
  --color-text-secondary: #94A3B8;  /* Muted blue-gray body copy */
  --color-accent-primary: #48E6C1;  /* Primary Mint / Turquoise */
  --color-accent-hover: #2BCFA9;    /* Darker mint for hover states */
  --color-border: rgba(148, 163, 184, 0.15); /* Subtle glass borders */
}
```

### Typography Classes:
- `.font-heading` → Space Grotesk
- `.font-mono` → JetBrains Mono
- Standard text → Inter

---

## 🐛 Debugging & Troubleshooting Guide

### 1. Port already in use (`EADDRINUSE`)

If `npm run dev` fails because port `5173` is taken:

```powershell
npm run dev -- --port 5174
```

### 2. Missing Icons (`lucide-react`)

`lucide-react` does **not** include brand icons like `Github` or `Linkedin`.
- **Always import `GithubIcon` or `LinkedinIcon` from `src/components/ui/Icons.jsx`**.
- All standard interface icons (`Terminal`, `Database`, `Server`, `ExternalLink`, `Mail`, `FileDown`, `Search`, etc.) import directly from `lucide-react`.

### 3. Constellation particle canvas performance

- `ConstellationCanvas.jsx` includes an automatic `document.visibilitychange` listener that cancels `requestAnimationFrame` when the browser tab is hidden or minimized.
- Automatically respects `prefers-reduced-motion` settings.

### 4. Direct download behavior for Resume

All resume links are configured with `download="Developer_Resume.pdf"` and point to `/files/Babji_resume.pdf`. Note that the HTML5 `download` attribute is honored when serving the file from the same origin or via `localhost`/production domain.

---

## 🚢 Deployment Guide

### Recommended: Vercel (Automatic Deployment)

1. Push your code to GitHub:
   ```powershell
   git add .
   git commit -m "feat: complete portfolio with /projects archive and ui refinements"
   git push origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Import your GitHub repository.
4. Settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

The included `vercel.json` ensures that single-page routing (`/` and `/projects`) works without 404 errors.

---

## 📜 License

Created by **Babji Tata** &bull; [GitHub](https://github.com/BAB109) &bull; [LinkedIn](https://www.linkedin.com/in/babji-tata-044aa0363/) &bull; [LeetCode](https://leetcode.com/u/bab109_1/)
