import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../../data/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B172B]/85 backdrop-blur-md border-b border-[rgba(148,163,184,0.15)] py-3 shadow-lg shadow-black/25'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] rounded-lg"
          aria-label="Babji Tata Home"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-[#48E6C1]/40 bg-[#48E6C1]/5 transition-all duration-300 group-hover:border-[#48E6C1] group-hover:shadow-[0_0_15px_rgba(72,230,193,0.35)]">
            <svg
              className="w-5 h-5 text-[#48E6C1] transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.15" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="font-heading font-bold text-lg tracking-wider text-[#F1F5F9] group-hover:text-[#48E6C1] transition-colors">
            BT<span className="text-[#48E6C1]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`group flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#48E6C1] rounded ${
                  isActive ? 'text-[#F1F5F9]' : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                }`}
              >
                <span
                  className={`font-mono text-xs transition-opacity ${
                    isActive ? 'text-[#48E6C1] opacity-100 font-semibold' : 'text-[#48E6C1] opacity-75 group-hover:opacity-100'
                  }`}
                >
                  {link.num}.
                </span>
                <span className="relative">
                  {link.label}
                  <span
                    className={`absolute bottom-[-3px] left-0 h-[1.5px] bg-[#48E6C1] transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </span>
              </a>
            );
          })}

          {/* Resume Link */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded border border-[#48E6C1]/50 text-[#48E6C1] hover:bg-[#48E6C1]/10 hover:border-[#48E6C1] hover:shadow-[0_0_12px_rgba(72,230,193,0.25)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-1 rounded border border-[#48E6C1]/50 text-[#48E6C1] hover:bg-[#48E6C1]/10"
          >
            <FileDown className="w-3 h-3" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#94A3B8] hover:text-[#48E6C1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B172B]/95 backdrop-blur-xl border-b border-[rgba(148,163,184,0.15)] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 text-sm uppercase tracking-wider font-medium py-2.5 border-b border-slate-800/60 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#48E6C1] font-semibold'
                    : 'text-[#F1F5F9] hover:text-[#48E6C1]'
                }`}
              >
                <span className="font-mono text-[#48E6C1] text-xs">{link.num}.</span>
                <span>{link.label}</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded border border-[#48E6C1] text-[#48E6C1] font-mono text-xs font-semibold hover:bg-[#48E6C1]/10 transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" /> Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
