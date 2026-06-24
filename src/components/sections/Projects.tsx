// ─── Projects Section ─────────────────────────────────────────────────────────
// Grid of project cards with:
//  - Category filter with animated transitions (AnimatePresence + layout)
//  - Scale + glow hover effect
//  - GitHub link + Live Demo button for each project
//  - Both ShopNest Pro and AI Interview Assistant have real GitHub + Live Demo links

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/resume';
import type { ProjectCategory } from '../../types';

const FILTER_CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Full Stack',
  'AI',
  'E-Commerce',
];

// ─── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' as const }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        background: 'rgba(17,24,39,0.8)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(139,92,246,0.45)';
        el.style.boxShadow = '0 8px 40px rgba(139,92,246,0.22), 0 0 0 1px rgba(139,92,246,0.15)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(255,255,255,0.07)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: '180px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.08) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <span style={{ fontSize: '3rem', position: 'relative', zIndex: 1 }}>
          {project.categories.includes('AI')
            ? '🤖'
            : project.categories.includes('E-Commerce')
            ? '🛒'
            : '🚀'}
        </span>
        {project.featured && (
          <span
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '999px',
              background: 'rgba(139,92,246,0.2)',
              border: '1px solid rgba(139,92,246,0.4)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              color: '#a78bfa',
              zIndex: 1,
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          {project.categories.map((cat) => (
            <span
              key={cat}
              style={{
                padding: '0.15rem 0.5rem',
                borderRadius: '999px',
                fontSize: '0.65rem',
                fontFamily: "'JetBrains Mono', monospace",
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#06b6d4',
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#f8fafc',
            marginBottom: '0.6rem',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: '#94a3b8',
            fontSize: '0.875rem',
            lineHeight: 1.65,
            flex: 1,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-badge" style={{ fontSize: '0.65rem' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', flex: 1 }}
            >
              <FiGithub />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="btn btn-ghost"
              title="Repository not yet public"
              style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', flex: 1, opacity: 0.4 }}
            >
              <FiGithub />
              GitHub
            </button>
          )}

          {hasLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', flex: 1 }}
            >
              <FiExternalLink />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="btn btn-primary"
              title="Live demo not available"
              style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', flex: 1 }}
            >
              <FiExternalLink />
              No Live Demo
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Projects Section ────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter as ProjectCategory));

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've{' '}
            <span className="gradient-text">built &amp; shipped</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '520px' }}>
            A selection of projects spanning full-stack web apps and AI-powered tools.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                aria-pressed={isActive}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  border: `1px solid ${isActive ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  background: isActive ? 'rgba(139,92,246,0.15)' : 'transparent',
                  color: isActive ? '#a78bfa' : '#64748b',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = '#f8fafc';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = '#64748b';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#475569', padding: '3rem 0' }}>
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
