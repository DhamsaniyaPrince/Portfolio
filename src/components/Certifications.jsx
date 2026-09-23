import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Cpu, CheckCircle2, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
          // VERIFIED CREDENTIALS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, idx) => {
          const isML = cert.id.includes('ml');
          const Icon = isML ? Cpu : Cloud;
          const badgeAccent = isML
            ? 'border-sky-500/25 text-sky-400 bg-sky-950/40'
            : 'border-amber-500/25 text-amber-400 bg-amber-950/40';

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${badgeAccent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        {cert.issuer}
                      </span>
                      <span className="inline-block text-[11px] font-semibold text-amber-300">
                        {cert.program}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-900 border border-white/[0.06]">
                    Credential
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Key Topics */}
                <div className="space-y-1.5 mb-6">
                  {cert.keyTopics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credential Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Award className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>Issued: {cert.issueDate}</span>
                  </span>
                )}
                <span className="text-[11px] font-mono text-slate-500">AWS Academy</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
