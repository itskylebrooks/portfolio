export type Accent = 'red' | 'green' | 'blue' | 'lilac' | 'orange'
export type Project = {
  title: string
  slug: string
  date: string
  summary: string
  tech: string[]
  accent: Accent
  links?: { live?: string; repo?: string }
  images?: string[]
  sections?: {
    what?: string
    challenges?: string
    outcome?: string
  }
}

export const PROJECTS: Project[] = [
  {
    title: 'Flowday — Visual Mood Journal',
    slug: 'flowday-visual-mood-journal',
    date: '2025-05-20',
    summary:
      "My first important project — the one where I really started learning modern web dev (React + TypeScript). Flowday turns a 20‑second check‑in into flowing visuals you can keep and share.",
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Supabase', 'Telegram'],
    accent: 'orange',
    sections: {
      what:
        "A local‑first mini app that captures how a day felt using up to three emojis, a color slider, and an optional song (title + artist). From those tiny inputs, Flowday generates weekly flowing ribbons, a monthly continuous mix, emoji constellations, and cassette‑style song echoes. Optional Telegram sync and reminders, plus full export/import.",
      challenges:
        "Keeping the capture under 20 seconds while outputs ‘feel like art’. Designing visualizations that read at a glance (hue weighting, blends, recency opacity) without becoming a calendar or streak mechanic. Implementing opt‑in Telegram sync and daily reminders on serverless functions with Supabase RLS, and keeping the UI fast and minimal.",
      outcome:
        "A lightweight, ambient reflection tool I actually use. It taught me React + TypeScript fundamentals, component architecture, and working with serverless APIs. The UI stays calm when saved and inviting when empty, and the visuals are poster‑ready by default.",
    },
  },
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
