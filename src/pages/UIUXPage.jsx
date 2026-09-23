import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Layout,
  ExternalLink,
  ArrowLeft,
  Eye,
  CheckCircle2,
  Figma,
  Smartphone,
  Layers,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { uiuxProjects, designPrinciples } from '../data/uiuxData';
import { useNavigation } from '../context/NavigationContext';

export default function UIUXPage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
      {/* Back to Home Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <button
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>← Back to Homepage</span>
        </button>
      </motion.div>

      {/* Header with Pink/Magenta Accent */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-pink-400 bg-pink-950/40 border border-pink-500/20 mb-3">
          <Palette className="w-3.5 h-3.5" />
          <span>Creative Digital Studio &amp; Interface Design</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          UI/UX Design &amp; Prototypes
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Designing clean, human-centered digital experiences in Figma. Focusing on component-driven design systems, accessible color contrast, and wireframe prototypes.
        </p>
      </div>

      {/* Design Principles / Studio Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {designPrinciples.map((principle, idx) => (
          <div
            key={principle.title}
            className="glass-card rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
          >
            <span className="font-mono text-xs text-pink-400 font-bold">
              0{idx + 1} //
            </span>
            <h4 className="text-base font-bold text-white mt-1 mb-2">
              {principle.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      {/* Large Visual Previews of UI/UX Projects */}
      <div className="space-y-12">
        <SectionHeading
          tag="// FEATURED DESIGN WORKS"
          title="Figma Systems &amp; Wireframes"
          subtitle="Explore design systems and mobile prototypes engineered with developer feasibility in mind."
        />

        <div className="grid grid-cols-1 gap-12">
          {uiuxProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl border border-pink-500/25 overflow-hidden flex flex-col lg:flex-row items-stretch hover:border-pink-500/45 transition-all shadow-xl shadow-pink-950/20"
            >
              {/* Large Image Preview (Left/Top) */}
              <div className="lg:w-7/12 aspect-[16/10] bg-slate-950 border-b lg:border-b-0 lg:border-r border-white/[0.08] overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs text-pink-300 px-3 py-1 rounded-lg bg-slate-950/80 border border-pink-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Specs (Right/Bottom) */}
              <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Deliverables List */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Deliverables &amp; Artifacts
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/50 border border-white/[0.04] text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.figmaUrl ? (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 transition-colors shadow-md shadow-pink-600/20"
                      >
                        <Figma className="w-3.5 h-3.5" />
                        <span>Open Figma Design</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400">
                        // Figma prototype available on request
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    Figma Case
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
