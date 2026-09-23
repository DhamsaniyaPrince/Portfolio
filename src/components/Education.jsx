import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
          // ACADEMIC TIMELINE
        </span>
      </div>

      {educationData.map((edu, idx) => (
        <motion.div
          key={edu.institution}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30"
        >
          {/* Timeline Node Icon */}
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>

          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="inline-block font-mono text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-full mb-1">
                  {edu.status}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {edu.degree}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.location}</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{edu.institution}</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
              {edu.description}
            </p>

            {/* Core Coursework Areas */}
            <div className="pt-4 border-t border-white/[0.06]">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Academic Areas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {edu.coreAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
