import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowDown, Github, Linkedin, ArrowUpRight, Terminal, Crosshair } from 'lucide-react';
import { contactConfig } from '../../../data/contact';
import { profilePhoto, profilePlaceholder } from '../../../assets/profile';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneHero() {
  const { navigateTo } = useNavigation();
  const [imgSrc, setImgSrc] = useState(profilePhoto);
  const containerRef = useRef(null);

  // Scroll Exit Transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.8, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Interactive Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const portraitX = useTransform(smoothX, [-400, 400], [22, -22]);
  const portraitY = useTransform(smoothY, [-400, 400], [18, -18]);
  const textX = useTransform(smoothX, [-400, 400], [-14, 14]);
  const textY = useTransform(smoothY, [-400, 400], [-10, 10]);
  const watermarkX = useTransform(smoothX, [-400, 400], [35, -35]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToWork = () => {
    const el = document.getElementById('scene-education') || document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ opacity: heroOpacity, scale: heroScale, y: heroTranslateY }}
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Engineering Grid & Precision Markings */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Subtle radial aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/[0.07] blur-[150px]" />

        {/* Ambient SVG technical coordinate lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
              <circle cx="60" cy="0" r="1.5" fill="rgba(56, 189, 248, 0.6)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Precision Crosshairs in corners */}
        <div className="absolute top-24 left-8 text-cyan-400/30 font-mono text-[10px] hidden md:flex items-center gap-2">
          <Crosshair className="w-3.5 h-3.5 animate-spin-slow" />
          <span>LAT 22.4707° N · LNG 70.0577° E [JAMNAGAR]</span>
        </div>
        <div className="absolute top-24 right-8 text-slate-500/40 font-mono text-[10px] hidden md:block">
          <span>SYS.SPEC // MERN_V4.2</span>
        </div>
      </div>

      {/* Monumental Watermark Typography in Background */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[14vw] font-black tracking-tighter text-white/[0.015] pointer-events-none -z-10 whitespace-nowrap uppercase font-mono"
      >
        PRINCE DHAMSANIYA
      </motion.div>

      {/* Main Hero Container */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Origin Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900/80 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <span className="text-xs font-mono text-slate-500 hidden sm:inline">//</span>

          <span className="text-xs font-mono text-slate-400 tracking-wide">
            Jamnagar, Gujarat · B.Tech IT @ D.D.U.
          </span>
        </motion.div>

        {/* Monumental Layered Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Typography Layer (Foreground) */}
          <motion.div
            style={{ x: textX, y: textY }}
            className="lg:col-span-7 flex flex-col items-start z-20"
          >
            {/* Monumental Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.92] uppercase"
            >
              <span className="block">Prince</span>
              <span className="block text-slate-400 hover:text-white transition-colors duration-300">
                Dhamsaniya
              </span>
            </motion.h1>

            {/* Focused Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 sm:mt-6 flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-cyan-400" />
              <h2 className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-cyan-400">
                Full-Stack Developer
              </h2>
            </motion.div>

            {/* Concise Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 sm:mt-5 text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed font-normal"
            >
              Building modern web applications with the MERN stack, while exploring software quality and user-centered design.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={scrollToWork}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
                >
                  <span>Explore Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={() => navigateTo('home', 'contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-slate-500 transition-all hover:text-white"
                >
                  <span>Get In Touch</span>
                </button>
              </Magnetic>

              {/* Quick Social Channels */}
              <div className="flex items-center gap-2.5 ml-1">
                <Magnetic strength={0.25}>
                  <a
                    href={contactConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 hover:text-white bg-slate-900/80 border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href={contactConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 hover:text-sky-400 bg-slate-900/80 border border-white/10 hover:border-sky-500/30 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>

          {/* Asymmetric Personal Portrait Layer (Parallax Depth) */}
          <motion.div
            style={{ x: portraitX, y: portraitY }}
            className="lg:col-span-5 flex justify-center lg:justify-end z-10"
          >
            <div
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] group"
            >
              {/* Soft ambient cyan aura */}
              <div className="absolute inset-0 bg-cyan-500/15 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

              {/* Editorial Frame with Viewfinder Accents */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-white/10 group-hover:border-cyan-500/40 p-2 transition-all duration-500 flex flex-col justify-between shadow-2xl">
                {/* Viewfinder Technical Header */}
                <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/[0.06] text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>PORTRAIT // ARCHIVE</span>
                  </div>
                  <span>PD-2026</span>
                </div>

                {/* Portrait Image Canvas */}
                <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-900 my-1">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc(profilePlaceholder)}
                    alt="Prince Dhamsaniya"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle technical gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                  {/* Corner bracket annotations inside image */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/40 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/40 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/40 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/40 pointer-events-none" />
                </div>

                {/* Viewfinder Technical Footer */}
                <div className="flex items-center justify-between px-2.5 py-1.5 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                  <span>MERN STACK</span>
                  <span className="text-cyan-400 font-semibold">AUTHENTIC</span>
                </div>
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute -bottom-3 -right-3 z-30 w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-xl flex items-center justify-center font-mono text-xs font-bold text-cyan-400 backdrop-blur-md">
                PD
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Bottom Scene Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-6xl mx-auto w-full pt-8 flex items-center justify-between text-[11px] font-mono text-slate-400"
      >
        <span>SCENE 01 // IDENTITY</span>
        <button
          onClick={scrollToWork}
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
        >
          <span>SCROLL FOR TRAJECTORY</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
        <span>EXPERIENCE 2026</span>
      </motion.div>
    </motion.section>
  );
}
