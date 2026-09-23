import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectFilter({ categories, activeFilter, onFilterChange, projectCounts }) {
  return (
    <div
      role="tablist"
      aria-label="Project Categories"
      className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-sm max-w-fit mx-auto sm:mx-0 overflow-x-auto"
    >
      {categories.map((category) => {
        const isActive = activeFilter === category;
        const count = projectCounts ? projectCounts[category] : null;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(category)}
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>{category}</span>
              {count !== undefined && count !== null && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-300 font-semibold'
                      : 'bg-white/[0.06] text-slate-500'
                  }`}
                >
                  {count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
