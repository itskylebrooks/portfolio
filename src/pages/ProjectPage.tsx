import React, { Suspense, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS, type Accent } from '../content/projects'
import { Prose } from '../components/Prose'

const projectModules = import.meta.glob('/content/projects/*.mdx') as Record<string, () => Promise<{ default: React.ComponentType }>>

const ACCENT: Record<Accent, { text: string; heading: string; hoverBorder: string; hoverBg: string; hoverText: string }> = {
  red:   { text: 'text-red-400',    heading: 'prose-headings:text-red-400',    hoverBorder: 'hover:border-red-500/60',  hoverBg: 'hover:bg-red-500/5',  hoverText: 'hover:text-red-400' },
  green: { text: 'text-green-400',  heading: 'prose-headings:text-green-400',  hoverBorder: 'hover:border-green-500/60',hoverBg: 'hover:bg-green-500/5',hoverText: 'hover:text-green-400' },
  blue:  { text: 'text-blue-400',   heading: 'prose-headings:text-blue-400',   hoverBorder: 'hover:border-blue-500/60', hoverBg: 'hover:bg-blue-500/5', hoverText: 'hover:text-blue-400' },
  lilac: { text: 'text-purple-300', heading: 'prose-headings:text-purple-300', hoverBorder: 'hover:border-purple-400/60',hoverBg: 'hover:bg-purple-400/5',hoverText: 'hover:text-purple-300' },
  orange:{ text: 'text-orange-400', heading: 'prose-headings:text-orange-400', hoverBorder: 'hover:border-orange-500/60',hoverBg: 'hover:bg-orange-500/5',hoverText: 'hover:text-orange-400' },
  amber: { text: 'text-amber-400',  heading: 'prose-headings:text-amber-400',  hoverBorder: 'hover:border-amber-500/60', hoverBg: 'hover:bg-amber-500/5', hoverText: 'hover:text-amber-400' },
  teal:  { text: 'text-teal-300',   heading: 'prose-headings:text-teal-300',   hoverBorder: 'hover:border-teal-400/60',  hoverBg: 'hover:bg-teal-400/5',  hoverText: 'hover:text-teal-300' },
  pink:  { text: 'text-pink-400',   heading: 'prose-headings:text-pink-400',   hoverBorder: 'hover:border-pink-500/60',  hoverBg: 'hover:bg-pink-500/5',  hoverText: 'hover:text-pink-400' },
  cyan:  { text: 'text-cyan-300',   heading: 'prose-headings:text-cyan-300',   hoverBorder: 'hover:border-cyan-400/60',  hoverBg: 'hover:bg-cyan-400/5',  hoverText: 'hover:text-cyan-300' },
  violet:{ text: 'text-violet-400', heading: 'prose-headings:text-violet-400', hoverBorder: 'hover:border-violet-500/60',hoverBg: 'hover:bg-violet-500/5',hoverText: 'hover:text-violet-400' },
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
  // No sessionStorage scroll markers — Home page will not auto-scroll on return.
  const accent = ACCENT[project.accent] ?? ACCENT.blue
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.main
      className="mx-auto max-w-[820px] px-4 py-10"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/60">
            {new Date(project.date).toLocaleDateString()} {project.version ? `— v${project.version}` : ''}
          </p>
          <h1 className="text-3xl font-semibold text-white mt-2">{project.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/10 text-white/90 bg-transparent transition font-medium ${accent.hoverBorder} ${accent.hoverBg} ${accent.hoverText}`}
            >
              Live
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-white/10 text-white/80 bg-transparent transition ${accent.hoverBorder} ${accent.hoverBg} ${accent.hoverText}`}
            >
              Repo
            </a>
          )}
        </div>
      </div>
      <p className="text-white/80 mt-3">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className={
              t === 'Labs'
                ? 'text-xs px-2 py-1 rounded-full labs-badge'
                : 'text-xs px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10'
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
        <Link to={{ pathname: '/', hash: '#work' }} className="text-white/80 underline">← Back to home</Link>
      </div>
      </motion.main>
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
