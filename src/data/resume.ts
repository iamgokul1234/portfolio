// ─── Resume Data — Single Source of Truth ────────────────────────────────────
// Edit this file to update all portfolio content.
// See README.md for full instructions.

import type {
  PersonalInfo,
  ExperienceEntry,
  Project,
  Achievement,
  SkillGroup,
} from '../types';

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: 'Gokulakrishnan S',
  title: 'Full Stack Developer',
  // Professional summary — copied verbatim from resume
  bio: 'Results-driven Full Stack Developer with 1+ year of experience building scalable, production-grade web applications using React.js, TypeScript, Node.js, Express.js, and AWS. Proven track record delivering serverless REST APIs, MERN stack applications, AI API integrations (Groq Llama 3, Google Gemini), and CI/CD pipelines. Skilled in Redux Toolkit, JWT authentication, MongoDB, DynamoDB, and Agile development with a strong focus on performance optimization, clean code, and end-to-end ownership.',
  contact: {
    email: 'gokulakrish9345@gmail.com',
    linkedin: 'https://linkedin.com/in/gokulakrishnan-sivakumar',
    github: 'https://github.com/iamgokul1234',
    location: 'Tamil Nadu, India',
  },
  // TODO: Place your resume PDF at /public/resume.pdf
  resumePdfUrl: '/resume.pdf',
  // TODO: Place your profile photo at /public/profile.jpg
  profilePhotoUrl: '/profile.jpg',
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience: ExperienceEntry[] = [
  {
    id: 'tenext',
    company: 'Tenext Technologies',
    role: 'Full Stack Developer',
    startDate: 'April 2025',
    endDate: 'June 2026',
    location: 'Onsite - Coimbatore',
    description: [
      'Developed and deployed 10+ serverless REST APIs using AWS Lambda, Node.js, and Express.js, improving API response times by ~35% and reducing infrastructure costs in production.',
      'Built responsive React.js/TypeScript applications with Redux Toolkit for centralized state management, enabling seamless frontend-backend integration across multiple product modules.',
      'Designed and optimized AWS DynamoDB schemas for high-read workloads, reducing data retrieval latency; monitored system performance via Kibana dashboards.',
      'Integrated Google Gemini and Groq (Llama 3) APIs to power context-aware AI chat features with session management, dynamic history retrieval, and real-time message streaming.',
      'Maintained clean Git branching workflows, peer code reviews, and Jira-based Agile sprint planning across cross-functional teams.',
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'AWS Lambda', 'DynamoDB', 'Redux Toolkit', 'Google Gemini', 'Groq'],
  },
  // ── Add more entries below following the same shape ──
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'shopnest-pro',
    title: 'ShopNest Pro',
    description:
      'A full-stack e-commerce platform built with the MERN stack, featuring 32 REST API endpoints across 15 development phases, Razorpay payment integration with HMAC SHA256 signature verification, JWT authentication, and a complete admin dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Razorpay', 'JWT'],
    categories: ['Full Stack', 'E-Commerce'],
    githubUrl: 'https://github.com/iamgokul1234/shopnest-pro',
    liveUrl: 'https://shopnest-pro-seven.vercel.app',
    featured: true,
  },
  {
    id: 'ai-interview-assistant',
    title: 'AI Interview Assistant',
    description:
      'An AI-powered interview preparation tool with real-time streaming AI chat, context-aware session history, and role-specific question generation powered by Groq (Llama 3) and Google Gemini APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Groq (Llama 3)', 'Google Gemini', 'MongoDB'],
    categories: ['AI', 'Full Stack'],
    githubUrl: 'https://github.com/iamgokul1234',
    liveUrl: 'https://ai-interview-assistant-beta-blond.vercel.app/login',
    featured: true,
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review Platform',
    description:
      'A full-stack platform that automates the first pass of code review by combining ESLint static analysis with Google Gemini AI, triggered on-demand via a web UI or automatically on GitHub Pull Requests via webhooks, with results posted as PR comments.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Octokit', 'ESLint (Node API)', 'React.js', 'React Router', 'Gemini API', 'GitHub Webhooks', 'Render', 'Vercel'],
    categories: ['AI', 'Full Stack'],
    githubUrl: 'https://github.com/iamgokul1234/ai-code-review-platform',
    liveUrl: 'https://ai-code-review-platform-neon.vercel.app/',
    featured: true,
  },
  {
    id: 'foodly',
    title: 'Foodly — Food Ordering & Recipe Discovery Platform',
    description:
      'Built a modern, responsive food ordering and recipe discovery application. Implemented recipe exploration, search, cart management, checkout, order tracking, and reusable UI components. Added Axios API integration, response caching, loading/error states, and responsive UX to deliver a fast and seamless food-ordering experience.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Vite', 'Axios'],
    categories: ['Frontend', 'Web App'],
    githubUrl: 'https://github.com/iamgokul1234/Foodly---Food-App',
    liveUrl: 'https://foodly-food-app.vercel.app/',
    featured: true,
  },
  {
    id: 'eventix-ticket-booking',
    title: 'Eventix — High-Concurrency Ticket Booking System',
    description:
      'Engineered a production-grade ticket booking and real-time seat reservation platform using the MERN stack. Designed a high-concurrency architecture utilizing MongoDB multi-document ACID transactions to guarantee zero double-booking and zero double-spending. Features include an interactive real-time seat map, atomic 5-minute seat holds, custom idempotency, and an integrated digital wallet with append-only ledger logging for instant bookings and refunds.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB Atlas', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zod'],
    categories: ['Full Stack', 'Web App'],
    githubUrl: 'https://github.com/iamgokul1234/Eventix--Ticket-Booking-',
    liveUrl: 'https://eventix-ticket-booking-client-4ypc05huc.vercel.app/',
    featured: true,
  }
];

// ─── Achievements ─────────────────────────────────────────────────────────────
// Built only from facts and numbers explicitly stated in the Experience and
// Projects data above — no invented stats, no invented framing.
export const achievements: Achievement[] = [
  {
    id: 'api-performance',
    icon: '⚡',
    stat: '~35%',
    headline: 'API Response Time Improvement',
    description: 'Improved API response times by ~35% across 10+ serverless REST APIs built with AWS Lambda, Node.js, and Express.js.',
  },
  {
    id: 'ecommerce-scale',
    icon: '🛒',
    stat: '32',
    headline: 'E-Commerce API Endpoints',
    description: 'Architected a 32-endpoint e-commerce platform (ShopNest Pro) across 15 development phases.',
  },
  {
    id: 'payment-integration',
    icon: '🔐',
    stat: 'HMAC SHA256',
    headline: 'Secure Payment Processing',
    description: 'Integrated Razorpay payment processing with HMAC SHA256 signature verification in ShopNest Pro.',
  },
  {
    id: 'ai-streaming',
    icon: '🤖',
    stat: 'Real-time',
    headline: 'AI Chat Streaming',
    description: 'Built real-time AI chat streaming with context-aware session history using Groq (Llama 3) and Google Gemini APIs.',
  },
  {
    id: 'cert-mern',
    icon: '🎓',
    stat: 'Feb 2026',
    headline: 'MERN Stack Development',
    description: 'MERN Stack Development certification — KGISL Institute of Technology.',
  },
  {
    id: 'cert-ds',
    icon: '📊',
    stat: 'Jan 2023',
    headline: 'Data Science & ML with Python',
    description: 'Data Science and Machine Learning with Python certification — L&T EduTech.',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'Redux Toolkit' },
      { name: 'React Router' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
      { name: 'Mongoose' },
      { name: 'bcryptjs' },
      { name: 'Webhook Integration' },
    ],
  },
  {
    category: 'Cloud & Databases',
    skills: [
      { name: 'AWS Lambda' },
      { name: 'DynamoDB' },
      { name: 'MongoDB' },
      { name: 'Kibana' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Google Gemini' },
      { name: 'Groq (Llama 3)' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Jira / Agile' },
      { name: 'Octokit (GitHub API)' },
      { name: 'ESLint (Node API)' },
      { name: 'Render' },
      { name: 'Vercel' },
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
// B.E. — Electronics and Communication Engineering
// KPR Institute of Engineering and Technology, 2020–2024

// ─── Certifications ───────────────────────────────────────────────────────────
// MERN Stack Development — KGISL Institute of Technology (February 2026)
// Data Science and Machine Learning with Python — L&T EduTech (January 2023)
