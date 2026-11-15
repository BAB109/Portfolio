import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/config';

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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.15 };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      {/* ── Background Subtle Mint Glow ────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#48E6C1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

        {/* ── Section Header ───────────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeUp(0)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* Numbered Label */}
          <p className="font-mono text-[#48E6C1] text-xs tracking-[0.2em] uppercase mb-3">
            06 &mdash; Get In Touch
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
            Let&rsquo;s Build Something{' '}
            <span className="text-[#48E6C1]">Together.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg font-light leading-relaxed">
            I am actively looking for software engineering internships, backend development roles,
            and collaborative projects. Whether you have a question, an opportunity, or just want
            to connect &mdash; my inbox is always open.
          </p>
        </motion.div>

        {/* ── Interactive Channels Grid ────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {/* 1. Direct Email Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-7 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/50 hover:bg-[#101D32]/90 flex flex-col justify-between transition-all duration-300 shadow-lg group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/20 group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#48E6C1] bg-[#48E6C1]/10 border border-[#48E6C1]/20">
                  Direct Contact
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F1F5F9] font-heading group-hover:text-[#48E6C1] transition-colors">
                Email
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1 font-light leading-relaxed">
                Preferred channel for professional inquiries, internships, and project proposals.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-[#0B172B]/80 border border-[rgba(148,163,184,0.12)]">
                <p className="font-mono text-xs text-[#F1F5F9] break-all select-all">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.1)] flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#48E6C1] text-[#0B172B] font-bold text-xs hover:bg-[#2BCFA9] hover:shadow-[0_0_15px_rgba(72,230,193,0.3)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Me an Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#0B172B] border border-[rgba(148,163,184,0.2)] text-[#94A3B8] hover:text-[#48E6C1] hover:border-[#48E6C1]/50 text-xs font-mono transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#48E6C1]" />
                    <span className="text-[#48E6C1]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* 2. GitHub Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-7 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/50 hover:bg-[#101D32]/90 flex flex-col justify-between transition-all duration-300 shadow-lg group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/20 group-hover:scale-105 transition-transform duration-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#94A3B8] bg-[#0B172B] border border-[rgba(148,163,184,0.15)]">
                  Code &amp; Repos
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F1F5F9] font-heading group-hover:text-[#48E6C1] transition-colors">
                GitHub
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1 font-light leading-relaxed">
                Explore source code, project commits, architecture diagrams, and algorithmic implementations.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-[#0B172B]/80 border border-[rgba(148,163,184,0.12)]">
                <p className="font-mono text-xs text-[#F1F5F9]">
                  github.com/BAB109
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.1)]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B172B] border border-[rgba(148,163,184,0.25)] text-[#F1F5F9] font-mono text-xs font-semibold hover:border-[#48E6C1] hover:text-[#48E6C1] hover:bg-[#0B172B]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* 3. LinkedIn Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-7 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/50 hover:bg-[#101D32]/90 flex flex-col justify-between transition-all duration-300 shadow-lg group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/20 group-hover:scale-105 transition-transform duration-200">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                  Professional
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F1F5F9] font-heading group-hover:text-[#48E6C1] transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1 font-light leading-relaxed">
                Connect for technical recruitment, career networking, and engineering updates.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-[#0B172B]/80 border border-[rgba(148,163,184,0.12)]">
                <p className="font-mono text-xs text-[#F1F5F9]">
                  linkedin.com/in/babji-tata
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.1)]">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B172B] border border-[rgba(148,163,184,0.25)] text-[#F1F5F9] font-mono text-xs font-semibold hover:border-[#48E6C1] hover:text-[#48E6C1] hover:bg-[#0B172B]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Metadata Strip: Location & Status (No phone number) ── */}
        <motion.div
          className="p-5 sm:p-6 rounded-2xl bg-[#101D32]/40 backdrop-blur-sm border border-[rgba(148,163,184,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]"
          variants={fadeUp(0.2)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#48E6C1]" />
            <span>Hyderabad, Telangana, India &bull; IST (UTC+5:30)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#48E6C1] animate-pulse" />
            <span className="text-[#F1F5F9]">Open to Summer Internships &amp; Engineering Roles</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#94A3B8]/80">
            <Clock className="w-3.5 h-3.5 text-[#48E6C1]" />
            <span>Typical reply within 24h</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
