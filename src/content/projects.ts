export type Accent = 'red' | 'green' | 'blue' | 'lilac' | 'orange'

export type ProjectMeta = {
  title: string
  date: string
  summary: string
  tech: string[]
  accent: Accent
  links?: { live?: string; repo?: string }
}

export type ProjectIndex = ProjectMeta & { slug: string }

const projectModules = import.meta.glob('/content/projects/*.mdx', { eager: true }) as Record<string, any>

function pathToSlug(path: string): string {
  const file = path.split('/').pop() || ''
  return file.replace(/\.mdx$/, '')
}

export const PROJECTS: ProjectIndex[] = Object.entries(projectModules)
  .map(([path, mod]) => ({ slug: pathToSlug(path), ...(mod.meta || {}) }))
  .filter((p) => p && p.title && p.date)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

