import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar() {
  const { currentPage, navigateTo } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.page === 'about') {
      navigateTo('home', 'about');
    } else if (item.page === 'contact') {
      navigateTo('home', 'contact');
    } else {
      navigateTo(item.page);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl sm:rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-md border border-white/[0.12] shadow-xl shadow-black/50'
              : 'bg-slate-950/40 backdrop-blur-sm border border-white/[0.06]'
          }`}
        >
          {/* Logo / Brand Signature: PD / Prince Dhamsaniya */}
          <button
            onClick={() => navigateTo('home')}
            className="group flex items-center gap-2.5 text-white focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg sm:rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold group-hover:border-cyan-400/60 group-hover:text-cyan-300 transition-colors flex-shrink-0">
              PD
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-tight">
                Prince Dhamsaniya
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">
                Full-Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-white/[0.06]">
            {navItems.map((item) => {
              const isActive =
                item.page === currentPage ||
                (item.page === 'home' && currentPage === 'home');

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/[0.12] border border-white/10 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right Action / Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigateTo('home', 'contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-all hover:text-white"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] border border-white/10 focus:outline-none"
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
            className="lg:hidden max-w-6xl mx-auto mt-2 px-2"
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = item.page === currentPage;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-slate-500 font-mono">→</span>
                    </button>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Dominant Discipline</span>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Full-Stack Developer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
