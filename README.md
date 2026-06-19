# Gokul Portfolio

A premium personal portfolio built with **Vite + React + TypeScript + Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Run Locally

```bash
# Clone or open the project
cd gokul-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

---

## 📝 Editing Content

All portfolio data lives in a **single file**: [`src/data/resume.ts`](src/data/resume.ts)

| Section | What to edit |
|---|---|
| Personal info (name, title, bio) | `personalInfo` object |
| Experience / Timeline | `experience` array — add new `ExperienceEntry` objects |
| Projects | `projects` array — add new `Project` objects |
| Achievements | `achievements` array |
| Testimonials | `testimonials` array |
| Skills | `skillGroups` array |

### Adding a New Experience Entry

```ts
{
  id: 'unique-id',
  company: 'Company Name',
  role: 'Your Role',
  startDate: 'Jan 2026',
  endDate: 'Present',
  location: 'Remote',
  description: [
    'What you did — use action verbs',
    'Another achievement or responsibility',
  ],
  tech: ['React', 'Node.js', 'PostgreSQL'],
}
```

### Adding a New Project

```ts
{
  id: 'project-id',
  title: 'Project Name',
  description: 'One-line summary for the card.',
  tech: ['React', 'TypeScript'],
  categories: ['Full Stack'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
}
```

---

## 📧 Setting Up EmailJS (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Connect an email service (Gmail, Outlook, etc.)
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Copy `.env.local.example` to `.env.local` and fill in your keys:

```bash
cp .env.local.example .env.local
```

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

> **Never commit `.env.local`** — it's already in `.gitignore`.

---

## 🖼️ Replacing Placeholders

### Profile Photo
Place your photo at `/public/profile.jpg` (or update `profilePhotoUrl` in `resume.ts`).

### Resume PDF
Place your PDF at `/public/resume.pdf`. The navbar "Resume" button and the hero "Resume" CTA link to this file.

---

## 🏗️ Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, ScrollProgressBar, BackToTop, CustomCursor, LoadingScreen
    sections/     # Hero, About, Experience, Projects, Achievements, Testimonials, Contact
  data/
    resume.ts     # Edit this file to update all content
  hooks/
    useReducedMotion.ts
  types/
    index.ts
  index.css       # Global design system
  App.tsx
  main.tsx
public/
  resume.pdf      # TODO: Replace with your real resume
  profile.jpg     # TODO: Replace with your real photo
.env.local.example
```

---

## 🛠️ Tech Stack

- **Vite** — Lightning fast build tool
- **React 18** — UI library
- **TypeScript** — Type safety
- **Framer Motion** — Animations
- **@emailjs/browser** — Contact form email sending
- **react-icons** — Icon set
- **react-hot-toast** — Toast notifications

---

## 📄 License

MIT — feel free to use as a template.
