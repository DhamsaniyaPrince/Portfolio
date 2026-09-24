import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, ShieldCheck, Palette } from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneManifesto() {
  const { navigateTo } = useNavigation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax scrubbing for background text and statement
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.01, 0.03, 0.01]);

  const pillars = [
    {
      num: '01',
      title: 'Full-Stack Architecture',
      tag: 'Primary Discipline',
      desc: 'MERN stack engineering, REST API contracts, normalized schemas, and responsive React interfaces.',
      action: () => navigateTo('projects'),
      actionText: 'View Projects',
      color: 'border-cyan-500/30 text-cyan-400',
    },
    {
      num: '02',
      title: 'Software Quality Rigor',
      tag: 'Secondary Strength',
      desc: 'Structured testing workflows, STLC, Postman API validation, and automated testing fundamentals.',
      action: () => navigateTo('qa'),
      actionText: 'Explore QA',
      color: 'border-purple-500/30 text-purple-400',
    },
    {
      num: '03',
      title: 'User Experience & UI',
      tag: 'Supporting Discipline',
      desc: 'Figma wireframes, design systems, accessible contrast, and developer-feasible prototypes.',
      action: () => navigateTo('ui-ux'),
      actionText: 'Explore UI/UX',
      color: 'border-pink-500/30 text-pink-400',
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Kinetic Statement */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute top-1/4 -right-10 text-[18vw] font-black tracking-tighter text-white pointer-events-none select-none -z-10 uppercase font-mono"
      >
        SYSTEMS
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SCENE 02 // MANIFESTO &amp; BACKGROUND
          </span>
        </div>

        {/* Large Statement with kinetic motion */}
        <motion.div style={{ y: textY }} className="mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl">
            I build digital products with clean systems and purposeful motion.
          </h2>

          {/* Concise Human Narrative */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline text-slate-300">
            <div className="md:col-span-4 font-mono text-xs text-slate-500 uppercase tracking-wider">
              [ B.Tech IT @ D.D.U. Nadiad ]
            </div>
            <div className="md:col-span-8 text-base sm:text-lg leading-relaxed text-slate-300">
              <p>
                I am a developer from <span className="text-white font-medium">Jamnagar, Gujarat</span>, pursuing my B.Tech in Information Technology. My work is anchored in full-stack web engineering with the MERN stack, complemented by software testing discipline and interface design thinking.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Minimal Craft Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-950/60 border ${pillar.color} hover:border-white/30 transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-slate-500">{pillar.num} //</span>
                  <span className="text-slate-400">{pillar.tag}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <Magnetic strength={0.2}>
                  <button
                    onClick={pillar.action}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-400 transition-colors py-1"
                    data-cursor="magnetic"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>

                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
