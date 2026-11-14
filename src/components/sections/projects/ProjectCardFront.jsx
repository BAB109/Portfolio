import { RotateCw, Sparkles } from 'lucide-react';

export default function ProjectCardFront({ project, isFeatured }) {
  const isLearning = project.status.includes('Learning');

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between select-none">
      {/* ── TOP: Category Badge + Technology Tags ──────────────── */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase"
              style={{
                backgroundColor: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}35`,
              }}
            >
              {isFeatured && <Sparkles className="w-3 h-3" />}
              {project.badge}
            </span>

            {isLearning && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/25">
                In Development
              </span>
            )}
          </div>

          <span className="text-[11px] font-mono text-[#94A3B8]/80">
            {project.status}
          </span>
        </div>

        {/* Tech Stack Pills (Top) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0B172B]/80 text-[#94A3B8] border border-[rgba(148,163,184,0.15)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── MIDDLE: Subtle Ambient Glow & Geometric Accent ─────── */}
      <div className="my-auto py-4 relative flex items-center justify-center pointer-events-none">
        <div
          className="w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
          style={{ backgroundColor: project.accent }}
        />
      </div>

      {/* ── BOTTOM: Project Name + Flip Indicator ──────────────── */}
      <div className="pt-4 border-t border-[rgba(148,163,184,0.1)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className={`font-bold text-[#F1F5F9] font-heading tracking-tight transition-colors duration-300 ${
                isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-light mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Visual Indicator to Flip */}
          <div className="flex-shrink-0">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all duration-300 group-hover:bg-[#48E6C1]/20"
              style={{
                backgroundColor: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden sm:inline">Flip for details</span>
              <span className="sm:hidden">Tap</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
