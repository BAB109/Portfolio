import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  X,
  ExternalLink,
  FolderGit2,
  Layers,
} from 'lucide-react';
import { allProjects } from '../data/projects';
import { Link } from '../router';
import { GithubIcon } from '../components/ui/Icons';

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'experiments', label: 'Experiments' },
];

export default function AllProjects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on tab and real-time search
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      const matchesFilter =
        selectedFilter === 'all' || project.filterCategory === selectedFilter;

      if (!matchesFilter) return false;

      // Search query filter (searches title, tagline, description, tech stack, category)
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(q);
      const taglineMatch = project.tagline?.toLowerCase().includes(q) || false;
      const descMatch = project.description?.toLowerCase().includes(q) || false;
      const categoryMatch = project.category?.toLowerCase().includes(q) || false;
      const techMatch = project.techStack?.some((t) =>
        t.toLowerCase().includes(q)
      ) || false;

      return titleMatch || taglineMatch || descMatch || categoryMatch || techMatch;
    });
  }, [selectedFilter, searchQuery]);

  // Counts for each tab
  const counts = useMemo(() => {
    const c = { all: allProjects.length };
    allProjects.forEach((p) => {
      c[p.filterCategory] = (c[p.filterCategory] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Top Bar: Back to Home Link ───────────────────────── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-mono text-[#94A3B8] hover:text-[#48E6C1] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#48E6C1]" />
            <span>&larr; Back to Home</span>
          </Link>
        </motion.div>

        {/* ── Page Header ───────────────────────────────────────── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[#48E6C1] text-xs uppercase tracking-[0.2em]">
              CATALOG &bull; 15 VERIFIED REPOSITORIES
            </span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#48E6C1]/40 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#F1F5F9] tracking-tight mb-4">
            All <span className="text-[#48E6C1]">Projects</span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] font-light max-w-3xl leading-relaxed">
            A collection of projects, experiments, and things I&apos;ve built while learning and developing my engineering skills.
          </p>
        </motion.div>

        {/* ── Controls: Search Bar & Category Filters ────────────── */}
        <div className="space-y-6 mb-12">
          {/* Real-Time Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, technology (e.g. React, C++, PostgreSQL)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#101D32]/90 border border-[rgba(148,163,184,0.2)] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#48E6C1] focus:ring-1 focus:ring-[#48E6C1] transition-all shadow-inner"
              aria-label="Search projects by name or technology"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-[#94A3B8] mr-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#48E6C1]" /> Category:
            </span>
            {FILTER_TABS.map((tab) => {
              const isActive = selectedFilter === tab.id;
              const count = counts[tab.id] || 0;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#48E6C1] text-[#0B172B] font-semibold shadow-[0_0_15px_rgba(72,230,193,0.3)]'
                      : 'bg-[#101D32] border border-[rgba(148,163,184,0.15)] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#48E6C1]/40'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#0B172B]/20 text-[#0B172B]'
                        : 'bg-slate-800 text-[#94A3B8]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter & Count Indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] pt-2 border-t border-[rgba(148,163,184,0.1)]">
            <div className="flex items-center gap-2">
              <span>Showing</span>
              <span className="text-[#48E6C1] font-semibold font-mono">
                {filteredProjects.length}
              </span>
              <span>of {allProjects.length} projects</span>
              {searchQuery && (
                <span className="text-slate-400">
                  matching &quot;{searchQuery}&quot;
                </span>
              )}
            </div>
            {(searchQuery || selectedFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#48E6C1] hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* ── Projects Grid ──────────────────────────────────────── */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const isFeatured = project.featured;

              return (
                <motion.article
                  key={project.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(idx * 0.04, 0.4),
                  }}
                  className={`flex flex-col justify-between rounded-2xl bg-[#101D32] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isFeatured
                      ? 'border-[#48E6C1]/50 shadow-[0_0_25px_rgba(72,230,193,0.12)] hover:border-[#48E6C1]'
                      : 'border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/50 hover:shadow-black/40'
                  }`}
                >
                  <div className="p-6">
                    {/* Top Meta: Category Badge & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[11px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                          isFeatured
                            ? 'bg-[#48E6C1]/15 text-[#48E6C1] border-[#48E6C1]/30'
                            : 'bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                      >
                        {project.badge || project.category}
                      </span>
                      {project.status && (
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold font-heading text-[#F1F5F9] mb-1 group-hover:text-[#48E6C1] transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    {project.tagline && (
                      <p className="text-xs font-mono text-[#48E6C1] mb-3">
                        {project.tagline}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-[#94A3B8] font-light leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features list (if available) */}
                    {project.features && project.features.length > 0 && (
                      <ul className="mb-5 space-y-1.5 text-xs text-[#94A3B8]/90 font-light">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#48E6C1] mt-1 shrink-0">&bull;</span>
                            <span className="line-clamp-2">{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bottom: Tech Stack & Actions */}
                  <div className="px-6 pb-6 pt-2 border-t border-[rgba(148,163,184,0.1)] mt-auto">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B172B] border border-[rgba(148,163,184,0.15)] text-[#94A3B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons: GitHub + Live Demo */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0B172B] border border-[rgba(148,163,184,0.2)] hover:border-[#48E6C1]/60 text-xs font-mono text-[#F1F5F9] hover:text-[#48E6C1] transition-colors"
                          aria-label={`Source code for ${project.title}`}
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
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#48E6C1] text-[#0B172B] text-xs font-mono font-semibold hover:bg-[#3cd3af] transition-colors shadow-[0_0_12px_rgba(72,230,193,0.25)]"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-6 rounded-2xl bg-[#101D32]/50 border border-[rgba(148,163,184,0.15)] max-w-lg mx-auto">
            <FolderGit2 className="w-12 h-12 text-[#94A3B8] mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold font-heading text-[#F1F5F9] mb-2">
              No matching projects found
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6">
              No repositories matched &quot;{searchQuery}&quot; in the selected category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48E6C1] text-[#0B172B] text-xs font-mono font-semibold hover:bg-[#3cd3af] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
