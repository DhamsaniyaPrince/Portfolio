import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Cloud, Cpu, Flame, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../../../data/certifications';
import Magnetic from '../../common/Magnetic';

export default function SceneAchievements() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for sticker layers to create tactile physical depth
  const sticker1Y = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const sticker2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const sticker3Y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const rotations = [-2.5, 1.8, -1.5];
  const parallaxTransforms = [sticker1Y, sticker2Y, sticker3Y];

  const getIcon = (type) => {
    switch (type) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'hackathon':
        return <Flame className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden select-none"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[16vw] font-black tracking-tighter text-white/[0.012] pointer-events-none -z-10 uppercase font-mono">
        HONORS
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Scene Tag & Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-24">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-3">
              SCENE 03 // VERIFIED CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Honors &amp; Milestones
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-sm">
            AWS Academy cloud &amp; machine learning foundations combined with high-intensity national hackathon building.
          </p>
        </div>

        {/* Tactile Stickers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {certificationsData.map((cert, index) => {
            const rot = rotations[index % rotations.length];
            const pY = parallaxTransforms[index % parallaxTransforms.length];

            return (
              <motion.div
                key={cert.id}
                style={{ y: pY }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 350, damping: 20 },
                }}
                className="group relative cursor-default"
              >
                {/* Physical Tactile Sticker Card */}
                <div
                  style={{ transform: `rotate(${rot}deg)` }}
                  className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-slate-950/90 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl relative overflow-hidden backdrop-blur-md"
                >
                  {/* Subtle Top Peel/Corner Tab Graphic */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/[0.08] to-transparent pointer-events-none" />

                  <div>
                    {/* Header: Issuer & Serial Code */}
                    <div className="flex items-center justify-between text-xs font-mono mb-5 pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        {getIcon(cert.stickerType)}
                        <span className="font-bold text-white uppercase">{cert.issuer}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                        {cert.code}
                      </span>
                    </div>

                    {/* Program Badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/[0.05] border border-white/10 text-slate-300 mb-2">
                      {cert.program}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issue Date */}
                    <span className="text-xs font-mono text-slate-400 block mt-1">
                      {cert.issueDate}
                    </span>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Key Topics / Verification Footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.keyTopics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">VERIFIED</span>
                      </div>
                      <span>OFFICIAL ARCHIVE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
