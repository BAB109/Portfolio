# Babji Tata — Developer Portfolio

A dark-themed developer portfolio engineered with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Featuring deep navy palettes, mint/turquoise accents, an animated interactive particle constellation background, typewriter effect, asymmetric 3D flip project cards, a vertical academic timeline, and responsive design across desktop, tablet, and mobile.

---

## 📑 Table of Contents

- [Live Demo & Profiles](#-live-demo--profiles)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [How to Modify Content (No JSX editing needed)](#-how-to-modify-content)
  - [Personal Info & Bio](#1-personal-info-bio--social-links)
  - [Skills & Categories](#2-skills-categories)
  - [Projects & 3D Cards](#3-projects--3d-cards)
  - [Education & Milestones](#4-education--milestones)
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
- **LeetCode:** [leetcode.com/u/BAB109/](https://leetcode.com/u/BAB109/)

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 19 + Vite 8
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
├── vercel.json                  # SPA routing fallback & HTTP security headers
├── vite.config.js               # Vite + React + Tailwind v4 configuration
│
├── public/
│   ├── favicon.svg              # Custom hexagonal BT favicon
│   ├── robots.txt               # SEO crawler rules
│   ├── sitemap.xml              # Search engine sitemap
│   ├── files/
│   │   └── Babji_resume.pdf     # Downloadable resume PDF
│   └── images/
│       └── profile.jpg          # Profile photograph (used in Hero)
│
└── src/
    ├── App.jsx                  # Main application orchestrator
    ├── index.css                # Design system variables & custom scrollbar
    ├── main.jsx                 # React root renderer
    │
    ├── data/                    # 💡 ALL CONTENT IS MANAGED HERE
    │   ├── config.js            # Bio, contact, education, statistics
    │   ├── skills.js            # Core / Familiar / Learning skill tiers
    │   ├── projects.js          # The 4 projects, tech stacks, links & highlights
    │   └── milestones.js        # Timeline & certifications
    │
    └── components/
        ├── layout/
        │   ├── Navbar.jsx       # Fixed header with Roman numeral scroll-spy (I - VII)
        │   └── Footer.jsx       # Minimal footer with dynamic year & quick links
        │
        ├── sections/            # Individual portfolio sections
        │   ├── Hero.jsx         # Section 00: Photo, Typewriter, CTAs
        │   ├── About.jsx        # Section 01: Bio, Quick pillars, Highlights
        │   ├── Skills.jsx       # Section 02: 3-tier skills cards & pillars banner
        │   ├── Projects.jsx     # Section 03: Asymmetric grid wrapper
        │   ├── Education.jsx    # Section 04: Academic vertical timeline
        │   ├── Achievements.jsx # Section 05: LeetCode + Certifications grid
        │   ├── Contact.jsx      # Section 06: Email, GitHub, LinkedIn
        │   │
        │   └── projects/        # 3D Flip Card Components
        │       ├── ProjectCard.jsx       # 3D Y-axis flip container
        │       ├── ProjectCardFront.jsx  # Front face (minimal, tags + title)
        │       └── ProjectCardBack.jsx   # Back face (description, features, links)
        │
        └── ui/                  # Reusable UI primitives
            ├── Button.jsx               # Button variants (primary, outline, ghost)
            ├── ConstellationCanvas.jsx  # Particle constellation background
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

Runs Oxlint across all files in milliseconds.

---

## ✏️ How to Modify Content

All text, links, projects, and skills are decoupled into `src/data/` files. **You do not need to touch JSX components to update text, links, or projects.**

### 1. Personal Info, Bio & Social Links

File: [`src/data/config.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/config.js)

```js
export const personalInfo = {
  name: "Babji Tata",
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
  leetcode: "https://leetcode.com/u/BAB109/",
  profileImage: "/images/profile.jpg",
  resumePath: "/files/Babji_resume.pdf"
};
```

---

### 2. Skills & Categories

File: [`src/data/skills.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/skills.js)

Skills are categorized into 3 tiers:
- **Core Skills** (`#48E6C1` Mint)
- **Familiar With** (`#38BDF8` Sky Blue)
- **Currently Learning** (`#A78BFA` Lavender)

To add a new skill to a tier, add an object to its `skills` array:

```js
{
  name: "Go (Golang)",
  note: "Concurrency with goroutines & channels",
  icon: "Terminal" // Any Lucide icon name (e.g. Code2, Server, Database, Layers)
}
```

---

### 3. Projects & 3D Cards

File: [`src/data/projects.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/projects.js)

Each project object controls both the front and back of its 3D card:

```js
{
  id: "dsa-vault",
  title: "DSA Vault",
  tagline: "Algorithmic Problem Tracking & Revision Platform",
  featured: true,               // true = Flagship 2x2 large card
  badge: "FEATURED PROJECT",
  accent: "#48E6C1",
  status: "Live Production",    // or "Completed", "Learning / In Development"
  description: "Detailed description shown on the BACK of the card...",
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

> **Note on Live Demos:** If `liveUrl: null`, the back of the card only renders the GitHub button.

---

### 4. Education & Milestones

File: [`src/data/milestones.js`](file:///c:/Users/tatab/OneDrive/Desktop/BAB_Portfolio/portfolio/src/data/milestones.js)

- **`educationTimeline`**: Add or modify degrees, grades, duration, and coursework pills.
- **`codingMilestones`**: Update LeetCode solved count, languages, and profile link.
- **`certificationsAndActivities`**: Add new certifications (NPTEL, Google Cloud, CTFs, Hackathons).

---

### 5. Replacing Images & Resume

1. **Profile Photograph:**
   - Place your image in: `portfolio/public/images/profile.jpg`
   - Keep the filename `profile.jpg`, or update the path in `src/data/config.js` (`profileImage: "/images/your-photo.jpg"`).
   - Recommended: Portrait aspect ratio (3:4 or 4:5), compressed JPEG under 150 KB.
2. **Resume PDF:**
   - Replace `portfolio/public/files/Babji_resume.pdf` with your updated PDF.
   - All "Resume", "CV", and "Download" buttons automatically link to this file.
3. **Favicon:**
   - Update `portfolio/public/favicon.svg` with your custom SVG logo.

---

## ➕ How to Add a New Section

Follow these 3 simple steps to add a new section (e.g. `Experience` or `Testimonials`):

### Step 1: Create the Component

Create `src/components/sections/Experience.jsx`:

```jsx
import { motion, useReducedMotion } from 'framer-motion';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
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

        {/* Your content cards here */}
        <div className="p-6 rounded-2xl bg-[#101D32]/70 border border-[rgba(148,163,184,0.15)]">
          <p className="text-[#94A3B8]">Content goes here...</p>
        </div>
      </div>
    </section>
  );
}
```

### Step 2: Register in `App.jsx`

Open `src/App.jsx`, import your component, and place it inside `<main>`:

```jsx
import Experience from './components/sections/Experience';

// Inside App():
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
   { num: 'VII', label: 'Experience', href: '#experience', id: 'experience' },
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

### Tailwind Helper Classes

- `.font-heading` → Space Grotesk
- `.font-mono` → JetBrains Mono
- `.perspective-1000` → 3D Perspective container (1000px)
- `.transform-style-3d` → CSS `preserve-3d`
- `.backface-hidden` → CSS `backface-visibility: hidden`
- `.rotate-y-180` → Rotates card 180° around Y-axis

---

## 🐛 Debugging & Troubleshooting Guide

### 1. Port already in use (`EADDRINUSE`)

If `npm run dev` fails because port `5173` is taken:

```powershell
# Specify an alternative port
npm run dev -- --port 5174
```

### 2. Missing Icons (`lucide-react`)

`lucide-react` does **not** export brand logos like `Github` or `Linkedin`.
- **Always import `GithubIcon` or `LinkedinIcon` from `../ui/Icons`** instead of `lucide-react`.
- All standard interface icons (`Terminal`, `Database`, `Server`, `ExternalLink`, `Mail`, `Calendar`, etc.) work directly from `lucide-react`.

### 3. 3D Project Card not flipping on mobile

- On desktop, cards flip on **hover** (`onMouseEnter` / `onMouseLeave`).
- On touch devices / mobile, cards flip on **tap** (`onClick`).
- All links inside the back of the card have `e.stopPropagation()` so tapping "GitHub" or "Live Demo" navigates directly without accidentally closing the card.

### 4. Background constellation animation freezing or high battery usage

- `ConstellationCanvas.jsx` includes an automatic `document.visibilitychange` listener.
- When the tab is switched or minimized, it cancels `requestAnimationFrame` to conserve battery. It resumes instantly when the tab becomes active.
- If a user has `prefers-reduced-motion` enabled in their OS, it automatically renders static particles without continuous animation.

---

## 🚢 Deployment Guide

### Recommended: Vercel (Automatic Deployment)

1. Push your code to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "feat: complete developer portfolio"
   git branch -M main
   git remote add origin https://github.com/BAB109/<repo-name>.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New"** → **"Project"**.
4. Import your GitHub repository.
5. Vercel automatically detects **Vite** and uses:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**.

The included `vercel.json` ensures that single-page routing (`/`) and security headers work out of the box.

---

## 📜 License

Created by **Babji Tata** &bull; [GitHub](https://github.com/BAB109) &bull; [LinkedIn](https://www.linkedin.com/in/babji-tata-044aa0363/)
