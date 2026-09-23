import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FolderSearch } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects, filterCategories } from '../data/projects';
import { useNavigation } from '../context/NavigationContext';

export default function ProjectsPage() {
  const { navigateTo } = useNavigation();
  const [activeFilter, setActiveFilter] = useState('Full Stack');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute counts for each category
  const projectCounts = useMemo(() => {
    const counts = { All: projects.length };
    filterCategories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects list (Full Stack projects prioritized)
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return [...projects].sort((a, b) => {
        if (a.category === 'Full Stack' && b.category !== 'Full Stack') return -1;
        if (b.category === 'Full Stack' && a.category !== 'Full Stack') return 1;
        return 0;
      });
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const showEditorialFeatured =
    (activeFilter === 'All' || activeFilter === 'Full Stack') &&
    filteredProjects.length > 0 &&
    filteredProjects[0].id === 'construction-management';

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

      {/* Page Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeading
          tag="// DEDICATED SHOWCASE"
          title="All Projects &amp; Work"
          subtitle="Explore full-stack web platforms, client-side frontend engineering, and user interface implementations."
        />

        <div className="sm:mb-12">
          <ProjectFilter
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            projectCounts={projectCounts}
          />
        </div>
      </div>

      {/* Projects Editorial Layout */}
      {filteredProjects.length > 0 && (
        <div className="space-y-8">
          {/* Dominant Featured Case Study when relevant */}
          {showEditorialFeatured && (
            <ProjectCard
              project={filteredProjects[0]}
              variant="editorial"
              onSelect={setSelectedProject}
            />
          )}

          {/* Grid Layout for other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {(showEditorialFeatured ? filteredProjects.slice(1) : filteredProjects).map(
              (project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="standard"
                  onSelect={setSelectedProject}
                />
              )
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 px-6 glass-card rounded-3xl border border-white/[0.08] max-w-md mx-auto my-12"
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mx-auto mb-4 text-cyan-400">
            <FolderSearch className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white mb-2">
            No projects in this category yet
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            UI/UX design case studies and user flow documentation are currently in preparation.
          </p>
          <button
            onClick={() => setActiveFilter('Full Stack')}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 hover:bg-cyan-950/80 transition-colors"
          >
            View Full-Stack Projects
          </button>
        </motion.div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
