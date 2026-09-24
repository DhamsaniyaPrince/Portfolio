import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follower
  const springX = useSpring(mouseX, { damping: 28, stiffness: 400, mass: 0.4 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 400, mass: 0.4 });

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
      const clickableTarget = target.closest('button, a, [role="button"], input, textarea, select, [data-interactive]');
      setIsHovered(Boolean(clickableTarget));
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
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Subtle Fine Ring Follower */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-colors duration-150 ${
          isHovered
            ? 'border-cyan-400/80 bg-cyan-400/[0.08]'
            : 'border-white/25 bg-transparent'
        }`}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 26 : 18,
          height: isHovered ? 26 : 18,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  );
}
