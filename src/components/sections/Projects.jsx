import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './projects/ProjectCard';

/* ─── Animation Variants ───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  },
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.1 };

  // Map projects by ID for deterministic asymmetric placement
  const dsaVault = projects.find((p) => p.id === 'dsa-vault');
  const taskflow = projects.find((p) => p.id === 'taskflow');
  const clientCrm = projects.find((p) => p.id === 'client-crm');
  const inventory = projects.find((p) => p.id === 'inventory-system');

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="mb-14"
          variants={fadeUp(0)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* Numbered Label */}
          <p className="font-mono text-[#48E6C1] text-xs tracking-[0.2em] uppercase mb-3">
            03 &mdash; Selected Work
          </p>

          {/* Main Heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
              Projects I&rsquo;ve{' '}
              <span className="text-[#48E6C1]">built</span>
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            These projects demonstrate my interest in building practical software applications,
            designing relational schemas and backend APIs, and solving engineering problems.
          </p>
        </motion.div>

        {/* ── Asymmetric 3D Flip Projects Grid ─────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* 1. DSA Vault (Flagship: 2 cols x 2 rows on desktop) */}
          {dsaVault && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full"
            >
              <ProjectCard project={dsaVault} isFeatured className="h-full" />
            </motion.div>
          )}

          {/* 2. TaskFlow (Backend: 2 cols x 1 row on desktop) */}
          {taskflow && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 lg:col-span-2 lg:row-span-1 h-full"
            >
              <ProjectCard project={taskflow} className="h-full" />
            </motion.div>
          )}

          {/* 3. Client CRM (Full-Stack: 1 col x 1 row on desktop) */}
          {clientCrm && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 lg:col-span-1 lg:row-span-1 h-full"
            >
              <ProjectCard project={clientCrm} className="h-full" />
            </motion.div>
          )}

          {/* 4. Inventory Management (Learning: 1 col x 1 row on desktop) */}
          {inventory && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-1 lg:row-span-1 h-full"
            >
              <ProjectCard project={inventory} className="h-full" />
            </motion.div>
          )}
        </motion.div>

        {/* ── Interactive Hint ─────────────────────────────────── */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8]/70 text-center"
          variants={fadeUp(0.2)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#48E6C1]" />
          <span>Interactive 3D Cards: Hover on desktop or tap on mobile to explore features and source repositories.</span>
        </motion.div>

      </div>
    </section>
  );
}
