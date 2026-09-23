import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, GitCommit } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function HomeQAPreview() {
  const { navigateTo } = useNavigation();

  const previewPillars = [
    {
      title: "Testing Life Cycle (STLC)",
      desc: "Requirement analysis, deterministic test cases, boundary analysis, and systematic defect tracking.",
    },
    {
      title: "API & Backend Validation",
      desc: "Validating REST contracts, HTTP status codes, edge-case payloads, and auth flows with Postman.",
    },
    {
      title: "Automation Fundamentals",
      desc: "Developing maintainable test automation scripts with Playwright and Selenium using Page Object Models.",
    },
  ];

  return (
    <section id="qa-preview" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle purple ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/25 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Supporting Strength // 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                I also care about software quality.
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Writing code is only half the battle. I apply structured software testing methodologies—from manual test case design and bug lifecycle triage to automated API validation—to ensure applications are dependable before reaching production.
              </p>
            </div>

            <button
              onClick={() => navigateTo('qa')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20 flex-shrink-0"
            >
              <span>Explore QA Knowledge</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Pillar Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
            {previewPillars.map((p) => (
              <div
                key={p.title}
                className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/10 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
