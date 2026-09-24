import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { educationData } from '../../../data/education';

export default function SceneEducation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 30%'],
  });

  // Animated line progress connecting milestones
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="scene-education"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden select-none"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/3 -left-10 text-[18vw] font-black tracking-tighter text-white/[0.015] pointer-events-none -z-10 uppercase font-mono">
        ACADEMIA
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-24">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 02 // ACADEMIC PROGRESSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Foundational Journey
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-sm">
            From science schooling in Dhrol to university-level computer science &amp; engineering at D.D.U. Nadiad.
          </p>
        </div>

        {/* Desktop/Tablet Horizontal Progression with SVG Connection Line */}
        <div className="relative">
          {/* Animated Connecting SVG Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] -z-10 pointer-events-none">
            {/* Background faint path */}
            <div className="w-full h-full bg-white/[0.08]" />
            {/* Glowing animated active line */}
            <motion.div
              style={{ scaleX: lineProgress, transformOrigin: 'left' }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
            />
          </div>

          {/* 3 Step Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {educationData.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-white/10 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/40 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 transition-colors shadow-inner">
                        {item.step}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    {item.status && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                        {item.status}
                      </span>
                    )}
                  </div>

                  {/* Stage & Institution */}
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    {item.stage}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.institution}
                  </h3>

                  {/* Location & Qualification */}
                  <div className="flex flex-col gap-1 mt-2 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.qualification}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
