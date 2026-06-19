// ─── Portfolio Type Definitions ─────────────────────────────────────────────

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  tech: string[];
  logo?: string;
}

export type ProjectCategory =
  | 'Full Stack'
  | 'AI'
  | 'E-Commerce'
  | 'Fintech'
  | 'Backend';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  icon: string;
  stat: string;
  headline: string;
  description: string;
}

export interface Skill {
  name: string;
  level?: number; // 0–100
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  contact: ContactInfo;
  resumePdfUrl?: string;
  profilePhotoUrl?: string;
}
