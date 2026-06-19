// ─── Hero Section ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/resume';

const SOCIAL_LINKS = [
  { href: personalInfo.contact.github, icon: <FiGithub />, label: 'GitHub' },
  { href: personalInfo.contact.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: `mailto:${personalInfo.contact.email}`, icon: <FiMail />, label: 'Email' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 clamp(1rem, 4vw, 2rem)',
        textAlign: 'center',
      }}
    >
      {/* Background grid */}
      <div className="bg-grid" />

      {/* Ambient glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: '800px', width: '100%' }}>
        {/* Greeting badge */}
        <motion.div {...fadeUp(0.1)}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 1rem',
              borderRadius: '999px',
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#a78bfa',
              marginBottom: '1.5rem',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ fontSize: '0.85rem' }}>👋</span>
            &nbsp;Hi there, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #f8fafc 30%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.3)}>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.25rem',
            }}
          >
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Professional summary — pulled from personalInfo.bio */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: '#94a3b8',
            maxWidth: '640px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn btn-primary"
            style={{ fontSize: '0.9rem', padding: '0.7rem 1.6rem' }}
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumePdfUrl}
            download="Gokulakrishnan_S_Resume.pdf"
            className="btn btn-ghost"
            style={{ fontSize: '0.9rem', padding: '0.7rem 1.6rem' }}
          >
            <FiDownload style={{ fontSize: '0.95rem' }} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.6)}
          style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', marginBottom: '4rem' }}
        >
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                fontSize: '1.1rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#a78bfa';
                el.style.borderColor = 'rgba(139,92,246,0.4)';
                el.style.transform = 'translateY(-3px)';
                el.style.background = 'rgba(139,92,246,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#64748b';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
                el.style.transform = 'none';
                el.style.background = 'transparent';
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          border: 'none',
          color: '#475569',
          fontSize: '1.3rem',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#334155' }}>SCROLL</span>
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
