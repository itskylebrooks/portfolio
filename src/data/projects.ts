export type Accent = 'red' | 'green' | 'blue' | 'lilac'
export type Project = {
  title: string
  slug: string
  date: string
  summary: string
  tech: string[]
  accent: Accent
  links?: { live?: string; repo?: string }
  images?: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Ritus — Habit Tracker',
    slug: 'ritus-habit-tracker',
    date: '2025-07-15',
    summary: 'A minimalist habit tracker focused on frictionless daily check-ins, clean charts, and gentle gamification.',
    tech: ['React','TypeScript','Tailwind'],
    accent: 'blue',
    links: { repo: 'https://github.com/example/ritus' },
  },
  {
    title: 'Image Pyramids Notes',
    slug: 'image-pyramids-notes',
    date: '2025-07-28',
    summary: 'Study notes and figures on Gaussian/Laplacian pyramids: intuition, pitfalls, and where they shine in CV.',
    tech: ['LaTeX','CV','Markdown'],
    accent: 'lilac',
  },
  {
    title: 'Portfolio — Dark Minimal',
    slug: 'portfolio-dark-minimal',
    date: '2025-08-18',
    summary: 'This very site: a dark-only portfolio with tasteful motion, strong a11y, and a lean React codebase.',
    tech: ['React','TS','Tailwind','Router'],
    accent: 'green',
  },
]
