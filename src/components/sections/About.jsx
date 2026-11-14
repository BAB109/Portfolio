import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Server, Terminal, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/config';

/* ─── Animation helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  },
});

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

/* ─── Static data for the three info cards ──────────────────────── */
const INFO_CARDS = [
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    lines: [
      { primary: 'B.Tech — Computer Science & Engineering', secondary: null },
      { primary: 'Chaitanya Bharathi Institute of Technology (CBIT)', secondary: 'Hyderabad · 2024 – 2028' },
      { primary: 'CGPA: 7.91 / 10', secondary: null, accent: true },
    ],
  },
  {
    id: 'development',
    icon: Server,
    title: 'Development',
    lines: [
      { primary: 'Backend development (Node.js, Express.js)', secondary: null },
      { primary: 'RESTful API design', secondary: null },
      { primary: 'Database-driven applications (PostgreSQL)', secondary: null },
      { primary: 'Full-stack with React', secondary: null },
    ],
  },
  {
    id: 'problem-solving',
    icon: Terminal,
    title: 'Problem Solving',
    lines: [
      { primary: 'Data Structures & Algorithms (C++)', secondary: null },
      { primary: '140+ problems solved on LeetCode', secondary: null, accent: true },
      { primary: 'CTF competition participant', secondary: 'CBIT DDC Cybersecurity' },
    ],
  },
];

/* ─── Bio paragraphs ────────────────────────────────────────────── */
// Using verified data from resume / GitHub — no invented claims.
const BIO = [
  <>
    I&rsquo;m a{' '}
    <span className="text-[#48E6C1] font-medium">
      Computer Science &amp; Engineering undergraduate
    </span>{' '}
    at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad — passionate about
    software engineering, backend development, and building products that solve real problems.
  </>,
  <>
    I enjoy working across the stack — from designing{' '}
    <span className="text-[#48E6C1] font-medium">RESTful APIs</span> and relational schemas
    with <span className="text-[#48E6C1] font-medium">Node.js, Express.js and PostgreSQL</span>,
    to shipping full-stack applications. My flagship project{' '}
    <span className="text-[#F1F5F9] font-medium">DSA Vault</span> is a live full-stack
    platform built with React, Node.js and PostgreSQL, deployed on Vercel and Render.
  </>,
  <>
    Outside of building things, I sharpen my algorithmic thinking through competitive
    programming — I&rsquo;ve solved{' '}
    <span className="text-[#48E6C1] font-medium">140+ problems on LeetCode</span>, primarily
    in C++, covering core DSA topics and problem-solving patterns.
  </>,
  <>
    I&rsquo;m currently expanding my knowledge in generative AI, holding an{' '}
    <span className="text-[#48E6C1] font-medium">Elite Certification</span> from
    NPTEL / IISc Bangalore and a{' '}
    <span className="text-[#48E6C1] font-medium">Google Cloud Prompt Design badge</span>,
    as I explore how modern AI capabilities integrate with software engineering workflows.
  </>,
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const viewportOpts = { once: true, amount: 0.15 };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Section heading ───────────────────────────────────── */}
        <motion.div
          className="mb-14"
          variants={fadeUp(0)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* numbered label */}
          <p className="font-mono text-[#48E6C1] text-xs tracking-[0.2em] uppercase mb-3">
            01 &mdash; About Me
          </p>

          {/* main heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
              A little{' '}
              <span className="text-[#48E6C1]">about</span> me
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">

          {/* ── LEFT: Bio + Stats ─────────────────────────────── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Bio paragraphs */}
            <motion.div
              className="p-6 sm:p-8 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm
                         border border-[rgba(148,163,184,0.15)]
                         hover:border-[#48E6C1]/30 transition-colors duration-300"
              variants={fadeUp(0.08)}
              initial={shouldReduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={viewportOpts}
            >
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial={shouldReduceMotion ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={viewportOpts}
              >
                {BIO.map((para, idx) => (
                  <motion.p
                    key={idx}
                    variants={staggerItem}
                    className="text-[#94A3B8] leading-relaxed text-base sm:text-[1.05rem] font-light"
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>

              {/* Quick pillar strip */}
              <div className="mt-8 pt-6 border-t border-[rgba(148,163,184,0.12)]
                              grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Backend & APIs', sub: 'Node.js · Express · PostgreSQL', Icon: Server },
                  { label: 'DSA & Problem Solving', sub: '140+ LeetCode · C++', Icon: Terminal },
                  { label: 'Applied GenAI', sub: 'IISc Elite · Google Cloud', Icon: GraduationCap },
                ].map(({ label, sub, Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-lg bg-[#48E6C1]/10 border border-[#48E6C1]/20
                                    text-[#48E6C1] flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[#F1F5F9] font-medium text-xs font-mono uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial={shouldReduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={viewportOpts}
            >
              {personalInfo.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="p-4 rounded-xl bg-[#101D32]/50 border border-[rgba(148,163,184,0.15)]
                             text-center hover:border-[#48E6C1]/40 hover:bg-[#101D32]/80
                             transition-all duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#48E6C1] font-heading">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-[#F1F5F9] mt-1 leading-snug">
                    {stat.label}
                  </p>
                  <p className="text-[11px] font-mono text-[#94A3B8] mt-0.5">{stat.suffix}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 3 Info Cards ───────────────────────────── */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            variants={staggerContainer}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewportOpts}
          >
            {INFO_CARDS.map(({ id, icon: Icon, title, lines }) => (
              <motion.div
                key={id}
                variants={staggerItem}
                className="p-5 sm:p-6 rounded-2xl bg-[#101D32]/60 backdrop-blur-sm
                           border border-[rgba(148,163,184,0.15)]
                           hover:border-[#48E6C1]/40 hover:bg-[#101D32]/80
                           transition-all duration-300 group"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#48E6C1]/10 border border-[#48E6C1]/20
                                  text-[#48E6C1] group-hover:bg-[#48E6C1]/15
                                  transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#F1F5F9] font-mono uppercase
                                 tracking-wider group-hover:text-[#48E6C1] transition-colors duration-300">
                    {title}
                  </h3>
                </div>

                {/* Card lines */}
                <ul className="space-y-2">
                  {lines.map(({ primary, secondary, accent }, li) => (
                    <li key={li} className="flex items-start gap-2 text-sm">
                      <span className="text-[#48E6C1] mt-[3px] text-xs flex-shrink-0">▹</span>
                      <span>
                        <span className={accent ? 'text-[#48E6C1] font-medium' : 'text-[#94A3B8]'}>
                          {primary}
                        </span>
                        {secondary && (
                          <span className="block text-[11px] text-[#94A3B8]/70 font-mono mt-0.5">
                            {secondary}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Education card: location & reference to detailed milestones */}
                {id === 'education' && (
                  <div className="mt-4 pt-3 border-t border-[rgba(148,163,184,0.1)]
                                  flex items-center justify-between text-[11px] text-[#94A3B8] font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#48E6C1]" />
                      <span>Hyderabad, Telangana</span>
                    </span>
                    <a
                      href="#education"
                      className="text-[#48E6C1] hover:underline flex items-center gap-1"
                    >
                      <span>Full Timeline</span>
                      <span>↓</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
