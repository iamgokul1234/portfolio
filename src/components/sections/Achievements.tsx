// ─── Achievements Section ─────────────────────────────────────────────────────
// Animated achievement cards with staggered fade-in on scroll.
// Icon + stat + headline + short description per card.

import { motion } from 'framer-motion';
import { achievements } from '../../data/resume';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Achievements() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">
            Numbers that{' '}
            <span className="gradient-text">tell the story</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: 'easeOut' as const,
              }}
              whileHover={prefersReduced ? {} : { y: -5, scale: 1.02 }}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))',
                  border: '1px solid rgba(139,92,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                }}
              >
                {item.icon}
              </div>

              {/* Stat */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                {item.stat}
              </div>

              {/* Headline */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                }}
              >
                {item.headline}
              </h3>

              {/* Description */}
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
