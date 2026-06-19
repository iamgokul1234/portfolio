// ─── Footer ───────────────────────────────────────────────────────────────────

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#060918',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem clamp(1rem,4vw,2rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        textAlign: 'center',
      }}
    >
      {/* Social links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {[
          { href: personalInfo.contact.github, icon: <FiGithub />, label: 'GitHub' },
          { href: personalInfo.contact.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
          { href: `mailto:${personalInfo.contact.email}`, icon: <FiMail />, label: 'Email' },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '1.05rem',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#a78bfa';
              el.style.borderColor = 'rgba(139,92,246,0.4)';
              el.style.background = 'rgba(139,92,246,0.08)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#94a3b8';
              el.style.borderColor = 'rgba(255,255,255,0.1)';
              el.style.background = 'transparent';
            }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Credit */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          color: '#334155',
          letterSpacing: '0.05em',
        }}
      >
        Built with React, TypeScript &amp; Framer Motion
      </p>

      {/* Copyright — dynamic year */}
      <p style={{ fontSize: '0.8rem', color: '#334155' }}>
        © {year} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
