import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, Code2, GitBranch, Cpu, Activity } from 'lucide-react';

export default function HeroInteractiveCard() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { name: 'React', type: 'Frontend Core', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { name: 'Node.js', type: 'Server Runtime', icon: Server, color: 'text-sky-400', border: 'border-sky-500/30' },
    { name: 'MongoDB', type: 'NoSQL Schema', icon: Database, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { name: 'REST APIs', type: 'Endpoint Layer', icon: Cpu, color: 'text-indigo-400', border: 'border-indigo-500/30' },
    { name: 'Git', type: 'Version Control', icon: GitBranch, color: 'text-amber-400', border: 'border-amber-500/30' },
  ];

  return (
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl max-w-lg mx-auto backdrop-blur-xl relative overflow-hidden group"
    >
      {/* Subtle top indicator bar */}
      <div className="flex items-center justify-between gap-3 pb-3 mb-3.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>system: active</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>MERN Architecture</span>
        </div>
      </div>

      {/* Interactive Tech Nodes */}
      <div className="grid grid-cols-5 gap-2 text-center">
        {modules.map((mod) => {
          const Icon = mod.icon;
          const isHovered = activeModule === mod.name;

          return (
            <motion.button
              key={mod.name}
              type="button"
              onMouseEnter={() => setActiveModule(mod.name)}
              onMouseLeave={() => setActiveModule(null)}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border transition-all text-center flex flex-col items-center justify-center ${
                isHovered ? mod.border : 'border-white/[0.06]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-1 ${mod.color}`} />
              <span className="font-mono text-[11px] text-white font-medium block">
                {mod.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Sub-Status Display on Interaction */}
      <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>
          {activeModule ? (
            <span className="text-cyan-300">
              Selected: {activeModule} ({modules.find((m) => m.name === activeModule)?.type})
            </span>
          ) : (
            <span>Interactive core system stack</span>
          )}
        </span>
        <span className="text-slate-600">TypeScript · MERN</span>
      </div>
    </motion.div>
  );
}
