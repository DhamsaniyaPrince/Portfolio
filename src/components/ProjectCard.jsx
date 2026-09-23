import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, Users } from 'lucide-react';

export default function ProjectCard({ project, onSelect, variant = 'standard' }) {
  if (variant === 'editorial') {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative editorial-card rounded-3xl overflow-hidden border border-cyan-500/35 hover:border-cyan-400/60 shadow-2xl shadow-cyan-950/25 transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-10">
          {/* Left Column: Browser-Like Case Study Visual Frame */}
          <div className="lg:col-span-7">
            <div className="case-study-frame rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/40 transition-colors">
              {/* Browser Window Header */}
              <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/[0.06] text-[10px] font-mono text-slate-400">
                  cms.fullstack.internal
                </div>
                <span className="font-mono text-[10px] text-cyan-400 font-semibold">MERN</span>
              </div>

              {/* Preview Image with zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Narrative & Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/30">
                  #{project.number} FEATURED CASE STUDY
                </span>
                <span className="font-mono text-xs text-slate-300 px-2 py-0.5 rounded-md bg-slate-900 border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.detailedDescription || project.description}
              </p>

              {/* Role-Based Workflows Preview */}
              {project.roles && (
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Role-Based Access Modules:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-white/[0.08]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="px-2 py-1 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-white/[0.06]">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all focus:outline-none"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub Repository`}
                    className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="p-2.5 rounded-xl text-slate-300 hover:text-cyan-400 bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Standard Card Presentation
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative editorial-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
        project.featured
          ? 'border-cyan-500/35 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/20'
          : 'border-white/[0.08] hover:border-white/20'
      }`}
    >
      <div>
        {/* Project Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-white/[0.06]">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

          {/* Top Overlays: Project Number & Category Pill */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 pointer-events-none">
            <span className="font-mono text-xs font-bold text-slate-300 px-2.5 py-1 rounded-lg bg-slate-950/85 border border-white/10 backdrop-blur-md">
              #{project.number}
            </span>

            <div className="flex items-center gap-1.5">
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/40 backdrop-blur-md shadow-sm shadow-cyan-500/20">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Featured
                </span>
              )}
              <span className="font-mono text-[11px] text-slate-300 px-2.5 py-1 rounded-lg bg-slate-900/85 border border-white/10 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-cyan-400/90 bg-cyan-950/30 border border-cyan-500/25">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 flex items-center justify-between border-t border-white/[0.06] mt-4">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-250 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-400" />
        </button>

        <div className="flex items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub Repository`}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] border border-white/[0.06] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
