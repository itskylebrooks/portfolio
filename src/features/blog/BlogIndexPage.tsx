import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '@/shared/components/Page'
import { POSTS, type PostIndex } from '@/shared/data/posts'
import { useMetaTags } from '@/shared/hooks/useMetaTags'

type PostsByYear = Record<string, PostIndex[]>

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
})

export function BlogIndexPage() {
  const postsByYear = React.useMemo(() => groupPostsByYear(POSTS), [POSTS])
  const years = React.useMemo(() => Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a)), [postsByYear])

  useMetaTags({
    title: 'Blog — Kyle Brooks',
    description: 'Writing about software, focus, and building calm tools.',
    author: 'Kyle Brooks',
    type: 'website',
  })

  return (
    <Page className="mx-auto max-w-[820px] px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-text-primary)]">Blog</h1>
      </header>
      <div className="space-y-12">
        {years.map((year) => {
          const entries = postsByYear[year] ?? []
          return (
            <section key={year}>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.35em] text-[color:var(--color-text-primary)]">{year}</h2>
              <div className="mt-5 flex flex-col gap-7">
                {entries.map((post) => (
                  <article key={post.slug}>
                    <div className="flex gap-3 text-base">
                      <div className="flex items-center gap-2 text-sm text-[color:var(--color-text-muted)] whitespace-nowrap">
                        <span>{dateFormatter.format(new Date(post.date))}</span>
                        <span className="text-[color:var(--color-text-faint)]">&mdash;</span>
                      </div>
                      <div className="flex-1 min-w-0 space-y-2">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex text-[color:var(--color-text-primary)] transition-colors hover:text-[color:var(--color-text-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]"
                        >
                          {post.title}
                        </Link>
                        <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">{post.summary}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </Page>
  )
}

function groupPostsByYear(posts: PostIndex[]): PostsByYear {
  return posts.reduce<PostsByYear>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})
}
