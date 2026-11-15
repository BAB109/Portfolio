import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/config';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[rgba(148,163,184,0.15)] bg-[#08101E] py-12 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* ── Left: Branding & Technologies ────────────────────── */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-base tracking-wider text-[#F1F5F9]">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-mono text-xs text-[#94A3B8]">
              Software Engineer
            </span>
          </div>

          <p className="text-xs text-[#94A3B8]/80 font-light mt-0.5">
            Built with React 19, Vite, Tailwind CSS &amp; Framer Motion
          </p>

          <p className="text-[11px] font-mono text-slate-500 mt-0.5">
            &copy; {CURRENT_YEAR} Babji Tata. All rights reserved.
          </p>
        </div>

        {/* ── Center: Social Links (Verified) ──────────────────── */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#48E6C1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded py-1 px-1.5"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#48E6C1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded py-1 px-1.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#48E6C1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded py-1 px-1.5"
            aria-label="LeetCode"
          >
            LeetCode
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={personalInfo.resumePath}
            download="Developer_Resume.pdf"
            className="hover:text-[#48E6C1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded py-1 px-1.5"
            aria-label="Download Resume PDF"
          >
            Resume
          </a>
        </div>

        {/* ── Right: Scroll to Top Button ──────────────────────── */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group p-2.5 rounded-xl bg-[#0B172B] border border-[rgba(148,163,184,0.15)] hover:border-[#48E6C1]/60 text-[#94A3B8] hover:text-[#48E6C1] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
