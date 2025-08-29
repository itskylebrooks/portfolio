export type PostMeta = {
  title: string
  date: string
  summary: string
}

export type PostIndex = PostMeta & { slug: string }

// Eagerly import all post MDX modules to read their `meta`
const postModules = import.meta.glob('/content/posts/*.mdx', { eager: true }) as Record<string, any>

function pathToSlug(path: string): string {
  const file = path.split('/').pop() || ''
  return file.replace(/\.mdx$/, '')
}

export const POSTS: PostIndex[] = Object.entries(postModules)
  .map(([path, mod]) => ({ slug: pathToSlug(path), ...(mod.meta || {}) }))
  .filter((p) => p && p.title && p.date)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

