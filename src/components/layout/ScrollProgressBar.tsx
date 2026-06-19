// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
// Fixed top bar that fills as the user scrolls down the page.

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.05)',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
          transformOrigin: 'left',
          width: `${progress}%`,
          transition: shouldReduce ? 'none' : 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(139,92,246,0.6)',
        }}
      />
    </div>
  );
}
