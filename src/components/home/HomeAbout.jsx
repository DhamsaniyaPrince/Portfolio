import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Layers, Code2, ShieldCheck, Palette, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export default function HomeAbout() {
  const credentials = [
    {
      icon: GraduationCap,
      label: "Education",
      primary: "B.Tech in Information Technology",
      secondary: "Dharmsinh Desai University (D.D.U.)",
      location: "Nadiad, Gujarat",
    },
    {
      icon: MapPin,
      label: "Location",
      primary: "Jamnagar, Gujarat",
      secondary: "India",
      location: "Available for Internships & Roles",
    },
    {
      icon: Layers,
      label: "Primary Focus",
      primary: "Full-Stack Web Engineering",
      secondary: "MERN Stack · React.js · Node.js",
      location: "Supported by QA & UI/UX",
    },
  ];

  // Visual Relationship: Build -> Test -> Design
  const engineeringPillars = [
    {
      step: "01",
      area: "Full-Stack Engineering",
      role: "BUILD",
      icon: Code2,
      desc: "Architecting end-to-end web applications with React, Node.js, Express, and MongoDB. Focusing on clean schema design, JWT authentication, and responsive interfaces.",
      accent: "border-cyan-500/40 bg-cyan-950/20 text-cyan-400",
      isDominant: true,
      tag: "Primary Discipline",
      skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    },
    {
      step: "02",
      area: "QA / Software Testing",
      role: "TEST",
      icon: ShieldCheck,
      desc: "Applying structured testing methods, edge-case coverage, bug lifecycles, and API validation with Postman to guarantee reliable software performance.",
      accent: "border-purple-500/30 bg-purple-950/20 text-purple-400",
      isDominant: false,
      tag: "Secondary Strength",
      skills: ["Manual Testing", "STLC / SDLC", "API Testing (Postman)", "Test Case Design"],
    },
    {
      step: "03",
      area: "UI/UX Design",
      role: "DESIGN",
      icon: Palette,
      desc: "Designing human-centered user flows, accessible contrast hierarchies, and interactive Figma prototypes with technical feasibility in mind.",
      accent: "border-pink-500/30 bg-pink-950/20 text-pink-400",
      isDominant: false,
      tag: "Supporting Discipline",
      skills: ["Figma", "Wireframing", "User Flows", "Prototyping", "Design Systems"],
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 01. ABOUT ME"
          title="Personal Story &amp; Background"
          subtitle="Engineering full-stack systems with strong backend logic, clean data models, and user-centered design."
        />

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Column: Visual Academic & Origin Identity Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Visual Identity Block */}
            <div className="editorial-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold text-cyan-400">
                      PD
                    </div>
                    <span className="font-mono text-xs text-slate-300 font-semibold">
                      PRINCE DHAMSANIYA
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">ID // DEV-2026</span>
                </div>

                <div className="space-y-4">
                  {credentials.map((cred) => {
                    const Icon = cred.icon;
                    return (
                      <div
                        key={cred.label}
                        className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.04] flex items-start gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            {cred.label}
                          </span>
                          <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                            {cred.primary}
                          </h4>
                          <p className="text-xs text-slate-300 mt-0.5">{cred.secondary}</p>
                          <p className="text-[11px] font-mono text-slate-500 mt-0.5">{cred.location}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Tagline */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-cyan-400 font-medium">
                  "I build systems, not just interfaces."
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Story & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="editorial-card rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/[0.08] h-full flex flex-col justify-between space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                  // THE DEVELOPER JOURNEY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Engineering complete web systems from schema to user experience.
                </h3>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am <span className="text-white font-semibold">Prince Dhamsaniya</span>, an Information Technology student at <span className="text-white font-semibold">Dharmsinh Desai University (D.D.U.)</span>, Nadiad, Gujarat, hailing from <span className="text-white font-semibold">Jamnagar</span>.
                  </p>
                  <p>
                    My core technical focus is <span className="text-cyan-300 font-medium">Full-Stack Web Development</span>. I enjoy building complete web applications—designing normalized data models in MongoDB, creating secure REST APIs with Node.js and Express, and engineering fast, reactive user interfaces with React and Tailwind CSS.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Rather than treating software as just code that works once, I emphasize <span className="text-purple-300 font-medium">software quality assurance</span>. I incorporate structured testing fundamentals, edge-case analysis, and Postman API validation to ensure systems are dependable under real usage conditions.
                  </p>
                  <p className="text-slate-400 text-sm">
                    In addition, my foundation in <span className="text-pink-300 font-medium">UI/UX design</span> allows me to translate product ideas into clean Figma wireframes and high-fidelity prototypes that consider usability, accessibility, and engineering feasibility before writing a single line of code.
                  </p>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-mono">
                  Primary Stack: React · Node · Express · MongoDB
                </span>
                <span className="text-cyan-400 font-mono font-semibold">
                  MERN Specialist
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BUILD -> TEST -> DESIGN Technical Storytelling Element */}
        <div className="pt-10 border-t border-white/[0.06]">
          <div className="flex items-center justify-between gap-2 mb-8">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
              // METHODOLOGY: BUILD → TEST → DESIGN
            </span>
            <span className="font-mono text-[11px] text-cyan-400">
              Full-Stack Dominant Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {engineeringPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: pIdx * 0.1 }}
                  className={`editorial-card rounded-2xl p-6 border ${pillar.accent} relative flex flex-col justify-between ${
                    pillar.isDominant ? 'md:-translate-y-1 shadow-lg shadow-cyan-950/40' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {pillar.step}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 bg-slate-900 text-slate-300">
                        {pillar.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-900 border border-white/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {pillar.role}
                        </h4>
                        <span className="text-xs font-mono text-slate-400">
                          {pillar.area}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pillar.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-950/60 border border-white/[0.06]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>{pillar.isDominant ? "Primary Focus" : "Supporting Focus"}</span>
                    {pillar.isDominant && <span className="text-cyan-400 font-bold">Dominant</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
