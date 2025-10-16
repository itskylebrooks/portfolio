export type Accent = 'red' | 'green' | 'blue' | 'lilac' | 'orange' | 'amber' | 'teal' | 'pink' | 'cyan' | 'violet'

export type ProjectMeta = {
  title: string
  date: string
  summary: string
  tags: string[]
  accent: Accent
  links?: { live?: string; repo?: string }
  version?: string // optional semantic version MAJOR.MINOR.PATCH
}

export type ProjectIndex = ProjectMeta & { slug: string }

const projectModules = import.meta.glob('/content/projects/*.mdx', { eager: true }) as Record<string, any>

function pathToSlug(path: string): string {
  const file = path.split('/').pop() || ''
  return file.replace(/\.mdx$/, '')
}

export const PROJECTS: ProjectIndex[] = Object.entries(projectModules)
  .map(([path, mod]) => {
    const meta = (mod.meta || {}) as ProjectMeta
    // Light guard: accept only x.y.z format when provided
    const cleanVersion = meta.version && /^\d+\.\d+\.\d+$/.test(meta.version) ? meta.version : undefined
    return { slug: pathToSlug(path), ...meta, version: cleanVersion }
  })
  .filter((p) => p && p.title && p.date)
  .sort((a, b) => (a.date < b.date ? 1 : -1))
