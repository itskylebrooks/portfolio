export type Accent = "red" | "green" | "blue" | "lilac";
export type Project = {
  title: string; slug: string; date: string; summary: string;
  tech: string[]; accent: Accent; links?: { live?: string; repo?: string }
};
export const PROJECTS: Project[] = [
  { title: "Ritus — Habit Tracker", slug: "ritus-habit-tracker", date: "2025-07-15",
    summary: "A minimalist habit tracker focused on frictionless daily check-ins, clean charts, and gentle gamification.",
    tech: ["React","TypeScript","Tailwind"], accent: "blue",
    links: { repo: "https://github.com/example/ritus" } },
  { title: "Image Pyramids Notes", slug: "image-pyramids-notes", date: "2025-07-28",
    summary: "Gaussian/Laplacian pyramids notes.", tech: ["LaTeX","CV","Markdown"], accent: "lilac" },
  { title: "Portfolio — Dark Minimal", slug: "portfolio-dark-minimal", date: "2025-08-18",
    summary: "This site. Dark-only, tasteful motion.", tech: ["React","TS","Tailwind","Router"], accent: "green" },
];