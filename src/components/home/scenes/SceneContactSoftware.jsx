import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Github, Linkedin, Copy, Check, Send, ArrowUp, ArrowUpRight } from 'lucide-react';
import { contactConfig } from '../../../data/contact';
import { personalInfo } from '../../../data/personal';
import Magnetic from '../../common/Magnetic';

export default function SceneContactSoftware() {
  const [copied, setCopied] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);

  const bootMessages = [
    'CONNECTING TO SYSTEM ARCHITECTURE...',
    'ESTABLISHING ENCRYPTED COMM CHANNEL...',
    'PORT 3000 -> PRINCERDHAMSANIYA@GMAIL.COM: ONLINE',
    'INTERFACE READY FOR INCOMING SIGNALS.',
  ];

  useEffect(() => {
    if (bootIndex < bootMessages.length - 1) {
      const timer = setTimeout(() => {
        setBootIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [bootIndex]);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden bg-slate-950"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-gradient-to-t from-cyan-500/10 via-sky-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Scene Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SCENE 07 // INTERFACE CONVERGENCE
          </span>
        </div>

        {/* Large Statement */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] uppercase">
            Let's build something together.
          </h2>
          <p className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-lg leading-relaxed">
            Open for internships, full-stack engineer roles, and technical collaborations. Ready to architect, test, and ship.
          </p>
        </div>

        {/* "Software Being Built" Window Metaphor */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl mb-16">
          {/* Software Window Header */}
          <div className="bg-slate-950/90 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-none">
                system@prince-dhamsaniya:~ contact-pipeline
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE_COMM</span>
            </div>
          </div>

          {/* Software Boot Telemetry Console */}
          <div className="p-3 sm:p-4 bg-black/60 border-b border-white/[0.06] font-mono text-[10px] sm:text-xs text-slate-400 space-y-1">
            {bootMessages.slice(0, bootIndex + 1).map((msg, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span>
                <span className={i === bootIndex ? 'text-white' : 'text-slate-500'}>{msg}</span>
              </div>
            ))}
          </div>

          {/* Clean Unified Contact Channels */}
          <div className="p-4 sm:p-8 space-y-3 sm:space-y-4">
            {/* 1. Email Channel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/30 transition-colors min-w-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    title={contactConfig.email}
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactConfig.email}`}
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-sm"
                  aria-label="Open email client"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mail</span>
                </a>
              </div>
            </div>

            {/* 2. GitHub Channel */}
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-white/30 transition-colors group min-w-0"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    GitHub Codebase
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                    @DhamsaniyaPrince
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-slate-400 group-hover:text-white transition-colors shrink-0">
                <span className="hidden sm:inline">github.com</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 3. LinkedIn Channel */}
            <a
              href={contactConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-500/40 transition-colors group min-w-0"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-sky-300 transition-colors truncate block">
                    /in/princedhamsaniya
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-slate-400 group-hover:text-sky-300 transition-colors shrink-0">
                <span className="hidden sm:inline">linkedin.com</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Minimal Typographic Footer */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">{personalInfo.name}</span>
            <span className="text-slate-600">/</span>
            <span>Full-Stack Developer</span>
            <span className="text-slate-600">/</span>
            <span>Jamnagar, Gujarat</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">D.D.U. Nadiad · 2026</span>
            <Magnetic strength={0.25}>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-colors"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
