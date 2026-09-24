import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, ArrowUp } from 'lucide-react';
import { contactConfig } from '../../../data/contact';
import { personalInfo } from '../../../data/personal';
import Magnetic from '../../common/Magnetic';

export default function SceneContact() {
  const [copied, setCopied] = useState(false);

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
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SCENE 05 // MINIMAL ENDING
          </span>
        </div>

        {/* Large Confident Heading */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] uppercase">
            Let's build something together.
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
            Open for internships, full-stack developer roles, and technical collaborations. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-white/[0.08]">
          {/* Email Copy Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-slate-500 block mb-1">
                PRIMARY EMAIL INBOX
              </span>
              <a
                href={`mailto:${contactConfig.email}`}
                className="text-lg sm:text-2xl font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {contactConfig.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
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
                      <span className="text-cyan-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="p-2.5 rounded-full text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                  aria-label="Send direct email"
                  data-cursor="magnetic"
                >
                  <Send className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.2}>
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white transition-all"
                data-cursor="magnetic"
              >
                <Github className="w-5 h-5" />
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold">GitHub</span>
                  <span className="text-[11px] text-slate-500">@DhamsaniyaPrince</span>
                </div>
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-500/30 text-slate-200 hover:text-sky-300 transition-all"
                data-cursor="magnetic"
              >
                <Linkedin className="w-5 h-5 text-sky-400" />
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold">LinkedIn</span>
                  <span className="text-[11px] text-slate-500">/in/princedhamsaniya</span>
                </div>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Prince Dhamsaniya · Full-Stack Developer</span>
            <span className="text-slate-700">|</span>
            <span>Jamnagar, Gujarat</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026</span>
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
