import React, { Suspense, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { POSTS } from '../content/posts'
import { Prose } from '../components/Prose'

const postModules = import.meta.glob('/content/posts/*.mdx') as Record<string, () => Promise<{ default: React.ComponentType }>>

export function PostPage() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  const LazyPost = useMemo(() => {
    if (!post) return null
    const loader = postModules[`/content/posts/${post.slug}.mdx`]
    return loader ? React.lazy(loader) : null
  }, [post?.slug])

  if (!post) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-white text-2xl">Not found</h1>
      </main>
    )
  }

  // No sessionStorage scroll markers — Home page will not auto-scroll on return.

  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.main
      className="mx-auto max-w-[820px] px-4 py-10"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <p className="text-sm text-white/60">{new Date(post.date).toLocaleDateString()}</p>
      <h1 className="text-3xl font-semibold text-white mt-2">{post.title}</h1>
      <p className="text-white/80 mt-3">{post.summary}</p>
      <div className="mt-6">
        <Prose>
          {LazyPost ? (
            <Suspense fallback={<p className="text-white/60">Loading…</p>}>
              <LazyPost />
            </Suspense>
          ) : (
            <p className="text-white/60">Post content not found.</p>
          )}
        </Prose>
      </div>
      <div className="mt-10">
        <Link to={{ pathname: '/', hash: '#blog' }} className="text-white/80 underline">← Back to home</Link>
      </div>
    </motion.main>
  )
}
