import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  GitCommit,
  Layers,
  Bug,
  Terminal,
  Activity,
  Workflow,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { qaSections, qaArtifacts } from '../data/qaData';
import { useNavigation } from '../context/NavigationContext';

export default function QAPage() {
  const { navigateTo } = useNavigation();
  const [selectedSection, setSelectedSection] = useState('all');

  const filteredSections =
    selectedSection === 'all'
      ? qaSections
      : qaSections.filter((s) => s.id === selectedSection);

  // Decorative & Educational Testing Workflow Pipeline
  const workflowStages = [
    { step: "01", name: "Requirement", desc: "Analysis & Criteria" },
    { step: "02", name: "Test Design", desc: "Scenarios & BVA/ECP" },
    { step: "03", name: "Execution", desc: "Manual & Automated" },
    { step: "04", name: "Defect Log", desc: "Bug Triage & Priority" },
    { step: "05", name: "Retest", desc: "Fix Verification" },
    { step: "06", name: "Regression", desc: "Suite Health Check" },
  ];

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

      {/* Header with Purple Accent */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Quality Assurance &amp; Software Testing Discipline</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Software Quality &amp; Testing Knowledge
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Complementing full-stack development with disciplined testing practices. Exploring manual test design, boundary value analysis, API contracts, and browser automation.
        </p>
      </div>

      {/* Educational Testing Workflow Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass-card rounded-2xl p-6 border border-purple-500/25 mb-12 relative overflow-hidden"
      >
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4">
          <Workflow className="w-4 h-4" />
          <span>Systematic Quality Assurance Pipeline</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {workflowStages.map((stg, i) => (
            <div
              key={stg.step}
              className="p-3 rounded-xl bg-slate-950/70 border border-purple-500/15 relative"
            >
              <span className="font-mono text-[10px] text-purple-400/80 block">
                PHASE {stg.step}
              </span>
              <h4 className="text-xs font-bold text-white mt-0.5">
                {stg.name}
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                {stg.desc}
              </p>
              {i < workflowStages.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-purple-500/60 font-mono text-[10px]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section Quick Filter Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-sm overflow-x-auto mb-10 max-w-fit">
        <button
          onClick={() => setSelectedSection('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors whitespace-nowrap ${
            selectedSection === 'all'
              ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Topics
        </button>
        {qaSections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setSelectedSection(sec.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors whitespace-nowrap ${
              selectedSection === sec.id
                ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* QA Knowledge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredSections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-400 font-semibold">
                  {section.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {section.topics.length} core concepts
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                {section.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {section.description}
              </p>

              <div className="space-y-3">
                {section.topics.map((topic) => (
                  <div
                    key={topic.name}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.04] hover:border-purple-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>{topic.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pl-5">
                      {topic.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prepared QA Artifacts, Test Cases & Automation Repositories */}
      <div className="pt-10 border-t border-white/[0.08]">
        <SectionHeading
          tag="// QA SUITES &amp; ARTIFACTS"
          title="Testing Artifacts &amp; Automation Repositories"
          subtitle="Test plans, Postman API collections, and automation test suites ready for link integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qaArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {artifact.type}
                  </span>
                  <span className="font-mono text-[10px] text-purple-400">
                    {artifact.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  {artifact.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {artifact.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {artifact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status / Verified Artifact indicator */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px] text-slate-400">Verified Artifact</span>
                <span className="text-purple-400 font-mono text-[11px] font-semibold">{artifact.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
