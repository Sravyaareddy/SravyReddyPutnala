export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  client?: string;
  project?: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Deep Learning' | 'Full Stack' | 'Data Analytics';
  description: string;
  detailedDescription: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  codeSnippet?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: 'Expert' | 'Intermediate' | 'Basics' }[];
}
