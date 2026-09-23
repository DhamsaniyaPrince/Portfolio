import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
