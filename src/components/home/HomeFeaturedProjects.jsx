import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import ProjectCard from '../ProjectCard';
import ProjectModal from '../ProjectModal';
import { projects } from '../../data/projects';
import { useNavigation } from '../../context/NavigationContext';

export default function HomeFeaturedProjects() {
  const { navigateTo } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);

  // Full-Stack projects
  const primaryFeatured = projects.find((p) => p.id === 'construction-management') || projects[0];
  const secondaryFeatured = projects.filter((p) => p.id !== primaryFeatured.id && p.category === 'Full Stack').slice(0, 2);

  return (
    <section id="featured-projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[360px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <SectionHeading
            tag="// 03. FULL-STACK SHOWCASE"
            title="Featured Projects"
            subtitle="Full-stack web applications engineered with modern MERN architectures, type safety, and real-time functionality."
          />

          <button
            onClick={() => navigateTo('projects')}
            className="group sm:mb-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-500/30 hover:border-cyan-400 transition-all focus:outline-none"
          >
            <span>All Projects ({projects.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 1. Visually Dominant Full-Width Editorial Featured Project (#01) */}
        {primaryFeatured && (
          <div className="mb-10">
            <ProjectCard
              project={primaryFeatured}
              variant="editorial"
              onSelect={setSelectedProject}
            />
          </div>
        )}

        {/* 2. Secondary Featured Full-Stack Projects in 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {secondaryFeatured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="standard"
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* 3. Bottom CTA with arrow slide interaction */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('projects')}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/35 hover:border-cyan-400 shadow-xl shadow-cyan-950/30 hover:shadow-cyan-500/20 transition-all"
          >
            <span>Explore All Projects &amp; Source Code</span>
            <span className="font-mono text-cyan-400 transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </motion.button>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
