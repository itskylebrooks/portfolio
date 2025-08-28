import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from './icons/ChevronRightIcon'
import type { Post } from '../data/posts'

export function BlogRow({ post }: { post: Post }) {
  return (
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
        <ChevronRightIcon className="h-5 w-5 text-white/60 group-hover:text-white" />
      </div>
    </Link>
  )
}
