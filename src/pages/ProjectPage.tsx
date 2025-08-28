import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { cn } from '../utils/cn'

const ACCENT = {
  red: { text: 'text-red-400' },
  green: { text: 'text-green-400' },
  blue: { text: 'text-blue-400' },
  lilac: { text: 'text-purple-300' },
} as const

export function ProjectPage() {
  const { slug } = useParams()
  const project = useMemo(() => PROJECTS.find(p => p.slug === slug), [slug])
  if (!project) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-white text-2xl">Not found</h1>
      </main>
    )
  }
  const accent = (ACCENT as any)[project.accent] || ACCENT.blue
  return (
    <main className="mx-auto max-w-[820px] px-4 py-10">
      <p className="text-sm text-white/60">{new Date(project.date).toLocaleDateString()}</p>
      <h1 className="text-3xl font-semibold text-white mt-2">{project.title}</h1>
      <p className="text-white/80 mt-3">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6">
        <article className="border border-white/10 rounded-xl p-4">
          <h2 className={cn('text-xl font-medium mb-2', accent.text)}>What I built</h2>
          <p className="text-white/80">A focused, minimal interface with a clear information hierarchy and fast interactions.</p>
        </article>
        <article className="border border-white/10 rounded-xl p-4">
          <h2 className={cn('text-xl font-medium mb-2', accent.text)}>Challenges</h2>
          <p className="text-white/80">Balancing simplicity with flexibility; keeping bundle size small while maintaining clarity.</p>
        </article>
        <article className="border border-white/10 rounded-xl p-4">
          <h2 className={cn('text-xl font-medium mb-2', accent.text)}>Outcome</h2>
          <p className="text-white/80">A lean codebase that’s easy to extend and a UI that stays out of the user’s way.</p>
        </article>
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
