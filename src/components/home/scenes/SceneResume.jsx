import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, Check, Eye, Download, Code, ShieldCheck, Palette, Sparkles } from 'lucide-react';
import { resumeTracks } from '../../../data/resume';
import { personalInfo } from '../../../data/personal';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneResume() {
  const { navigateTo } = useNavigation();
  const [activeTrack, setActiveTrack] = useState(resumeTracks[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="scene-resume"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden select-none bg-slate-950/60"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-[16vw] font-black tracking-tighter text-white/[0.012] pointer-events-none -z-10 uppercase font-mono">
        CURRICULUM
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Eyebrow & Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 06 // CURRICULUM VITAE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Resume Hub
            </h2>
          </div>

          <Magnetic strength={0.2}>
            <button
              onClick={() => navigateTo('resume')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-cyan-400 transition-all"
              data-cursor="magnetic"
            >
              <span>OPEN FULL RESUME HUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </Magnetic>
        </div>

        {/* Interactive Document Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Track Selector */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
              SELECT CURRICULUM PROFILE
            </span>

            {resumeTracks.map((track) => {
              const isSelected = activeTrack.id === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  onMouseEnter={() => {
                    setActiveTrack(track);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? track.isPrimary
                        ? 'bg-slate-900/90 border-cyan-400 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-900/90 border-purple-400 shadow-xl shadow-purple-500/10'
                      : 'bg-slate-950/60 border-white/10 hover:border-white/20'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText
                        className={`w-4 h-4 ${
                          isSelected ? (track.isPrimary ? 'text-cyan-400' : 'text-purple-400') : 'text-slate-500'
                        }`}
                      />
                      <span className="text-xs font-mono text-slate-400">{track.track}</span>
                    </div>

                    {track.isPrimary && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        PRIMARY CAREER
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                    {track.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {track.keySkills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Document Graphic Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              key={activeTrack.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between aspect-[1/1.3] group"
              data-cursor="pointer"
            >
              {/* Document Sheet Graphic Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 font-bold block">
                      {personalInfo.name.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {activeTrack.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                    PD
                  </div>
                </div>

                {/* Simulated Section: Education */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    EDUCATION
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {personalInfo.university}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    {personalInfo.degree} · Jamnagar / Nadiad
                  </p>
                </div>

                {/* Simulated Section: Verified Stack */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                    TECHNICAL COMPETENCIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeTrack.keySkills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-200 bg-slate-800 border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated Section: Direction Summary */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    CORE SPECIALIZATION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {activeTrack.description}
                  </p>
                </div>
              </div>

              {/* Document Actions Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  STATUS // READY FOR REVIEW
                </span>

                <Magnetic strength={0.2}>
                  <button
                    onClick={() => navigateTo('resume')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                    data-cursor="magnetic"
                  >
                    <span>Inspect Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
