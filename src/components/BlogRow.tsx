import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from './icons'
import type { PostIndex as Post } from '../content/posts'

export function BlogRow({ post }: { post: Post }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : {}}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      className="rounded-lg"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block px-4 py-3 rounded-lg transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ring-offset-2 ring-offset-black"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-white/60">{new Date(post.date).toLocaleDateString()}</div>
            <h3 className="text-white font-medium group-hover:text-white">{post.title}</h3>
            <p className="text-white/80 text-sm mt-1">{post.summary}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-white" />
        </div>
      </Link>
    </motion.div>
  )
}
