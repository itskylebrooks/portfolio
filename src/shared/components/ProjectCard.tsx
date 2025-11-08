import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hoverSpring, projectHover, tapScale } from '@/shared/animations'
import { ChevronRight } from './icons'
import type { Accent, ProjectIndex as Project } from '@/shared/data/projects'
import { cn } from '@/shared/utils/cn'

export function ProjectCard({ p }: { p: Project }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : projectHover}
      whileTap={shouldReduceMotion ? undefined : tapScale}
      transition={hoverSpring}
    >
      <Link
        to={`/work/${p.slug}`}
        className={cn(
          'group block border border-[color:var(--color-card-border)] rounded-xl p-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]',
          `project-card-${p.accent}`,
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={cn('text-sm text-[color:var(--color-text-muted)]','mb-1')}>
              {new Date(p.date).toLocaleDateString()}{p.version ? ` — v${p.version}` : ''}
            </div>
            <h3 className="text-lg text-[color:var(--color-text-primary)] font-medium mb-1 group-hover:text-[color:var(--color-text-strong)]">{p.title}</h3>
            <p className="text-[color:var(--color-text-secondary)] mb-3">{p.summary}</p>
            <ul className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className={
                    t === 'Labs'
                      ? 'text-xs px-2 py-1 rounded-full labs-badge'
                      : 'text-xs px-2 py-1 rounded-full bg-[color:var(--color-tag-bg)] text-[color:var(--color-text-secondary)] border border-[color:var(--color-tag-border)]'
                  }
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ChevronRight className="h-5 w-5 mt-1 shrink-0 transition-colors project-card-icon" />
        </div>
      </Link>
    </motion.div>
  )
}
