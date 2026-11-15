import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../ui/Icons';

export default function ProjectCard({ project, isFeatured = false, className = '' }) {
  const isLearning = project.status?.includes('Development') || project.status?.includes('Learning');

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group ${
        isFeatured
          ? 'bg-gradient-to-br from-[#12233D] via-[#0E1A2E] to-[#0B172B] border-2 border-[#48E6C1]/50 shadow-[0_0_35px_-5px_rgba(72,230,193,0.2)] hover:border-[#48E6C1] hover:shadow-[0_0_40px_-5px_rgba(72,230,193,0.3)] hover:-translate-y-1'
          : 'bg-[#101D32]/80 backdrop-blur-md border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/50 hover:bg-[#101D32]/95 hover:shadow-[0_10px_30px_-5px_rgba(72,230,193,0.15)] hover:-translate-y-1'
      } ${className}`}
    >
      <div>
        {/* ── Top Row: Badge, Status, External Links ─────────── */}
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

        {/* ── Project Title & Tagline ────────────────────────── */}
        <h3
          className={`font-bold text-[#F1F5F9] font-heading tracking-tight group-hover:text-white transition-colors ${
            isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-xs sm:text-sm font-mono text-[#48E6C1] mt-1 font-medium">
            {project.tagline}
          </p>
        )}

        {/* ── Direct Visible Description ─────────────────────── */}
        <p
          className={`text-[#94A3B8] font-light leading-relaxed mt-3 ${
            isFeatured ? 'text-sm sm:text-base max-w-2xl' : 'text-xs sm:text-sm'
          }`}
        >
          {project.description}
        </p>

        {/* ── Implemented Features (Featured card only) ──────── */}
        {isFeatured && project.features && (
          <div className="mt-4 pt-4 border-t border-[rgba(148,163,184,0.12)] space-y-1.5">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#48E6C1] font-semibold mb-2">
              Key Engineering Highlights:
            </p>
            <ul className="space-y-1.5 text-xs text-[#94A3B8]">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#48E6C1] mt-0.5 text-xs flex-shrink-0">▹</span>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Bottom: Tech Stack Pills & Direct Links ──────────── */}
      <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.12)]">
        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#0B172B] text-[#94A3B8] border border-[rgba(148,163,184,0.15)] group-hover:border-[#48E6C1]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B172B] border border-[rgba(148,163,184,0.2)] text-[#F1F5F9] text-xs font-mono font-medium hover:border-[#48E6C1] hover:text-[#48E6C1] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1]"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#48E6C1] text-[#0B172B] text-xs font-mono font-bold hover:bg-[#2BCFA9] transition-all shadow-[0_0_12px_rgba(72,230,193,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
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
