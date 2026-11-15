import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';
import { personalInfo } from '../../data/config';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const bottomTechs = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Node.js',
    'React',
    'PostgreSQL',
    'Redis',
    'Docker',
    'C++',
    'Python',
    'Git',
    'GitHub',
  ];

  // Motion variants with full visibility assurance
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0.85,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: 'easeOut',
      },
    },
  };

  const avatarVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0.8,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* ── Background Subtle Ambient Glows ───────────────────── */}
      <div
        className="absolute top-1/4 left-8 w-80 h-80 bg-[#48E6C1]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-12 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* ── Background Visual Element: Avatar on the Right ────── */}
      {/* Positioned on the right side across all viewports within hero's normal document flow (no fixed/sticky) */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] flex items-center justify-end pr-0 sm:pr-4 lg:pr-8 xl:pr-14"
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        {/* Soft Ambient Mint & Sky Glow behind avatar */}
        <div
          className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-gradient-to-tr from-[#48E6C1]/20 via-[#38BDF8]/15 to-transparent blur-3xl opacity-50 sm:opacity-70 lg:opacity-85 pointer-events-none"
        />

        {/* Avatar Graphic with Seamless Edge & Depth Blending */}
        <div className="relative w-full flex items-center justify-end">
          <img
            src={personalInfo.profileImage}
            alt=""
            className="w-[75%] sm:w-[65%] md:w-[60%] lg:w-[85%] xl:w-[92%] max-h-[440px] sm:max-h-[500px] lg:max-h-[560px] object-contain object-right-bottom filter drop-shadow-[0_12px_30px_rgba(11,23,43,0.85)] opacity-35 sm:opacity-45 md:opacity-60 lg:opacity-100 transition-all duration-300"
            loading="eager"
            fetchpriority="high"
          />

          {/* Left subtle edge fade to blend smoothly into background */}
          <div
            className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#0B172B] to-transparent pointer-events-none"
          />

          {/* Mobile & Tablet dark gradient overlay for text readability */}
          <div
            className="lg:hidden absolute inset-0 bg-gradient-to-r from-[#0B172B] via-[#0B172B]/90 to-transparent pointer-events-none"
          />

          {/* Bottom edge fade: dissolves base into background & ticker */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0B172B] via-[#0B172B]/75 to-transparent pointer-events-none"
          />

          {/* Top edge subtle blend */}
          <div
            className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B172B]/50 to-transparent pointer-events-none"
          />
        </div>
      </motion.div>

      {/* ── Main Foreground Content (z-20) ────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex items-center relative z-20">
        <div className="w-full max-w-2xl lg:max-w-2xl xl:max-w-3xl py-6 sm:py-10">
          <motion.div
            className="flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small introductory text */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#48E6C1]/10 border border-[#48E6C1]/25 text-[#48E6C1] text-xs font-mono tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48E6C1] animate-pulse" />
                HELLO, I'M
              </span>
            </motion.div>

            {/* Main Heading: Verified Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F1F5F9] tracking-tight leading-[1.08] mb-4 font-heading"
            >
              {personalInfo.name}
              <span className="text-[#48E6C1]">.</span>
            </motion.h1>

            {/* Animated Role Line */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F1F5F9] mb-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-[#94A3B8] font-light">I am</span>
              <TypewriterText words={personalInfo.roleTitles} />
            </motion.div>

            {/* Short Introduction based on verified experience */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8 font-light"
            >
              {personalInfo.bioExcerpt}
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary Mint Button */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#48E6C1] text-[#0B172B] font-semibold text-sm transition-all duration-300 hover:bg-[#2BCFA9] hover:shadow-[0_0_24px_rgba(72,230,193,0.45)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] w-full sm:w-auto text-center"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary Ghost Outline Button: Direct Resume Download */}
              <a
                href={personalInfo.resumePath}
                download="Developer_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#48E6C1]/40 bg-[#48E6C1]/5 text-[#F1F5F9] font-medium text-sm transition-all duration-300 hover:border-[#48E6C1] hover:text-[#48E6C1] hover:bg-[#48E6C1]/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4 text-[#48E6C1]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Subtle Status Line */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3 text-xs font-mono text-[#94A3B8]"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#48E6C1]" />
                Undergraduate @ CBIT Hyderabad
              </span>
              <span className="text-slate-600">•</span>
              <span>140+ LeetCode Solved</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Horizontal Tech Strip / Ticker ──────────────── */}
      <div className="w-full border-t border-[rgba(148,163,184,0.15)] bg-[#0B172B]/85 backdrop-blur-md pt-3.5 pb-2 mt-6 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-1 text-xs font-mono text-[#94A3B8]">
            {bottomTechs.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#48E6C1] transition-colors"
              >
                <span className="text-[#48E6C1]/60" aria-hidden="true">
                  •
                </span>
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
