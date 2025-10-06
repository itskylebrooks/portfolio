import React, { Suspense, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS, type Accent } from '../content/projects'
import { Prose } from '../components/Prose'

const projectModules = import.meta.glob('/content/projects/*.mdx') as Record<string, () => Promise<{ default: React.ComponentType }>>

const ACCENT: Record<Accent, { text: string; heading: string }> = {
  red:   { text: 'text-red-400',    heading: 'prose-headings:text-red-400' },
  green: { text: 'text-green-400',  heading: 'prose-headings:text-green-400' },
  blue:  { text: 'text-blue-400',   heading: 'prose-headings:text-blue-400' },
  lilac: { text: 'text-purple-300', heading: 'prose-headings:text-purple-300' },
  orange:{ text: 'text-orange-400', heading: 'prose-headings:text-orange-400' },
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-white text-2xl">Not found</h1>
      </main>
    )
  }
  const accent = ACCENT[project.accent] ?? ACCENT.blue
  return (
    <main className="animate-page-in mx-auto max-w-[820px] px-4 py-10">
      <p className="text-sm text-white/60">
        {new Date(project.date).toLocaleDateString()} {project.version ? `— v${project.version}` : ''}
      </p>
      <h1 className="text-3xl font-semibold text-white mt-2">{project.title}</h1>
      <p className="text-white/80 mt-3">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Prose className={accent.heading}>
          <ProjectContent slug={project.slug} />
        </Prose>
      </div>

      <div className="mt-8 flex gap-3">
        {project.links?.live && (
          <a className="underline" href={project.links.live} target="_blank" rel="noreferrer">Live</a>
        )}
        {project.links?.repo && (
          <a className="underline" href={project.links.repo} target="_blank" rel="noreferrer">Repo</a>
        )}
      </div>

      <div className="mt-10">
        <Link to="/" className="text-white/80 underline">← Back to home</Link>
      </div>
    </main>
  )
}

function ProjectContent({ slug }: { slug: string }) {
  const LazyProject = useMemo(() => {
    const loader = projectModules[`/content/projects/${slug}.mdx`]
    return loader ? React.lazy(loader) : null
  }, [slug])
  if (!LazyProject) return <p className="text-white/60">Project content not found.</p>
  return (
    <Suspense fallback={<p className="text-white/60">Loading…</p>}>
      <LazyProject />
    </Suspense>
  )
}
