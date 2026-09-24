import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Palette } from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneKineticStrip() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden select-none bg-slate-950/40">
      {/* Background Kinetic Ticker */}
      <div className="relative w-full overflow-hidden mb-16 opacity-15">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono uppercase"
        >
          <span className="mr-8">FULL-STACK ARCHITECTURE · QUALITY ASSURANCE · UI/UX SYSTEMS · REFACTORING ·</span>
          <span className="mr-8">FULL-STACK ARCHITECTURE · QUALITY ASSURANCE · UI/UX SYSTEMS · REFACTORING ·</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
              SCENE 04 // SPECIALTY DISCIPLINES
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Beyond the Frontend: Deep-Dive Portals
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-mono">
            Explore dedicated pages demonstrating testing rigor and interface case studies.
          </p>
        </div>

        {/* 2 Focused Transition Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Portal 1: QA Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-950/70 border border-purple-500/25 hover:border-purple-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DEDICATED ROUTE</span>
                </span>
                <span>/qa</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-purple-300 transition-colors">
                Software QA &amp; Testing Journey
              </h4>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                A structured walkthrough of manual test design, boundary value analysis, Postman API validation, bug lifecycles, and automation fundamentals.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300 mb-8">
                <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20">STLC / SDLC</span>
                <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20">Postman APIs</span>
                <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20">Playwright &amp; Selenium</span>
                <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20">Jira Defect Triage</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => navigateTo('qa')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors py-1"
                  data-cursor="magnetic"
                >
                  <span>Launch QA Testing Workspace</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Magnetic>

              <span className="font-mono text-xs text-slate-600">6 Stages</span>
            </div>
          </motion.div>

          {/* Portal 2: UI/UX Studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-950/70 border border-pink-500/25 hover:border-pink-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-pink-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4" />
                  <span>DEDICATED ROUTE</span>
                </span>
                <span>/ui-ux</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-pink-300 transition-colors">
                UI/UX Design &amp; Prototypes
              </h4>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Interface design systems, user flows, accessibility contrast guidelines, and interactive Figma prototypes engineered with developer feasibility.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300 mb-8">
                <span className="px-2.5 py-1 rounded-md bg-pink-950/40 border border-pink-500/20">Figma Workflows</span>
                <span className="px-2.5 py-1 rounded-md bg-pink-950/40 border border-pink-500/20">Design Systems</span>
                <span className="px-2.5 py-1 rounded-md bg-pink-950/40 border border-pink-500/20">Wireframing</span>
                <span className="px-2.5 py-1 rounded-md bg-pink-950/40 border border-pink-500/20">Responsive Layouts</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => navigateTo('ui-ux')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors py-1"
                  data-cursor="magnetic"
                >
                  <span>Launch UI/UX Case Studies</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Magnetic>

              <span className="font-mono text-xs text-slate-600">Figma Cases</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
