import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follower
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.5 });

  useEffect(() => {
    // Detect touch-only devices or reduced motion
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      const clickableTarget = target.closest('button, a, [role="button"]');

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || '';

        if (type === 'lens') {
          setCursorType('lens');
          setCursorText(text || 'FOCUS');
        } else if (type === 'open') {
          setCursorType('open');
          setCursorText(text || 'OPEN ↗');
        } else if (type === 'drag') {
          setCursorType('drag');
          setCursorText(text || 'DRAG ↔');
        } else if (type === 'view') {
          setCursorType('view');
          setCursorText(text || 'VIEW');
        } else if (type === 'magnetic' || type === 'pointer') {
          setCursorType('pointer');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      } else if (clickableTarget) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Responsive Physics Follower */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center font-mono font-bold tracking-wider transition-colors duration-200 ${
          cursorType === 'lens'
            ? 'w-24 h-24 rounded-full border-2 border-cyan-400/90 bg-cyan-950/20 backdrop-blur-[2px] text-cyan-300 text-[10px] shadow-2xl shadow-cyan-500/30'
            : cursorType === 'view'
            ? 'w-20 h-20 rounded-full bg-cyan-400 text-slate-950 text-xs shadow-xl shadow-cyan-500/40'
            : cursorType === 'open'
            ? 'w-20 h-20 rounded-full bg-white text-slate-950 text-xs shadow-xl shadow-white/30'
            : cursorType === 'drag'
            ? 'w-20 h-10 rounded-full bg-indigo-600/90 text-white text-[11px] shadow-lg border border-indigo-400/40'
            : cursorType === 'pointer'
            ? 'w-12 h-12 rounded-full border border-cyan-400/80 bg-cyan-400/10'
            : 'w-8 h-8 rounded-full border border-white/20 bg-white/[0.02]'
        }`}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale:
            cursorType === 'lens'
              ? 1.1
              : cursorType === 'view' || cursorType === 'open' || cursorType === 'drag'
              ? 1.05
              : cursorType === 'pointer'
              ? 1.15
              : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorType === 'lens' && (
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Viewfinder crosshairs */}
            <span className="absolute top-1 w-2 h-[1px] bg-cyan-400/70" />
            <span className="absolute bottom-1 w-2 h-[1px] bg-cyan-400/70" />
            <span className="absolute left-1 h-2 w-[1px] bg-cyan-400/70" />
            <span className="absolute right-1 h-2 w-[1px] bg-cyan-400/70" />
            <span className="select-none tracking-widest text-[9px] uppercase font-mono">{cursorText}</span>
          </div>
        )}

        {(cursorType === 'view' || cursorType === 'open' || cursorType === 'drag') && (
          <span className="select-none animate-fadeIn">{cursorText}</span>
        )}
      </motion.div>
    </>
  );
}
