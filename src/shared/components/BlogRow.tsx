import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { tapScale } from '@/shared/animations'
import { ChevronRight } from './icons'
import type { PostIndex as Post } from '@/shared/data/posts'

export function BlogRow({ post }: { post: Post }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      whileTap={shouldReduceMotion ? undefined : tapScale}
      className="rounded-lg"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block px-4 py-3 rounded-lg transition-colors hover:bg-[color:var(--color-surface-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-[color:var(--color-text-muted)]">{new Date(post.date).toLocaleDateString()}</div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium group-hover:text-[color:var(--color-text-strong)]">{post.title}</h3>
            <p className="text-[color:var(--color-text-secondary)] text-sm mt-1">{post.summary}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[color:var(--color-icon-muted)] group-hover:text-[color:var(--color-icon-strong)]" />
        </div>
      </Link>
    </motion.div>
  )
}
