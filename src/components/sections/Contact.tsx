// ─── Contact Section ──────────────────────────────────────────────────────────
// Contact form wired to EmailJS (@emailjs/browser).
// Real-time field validation: required + email format.
// Toast notifications via react-hot-toast on success/error.
// Contact info cards for email, LinkedIn, GitHub, and location.
//
// Environment variables required (see .env.local.example):
//   VITE_EMAILJS_SERVICE_ID
//   VITE_EMAILJS_TEMPLATE_ID
//   VITE_EMAILJS_PUBLIC_KEY

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiSend,
  FiLoader,
} from 'react-icons/fi';
import { personalInfo } from '../../data/resume';

// ─── EmailJS config from env vars ────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

// ─── Form state types ─────────────────────────────────────────────────────────
interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'Name is required';
  if (!fields.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(fields.email)) errors.email = 'Enter a valid email address';
  if (!fields.subject.trim()) errors.subject = 'Subject is required';
  if (!fields.message.trim()) errors.message = 'Message is required';
  else if (fields.message.trim().length < 10) errors.message = 'Message is too short (min 10 characters)';
  return errors;
}

// ─── Field component ─────────────────────────────────────────────────────────
function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label
        htmlFor={id}
        style={{
          fontSize: '0.82rem',
          fontWeight: 600,
          color: error ? '#f87171' : '#94a3b8',
          letterSpacing: '0.03em',
        }}
      >
        {label}
        <span style={{ color: '#8b5cf6', marginLeft: '2px' }}>*</span>
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '0.75rem', color: '#f87171' }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

const inputStyle = (hasError: boolean) => ({
  padding: '0.75rem 1rem',
  borderRadius: '0.625rem',
  background: 'rgba(255,255,255,0.04)',
  border: `1px solid ${hasError ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.08)'}`,
  color: '#f8fafc',
  fontSize: '0.9rem',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  width: '100%',
  boxSizing: 'border-box' as const,
});

// ─── Contact Info Cards ───────────────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
    color: '#06b6d4',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gokulakrishnan-sivakumar',
    href: personalInfo.contact.linkedin,
    color: '#0ea5e9',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/iamgokul1234',
    href: personalInfo.contact.github,
    color: '#a78bfa',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: personalInfo.contact.location,
    href: undefined,
    color: '#f59e0b',
  },
];

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newFields = { ...fields, [name]: value };
    setFields(newFields);
    // Live re-validate if field was already touched
    if (touched[name as keyof FormFields]) {
      setErrors(validate(newFields));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('EmailJS is not configured. Set VITE_EMAILJS_* env vars.', {
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon 🚀", { duration: 5000 });
      setFields({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    } catch {
      toast.error('Failed to send message. Please try again or email me directly.', {
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">work together</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '480px' }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                color: '#f8fafc',
              }}
            >
              Send a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
            >
              {/* Name & Email row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <FormField id="name" label="Name" error={touched.name ? errors.name : undefined}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={inputStyle(Boolean(touched.name && errors.name))}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.5)')}
                  />
                </FormField>

                <FormField id="email" label="Email" error={touched.email ? errors.email : undefined}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={inputStyle(Boolean(touched.email && errors.email))}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.5)')}
                  />
                </FormField>
              </div>

              <FormField id="subject" label="Subject" error={touched.subject ? errors.subject : undefined}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={inputStyle(Boolean(touched.subject && errors.subject))}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.5)')}
                />
              </FormField>

              <FormField id="message" label="Message" error={touched.message ? errors.message : undefined}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyle(Boolean(touched.message && errors.message)),
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.5)')}
                />
              </FormField>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-flex' }}
                    >
                      <FiLoader />
                    </motion.span>
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {CONTACT_CARDS.map((card, i) => {
              const inner = (
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: card.href ? 'pointer' : 'default',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.15rem' }}>
                      {card.label}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              );

              return card.href ? (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 600px) {
          #contact form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
