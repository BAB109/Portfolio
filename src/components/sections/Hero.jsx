import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileText, Terminal } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';
import { personalInfo } from '../../data/config';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

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

  const photoVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0.85,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Mobile & Tablet Integrated Background Image Layer */}
      {/* Contained strictly within the hero section (normal document flow, no fixed/sticky positioning) */}
      <div
        className="lg:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Profile photograph positioned toward the right side */}
        <img
          src={personalInfo.profileImage}
          alt=""
          className="absolute top-0 right-0 w-[75%] sm:w-[55%] h-full object-cover object-top opacity-30 filter contrast-[1.08] saturate-[1.05]"
          loading="eager"
        />

        {/* Strong dark navy gradient overlay: fully dark on left where text lives, smoothly revealing photo on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B172B] via-[#0B172B]/95 to-[#0B172B]/60" />

        {/* Vertical gradient blends */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B172B] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B172B] via-[#0B172B]/90 to-transparent" />
      </div>

      {/* Ambient background glow accents */}
      <div
        className="absolute top-1/4 left-8 w-80 h-80 bg-[#48E6C1]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-12 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-6 sm:py-10">
          
          {/* Left Column (7 cols desktop / full width on mobile): Foreground Content */}
          <motion.div
            className="w-full lg:col-span-7 flex flex-col items-start text-left z-20 relative"
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

              {/* Secondary Ghost Outline Button */}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#48E6C1]/40 bg-[#48E6C1]/5 text-[#F1F5F9] font-medium text-sm transition-all duration-300 hover:border-[#48E6C1] hover:text-[#48E6C1] hover:bg-[#48E6C1]/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4 text-[#48E6C1]" />
                <span>View Resume</span>
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

          {/* Right Column (5 cols): Desktop Profile Photograph ONLY */}
          {/* CRITICAL: Hidden on mobile/tablet (hidden lg:flex). Strictly normal document flow. */}
          <div className="hidden lg:flex lg:col-span-5 justify-end z-20 w-full">
            <motion.div
              className="relative w-full max-w-[380px] lg:max-w-[420px]"
              variants={photoVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Soft Ambient Glow behind the photo */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#48E6C1]/15 via-[#38BDF8]/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none"
                aria-hidden="true"
              />

              {/* Photograph Container with Seamless Edge Blending */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.015]">
                {!imageError ? (
                  <>
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="w-full h-[460px] lg:h-[500px] object-cover object-top filter saturate-[1.05] contrast-[1.05]"
                      loading="eager"
                    />

                    {/* Left edge subtle dark fade - blends portrait naturally into navy text column */}
                    <div
                      className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0B172B] to-transparent opacity-60 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Bottom edge fade - dissolves portrait into the background base */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B172B] via-[#0B172B]/60 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top edge subtle vignette */}
                    <div
                      className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B172B]/40 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  /* Fallback visual placeholder area without inventing an image */
                  <div className="w-full h-[460px] lg:h-[500px] bg-[#101D32] border border-[rgba(148,163,184,0.15)] rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#48E6C1]/10 border border-[#48E6C1]/30 flex items-center justify-center mb-4 text-[#48E6C1]">
                      <Terminal className="w-8 h-8" />
                    </div>
                    <p className="font-heading text-lg font-bold text-[#F1F5F9]">
                      {personalInfo.name}
                    </p>
                    <p className="font-mono text-xs text-[#94A3B8] mt-1">
                      Software Engineer &amp; Backend Developer
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Horizontal Tech Strip / Ticker matching reference design */}
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
