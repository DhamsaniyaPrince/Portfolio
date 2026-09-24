import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, ShieldCheck, Palette, Cpu } from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import Magnetic from '../../common/Magnetic';

export default function SceneIntroStatement() {
  const { navigateTo } = useNavigation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const tickerX1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const tickerX2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const kineticWords = [
    { word: 'BUILD', note: 'MERN Stack & Scalable APIs', color: 'text-cyan-400' },
    { word: 'INTERACT', note: 'Purposeful Motion & UI/UX', color: 'text-pink-400' },
    { word: 'TEST', note: 'Rigorous STLC & API Assurance', color: 'text-purple-400' },
    { word: 'SHIP', note: 'Production Delivery & Performance', color: 'text-emerald-400' },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden select-none bg-slate-950/40"
    >
      {/* Background Kinetic Stream Lines */}
      <motion.div
        style={{ x: tickerX1 }}
        className="absolute top-12 left-0 whitespace-nowrap text-[12vw] font-black tracking-tighter text-white/[0.015] pointer-events-none -z-10 uppercase font-mono"
      >
        REACT · NODE · EXPRESS · MONGODB · REST
      </motion.div>

      <motion.div
        style={{ x: tickerX2 }}
        className="absolute bottom-12 right-0 whitespace-nowrap text-[12vw] font-black tracking-tighter text-white/[0.015] pointer-events-none -z-10 uppercase font-mono"
      >
        ARCHITECTURE · RIGOR · DESIGN · TESTING
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            SCENE 04 // DEVELOPER ETHOS
          </span>
        </div>

        {/* Large Kinetic Word Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {kineticWords.map((item, index) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs text-slate-500 block mb-2">0{index + 1} //</span>
                <span className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter block mb-3 ${item.color} group-hover:scale-105 transition-transform origin-left font-mono`}>
                  {item.word}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">
                {item.note}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Concise Human Introduction & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          <div className="lg:col-span-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Engineering with clarity, testing with rigor, designing with intent.
            </h3>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack Primary Focus</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              I am a developer from <span className="text-white font-medium">Jamnagar, Gujarat</span>, pursuing my B.Tech in Information Technology at <span className="text-white font-medium">Dharmsinh Desai University (D.D.U.), Nadiad</span>.
            </p>
            <p className="text-slate-400">
              My engineering philosophy revolves around building robust, scalable web products using the MERN stack (React, Node.js, Express, MongoDB). Rather than treating code as isolated fragments, I connect architecture, quality testing workflows, and user interface fidelity into a unified digital experience.
            </p>

            {/* Quick Specialty Deep Dives */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => navigateTo('qa')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold text-purple-400 bg-purple-950/40 border border-purple-500/30 hover:border-purple-400 transition-colors"

                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Explore QA &amp; Testing Route</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <button
                  onClick={() => navigateTo('ui-ux')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold text-pink-400 bg-pink-950/40 border border-pink-500/30 hover:border-pink-400 transition-colors"

                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Explore UI/UX Route</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
