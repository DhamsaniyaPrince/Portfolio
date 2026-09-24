import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Layers, ShieldCheck, Palette, FileText, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Magnetic from './common/Magnetic';

export default function Navbar() {
  const { currentPage, navigateTo } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (targetPage, sectionId = null) => {
    setIsOpen(false);
    setWorkDropdown(false);
    navigateTo(targetPage, sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-md border border-white/[0.12] shadow-2xl shadow-black/60'
              : 'bg-slate-950/50 backdrop-blur-sm border border-white/[0.08]'
          }`}
        >
          {/* Brand Signature */}
          <Magnetic strength={0.2}>
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center gap-2 text-white focus:outline-none py-1 px-1.5"
            >
              <div className="w-7 h-7 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold group-hover:scale-105 transition-transform">
                P
              </div>
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Prince<span className="text-cyan-400">.</span>
              </span>
            </button>
          </Magnetic>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs">
            {/* Work Item with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdown(true)}
              onMouseLeave={() => setWorkDropdown(false)}
            >
              <Magnetic strength={0.15}>
                <button
                  onClick={() => handleLinkClick('home', 'work')}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                    currentPage === 'projects' || currentPage === 'qa' || currentPage === 'ui-ux'
                      ? 'text-white bg-white/[0.1]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>Work</span>
                  <ChevronDown className="w-3 h-3 text-slate-400 transition-transform group-hover:rotate-180" />
                </button>
              </Magnetic>

              {/* Work Dropdown Menu */}
              <AnimatePresence>
                {workDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 p-2 rounded-2xl bg-slate-950/95 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col gap-1 z-50"
                  >
                    <button
                      onClick={() => handleLinkClick('home', 'work')}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <div>
                        <span className="block font-semibold">Selected Work</span>
                        <span className="text-[10px] text-slate-500 font-mono">Homepage showcase</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('projects')}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                      <div>
                        <span className="block font-semibold">All Projects</span>
                        <span className="text-[10px] text-slate-500 font-mono">Full stack &amp; frontend</span>
                      </div>
                    </button>

                    <div className="my-1 border-t border-white/[0.06]" />

                    <button
                      onClick={() => handleLinkClick('qa')}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-medium text-slate-300 hover:text-purple-300 hover:bg-purple-950/30 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                      <div>
                        <span className="block font-semibold">QA &amp; Testing</span>
                        <span className="text-[10px] text-slate-500 font-mono">Dedicated pipeline</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('ui-ux')}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-medium text-slate-300 hover:text-pink-300 hover:bg-pink-950/30 transition-colors"
                    >
                      <Palette className="w-3.5 h-3.5 text-pink-400" />
                      <div>
                        <span className="block font-semibold">UI/UX Design</span>
                        <span className="text-[10px] text-slate-500 font-mono">Figma &amp; prototypes</span>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Link */}
            <Magnetic strength={0.15}>
              <button
                onClick={() => handleLinkClick('home', 'about')}
                className="px-3.5 py-1.5 rounded-full font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                About
              </button>
            </Magnetic>

            {/* Resume Link */}
            <Magnetic strength={0.15}>
              <button
                onClick={() => handleLinkClick('resume')}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                  currentPage === 'resume'
                    ? 'text-white bg-white/[0.1]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                Resume
              </button>
            </Magnetic>

            {/* Contact Action */}
            <Magnetic strength={0.2}>
              <button
                onClick={() => handleLinkClick('home', 'contact')}
                className="px-4 py-1.5 rounded-full font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                Contact
              </button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.05] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-2xl mx-auto mt-2 px-2 pointer-events-auto"
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('home', 'work')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06] text-left"
              >
                <span>Selected Work</span>
                <span className="font-mono text-xs text-slate-500">#work</span>
              </button>
              <button
                onClick={() => handleLinkClick('projects')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] text-left pl-6"
              >
                <span>↳ All Projects Archive</span>
                <span className="font-mono text-xs text-cyan-400">/projects</span>
              </button>
              <button
                onClick={() => handleLinkClick('qa')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-purple-300 hover:bg-purple-950/20 text-left pl-6"
              >
                <span>↳ QA &amp; Software Testing</span>
                <span className="font-mono text-xs text-purple-400">/qa</span>
              </button>
              <button
                onClick={() => handleLinkClick('ui-ux')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-pink-300 hover:bg-pink-950/20 text-left pl-6"
              >
                <span>↳ UI/UX Design &amp; Figma</span>
                <span className="font-mono text-xs text-pink-400">/ui-ux</span>
              </button>

              <div className="my-1 border-t border-white/[0.08]" />

              <button
                onClick={() => handleLinkClick('home', 'about')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06] text-left"
              >
                <span>About</span>
                <span className="font-mono text-xs text-slate-500">Bio</span>
              </button>

              <button
                onClick={() => handleLinkClick('resume')}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06] text-left"
              >
                <span>Resume</span>
                <span className="font-mono text-xs text-slate-500">CV</span>
              </button>

              <button
                onClick={() => handleLinkClick('home', 'contact')}
                className="mt-2 py-2.5 rounded-xl text-center text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
