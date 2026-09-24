import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Github, Linkedin, Copy, Check, Send, ArrowUp, Sparkles, Code } from 'lucide-react';
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
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [bootIndex]);

  const handleCopyEmail = () => {
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
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden bg-slate-950"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-gradient-to-t from-cyan-500/10 via-sky-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SCENE 07 // INTERFACE CONVERGENCE
          </span>
        </div>

        {/* Large Statement */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.98] uppercase">
            Let's build something together.
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
            Open for internships, full-stack engineer roles, and technical collaborations. Ready to architect, test, and ship.
          </p>
        </div>

        {/* "Software Being Built" Window Metaphor */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl mb-16">
          {/* Software Window Header */}
          <div className="bg-slate-950/90 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">
                system@prince-dhamsaniya:~ contact-pipeline
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE_COMM</span>
            </div>
          </div>

          {/* Software Boot Telemetry Console */}
          <div className="p-4 sm:p-5 bg-black/60 border-b border-white/[0.06] font-mono text-[11px] sm:text-xs text-slate-400 space-y-1">
            {bootMessages.slice(0, bootIndex + 1).map((msg, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span>
                <span className={i === bootIndex ? 'text-white' : 'text-slate-500'}>{msg}</span>
              </div>
            ))}
          </div>

          {/* Software Interactive Interface Body */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Primary Action Card */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-white/10">
              <div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
                  DIRECT EMAIL INBOX
                </span>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="text-lg sm:text-2xl font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {contactConfig.email}
                </a>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  Guaranteed response within 24 hours.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/[0.06]">
                <Magnetic strength={0.25}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-1.5"
                    data-cursor="magnetic"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-cyan-300">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                    data-cursor="magnetic"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch Mail Client</span>
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Magnetic strength={0.15}>
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-white/30 text-slate-200 hover:text-white transition-all"
                  data-cursor="open"
                  data-cursor-text="GITHUB ↗"
                >
                  <Github className="w-5 h-5 text-white" />
                  <div className="text-left font-mono">
                    <span className="block text-xs font-bold text-white">GitHub Codebase</span>
                    <span className="text-[11px] text-slate-400">@DhamsaniyaPrince</span>
                  </div>
                </a>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-500/40 text-slate-200 hover:text-sky-300 transition-all"
                  data-cursor="open"
                  data-cursor-text="LINKEDIN ↗"
                >
                  <Linkedin className="w-5 h-5 text-sky-400" />
                  <div className="text-left font-mono">
                    <span className="block text-xs font-bold text-white">LinkedIn Network</span>
                    <span className="text-[11px] text-slate-400">/in/princedhamsaniya</span>
                  </div>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Minimal Typographic Footer */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">Prince Dhamsaniya</span>
            <span className="text-slate-600">/</span>
            <span>Full-Stack Developer</span>
            <span className="text-slate-600">/</span>
            <span>Jamnagar, Gujarat</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">D.D.U. Nadiad · 2026</span>
            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-colors"
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
