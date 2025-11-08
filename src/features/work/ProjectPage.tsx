import React, { Suspense, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Page } from '@/shared/components/Page'
import { Prose } from '@/shared/components/Prose'
import { PROJECTS, type Accent } from '@/shared/data/projects'
import { useMetaTags } from '@/shared/hooks/useMetaTags'

const projectModules = import.meta.glob('/content/projects/*.mdx') as Record<string, () => Promise<{ default: React.ComponentType }>>

const ACCENT: Record<Accent, { text: string; heading: string; hoverBorder: string; hoverBg: string; hoverText: string }> = {
  red:   { text: 'text-[color:var(--accent-red-text)]',    heading: 'prose-headings:text-[color:var(--accent-red-text)]',    hoverBorder: 'hover:border-[color:var(--accent-red-border)]',  hoverBg: 'hover:bg-[color:var(--accent-red-bg)]',  hoverText: 'hover:text-[color:var(--accent-red-text)]' },
  green: { text: 'text-[color:var(--accent-green-text)]',  heading: 'prose-headings:text-[color:var(--accent-green-text)]',  hoverBorder: 'hover:border-[color:var(--accent-green-border)]',hoverBg: 'hover:bg-[color:var(--accent-green-bg)]',hoverText: 'hover:text-[color:var(--accent-green-text)]' },
  blue:  { text: 'text-[color:var(--accent-blue-text)]',   heading: 'prose-headings:text-[color:var(--accent-blue-text)]',   hoverBorder: 'hover:border-[color:var(--accent-blue-border)]', hoverBg: 'hover:bg-[color:var(--accent-blue-bg)]', hoverText: 'hover:text-[color:var(--accent-blue-text)]' },
  lilac: { text: 'text-[color:var(--accent-lilac-text)]',  heading: 'prose-headings:text-[color:var(--accent-lilac-text)]',  hoverBorder: 'hover:border-[color:var(--accent-lilac-border)]',hoverBg: 'hover:bg-[color:var(--accent-lilac-bg)]',hoverText: 'hover:text-[color:var(--accent-lilac-text)]' },
  orange:{ text: 'text-[color:var(--accent-orange-text)]', heading: 'prose-headings:text-[color:var(--accent-orange-text)]', hoverBorder: 'hover:border-[color:var(--accent-orange-border)]',hoverBg: 'hover:bg-[color:var(--accent-orange-bg)]',hoverText: 'hover:text-[color:var(--accent-orange-text)]' },
  amber: { text: 'text-[color:var(--accent-amber-text)]',  heading: 'prose-headings:text-[color:var(--accent-amber-text)]',  hoverBorder: 'hover:border-[color:var(--accent-amber-border)]', hoverBg: 'hover:bg-[color:var(--accent-amber-bg)]', hoverText: 'hover:text-[color:var(--accent-amber-text)]' },
  teal:  { text: 'text-[color:var(--accent-teal-text)]',   heading: 'prose-headings:text-[color:var(--accent-teal-text)]',   hoverBorder: 'hover:border-[color:var(--accent-teal-border)]',  hoverBg: 'hover:bg-[color:var(--accent-teal-bg)]',  hoverText: 'hover:text-[color:var(--accent-teal-text)]' },
  pink:  { text: 'text-[color:var(--accent-pink-text)]',   heading: 'prose-headings:text-[color:var(--accent-pink-text)]',   hoverBorder: 'hover:border-[color:var(--accent-pink-border)]',  hoverBg: 'hover:bg-[color:var(--accent-pink-bg)]',  hoverText: 'hover:text-[color:var(--accent-pink-text)]' },
  cyan:  { text: 'text-[color:var(--accent-cyan-text)]',   heading: 'prose-headings:text-[color:var(--accent-cyan-text)]',   hoverBorder: 'hover:border-[color:var(--accent-cyan-border)]',  hoverBg: 'hover:bg-[color:var(--accent-cyan-bg)]',  hoverText: 'hover:text-[color:var(--accent-cyan-text)]' },
  violet:{ text: 'text-[color:var(--accent-violet-text)]', heading: 'prose-headings:text-[color:var(--accent-violet-text)]', hoverBorder: 'hover:border-[color:var(--accent-violet-border)]',hoverBg: 'hover:bg-[color:var(--accent-violet-bg)]',hoverText: 'hover:text-[color:var(--accent-violet-text)]' },
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  
  // Set meta tags for link previews
  useMetaTags({
    title: project?.title || 'Project Not Found',
    description: project?.summary || 'This project could not be found.',
    date: project?.date,
    version: project?.version,
    type: 'website',
    author: 'Kyle Brooks',
  })

  if (!project) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-2xl text-[color:var(--color-text-primary)]">Not found</h1>
      </main>
    )
  }
  // No sessionStorage scroll markers — Home page will not auto-scroll on return.
  const accent = ACCENT[project.accent] ?? ACCENT.blue
  return (
    <Page className="mx-auto max-w-[820px] px-4 py-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            {new Date(project.date).toLocaleDateString()} {project.version ? `— v${project.version}` : ''}
          </p>
          <h1 className="text-3xl font-semibold text-[color:var(--color-text-primary)] mt-2">{project.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-[color:var(--color-tag-border)] text-[color:var(--color-text-secondary)] bg-transparent transition font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)] ${accent.hoverBorder} ${accent.hoverBg} ${accent.hoverText}`}
            >
              Live
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-[color:var(--color-tag-border)] text-[color:var(--color-text-secondary)] bg-transparent transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)] ${accent.hoverBorder} ${accent.hoverBg} ${accent.hoverText}`}
            >
              Repo
            </a>
          )}
        </div>
      </div>
      <p className="text-[color:var(--color-text-secondary)] mt-3">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className={
              t === 'Labs'
                ? 'text-xs px-2 py-1 rounded-full labs-badge'
                : 'text-xs px-2 py-1 rounded-full bg-[color:var(--color-tag-bg)] text-[color:var(--color-text-secondary)] border border-[color:var(--color-tag-border)]'
            }
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Prose className={accent.heading}>
          <ProjectContent slug={project.slug} />
        </Prose>
      </div>

      <div className="mt-10">
        <Link to={{ pathname: '/', hash: '#work' }} className="underline text-[color:var(--color-link)] hover:text-[color:var(--color-link-hover)]">
          ← Back to home
        </Link>
      </div>
    </Page>
  )
}

function ProjectContent({ slug }: { slug: string }) {
  const LazyProject = useMemo(() => {
    const loader = projectModules[`/content/projects/${slug}.mdx`]
    return loader ? React.lazy(loader) : null
  }, [slug])
  if (!LazyProject) return <p className="text-[color:var(--color-text-muted)]">Project content not found.</p>
  return (
    <Suspense fallback={<p className="text-[color:var(--color-text-muted)]">Loading…</p>}>
      <LazyProject />
    </Suspense>
  )
}
