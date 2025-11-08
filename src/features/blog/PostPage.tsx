import React, { Suspense, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Page } from '@/shared/components/Page'
import { Prose } from '@/shared/components/Prose'
import { POSTS } from '@/shared/data/posts'
import { useMetaTags } from '@/shared/hooks/useMetaTags'

const postModules = import.meta.glob('/content/posts/*.mdx') as Record<string, () => Promise<{ default: React.ComponentType }>>

export function PostPage() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  const LazyPost = useMemo(() => {
    if (!post) return null
    const loader = postModules[`/content/posts/${post.slug}.mdx`]
    return loader ? React.lazy(loader) : null
  }, [post?.slug])

  // Set meta tags for link previews
  useMetaTags({
    title: post?.title || 'Post Not Found',
    description: post?.summary || 'This post could not be found.',
    date: post?.date,
    type: 'article',
    author: 'Kyle Brooks',
  })

  if (!post) {
    return (
      <main className="mx-auto max-w-[820px] px-4 py-20">
        <h1 className="text-2xl text-[color:var(--color-text-primary)]">Not found</h1>
      </main>
    )
  }

  // No sessionStorage scroll markers — Home page will not auto-scroll on return.

  return (
    <Page className="mx-auto max-w-[820px] px-4 py-10">
      <p className="text-sm text-[color:var(--color-text-muted)]">{new Date(post.date).toLocaleDateString()}</p>
      <h1 className="text-3xl font-semibold text-[color:var(--color-text-primary)] mt-2">{post.title}</h1>
      <p className="text-[color:var(--color-text-secondary)] mt-3">{post.summary}</p>
      <div className="mt-6">
        <Prose>
          {LazyPost ? (
            <Suspense fallback={<p className="text-[color:var(--color-text-muted)]">Loading…</p>}>
              <LazyPost />
            </Suspense>
          ) : (
            <p className="text-[color:var(--color-text-muted)]">Post content not found.</p>
          )}
        </Prose>
      </div>
      <div className="mt-10">
        <Link to={{ pathname: '/', hash: '#blog' }} className="underline text-[color:var(--color-link)] hover:text-[color:var(--color-link-hover)]">
          ← Back to home
        </Link>
      </div>
    </Page>
  )
}
