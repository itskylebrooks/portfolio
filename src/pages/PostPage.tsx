import React, { Suspense, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { POSTS } from '../content/posts'
import { Prose } from '../components/Prose'

export function PostPage() {
  const { slug } = useParams()
  const post = useMemo(() => POSTS.find(p => p.slug === slug), [slug])
  if (!post) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-white text-2xl">Not found</h1>
      </main>
    )
  }
  const modules = import.meta.glob('/content/posts/*.mdx') as Record<string, any>
  const key = `/content/posts/${post.slug}.mdx`
  const LazyPost = (modules[key] ? React.lazy(modules[key] as any) : null) as React.ComponentType | null

  return (
    <main className="mx-auto max-w-[820px] px-4 py-10">
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
        <Link to="/" className="text-white/80 underline">← Back to home</Link>
      </div>
    </main>
  )
}
