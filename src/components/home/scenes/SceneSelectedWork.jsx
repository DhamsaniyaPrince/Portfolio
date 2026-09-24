import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, Activity } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectModal from '../../ProjectModal';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneSelectedWork() {
  const { navigateTo } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);

  const p1 = projects.find((p) => p.id === 'construction-management') || projects[0];
  const p2 = projects.find((p) => p.id === 'cricverse') || projects[1];
  const p3 = projects.find((p) => p.id === 'car-dealership') || projects[2];

  return (
    <section id="work" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle Cyan Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-cyan-500/[0.04] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 03 // SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          <Magnetic strength={0.2}>
            <button
              onClick={() => navigateTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all"
              data-cursor="magnetic"
            >
              <span>ALL PROJECTS ({projects.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </Magnetic>
        </div>

        {/* 3 Distinct Visual Showcase Compositions */}
        <div className="space-y-24 sm:space-y-32">
          {/* SHOWCASE 1: Large Centered Cinematic Browser Showcase */}
          {p1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(p1)}
              className="group cursor-pointer select-none"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Meta bar */}
              <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-400">
                <span className="text-cyan-400 font-bold">#01 // MERN ARCHITECTURE</span>
                <span>ROLE-BASED ACCESS PLATFORM</span>
              </div>

              {/* Large Centered Visual Canvas */}
              <div className="case-study-frame rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/40 transition-colors duration-500 shadow-2xl">
                {/* Browser bar */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-0.5 rounded-md bg-slate-950/80 border border-white/[0.06] text-[11px] font-mono text-slate-400 hidden sm:block">
                    cms.internal.portfolio / MERN
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400">FULL-STACK</span>
                </div>

                {/* Main Visual */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-950">
                  <img
                    src={p1.image}
                    alt={p1.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* On-hover revealed bottom strip */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3 z-20">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {p1.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-2 mt-1 hidden sm:block">
                        {p1.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 shadow-md">
                        Open Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SHOWCASE 2: Asymmetric Split Layout (Image on left, content moving on right) */}
          {p2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(p2)}
              className="group cursor-pointer select-none grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Left: Asymmetric Image Container */}
              <div className="lg:col-span-7">
                <div className="case-study-frame rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/40 transition-colors shadow-2xl aspect-[16/10] relative">
                  <img
                    src={p2.image}
                    alt={p2.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] text-cyan-300 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/30">
                      LIVE SOCKETS &amp; ANALYTICS
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Asymmetric Content */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">
                    #02 // REAL-TIME WEB
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {p2.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p2.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p2.technologies.slice(0, 5).map((tech) => (
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
                  <span>Interactive Case Study</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore Details →
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* SHOWCASE 3: Overlapping Typography & Vehicle Management Visual */}
          {p3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(p3)}
              className="group cursor-pointer select-none grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Content on Left for alternate rhythm */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 order-2 lg:order-1">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">
                    #03 // TYPE-SAFE BACKEND
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {p3.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p3.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p3.technologies.slice(0, 5).map((tech) => (
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
                  <span>TypeScript &amp; Prisma ORM</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore Details →
                  </span>
                </div>
              </div>

              {/* Image on Right */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="case-study-frame rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/40 transition-colors shadow-2xl aspect-[16/10] relative">
                  <img
                    src={p3.image}
                    alt={p3.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[10px] text-cyan-300 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/30">
                      TYPESCRIPT · SQLITE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Archive CTA */}
        <div className="mt-20 sm:mt-28 text-center">
          <Magnetic strength={0.25}>
            <button
              onClick={() => navigateTo('projects')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl"
              data-cursor="magnetic"
            >
              <span>VIEW FULL PROJECT ARCHIVE ({projects.length})</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Detail Dialog Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
