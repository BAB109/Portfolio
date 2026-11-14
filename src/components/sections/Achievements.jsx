import { motion, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  Award,
  Terminal,
  Shield,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import {
  codingMilestones,
  certificationsAndActivities,
} from '../../data/milestones';

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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.15 };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="mb-16"
          variants={fadeUp(0)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* Numbered Label */}
          <p className="font-mono text-[#48E6C1] text-xs tracking-[0.2em] uppercase mb-3">
            05 &mdash; Coding Achievements
          </p>

          {/* Main Heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
              Coding Achievements &amp;{' '}
              <span className="text-[#48E6C1]">Certifications</span>
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Verified competitive programming milestones, enterprise AI certifications, and cybersecurity competitions.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SUBSECTION A: CODING ACHIEVEMENTS                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#48E6C1]" />
            <h3 className="text-sm font-semibold text-[#F1F5F9] font-mono uppercase tracking-wider">
              A. Competitive Problem Solving
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewportOpts}
          >
            {codingMilestones.map((coding) => (
              <motion.div
                key={coding.id}
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#101D32] via-[#0E1A2E] to-[#0B172B] border border-[#48E6C1]/40 shadow-[0_0_25px_-5px_rgba(72,230,193,0.15)] hover:border-[#48E6C1] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/30 flex-shrink-0">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#48E6C1] font-semibold">
                          {coding.platform}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#48E6C1]/15 text-[#48E6C1] border border-[#48E6C1]/30">
                          {coding.status}
                        </span>
                        <span className="text-xs font-mono text-[#94A3B8]">
                          {coding.language}
                        </span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] font-heading mt-1">
                        {coding.title}
                      </h4>
                    </div>
                  </div>

                  {/* Highlight Metric Callout */}
                  <div className="md:text-right flex items-center md:block gap-3 pl-2 md:pl-0 border-l md:border-l-0 border-[rgba(148,163,184,0.15)]">
                    <p className="text-4xl font-extrabold text-[#48E6C1] font-heading">
                      {coding.metric}
                    </p>
                    <p className="text-xs font-mono text-[#94A3B8]">
                      {coding.metricLabel}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mb-6 max-w-4xl">
                  {coding.description}
                </p>

                <div className="pt-4 border-t border-[rgba(148,163,184,0.12)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {coding.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#0B172B] text-[#94A3B8] border border-[rgba(148,163,184,0.15)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={coding.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/30 hover:bg-[#48E6C1] hover:text-[#0B172B] text-xs font-mono font-semibold transition-all shadow-[0_0_12px_rgba(72,230,193,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
                  >
                    <span>View LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SUBSECTION B: CERTIFICATIONS & ACTIVITIES               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <h3 className="text-sm font-semibold text-[#F1F5F9] font-mono uppercase tracking-wider">
              B. Certifications &amp; Activities
            </h3>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewportOpts}
          >
            {certificationsAndActivities.map((cert) => {
              const isGenAi = cert.id === 'nptel-genai';
              const isGcp = cert.id === 'gcp-vertex-ai';
              const isCtf = cert.id === 'ctf-cbit';

              const IconComponent = isGenAi
                ? Award
                : isGcp
                ? Sparkles
                : isCtf
                ? Shield
                : CheckCircle2;

              return (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/40 flex flex-col justify-between transition-all duration-300 group shadow-md"
                >
                  <div>
                    {/* Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="px-2.5 py-1 rounded text-xs font-mono font-medium"
                        style={{
                          backgroundColor: `${cert.badgeColor}15`,
                          color: cert.badgeColor,
                          border: `1px solid ${cert.badgeColor}30`,
                        }}
                      >
                        {cert.credentialType}
                      </span>
                      <span className="text-[11px] font-mono text-[#94A3B8]/70">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title & Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="p-2.5 rounded-lg mt-0.5 flex-shrink-0"
                        style={{
                          backgroundColor: `${cert.badgeColor}15`,
                          color: cert.badgeColor,
                          border: `1px solid ${cert.badgeColor}25`,
                        }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#F1F5F9] font-heading group-hover:text-[#48E6C1] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-mono text-[#94A3B8] mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mt-3">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.1)] flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#48E6C1]" />
                      <span>{cert.verificationNote}</span>
                    </span>

                    <div className="flex flex-wrap gap-1">
                      {cert.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0B172B] text-[#94A3B8]/70 border border-[rgba(148,163,184,0.1)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
