import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, ShieldCheck, Palette, Eye, Download, Sparkles } from 'lucide-react';

const iconMap = {
  cyan: FileCode2,
  purple: ShieldCheck,
  pink: Palette,
};

export default function ResumeCard({ resume, index }) {
  const Icon = iconMap[resume.accent] || FileCode2;

  const accentStyles = {
    cyan: {
      border: 'border-cyan-500/40 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/40',
      iconBg: 'bg-cyan-950/70 border-cyan-500/30 text-cyan-400 shadow-md shadow-cyan-500/15',
      tag: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30',
      primaryBtn: 'bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-bold hover:opacity-95 shadow-md shadow-cyan-500/20',
      secondaryBtn: 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/40',
      chip: 'text-cyan-300/90 bg-cyan-950/30 border-cyan-500/20',
    },
    purple: {
      border: 'border-purple-500/25 hover:border-purple-500/40',
      iconBg: 'bg-purple-950/60 border-purple-500/20 text-purple-400',
      tag: 'text-purple-400 bg-purple-950/40 border-purple-500/20',
      primaryBtn: 'bg-purple-600 text-white font-bold hover:bg-purple-500 shadow-md shadow-purple-500/20',
      secondaryBtn: 'border-purple-500/30 text-purple-300 hover:bg-purple-950/40',
      chip: 'text-purple-300/90 bg-purple-950/30 border-purple-500/20',
    },
    pink: {
      border: 'border-pink-500/25 hover:border-pink-500/40',
      iconBg: 'bg-pink-950/60 border-pink-500/20 text-pink-400',
      tag: 'text-pink-400 bg-pink-950/40 border-pink-500/20',
      primaryBtn: 'bg-pink-600 text-white font-bold hover:bg-pink-500 shadow-md shadow-pink-500/20',
      secondaryBtn: 'border-pink-500/30 text-pink-300 hover:bg-pink-950/40',
      chip: 'text-pink-300/90 bg-pink-950/30 border-pink-500/20',
    },
  }[resume.accent] || {
    border: 'border-white/[0.08]',
    iconBg: 'bg-slate-900 border-white/10 text-white',
    tag: 'text-slate-400 bg-slate-900 border-white/10',
    primaryBtn: 'bg-slate-800 text-white hover:bg-slate-700',
    secondaryBtn: 'border-white/10 text-slate-300',
    chip: 'text-slate-300 bg-slate-900 border-white/10',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
        resume.isPrimary ? 'lg:-translate-y-2' : ''
      } ${accentStyles.border}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${accentStyles.iconBg}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${accentStyles.tag}`}>
                {resume.track}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                {resume.title}
              </h3>
            </div>
          </div>

          {resume.isPrimary && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Primary Track
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
          {resume.description}
        </p>

        {/* Key Skills Highlight */}
        <div className="mb-8">
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
            Key Competencies Highlighted
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {resume.keySkills.map((skill) => (
              <span
                key={skill}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${accentStyles.chip}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: View & Download */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
        {/* View Resume Button */}
        {resume.viewUrl ? (
          <a
            href={resume.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all ${accentStyles.primaryBtn}`}
          >
            <Eye className="w-4 h-4" />
            <span>View Resume</span>
          </a>
        ) : (
          <button
            disabled
            title="PDF link will be connected soon"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-slate-500 bg-slate-900 border border-white/[0.06] cursor-not-allowed"
          >
            <Eye className="w-4 h-4 text-slate-600" />
            <span>View Resume (PDF soon)</span>
          </button>
        )}

        {/* Download Resume Button */}
        {resume.downloadUrl ? (
          <a
            href={resume.downloadUrl}
            download
            className={`inline-flex items-center justify-center p-2.5 rounded-xl border text-xs sm:text-sm transition-all ${accentStyles.secondaryBtn}`}
            aria-label={`Download ${resume.title}`}
          >
            <Download className="w-4 h-4" />
          </a>
        ) : (
          <button
            disabled
            title="Download link will be connected soon"
            className="inline-flex items-center justify-center p-2.5 rounded-xl border border-white/[0.06] text-slate-600 bg-slate-900 cursor-not-allowed"
            aria-label="Download link coming soon"
          >
            <Download className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.article>
  );
}
