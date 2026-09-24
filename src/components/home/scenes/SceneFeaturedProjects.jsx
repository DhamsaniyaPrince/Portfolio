import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers, Database, Shield, Zap } from 'lucide-react';
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

  // Project 1 Energy Line Scroll Tracker
  const p1Ref = useRef(null);
  const { scrollYProgress: p1Scroll } = useScroll({
    target: p1Ref,
    offset: ['start 90%', 'center center'],
  });

  const p1LineHeight = useTransform(p1Scroll, [0, 0.6], ['0%', '100%']);
  const p1BranchScale = useTransform(p1Scroll, [0.5, 0.85], [0, 1]);
  const p1CardOpacity = useTransform(p1Scroll, [0.4, 0.8], [0, 1]);
  const p1CardScale = useTransform(p1Scroll, [0.4, 0.8], [0.95, 1]);

  // Project 2 Horizontal Stream Scroll Tracker
  const p2Ref = useRef(null);
  const { scrollYProgress: p2Scroll } = useScroll({
    target: p2Ref,
    offset: ['start 85%', 'center center'],
  });
  const p2StreamWidth = useTransform(p2Scroll, [0, 0.6], ['0%', '100%']);
  const p2ImageX = useTransform(p2Scroll, [0.2, 0.8], [-40, 0]);
  const p2ContentX = useTransform(p2Scroll, [0.2, 0.8], [40, 0]);

  // Project 3 Orbital Reveal Scroll Tracker
  const p3Ref = useRef(null);
  const { scrollYProgress: p3Scroll } = useScroll({
    target: p3Ref,
    offset: ['start 85%', 'center center'],
  });
  const p3OrbitalRotate = useTransform(p3Scroll, [0, 1], [-45, 0]);
  const p3Scale = useTransform(p3Scroll, [0.2, 0.8], [0.94, 1]);

  return (
    <section id="work" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-cyan-500/[0.03] blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 sm:mb-28">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 05 // FEATURED ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
          </div>

          <Magnetic strength={0.2}>
            <button
              onClick={() => navigateTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all"
              data-cursor="magnetic"
            >
              <span>ARCHIVE ({projects.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </Magnetic>
        </div>

        {/* ---------------- PROJECT 1: CMS (Vertical Glowing Energy Line branching to frame) ---------------- */}
        {p1 && (
          <div ref={p1Ref} className="relative mb-36 sm:mb-48">
            {/* Vertical Glowing Energy Line Animation */}
            <div className="flex flex-col items-center mb-8 pointer-events-none">
              <div className="w-[2px] h-20 bg-slate-800 relative overflow-hidden">
                <motion.div
                  style={{ height: p1LineHeight }}
                  className="w-full bg-gradient-to-b from-cyan-400 to-sky-300 shadow-[0_0_12px_#38bdf8]"
                />
              </div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              {/* Branching SVG Horizontal Arms */}
              <motion.svg
                style={{ scaleX: p1BranchScale }}
                className="w-full max-w-xl h-6 mt-1 overflow-visible"
                viewBox="0 0 600 24"
                fill="none"
              >
                <path
                  d="M300 0 V12 H50 V24 M300 12 H550 V24"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  fill="none"
                />
              </motion.svg>
            </div>

            <motion.div
              style={{ opacity: p1CardOpacity, scale: p1CardScale }}
              onClick={() => setSelectedProject(p1)}
              className="group cursor-pointer select-none"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Technical Meta Bar */}
              <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-400 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">#01 // ENERGY CONVERGENCE</span>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="hidden sm:inline">MERN ROLE-BASED PLATFORM</span>
                </div>
                <span className="font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/30 text-[11px]">
                  FULL-STACK FLAGSHIP
                </span>
              </div>

              {/* Large Centered Visual Showcase */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400/80 transition-all duration-500 shadow-[0_0_40px_rgba(6,182,212,0.12)] bg-slate-950">
                {/* Simulated Technical App Frame Header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-slate-950/80 border border-white/[0.06] text-[11px] font-mono text-slate-400 hidden sm:block">
                    cms.internal.portfolio / MERN Architecture
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold">REACT + NODE</span>
                </div>

                {/* Main Visual */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950">
                  <img
                    src={p1.image}
                    alt={p1.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Progressive Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-4 z-20">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {p1.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {p1.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {p1.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-slate-900/90 border border-cyan-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 shadow-lg shadow-cyan-500/25 transition-all">
                        Explore Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ---------------- PROJECT 2: CRICVERSE (Horizontal Flowing Data Lines & Split Reveal) ---------------- */}
        {p2 && (
          <div ref={p2Ref} className="relative mb-36 sm:mb-48">
            {/* Horizontal Flowing Stream Indicator */}
            <div className="mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>#02 // REAL-TIME SOCKET STREAM &amp; ANALYTICS</span>
              </div>
              <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                <motion.div
                  style={{ width: p2StreamWidth }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_#38bdf8]"
                />
              </div>
            </div>

            <div
              onClick={() => setSelectedProject(p2)}
              className="group cursor-pointer select-none grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Left Asymmetric Image */}
              <motion.div style={{ x: p2ImageX }} className="lg:col-span-7">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl aspect-[16/10] relative bg-slate-950">
                  <img
                    src={p2.image}
                    alt={p2.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] text-cyan-300 px-2.5 py-1 rounded bg-slate-950/90 border border-cyan-500/30 flex items-center gap-1.5 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>LIVE SOCKETS &amp; RECHARTS</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div style={{ x: p2ContentX }} className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">
                    FULL-STACK WEB PLATFORM
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {p2.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p2.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p2.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Interactive Socket Hub</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore Details →
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* ---------------- PROJECT 3: CAR-DEALERSHIP (Expanding Orbital / TypeScript Typography Reveal) ---------------- */}
        {p3 && (
          <div ref={p3Ref} className="relative">
            <motion.div
              style={{ scale: p3Scale }}
              className="group select-none grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Content on Left */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold mb-2">
                    <Database className="w-3.5 h-3.5" />
                    <span>#03 // TYPE-SAFE RELATIONAL BACKEND</span>
                  </div>
                  <h3
                    onClick={() => setSelectedProject(p3)}
                    className="text-3xl sm:text-4xl font-black text-white tracking-tight hover:text-cyan-300 transition-colors cursor-pointer"
                    data-cursor="view"
                    data-cursor-text="VIEW"
                  >
                    {p3.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p3.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p3.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Links & Case Study action */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <button
                    onClick={() => setSelectedProject(p3)}
                    className="text-cyan-400 font-semibold hover:underline flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {p3.github && (
                    <a
                      href={p3.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 hover:border-white/30 text-slate-200 hover:text-white transition-colors"
                      data-cursor="open"
                      data-cursor-text="REPO ↗"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Image Canvas */}
              <div
                onClick={() => setSelectedProject(p3)}
                className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
                data-cursor="view"
                data-cursor-text="VIEW"
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl aspect-[16/10] relative bg-slate-950">
                  <img
                    src={p3.image}
                    alt={p3.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[10px] text-cyan-300 px-2.5 py-1 rounded bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md">
                      TYPESCRIPT · PRISMA · SQLITE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Bottom Archive CTA */}
        <div className="mt-24 sm:mt-32 text-center">
          <Magnetic strength={0.25}>
            <button
              onClick={() => navigateTo('projects')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl"
              data-cursor="magnetic"
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
