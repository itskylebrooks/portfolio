import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hoverSpring, projectHover, tapScale } from '@/shared/animations'
import { ChevronRight } from './icons'
import type { Accent, ProjectIndex as Project } from '@/shared/data/projects'
import { cn } from '@/shared/utils/cn'

const ACCENT: Record<Accent, { border: string; bg: string; text: string }> = {
  red:   { border: 'hover:border-[color:var(--accent-red-border)]',   bg: 'hover:bg-[color:var(--accent-red-bg)]',   text: 'text-[color:var(--accent-red-text)]' },
  green: { border: 'hover:border-[color:var(--accent-green-border)]', bg: 'hover:bg-[color:var(--accent-green-bg)]', text: 'text-[color:var(--accent-green-text)]' },
  blue:  { border: 'hover:border-[color:var(--accent-blue-border)]',  bg: 'hover:bg-[color:var(--accent-blue-bg)]',  text: 'text-[color:var(--accent-blue-text)]' },
  lilac: { border: 'hover:border-[color:var(--accent-lilac-border)]',bg: 'hover:bg-[color:var(--accent-lilac-bg)]',text: 'text-[color:var(--accent-lilac-text)]' },
  orange:{ border: 'hover:border-[color:var(--accent-orange-border)]',bg: 'hover:bg-[color:var(--accent-orange-bg)]',text: 'text-[color:var(--accent-orange-text)]' },
  amber: { border: 'hover:border-[color:var(--accent-amber-border)]', bg: 'hover:bg-[color:var(--accent-amber-bg)]', text: 'text-[color:var(--accent-amber-text)]' },
  teal:  { border: 'hover:border-[color:var(--accent-teal-border)]',  bg: 'hover:bg-[color:var(--accent-teal-bg)]',  text: 'text-[color:var(--accent-teal-text)]' },
  pink:  { border: 'hover:border-[color:var(--accent-pink-border)]',  bg: 'hover:bg-[color:var(--accent-pink-bg)]',  text: 'text-[color:var(--accent-pink-text)]' },
  cyan:  { border: 'hover:border-[color:var(--accent-cyan-border)]',  bg: 'hover:bg-[color:var(--accent-cyan-bg)]',  text: 'text-[color:var(--accent-cyan-text)]' },
  violet:{ border: 'hover:border-[color:var(--accent-violet-border)]',bg: 'hover:bg-[color:var(--accent-violet-bg)]',text: 'text-[color:var(--accent-violet-text)]' },
}

export function ProjectCard({ p }: { p: Project }) {
  const accent = ACCENT[p.accent] || ACCENT.blue
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
          accent.border,
          accent.bg,
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={cn('text-sm text-[color:var(--color-text-muted)]','mb-1')}>
              {new Date(p.date).toLocaleDateString()}{p.version ? ` — v${p.version}` : ''}
            </div>
            <h3 className="text-lg text-[color:var(--color-text-primary)] font-medium mb-1 group-hover:text-[color:var(--color-text-strong)] group-hover:underline underline-offset-4">{p.title}</h3>
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
          <ChevronRight className={cn('h-5 w-5 mt-1 shrink-0 transition-colors', accent.text)} />
        </div>
      </Link>
    </motion.div>
  )
}
