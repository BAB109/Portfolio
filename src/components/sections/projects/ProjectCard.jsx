import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import ProjectCardFront from './ProjectCardFront';
import ProjectCardBack from './ProjectCardBack';

export default function ProjectCard({ project, isFeatured = false, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('flip') && isFeatured) {
      return true;
    }
    return false;
  });
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Don't toggle if the user is interacting with an interactive link or button inside
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${project.title} project card, ${isFlipped ? 'showing back' : 'showing front'}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      onKeyDown={handleKeyDown}
      className={`perspective-1000 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] rounded-2xl cursor-pointer ${className}`}
    >
      {/* ── 3D Card Inner Wrapper ────────────────────────────── */}
      <div
        className={`relative w-full h-full rounded-2xl transition-transform ${
          shouldReduceMotion ? 'duration-150' : 'duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]'
        } transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ minHeight: isFeatured ? '520px' : '260px' }}
      >
        {/* ── Front Face ─────────────────────────────────────── */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl backface-hidden bg-[#101D32]/80 backdrop-blur-md border ${
            isFeatured
              ? 'border-[#48E6C1]/40 shadow-[0_0_30px_-5px_rgba(72,230,193,0.18)]'
              : 'border-[rgba(148,163,184,0.15)] group-hover:border-[#48E6C1]/40'
          } overflow-hidden`}
        >
          <ProjectCardFront project={project} isFeatured={isFeatured} />
        </div>

        {/* ── Back Face (Pre-rotated 180deg) ──────────────────── */}
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl backface-hidden rotate-y-180 bg-[#0E1A2E]/95 backdrop-blur-md border ${
            isFeatured
              ? 'border-[#48E6C1]/60 shadow-[0_0_35px_-5px_rgba(72,230,193,0.25)]'
              : 'border-[rgba(148,163,184,0.25)]'
          } overflow-hidden`}
        >
          <ProjectCardBack
            project={project}
            isFeatured={isFeatured}
            onFlipBack={() => setIsFlipped(false)}
          />
        </div>
      </div>
    </div>
  );
}
