// ─── About Section ────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { personalInfo, skillGroups } from '../../data/resume';

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting{' '}
            <span className="gradient-text">digital experiences</span>
            {' '}that matter
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {/* Bio card */}
          <motion.div
            {...cardVariant}
            className="glass-card"
            style={{ padding: '2rem', gridColumn: 'span 1' }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              {/* Profile photo placeholder */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  boxShadow: '0 0 24px rgba(139,92,246,0.3)',
                }}
              >
                👨‍💻
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#a78bfa', fontWeight: 500 }}>
                {personalInfo.title}
              </p>
            </div>

            <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.925rem' }}>
              {personalInfo.bio}
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { icon: <FiMapPin />, text: personalInfo.contact.location },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#64748b',
                    fontSize: '0.85rem',
                  }}
                >
                  <span style={{ color: '#8b5cf6' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#f8fafc',
              }}
            >
              Technical Skills
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#8b5cf6',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {group.category}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {group.skills.map((skill) => (
                      <span key={skill.name} className="tech-badge">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
