export type Post = {
  title: string
  slug: string
  date: string
  summary: string
}

export const POSTS: Post[] = [
  {
    title: 'Why I Build Minimal UIs',
    slug: 'why-minimal-uis',
    date: '2025-08-01',
    summary: 'Notes on clarity, speed, and the art of removing unnecessary weight.',
  },
  {
    title: 'From Notes to Projects',
    slug: 'from-notes-to-projects',
    date: '2025-08-05',
    summary: 'Turning scratchpads into small, shippable things.',
  },
]
