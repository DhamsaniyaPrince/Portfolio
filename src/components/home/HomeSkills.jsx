import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Palette, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { fullStackSkills, secondarySkills } from '../../data/skills';
import { useNavigation } from '../../context/NavigationContext';

export default function HomeSkills() {
  const { navigateTo } = useNavigation();

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 02. TECHNICAL CAPABILITIES"
          title="Skills &amp; Expertise"
          subtitle="Full-Stack engineering is my primary discipline, reinforced with software quality assurance and intuitive UI/UX design."
        />

        {/* DOMINANT Full-Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/35 hover:border-cyan-400/50 shadow-xl shadow-cyan-950/20 mb-8 transition-all relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/10 flex-shrink-0">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20">
                    Primary Discipline
                  </span>
                  <span className="text-xs text-slate-400 font-mono">12 Core Technologies</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {fullStackSkills.title}
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {fullStackSkills.description}
            </p>
          </div>

          {/* MERN Core Pillar Callouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {fullStackSkills.featuredCore.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-center transition-all hover:border-cyan-400/40"
              >
                <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="block text-base sm:text-lg font-bold text-white mt-1">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Complete Full-Stack Skill Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Comprehensive Full-Stack Toolkit
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {fullStackSkills.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2 }}
                  className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/90 border border-white/[0.08] hover:border-cyan-400/40 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary Supporting Disciplines: QA & Testing (Purple) + UI/UX (Pink) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondarySkills.map((sec, idx) => {
            const isQA = sec.id === 'qa-testing';
            const Icon = isQA ? ShieldCheck : Palette;
            const accentBorder = isQA
              ? 'border-purple-500/25 hover:border-purple-500/40'
              : 'border-pink-500/25 hover:border-pink-500/40';
            const iconBg = isQA
              ? 'bg-purple-950/60 border-purple-500/20 text-purple-400'
              : 'bg-pink-950/60 border-pink-500/20 text-pink-400';
            const badgeColor = isQA
              ? 'text-purple-400 bg-purple-950/50 border-purple-500/20'
              : 'text-pink-400 bg-pink-950/50 border-pink-500/20';

            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`editorial-card rounded-2xl p-6 sm:p-7 border ${accentBorder} flex flex-col justify-between transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {sec.title}
                        </h4>
                        <span className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border mt-0.5 ${badgeColor}`}>
                          {sec.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {sec.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sec.skills.slice(0, 8).map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -2 }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/60 border border-white/[0.06] cursor-default transition-colors ${
                          isQA ? 'hover:border-purple-400/40 hover:text-purple-300' : 'hover:border-pink-400/40 hover:text-pink-300'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {sec.skills.length > 8 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-mono text-slate-500 bg-white/[0.02]">
                        +{sec.skills.length - 8} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Explore Link */}
                <button
                  onClick={() => navigateTo(sec.targetPage)}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition-colors pt-3 border-t border-white/[0.06] ${
                    isQA ? 'hover:text-purple-400' : 'hover:text-pink-400'
                  }`}
                >
                  <span>{sec.linkText}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
