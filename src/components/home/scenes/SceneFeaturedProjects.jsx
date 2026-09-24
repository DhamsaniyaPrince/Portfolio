import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectCaseStudy from '../ProjectCaseStudy';
import ProjectModal from '../../ProjectModal';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneFeaturedProjects() {
  const { navigateTo } = useNavigation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative py-24 sm:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-cyan-500/[0.02] blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 05 // FEATURED ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Interactive Case Studies
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-sm">
            Step directly into the products. Each case study features an individual visual reveal, interactive module screens, and architectural breakdowns.
          </p>
        </div>
      </div>

      {/* List of 4 Individualized Mini Case Studies */}
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCaseStudy
            key={project.id}
            project={project}
            onOpenModal={setSelectedProject}
          />
        ))}
      </div>

      {/* Archive Portal Footer */}
      <div className="mt-20 sm:mt-28 text-center px-4">
        <Magnetic strength={0.2}>
          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl"
          >
            <span>EXPLORE FULL ARCHIVE REPOSITORY ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </button>
        </Magnetic>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
