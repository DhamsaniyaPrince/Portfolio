import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactConfig } from '../data/contact';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-10 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 04. GET IN TOUCH"
          title="Contact"
          subtitle="Direct channels to reach out for software engineering opportunities, internships, and technical discussions."
        />

        {/* Split Layout: Large CTA Left, Contact Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Big Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 editorial-card rounded-3xl p-8 sm:p-10 border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Discussions</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {contactConfig.ctaHeadline}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {contactConfig.ctaSubtext}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Currently pursuing B.Tech in Information Technology at Dharmsinh Desai University (D.D.U.), Nadiad. Ready to contribute across the stack—from clean frontend interfaces to robust database design, API test coverage, and testable architectures.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{contactConfig.location}</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-4 justify-between"
          >
            {/* 1. Email Card with Copy & Direct Mailto */}
            <div className="editorial-card editorial-card-hover rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Primary Contact
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      Email Address
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-white/10 hover:border-cyan-400/40 hover:text-white transition-all focus:outline-none"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 break-all select-all">
                  {contactConfig.email}
                </span>

                <a
                  href={`mailto:${contactConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span>Open Mail Client</span>
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* 2. GitHub Profile Card */}
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card editorial-card-hover rounded-2xl p-6 border border-white/[0.08] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white/20 transition-colors flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Code &amp; Repositories
                  </span>
                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {contactConfig.github}
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] text-slate-400 group-hover:text-white group-hover:border-cyan-500/30 transition-all">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            {/* 3. LinkedIn Profile Card */}
            <a
              href={contactConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card editorial-card-hover rounded-2xl p-6 border border-white/[0.08] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-950/60 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:border-sky-400/40 transition-colors flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Professional Network
                  </span>
                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    LinkedIn Profile
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {contactConfig.linkedin}
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] text-slate-400 group-hover:text-white group-hover:border-sky-500/30 transition-all">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
