import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Activity, Database, Layers, Compass, Code2 } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectModal from '../../ProjectModal';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneFeaturedProjects() {
  const { navigateTo } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);

  const p1 = projects.find((p) => p.id === 'construction-management') || projects[0];
  const p2 = projects.find((p) => p.id === 'cricverse') || projects[1];
  const p3 = projects.find((p) => p.id === 'car-dealership') || projects[2];
  const p4 = projects.find((p) => p.id === 'airbnb-clone') || projects[3];

  // -------------------------------------------------------------
  // PROJECT 1: Light Streak + Branching Reveal (Scroll Controlled)
  // -------------------------------------------------------------
  const p1Ref = useRef(null);
  const { scrollYProgress: p1Scroll } = useScroll({
    target: p1Ref,
    offset: ['start 85%', 'center center'],
  });

  // Vertical light streak: 0% to 50% travels down
  const p1PathLength = useTransform(p1Scroll, [0, 0.48], [0, 1]);
  const p1StreakOpacity = useTransform(p1Scroll, [0, 0.1, 0.85, 1], [0, 1, 1, 0.3]);
  
  // Branching paths: 45% to 75% branch outward
  const p1BranchLength = useTransform(p1Scroll, [0.45, 0.75], [0, 1]);
  const p1BranchOpacity = useTransform(p1Scroll, [0.45, 0.55, 0.9, 1], [0, 1, 1, 0.5]);

  // Project frame revelation: 60% to 90%
  const p1CardOpacity = useTransform(p1Scroll, [0.55, 0.88], [0, 1]);
  const p1CardScale = useTransform(p1Scroll, [0.55, 0.88], [0.96, 1]);
  const p1GlowBrightness = useTransform(p1Scroll, [0.65, 0.85, 1], [0, 1, 0.6]);

  // -------------------------------------------------------------
  // PROJECT 2: Orbital Data-Ring System Reveal (Scroll Controlled)
  // -------------------------------------------------------------
  const p2Ref = useRef(null);
  const { scrollYProgress: p2Scroll } = useScroll({
    target: p2Ref,
    offset: ['start 85%', 'center center'],
  });

  const p2RingScale = useTransform(p2Scroll, [0.1, 0.5, 0.85], [0.35, 0.7, 1]);
  const p2RingRotate = useTransform(p2Scroll, [0, 1], [0, 180]);
  const p2RingOpacity = useTransform(p2Scroll, [0.1, 0.4, 0.9], [0, 1, 0.7]);
  const p2ImageScale = useTransform(p2Scroll, [0.3, 0.85], [0.88, 1]);
  const p2ImageOpacity = useTransform(p2Scroll, [0.3, 0.75], [0, 1]);

  // -------------------------------------------------------------
  // PROJECT 3: Image Fragments Assembly Reveal (Scroll Controlled)
  // -------------------------------------------------------------
  const p3Ref = useRef(null);
  const { scrollYProgress: p3Scroll } = useScroll({
    target: p3Ref,
    offset: ['start 85%', 'center center'],
  });

  // Top piece slides from top-left with rotation
  const p3TopY = useTransform(p3Scroll, [0.15, 0.75], [-45, 0]);
  const p3TopX = useTransform(p3Scroll, [0.15, 0.75], [-25, 0]);
  const p3TopRotate = useTransform(p3Scroll, [0.15, 0.75], [-3, 0]);

  // Middle piece slides from right
  const p3MidX = useTransform(p3Scroll, [0.15, 0.75], [35, 0]);

  // Bottom piece slides from bottom-left
  const p3BotY = useTransform(p3Scroll, [0.15, 0.75], [45, 0]);
  const p3BotX = useTransform(p3Scroll, [0.15, 0.75], [-20, 0]);
  const p3BotRotate = useTransform(p3Scroll, [0.15, 0.75], [2, 0]);

  const p3AssembleOpacity = useTransform(p3Scroll, [0.1, 0.5], [0.3, 1]);
  const p3SeamOpacity = useTransform(p3Scroll, [0.7, 0.85, 1], [0, 1, 0]);

  // -------------------------------------------------------------
  // PROJECT 4: Horizontal Aperture / Shutter Reveal (Scroll Controlled)
  // -------------------------------------------------------------
  const p4Ref = useRef(null);
  const { scrollYProgress: p4Scroll } = useScroll({
    target: p4Ref,
    offset: ['start 85%', 'center center'],
  });

  const p4ApertureInset = useTransform(p4Scroll, [0.15, 0.75], [45, 0]);
  const p4ImageScale = useTransform(p4Scroll, [0.15, 0.8], [1.08, 1]);
  const p4ContentOpacity = useTransform(p4Scroll, [0.35, 0.8], [0, 1]);

  return (
    <section id="work" className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-cyan-500/[0.02] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 sm:mb-28">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 05 // FEATURED ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Selected Work
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-sm">
            Four distinct engineering architectures, each discovered through an individual visual entrance.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 1 — CONSTRUCTION MANAGEMENT SYSTEM (Vertical Light Streak & Branches) */}
        {/* ========================================================================= */}
        {p1 && (
          <div ref={p1Ref} className="relative mb-36 sm:mb-48">
            {/* The Vertical Atmospheric Light Streak (SVG scroll scrubbed) */}
            <div className="relative w-full flex justify-center pointer-events-none -mb-2">
              <svg
                className="w-full max-w-2xl h-44 sm:h-56 overflow-visible"
                viewBox="0 0 600 200"
                fill="none"
              >
                <defs>
                  {/* Subtle soft electrical glow */}
                  <filter id="p1-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="p1-streak-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                    <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* 1. Main vertical thin glowing streak */}
                <motion.path
                  d="M 300 0 L 300 60 L 299 90 L 300 130 L 301 150 L 300 180"
                  stroke="url(#p1-streak-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#p1-glow)"
                  style={{ pathLength: p1PathLength, opacity: p1StreakOpacity }}
                />

                {/* 2. Left Branching path (spreads outward to frame) */}
                <motion.path
                  d="M 300 180 Q 240 185 160 192 L 60 198"
                  stroke="#38bdf8"
                  strokeWidth="1.25"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                  filter="url(#p1-glow)"
                  style={{ pathLength: p1BranchLength, opacity: p1BranchOpacity }}
                />

                {/* 3. Right Branching path (spreads outward to frame) */}
                <motion.path
                  d="M 300 180 Q 360 185 440 192 L 540 198"
                  stroke="#38bdf8"
                  strokeWidth="1.25"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                  filter="url(#p1-glow)"
                  style={{ pathLength: p1BranchLength, opacity: p1BranchOpacity }}
                />

                {/* Center contact node */}
                <motion.circle
                  cx="300"
                  cy="180"
                  r="2.5"
                  fill="#ffffff"
                  filter="url(#p1-glow)"
                  style={{ opacity: p1BranchOpacity }}
                />
              </svg>
            </div>

            {/* Revealed Project Canvas */}
            <motion.div
              style={{ opacity: p1CardOpacity, scale: p1CardScale }}
              className="relative"
            >
              {/* Subtle top meta bar */}
              <div className="flex items-center justify-between text-xs font-mono mb-3 text-slate-400 px-1">
                <span className="text-cyan-400 font-semibold tracking-wider">
                  01 // ENERGY &amp; STRUCTURE
                </span>
                <span className="text-[11px] text-slate-500">MERN PLATFORM</span>
              </div>

              {/* Main Card Frame */}
              <div
                onClick={() => setSelectedProject(p1)}
                className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/50 bg-slate-950 overflow-hidden shadow-2xl transition-colors duration-300"
              >
                {/* App Frame Header */}
                <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                      cms.architecture / full-stack
                    </span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">ROLE-BASED SYSTEM</span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950">
                  <img
                    src={p1.image}
                    alt={p1.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Minimal Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                    <div className="max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {p1.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                        {p1.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {p1.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.05] border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 transition-colors shadow-sm">
                        Explore Architecture →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 2 — CRICVERSE (Circular Orbital Data-Ring System)                  */}
        {/* ========================================================================= */}
        {p2 && (
          <div ref={p2Ref} className="relative mb-36 sm:mb-48">
            {/* Orbital Radar Graphic expanding from center */}
            <div className="relative w-full flex justify-center items-center pointer-events-none -mb-8 sm:-mb-12">
              <motion.svg
                style={{ scale: p2RingScale, rotate: p2RingRotate, opacity: p2RingOpacity }}
                className="w-48 h-48 sm:w-64 sm:h-64 overflow-visible"
                viewBox="0 0 200 200"
                fill="none"
              >
                {/* Concentric orbital rings */}
                <circle cx="100" cy="100" r="95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                <circle cx="100" cy="100" r="70" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
                <circle cx="100" cy="100" r="45" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.5" />
                
                {/* Orbital satellites / data nodes */}
                <circle cx="100" cy="5" r="3" fill="#38bdf8" />
                <circle cx="170" cy="100" r="2.5" fill="#38bdf8" />
                <circle cx="55" cy="100" r="2" fill="#ffffff" />
                <line x1="100" y1="15" x2="100" y2="30" stroke="#38bdf8" strokeWidth="1" opacity="0.7" />
                <line x1="185" y1="100" x2="170" y2="100" stroke="#38bdf8" strokeWidth="1" opacity="0.7" />
              </motion.svg>
            </div>

            {/* Revealed Project Canvas */}
            <motion.div
              style={{ opacity: p2ImageOpacity, scale: p2ImageScale }}
              className="relative"
            >
              {/* Subtle top meta bar */}
              <div className="flex items-center justify-between text-xs font-mono mb-3 text-slate-400 px-1">
                <span className="text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>02 // ORBIT &amp; LIVE DATA</span>
                </span>
                <span className="text-[11px] text-slate-500">REAL-TIME SOCKETS</span>
              </div>

              {/* Main Card Frame */}
              <div
                onClick={() => setSelectedProject(p2)}
                className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/50 bg-slate-950 overflow-hidden shadow-2xl transition-colors duration-300"
              >
                {/* App Frame Header */}
                <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                      cricverse.live / sockets
                    </span>
                  </div>
                  <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SOCKET STREAM</span>
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950">
                  <img
                    src={p2.image}
                    alt={p2.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Minimal Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                    <div className="max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {p2.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                        {p2.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {p2.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.05] border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 transition-colors shadow-sm">
                        Explore Live Data →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 3 — CAR-DEALERSHIP (Image Fragments Assembly Transition)          */}
        {/* ========================================================================= */}
        {p3 && (
          <div ref={p3Ref} className="relative mb-36 sm:mb-48">
            {/* Meta Header */}
            <div className="flex items-center justify-between text-xs font-mono mb-3 text-slate-400 px-1">
              <span className="text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>03 // ASSEMBLE &amp; TYPE-SAFETY</span>
              </span>
              <span className="text-[11px] text-slate-500">TYPESCRIPT &amp; PRISMA</span>
            </div>

            {/* Assemble Canvas Frame */}
            <div className="group rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/50 bg-slate-950 overflow-hidden shadow-2xl transition-colors duration-300">
              {/* App Frame Header */}
              <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                    dealership.schema / prisma-sqlite
                  </span>
                </div>
                <span className="text-cyan-400 text-[11px]">RELATIONAL INVENTORY</span>
              </div>

              {/* Assembling Image Canvas */}
              <div
                onClick={() => setSelectedProject(p3)}
                className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950 cursor-pointer"
              >
                {/* 1. Top Fragment */}
                <motion.div
                  style={{
                    x: p3TopX,
                    y: p3TopY,
                    rotate: p3TopRotate,
                    opacity: p3AssembleOpacity,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 36%, 0% 36%)',
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <img
                    src={p3.image}
                    alt={p3.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* 2. Middle Fragment */}
                <motion.div
                  style={{
                    x: p3MidX,
                    opacity: p3AssembleOpacity,
                    clipPath: 'polygon(0% 34%, 100% 34%, 100% 68%, 0% 68%)',
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <img
                    src={p3.image}
                    alt={p3.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* 3. Bottom Fragment */}
                <motion.div
                  style={{
                    x: p3BotX,
                    y: p3BotY,
                    rotate: p3BotRotate,
                    opacity: p3AssembleOpacity,
                    clipPath: 'polygon(0% 66%, 100% 66%, 100% 100%, 0% 100%)',
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <img
                    src={p3.image}
                    alt={p3.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* Luminous assembly seam flash */}
                <motion.div
                  style={{ opacity: p3SeamOpacity }}
                  className="absolute inset-x-0 top-[35%] h-[1px] bg-cyan-400 shadow-[0_0_8px_#38bdf8] pointer-events-none"
                />
                <motion.div
                  style={{ opacity: p3SeamOpacity }}
                  className="absolute inset-x-0 top-[67%] h-[1px] bg-cyan-400 shadow-[0_0_8px_#38bdf8] pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity pointer-events-none" />

                {/* Minimal Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {p3.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                      {p3.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p3.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.05] border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-end shrink-0">
                    <button
                      onClick={() => setSelectedProject(p3)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                    >
                      Explore Backend →
                    </button>

                    {p3.github && (
                      <a
                        href={p3.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono text-slate-300 bg-slate-900 border border-white/10 hover:border-white/30 hover:text-white transition-colors flex items-center gap-1.5"
                        aria-label="View Car-Dealership GitHub repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 4 — AIRBNB CLONE (Horizontal Aperture / Masking Reveal)           */}
        {/* ========================================================================= */}
        {p4 && (
          <div ref={p4Ref} className="relative mb-24 sm:mb-32">
            {/* Meta Header */}
            <div className="flex items-center justify-between text-xs font-mono mb-3 text-slate-400 px-1">
              <span className="text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>04 // HORIZON &amp; APERTURE</span>
              </span>
              <span className="text-[11px] text-slate-500">FRONTEND ARCHITECTURE</span>
            </div>

            {/* Aperture Canvas Frame */}
            <div
              onClick={() => setSelectedProject(p4)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-400/50 bg-slate-950 overflow-hidden shadow-2xl transition-colors duration-300"
            >
              {/* App Frame Header */}
              <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                    airbnb.recreation / css-grid
                  </span>
                </div>
                <span className="text-cyan-400 text-[11px]">LAYOUT FIDELITY</span>
              </div>

              {/* Masked Image Canvas */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950">
                <motion.div
                  style={{
                    clipPath: useTransform(p4ApertureInset, (v) => `inset(${v}% 0 ${v}% 0)`),
                  }}
                  className="w-full h-full"
                >
                  <motion.img
                    style={{ scale: p4ImageScale }}
                    src={p4.image}
                    alt={p4.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity pointer-events-none" />

                {/* Minimal Content Overlay */}
                <motion.div
                  style={{ opacity: p4ContentOpacity }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10"
                >
                  <div className="max-w-xl">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {p4.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                      {p4.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p4.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.05] border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 transition-colors shadow-sm">
                      Explore Recreation →
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Archive CTA */}
        <div className="mt-20 sm:mt-28 text-center">
          <Magnetic strength={0.2}>
            <button
              onClick={() => navigateTo('projects')}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl"
            >
              <span>EXPLORE ALL ARCHIVED PROJECTS ({projects.length})</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
