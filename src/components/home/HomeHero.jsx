import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Sparkles, MapPin, Code2, ShieldCheck, Palette, Layers } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { contactConfig } from '../../data/contact';
import { useNavigation } from '../../context/NavigationContext';
import { profilePhoto, profilePlaceholder } from '../../assets/profile';
import HeroInteractiveCard from './HeroInteractiveCard';

export default function HomeHero() {
  const { navigateTo } = useNavigation();
  const [imgSrc, setImgSrc] = useState(profilePlaceholder); // Using placeholder by default until real photo is provided

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[380px] bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[340px] bg-indigo-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Editorial Identity & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* 1. Status Eyebrow */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-900/80 border border-white/10 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-200">Available for Opportunities</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 font-mono text-[11px]">B.Tech IT @ D.D.U.</span>
              </div>
            </motion.div>

            {/* 2. Dominant Full-Stack Identity */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400">
                // FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* 3. Main Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3"
            >
              {personalInfo.name}
            </motion.h1>

            {/* 4. Strategic Narrative Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-6 font-normal"
            >
              I build modern web applications with strong engineering, software quality, and user experience.
            </motion.p>

            {/* 5. Supporting Core Strengths */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>BUILD: MERN Stack</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-purple-300 bg-purple-950/40 border border-purple-500/25">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>TEST: QA &amp; Testing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-pink-300 bg-pink-950/40 border border-pink-500/25">
                <Palette className="w-3.5 h-3.5 text-pink-400" />
                <span>DESIGN: UI/UX Principles</span>
              </span>
            </motion.div>

            {/* 6. Primary Action Buttons & Socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => navigateTo('projects')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:opacity-95 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all focus:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateTo('home', 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-slate-500 transition-all hover:text-white focus:outline-none"
              >
                <span>Contact Me</span>
              </button>

              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all focus:outline-none"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl text-slate-400 hover:text-sky-400 bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-sky-500/30 transition-all focus:outline-none"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[4/5] group">
              {/* Soft Atmospheric Glow Behind Portrait Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              {/* Layered Outer Editorial Frame */}
              <div className="relative w-full h-full rounded-3xl bg-slate-950/90 border border-white/[0.12] group-hover:border-cyan-500/40 p-2 sm:p-2.5 shadow-2xl shadow-black/80 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                {/* Top Architectural Bar with Subtle Monogram Signature */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-slate-900/40 rounded-t-2xl z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center font-mono text-[10px] font-bold text-cyan-400">
                      PD
                    </span>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-300">
                      PRINCE D.
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    ENGINEERING
                  </span>
                </div>

                {/* Main Portrait Canvas */}
                <div className="relative flex-1 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 my-1.5 border border-white/[0.06]">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc(profilePlaceholder)}
                    alt="Prince Dhamsaniya"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  {/* Subtle edge shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />
                </div>

                {/* Floating Contextual Technology Badges */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-16 -left-3 sm:-left-4 z-20 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/30 shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-mono text-[11px] font-semibold text-slate-200">React.js</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-36 -right-3 sm:-right-4 z-20 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/30 shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="font-mono text-[11px] font-semibold text-slate-200">Node.js · Express</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-16 -left-2 sm:-left-3 z-20 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-emerald-500/30 shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-mono text-[11px] font-semibold text-slate-200">MongoDB</span>
                </motion.div>

                {/* Base Technical Footer Strip */}
                <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.06] bg-slate-900/40 rounded-b-2xl z-20">
                  <span className="font-mono text-[10px] text-slate-400">
                    MERN Stack Architecture
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Interactive Systems Console */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.06] w-full max-w-xl mx-auto"
        >
          <HeroInteractiveCard />
        </motion.div>
      </div>
    </section>
  );
}
