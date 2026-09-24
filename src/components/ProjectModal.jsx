import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Users, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const [modalScreenIndex, setModalScreenIndex] = React.useState(0);

  useEffect(() => {
    setModalScreenIndex(0);
  }, [project]);

  // Close on Escape key and trap body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const screens = project.screens || [];
  const currentImage = screens.length > 0 ? screens[modalScreenIndex]?.image || project.image : project.image;
  const currentTitle = screens.length > 0 ? screens[modalScreenIndex]?.title || project.title : project.title;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md -z-10"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col focus:outline-none"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Project Details Dialog"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image Banner with Multi-Screen Viewer */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-950 overflow-hidden border-b border-white/[0.08] flex items-center justify-center">
              <img
                src={currentImage}
                alt={currentTitle}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

              {/* Badges on image */}
              <div className="absolute bottom-3 left-4 sm:left-6 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 backdrop-blur-sm">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Featured Case Study
                  </span>
                )}
              </div>

              {/* Multi-screen pill selector inside modal */}
              {screens.length > 1 && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                  {screens.map((scr, idx) => (
                    <button
                      key={scr.id}
                      onClick={() => setModalScreenIndex(idx)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-colors ${
                        modalScreenIndex === idx
                          ? 'bg-cyan-400 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {scr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Title & Subtitle */}
              <div>
                <span className="font-mono text-xs text-slate-500">Project #{project.number}</span>
                <h3
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1"
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Roles Section (For Construction Management System) */}
              {project.roles && project.roles.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                    <Users className="w-4 h-4" />
                    <span>Role-Based Access Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-white/[0.08]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Key Capabilities &amp; Architecture
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-xl border border-white/[0.04]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Technologies &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {/* Live Demo Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live Demo</span>
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-xs text-slate-400 font-mono">
                      // Repository &amp; deployment available upon request
                    </span>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
