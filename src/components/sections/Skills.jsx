import { motion, useReducedMotion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Code2,
  Server,
  Layers,
  Database,
  GitBranch,
  Atom,
  Network,
  ShieldCheck,
  Palette,
  Zap,
  Container,
  CheckSquare,
  Boxes,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { skillTiers, technicalPillars } from '../../data/skills';

/* ─── Icon Mapping ─────────────────────────────────────────────── */
const ICON_MAP = {
  Terminal,
  Cpu,
  Code2,
  Server,
  Layers,
  Database,
  GitBranch,
  Atom,
  Network,
  ShieldCheck,
  Palette,
  Zap,
  Container,
  CheckSquare,
  Boxes,
  Sparkles,
};

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

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const viewportOpts = { once: true, amount: 0.1 };

  return (
    <section id="skills" className="py-24 relative z-10">
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
            02 &mdash; Technical Skills
          </p>

          {/* Main Heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tight font-heading">
              Technologies I{' '}
              <span className="text-[#48E6C1]">work with</span>
            </h2>
            <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            A structured breakdown of my technical toolkit &mdash; organized by
            hands-on engineering independence, practical application, and active exploration.
          </p>
        </motion.div>

        {/* ── Vertical Skill Categories Stack ──────────────────── */}
        {/* Strictly vertical categories, one below another on all viewports */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          {skillTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={categoryVariants}
              className={`p-6 sm:p-8 rounded-2xl bg-[#101D32]/70 backdrop-blur-sm
                         border border-[rgba(148,163,184,0.15)] ${tier.borderHover}
                         transition-all duration-300 shadow-lg`}
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(148,163,184,0.1)]">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-md text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: `${tier.accent}15`,
                        color: tier.accent,
                        border: `1px solid ${tier.accent}35`,
                      }}
                    >
                      {tier.tier}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: tier.accent }} />
                      {tier.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mt-2 max-w-3xl">
                    {tier.description}
                  </p>
                </div>

                <span className="text-xs font-mono text-[#94A3B8] self-start sm:self-center px-2.5 py-1 rounded bg-[#0B172B]/60 border border-[rgba(148,163,184,0.1)]">
                  {tier.skills.length} technologies
                </span>
              </div>

              {/* Technologies: Horizontal Chips / Badges with natural wrapping */}
              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                {tier.skills.map((skill) => {
                  const IconComponent = ICON_MAP[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl
                                 bg-[#0B172B]/75 border border-[rgba(148,163,184,0.15)]
                                 hover:border-[#48E6C1]/50 hover:bg-[#0B172B]
                                 hover:shadow-[0_0_15px_-3px_rgba(72,230,193,0.15)]
                                 transition-all duration-200 cursor-default"
                    >
                      <div
                        className="p-1.5 rounded-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{
                          backgroundColor: `${tier.accent}15`,
                          color: tier.accent,
                          border: `1px solid ${tier.accent}30`,
                        }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-semibold text-[#F1F5F9] group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-[#94A3B8]/90 transition-colors">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Technical Pillars Banner ─────────────────────────── */}
        <motion.div
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#101D32]/50 backdrop-blur-sm
                     border border-[rgba(148,163,184,0.15)]"
          variants={fadeUp(0.15)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewportOpts}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[rgba(148,163,184,0.12)]">
            {technicalPillars.map((pillar, idx) => (
              <div key={pillar.title} className={`${idx !== 0 ? 'pt-5 md:pt-0 md:pl-6' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#48E6C1]" />
                  <h3 className="text-sm font-semibold text-[#F1F5F9] font-mono uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed mt-2 font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
