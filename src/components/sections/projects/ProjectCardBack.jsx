import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { GithubIcon } from '../../ui/Icons';

export default function ProjectCardBack({ project, isFeatured, onFlipBack }) {
  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
      {/* ── Header ────────────────────────────────────────────── */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3
              className={`font-bold text-[#F1F5F9] font-heading ${
                isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#94A3B8] mt-0.5">{project.status}</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFlipBack();
            }}
            className="p-1.5 rounded-lg bg-[#0B172B]/80 border border-[rgba(148,163,184,0.2)] text-[#94A3B8] hover:text-[#48E6C1] hover:border-[#48E6C1]/50 transition-colors cursor-pointer"
            title="Flip back to front"
            aria-label="Flip back to front"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mt-2">
          {project.description}
        </p>

        {/* Implemented Features */}
        <div className="mt-4">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#48E6C1] font-semibold mb-2">
            Implemented Features:
          </p>
          <ul className="space-y-1.5 text-xs text-[#F1F5F9]">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#48E6C1] mt-0.5 text-xs flex-shrink-0">▹</span>
                <span className="leading-snug text-[#94A3B8]">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Footer: Tech Pills + Action Links ─────────────────── */}
      <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.12)]">
        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0B172B] text-[#94A3B8] border border-[rgba(148,163,184,0.15)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B172B] border border-[rgba(148,163,184,0.2)] text-[#F1F5F9] text-xs font-mono font-medium hover:border-[#48E6C1] hover:text-[#48E6C1] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#48E6C1] text-[#0B172B] text-xs font-mono font-bold hover:bg-[#2BCFA9] transition-all shadow-[0_0_12px_rgba(72,230,193,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
