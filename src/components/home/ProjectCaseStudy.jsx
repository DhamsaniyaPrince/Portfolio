import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Activity, Database, Layers, Compass, Code2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import Magnetic from '../common/Magnetic';

export default function ProjectCaseStudy({ project, onOpenModal }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const containerRef = useRef(null);
  const screens = project.screens || [{ id: 'main', label: 'Overview', title: project.title, caption: project.description, image: project.image }];

  // -------------------------------------------------------------
  // Scroll tracking across the entire project case study
  // -------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Automatically cycle active screen based on scroll through the sticky stage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Screen transition zone: between 0.18 and 0.70 scroll progress
      if (latest >= 0.18 && latest <= 0.70 && screens.length > 1) {
        const normalized = (latest - 0.18) / 0.52;
        const targetIndex = Math.min(
          screens.length - 1,
          Math.max(0, Math.floor(normalized * screens.length))
        );
        setActiveScreenIndex(targetIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, screens.length]);

  // -------------------------------------------------------------
  // Visual Entrance Animations (Per Theme)
  // -------------------------------------------------------------
  // 1. Streak Theme (Construction Management System)
  const streakPathLength = useTransform(scrollYProgress, [0.02, 0.16], [0, 1]);
  const streakOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.35], [0, 1, 0.3]);
  const branchLength = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const branchOpacity = useTransform(scrollYProgress, [0.12, 0.18, 0.35], [0, 1, 0.4]);

  // 2. Orbit Theme (CricVerse)
  const orbitScale = useTransform(scrollYProgress, [0.05, 0.22], [0.4, 1]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const orbitOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.4], [0, 1, 0.4]);

  // 3. Assemble Theme (Car-Dealership)
  const assembleX1 = useTransform(scrollYProgress, [0.06, 0.24], [-50, 0]);
  const assembleY1 = useTransform(scrollYProgress, [0.06, 0.24], [-30, 0]);
  const assembleX2 = useTransform(scrollYProgress, [0.06, 0.24], [50, 0]);
  const assembleY2 = useTransform(scrollYProgress, [0.06, 0.24], [30, 0]);
  const assembleSeam = useTransform(scrollYProgress, [0.22, 0.28, 0.38], [0, 1, 0]);

  // 4. Aperture Theme (Airbnb Clone)
  const apertureInset = useTransform(scrollYProgress, [0.06, 0.22], [45, 0]);

  // Common Device Reveal & Full-Screen Expansion Moment
  const deviceScale = useTransform(scrollYProgress, [0.08, 0.22, 0.72, 0.88], [0.92, 1, 1, 1.03]);
  const deviceOpacity = useTransform(scrollYProgress, [0.06, 0.18], [0.2, 1]);
  const fullScreenBorder = useTransform(scrollYProgress, [0.72, 0.86], [1, 0.2]);

  const activeScreen = screens[activeScreenIndex] || screens[0];

  return (
    <div ref={containerRef} className="relative mb-36 sm:mb-52 select-none">
      {/* ------------------------------------------------------------- */}
      {/* 1. PROJECT INTRO: Minimalist Editorial Header                  */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
            PROJECT {project.number}
          </span>
          <span className="font-mono text-xs text-slate-500">//</span>
          <span className="font-mono text-xs sm:text-sm text-slate-300 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.98]">
          {project.title}
        </h3>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. VISUAL ENTRANCE TRANSITION                                 */}
      {/* ------------------------------------------------------------- */}

      {/* THEME 1: Vertical Atmospheric Light Streak + Branches (Construction) */}
      {project.visualTheme === 'streak' && (
        <div className="relative w-full flex justify-center pointer-events-none -mb-3 overflow-visible">
          <svg className="w-full max-w-2xl h-36 sm:h-48 overflow-visible" viewBox="0 0 600 160" fill="none">
            <defs>
              <filter id={`streak-glow-${project.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id={`streak-grad-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Central Vertical Falling Streak */}
            <motion.path
              d="M 300 0 L 300 45 L 299 75 L 300 110 L 301 130 L 300 150"
              stroke={`url(#streak-grad-${project.id})`}
              strokeWidth="1.5"
              strokeLinecap="round"
              filter={`url(#streak-glow-${project.id})`}
              style={{ pathLength: streakPathLength, opacity: streakOpacity }}
            />

            {/* Branch Left */}
            <motion.path
              d="M 300 150 Q 240 152 140 156 L 60 158"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeLinecap="round"
              filter={`url(#streak-glow-${project.id})`}
              style={{ pathLength: branchLength, opacity: branchOpacity }}
            />

            {/* Branch Right */}
            <motion.path
              d="M 300 150 Q 360 152 460 156 L 540 158"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeLinecap="round"
              filter={`url(#streak-glow-${project.id})`}
              style={{ pathLength: branchLength, opacity: branchOpacity }}
            />

            <motion.circle
              cx="300"
              cy="150"
              r="2.5"
              fill="#ffffff"
              filter={`url(#streak-glow-${project.id})`}
              style={{ opacity: branchOpacity }}
            />
          </svg>
        </div>
      )}

      {/* THEME 2: Circular Orbital Radar Rings (CricVerse) */}
      {project.visualTheme === 'orbit' && (
        <div className="relative w-full flex justify-center items-center pointer-events-none -mb-6 sm:-mb-10">
          <motion.svg
            style={{ scale: orbitScale, rotate: orbitRotate, opacity: orbitOpacity }}
            className="w-40 h-40 sm:w-56 sm:h-56 overflow-visible"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="100" cy="100" r="65" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="100" cy="100" r="35" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.5" />
            <circle cx="100" cy="5" r="3" fill="#38bdf8" />
            <circle cx="165" cy="100" r="2.5" fill="#38bdf8" />
            <circle cx="50" cy="100" r="2" fill="#ffffff" />
          </motion.svg>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. BROWSER FRAME & MULTI-SCREEN STAGE                         */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          style={{ scale: deviceScale, opacity: deviceOpacity }}
          className="relative rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/40 bg-slate-950 overflow-hidden shadow-2xl transition-all duration-300"
        >
          {/* Browser Window Chrome Topbar */}
          <div className="bg-slate-900/95 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] text-slate-400 truncate max-w-[150px] sm:max-w-none">
                {project.domain || `${project.id}.app`}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                SCREEN {activeScreenIndex + 1}/{screens.length}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Browser Screen Canvas */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-950">
            {/* The Active Screen Screenshot */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img
                  src={activeScreen.image}
                  alt={`${project.title} — ${activeScreen.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Vignette Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

            {/* Screen Caption Banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none">
              <div className="max-w-lg">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 inline-block mb-1.5">
                  MODULE {activeScreenIndex + 1} · {activeScreen.label.toUpperCase()}
                </span>
                <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {activeScreen.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {activeScreen.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="pointer-events-auto self-start sm:self-end px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
              >
                <span>Examine Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Navigation Tabs */}
          <div className="bg-slate-900/90 px-4 py-2.5 border-t border-white/[0.08] flex items-center justify-between overflow-x-auto gap-2 scrollbar-none">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {screens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                    activeScreenIndex === idx
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>0{idx + 1}</span>
                  <span className="hidden sm:inline">{screen.label}</span>
                </button>
              ))}
            </div>

            <span className="text-[10px] font-mono text-slate-400 shrink-0 hidden md:inline">
              Scroll or click to switch screens
            </span>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. POST-VISUAL ARCHITECTURAL BREAKDOWN & DETAILS              */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What I Built & Role */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                ENGINEERING ROLE
              </span>
              <p className="text-sm sm:text-base font-bold text-white">
                {project.role}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                WHAT I BUILT &amp; ARCHITECTED
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.whatIBuilt || project.detailedDescription}
              </p>
            </div>

            {/* Key Features Pill Matrix */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                CORE SYSTEM CAPABILITIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-8">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                VERIFIED TECH STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Real Project Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-200 bg-slate-900 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Platform</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Full Case Study Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
