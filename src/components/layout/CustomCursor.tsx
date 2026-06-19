// ─── Custom Cursor ────────────────────────────────────────────────────────────
// Desktop-only custom cursor: outer ring + inner dot.
// Disabled automatically on touch devices (pointer: coarse).

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on devices that support hover (not touch-only)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    let rafId: number;
    let outerX = 0, outerY = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Inner dot follows immediately
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Check if hovering over interactive element
      const target = e.target as Element;
      setIsPointer(
        target.closest('a, button, [role="button"], input, textarea, select') !== null
      );
    };

    const animateOuter = () => {
      // Outer ring follows with smooth lag
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerX}px, ${outerY}px)`;
      }
      rafId = requestAnimationFrame(animateOuter);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateOuter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '48px' : '36px',
          height: isPointer ? '48px' : '36px',
          borderRadius: '50%',
          border: `2px solid ${isPointer ? '#06b6d4' : '#8b5cf6'}`,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          marginLeft: isPointer ? '-24px' : '-18px',
          marginTop: isPointer ? '-24px' : '-18px',
          transition: 'width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s, opacity 0.2s',
          opacity: 0.75,
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#a78bfa',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          marginLeft: '-3px',
          marginTop: '-3px',
        }}
      />
    </>
  );
}
