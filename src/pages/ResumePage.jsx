import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Download, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ResumeCard from '../components/ResumeCard';
import { resumeTracks } from '../data/resume';
import { useNavigation } from '../context/NavigationContext';

export default function ResumePage() {
  const { navigateTo } = useNavigation();

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

      {/* Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>Specialized Career Profiles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Curriculum Vitae &amp; Resumes
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Tailored resumes reflecting distinct areas of technical focus. Full-Stack Development is my primary career path, supported by dedicated credentials in QA and UI/UX.
        </p>
      </div>

      {/* 3 Resume Cards Grid (Full-Stack dominant on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">
        {resumeTracks.map((resume, idx) => (
          <ResumeCard key={resume.id} resume={resume} index={idx} />
        ))}
      </div>

      {/* Notice Card on PDF uploads */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.06] flex items-start gap-3.5 max-w-2xl mx-auto text-xs text-slate-400">
        <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Official PDF documents are configured in <span className="font-mono text-slate-300">src/data/resume.js</span>. When your latest versions are compiled, simply add your hosted PDF links or local assets into the configured URL slots.
        </p>
      </div>
    </div>
  );
}
