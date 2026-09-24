import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolioData';
import { contactConfig } from '../data/contact';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { navigateTo } = useNavigation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (item) => {
    if (item.page === 'about') {
      navigateTo('home', 'about');
    } else if (item.page === 'contact') {
      navigateTo('home', 'contact');
    } else {
      navigateTo(item.page);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-slate-950/90 backdrop-blur-xl text-slate-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                PD
              </div>
              <span className="flex items-center gap-1 font-bold">
                {personalInfo.name}
              </span>
            </button>

            <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
              Full-Stack Developer
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering responsive full-stack applications with the MERN stack, backed by structured software quality assurance and human-centered design principles.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-colors flex items-center justify-center shrink-0"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors flex items-center justify-center shrink-0"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contactConfig.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors flex items-center justify-center shrink-0"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Portfolio Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-slate-400 hover:text-white transition-colors py-1 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic & University Profile Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Affiliation &amp; Location
            </h4>
            <div className="text-xs space-y-1.5 text-slate-400">
              <p className="font-medium text-white">{personalInfo.university}</p>
              <p>{personalInfo.degree}</p>
              <p className="font-mono text-[11px] text-slate-500">{personalInfo.city}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-400">
              <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> · QA &amp; UI/UX
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] hover:border-cyan-500/30 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
