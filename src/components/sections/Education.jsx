import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { educationTimeline } from '../../data/milestones';

/* ─── Animation Variants ───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  },
});

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.15 };

  const item = educationTimeline[0];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

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
            04 &mdash; Education Journey
          </p>

          {/* Main Heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
              My <span className="text-[#48E6C1]">Academic Journey</span>
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Higher education in Computer Science and Engineering, core systems coursework, and analytical problem-solving foundations.
          </p>
        </motion.div>

        {/* ── Education Timeline Card ──────────────────────────── */}
        {item && (
          <motion.div
            className="relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#48E6C1] via-[#38BDF8] before:to-transparent"
            variants={fadeUp(0.1)}
            initial={shouldReduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewportOpts}
          >
            {/* Glowing Mint Node Marker */}
            <span
              className="absolute -left-[3px] top-4 w-4 h-4 rounded-full border-2 border-[#0B172B] bg-[#48E6C1] shadow-[0_0_12px_#48E6C1]"
              aria-hidden="true"
            />

            {/* Focused Higher Education Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101D32]/75 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/40 transition-all duration-300 shadow-xl">
              {/* Meta Row: Period, Status, Grade */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#94A3B8] bg-[#0B172B]/80 border border-[rgba(148,163,184,0.12)]">
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#48E6C1]" />
                  <span className="text-sm font-mono font-bold text-[#48E6C1]">
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Degree & Institution */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1F5F9] font-heading">
                {item.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#94A3B8] font-light mt-1.5">
                <span className="text-[#F1F5F9]/90 font-medium text-base">{item.institution}</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 font-mono text-xs text-[#94A3B8]">
                  <MapPin className="w-3 h-3 text-[#48E6C1]" />
                  {item.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] font-light leading-relaxed mt-4 pt-4 border-t border-[rgba(148,163,184,0.1)]">
                {item.description}
              </p>

              {/* Core Coursework Pills */}
              {item.coursework && (
                <div className="mt-5 pt-4 border-t border-[rgba(148,163,184,0.08)]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2 font-medium">
                    Key Coursework &amp; Core Topics:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0B172B]/90 text-[#F1F5F9]/85 border border-[rgba(148,163,184,0.15)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {item.highlights && (
                <div className="mt-4 pt-3 border-t border-[rgba(148,163,184,0.08)]">
                  <ul className="space-y-1 text-xs text-[#94A3B8]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#48E6C1] mt-0.5 text-xs">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
