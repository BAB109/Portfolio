import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.15 };

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

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
            Formal engineering education, systems coursework, and mathematical problem-solving foundations.
          </p>
        </motion.div>

        {/* ── Vertical Timeline ─────────────────────────────────── */}
        <motion.div
          className="relative pl-7 sm:pl-9 space-y-10 before:absolute before:left-2 sm:before:left-2.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#48E6C1] before:via-[#38BDF8] before:to-slate-700/30"
          variants={containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {educationTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Subtle Mint / Cyan Node Marker */}
              <span
                className={`absolute -left-[27px] sm:-left-[31px] top-2.5 w-4 h-4 rounded-full border-2 border-[#0B172B] transition-transform duration-300 group-hover:scale-125 ${
                  idx === 0
                    ? 'bg-[#48E6C1] shadow-[0_0_12px_#48E6C1]'
                    : 'bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]'
                }`}
              />

              {/* Spacious Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/40 transition-all duration-300">
                {/* Meta Row: Period, Status, Grade */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#48E6C1]/10 text-[#48E6C1] border border-[#48E6C1]/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#94A3B8] bg-[#0B172B]/80 border border-[rgba(148,163,184,0.12)]">
                      {item.status}
                    </span>
                  </div>

                  <span className="text-sm font-mono font-bold text-[#48E6C1]">
                    {item.grade}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] font-heading mt-2">
                  {item.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#94A3B8] font-light mt-1">
                  <span className="text-[#F1F5F9]/90 font-medium">{item.institution}</span>
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

                {/* Coursework & Focus Areas */}
                {item.coursework && (
                  <div className="mt-4 pt-3 border-t border-[rgba(148,163,184,0.08)]">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                      Key Coursework &amp; Core Topics:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B172B]/90 text-[#F1F5F9]/80 border border-[rgba(148,163,184,0.15)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
