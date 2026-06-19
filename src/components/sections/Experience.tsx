// ─── Experience Section — Vertical Timeline ───────────────────────────────────
// Animated vertical timeline. The connecting line draws itself on scroll.
// Each entry fades + slides in with a staggered delay.
// Built to handle N entries — just add to the experience array in resume.ts.

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/resume';
import type { ExperienceEntry } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// ─── Single Timeline Entry ───────────────────────────────────────────────────
function TimelineEntry({
  entry,
  index,
  isLast,
}: {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: '0',
        position: 'relative',
      }}
    >
      {/* Left column: dot + line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: '2rem',
          minWidth: '40px',
        }}
      >
        {/* Animated dot */}
        <motion.div
          initial={prefersReduced ? {} : { scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15, type: 'spring', stiffness: 200 }}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1rem',
            boxShadow: '0 0 20px rgba(139,92,246,0.4)',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <FiBriefcase />
        </motion.div>

        {/* Connecting line — grows downward as section enters view */}
        {!isLast && (
          <motion.div
            initial={prefersReduced ? {} : { scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 + 0.3, ease: 'easeOut' }}
            style={{
              flex: 1,
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(139,92,246,0.6), rgba(6,182,212,0.2))',
              transformOrigin: 'top',
              marginTop: '0.5rem',
              minHeight: '48px',
            }}
          />
        )}
      </div>

      {/* Right column: card */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="glass-card"
        style={{
          padding: '1.75rem',
          marginBottom: isLast ? '0' : '2rem',
          flex: 1,
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#f8fafc',
                marginBottom: '0.2rem',
              }}
            >
              {entry.role}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#a78bfa',
                fontWeight: 600,
              }}
            >
              {entry.company}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.3rem',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#64748b',
              }}
            >
              <FiCalendar style={{ fontSize: '0.75rem' }} />
              {entry.startDate} – {entry.endDate}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#64748b',
              }}
            >
              <FiMapPin style={{ fontSize: '0.75rem' }} />
              {entry.location}
            </span>
          </div>
        </div>

        {/* Description bullets */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem',
            marginBottom: '1.25rem',
          }}
        >
          {entry.description.map((point, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '0.6rem',
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  color: '#8b5cf6',
                  marginTop: '0.3rem',
                  fontSize: '0.5rem',
                  flexShrink: 0,
                }}
              >
                ▸
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* Tech stack badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {entry.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Experience Section ──────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="section">
      <div
        className="container"
        style={{
          background: 'rgba(139,92,246,0.02)',
          borderRadius: '1.5rem',
          padding: 'var(--section-padding) var(--container-pad)',
        }}
      >
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've{' '}
            <span className="gradient-text">made impact</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '480px' }}>
            My professional journey and the problems I've solved along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: '760px' }}>
          {experience.map((entry, index) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
