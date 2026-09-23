import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Smartphone, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function HomeUIUXPreview() {
  const { navigateTo } = useNavigation();

  const previewPillars = [
    {
      icon: Layout,
      title: "Design Systems & Tokens",
      desc: "Constructing accessible palettes, typography scales, and modular card systems that translate cleanly into code.",
    },
    {
      icon: Smartphone,
      title: "Wireframing & Prototypes",
      desc: "Mapping low-fidelity user flows and interactive Figma prototypes to validate journeys before engineering.",
    },
  ];

  return (
    <section id="ui-ux-preview" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle pink ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-pink-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-pink-500/25 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-pink-400 bg-pink-950/40 border border-pink-500/20 mb-3">
                <Palette className="w-3.5 h-3.5" />
                <span>Supporting Strength // 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                And I care about how people experience what I build.
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Great software demands intuitive ergonomics. I design interfaces in Figma with a developer’s perspective—prioritizing strong typography, responsive grids, and accessible interaction patterns.
              </p>
            </div>

            <button
              onClick={() => navigateTo('ui-ux')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-pink-600 hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/20 flex-shrink-0"
            >
              <span>Explore UI/UX Studio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
            {previewPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-4 rounded-xl bg-slate-900/60 border border-pink-500/10 hover:border-pink-500/30 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-950/80 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
