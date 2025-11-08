import React from 'react'
import { MotionDiv, Page } from '@/shared/components/Page'
import { Section } from '@/shared/components/Section'
import { ProjectCard } from '@/shared/components/ProjectCard'
import { BlogRow } from '@/shared/components/BlogRow'
import { ArrowBigLeft, ArrowBigRight } from '@/shared/components/icons'
import { POSTS } from '@/shared/data/posts'
import { PROJECTS } from '@/shared/data/projects'
import { useMetaTags } from '@/shared/hooks/useMetaTags'
import { prefersReducedMotion } from '@/shared/utils/prefersReducedMotion'

export function HomePage() {
  const [projectsPage, setProjectsPage] = React.useState(0)
  const projectsPerPage = 3
  const projectsPages = Math.max(1, Math.ceil(PROJECTS.length / projectsPerPage))

  const [postsPage, setPostsPage] = React.useState(0)
  const postsPerPage = 5
  const postsPages = Math.max(1, Math.ceil(POSTS.length / postsPerPage))

  useMetaTags({
    title: 'Kyle Brooks',
    description: "Kyle Brooks' personal website showcasing projects and writings on software development, design, and technology.",
    author: 'Kyle Brooks',
    type: 'website',
  })

  return (
    <Page>
      <Hero />
      <Section
        id="work"
        title="Work"
        headerRight={
          PROJECTS.length > projectsPerPage ? (
            <div className="flex items-center justify-center gap-4">
              <button
                aria-label="Previous projects"
                onClick={() => setProjectsPage((s) => Math.max(0, s - 1))}
                className={`inline-flex items-center justify-center ${projectsPage === 0 ? 'text-[color:var(--color-text-faint)] pointer-events-none' : 'text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]`}
              >
                <ArrowBigLeft size={18} />
              </button>
              <div className="text-sm text-[color:var(--color-text-muted)]">{projectsPage + 1} / {projectsPages}</div>
              <button
                aria-label="Next projects"
                onClick={() => setProjectsPage((s) => Math.min(projectsPages - 1, s + 1))}
                className={`inline-flex items-center justify-center ${projectsPage === projectsPages - 1 ? 'text-[color:var(--color-text-faint)] pointer-events-none' : 'text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]`}
              >
                <ArrowBigRight size={18} />
              </button>
            </div>
          ) : null
        }
      >
        <PaginatedProjects projects={PROJECTS} page={projectsPage} perPage={projectsPerPage} />
      </Section>
      <Section
        id="blog"
        title="Blog"
        headerRight={
          POSTS.length > postsPerPage ? (
            <div className="flex items-center justify-center gap-4">
              <button
                aria-label="Previous posts"
                onClick={() => setPostsPage((s) => Math.max(0, s - 1))}
                className={`inline-flex items-center justify-center ${postsPage === 0 ? 'text-[color:var(--color-text-faint)] pointer-events-none' : 'text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]`}
              >
                <ArrowBigLeft size={18} />
              </button>
              <div className="text-sm text-[color:var(--color-text-muted)]">{postsPage + 1} / {postsPages}</div>
              <button
                aria-label="Next posts"
                onClick={() => setPostsPage((s) => Math.min(postsPages - 1, s + 1))}
                className={`inline-flex items-center justify-center ${postsPage === postsPages - 1 ? 'text-[color:var(--color-text-faint)] pointer-events-none' : 'text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]'} focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]`}
              >
                <ArrowBigRight size={18} />
              </button>
            </div>
          ) : null
        }
      >
        <PaginatedPosts posts={POSTS} page={postsPage} perPage={postsPerPage} />
      </Section>
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          <div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium">University of Hamburg — B.Sc. Software Systems Development (2024–present)</h3>
            <p className="mt-2 text-[color:var(--color-text-secondary)]">
              At university, I’m grounding myself deeply in computer science, with a special focus on artificial intelligence, machine learning, distributed systems, and thoughtful software design. This journey is shaping how I approach complex problems and build meaningful solutions.
            </p>
          </div>

          <div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium">Walddörfer Gymnasium — Abitur (2024, grade 1.4)</h3>
            <p className="mt-2 text-[color:var(--color-text-secondary)]">
              Moving to a new country, I embraced the challenge of adapting and learning, driven by curiosity and a desire to belong. My studies centered on mathematics, computer science, and embedded systems, all while finding my place in a new culture and community.
            </p>
          </div>

          <div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium">Skills</h3>
            <p className="mt-2 text-[color:var(--color-text-secondary)]">
              I enjoy building practical projects that span front-end and back-end, focusing on clean, minimal software that just works. My experience covers a range of tools and frameworks, but what drives me most is creating thoughtful, efficient solutions from start to finish.
            </p>
          </div>

          <div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium">Languages</h3>
            <p className="mt-2 text-[color:var(--color-text-secondary)]">
              Russian is my mother tongue, German is the language of my daily life, and English is where I feel most at home thinking, writing, and creating. Together, they enrich my perspective and communication.
            </p>
          </div>

          <div>
            <h3 className="text-[color:var(--color-text-primary)] font-medium">Personal development</h3>
            <p className="mt-2 text-[color:var(--color-text-secondary)]">
              I see growth as more than study or code — it is about shaping the whole person. My compass has four directions: freedom, love, mastery, and faith. Freedom means living by my own choices; love means creating spaces of warmth and care; mastery means steady effort in study, coding, fitness, and aikidō; faith means holding onto hope and truth even in darkness. Together they keep me balanced — grounding me through discipline, mindfulness, and the simple practices of movement, reflection, and prayer.
            </p>
          </div>
        </div>
      </Section>
    </Page>
  )
}

function Hero() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-[820px] px-4 pt-12 pb-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-[color:var(--color-text-primary)] tracking-tight">Emerging leader & Designer of minimal web experiences</h1>
        <p className="mt-2 text-[color:var(--color-text-tertiary)]">Build useful things. Keep moving forward.</p>
        <ul className="mt-6 text-sm text-[color:var(--color-text-secondary)] md:flex md:flex-wrap md:items-center md:gap-3">
          <li className="list-disc ml-5 mb-2 md:mb-0 md:list-none md:ml-0 md:inline-flex md:items-center">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('work')
                if (el) {
                  const offset = 24
                  const top = el.getBoundingClientRect().top + window.scrollY - offset
                  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
                }
              }}
              className="underline underline-offset-4"
            >
              View my projects → Work
            </a>
            <span className="hidden md:inline-block text-[color:var(--color-text-faint)] ml-3">•</span>
          </li>

          <li className="list-disc ml-5 mb-2 md:mb-0 md:list-none md:ml-0 md:inline-flex md:items-center">
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('blog')
                if (el) {
                  const offset = 24
                  const top = el.getBoundingClientRect().top + window.scrollY - offset
                  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
                }
              }}
              className="underline underline-offset-4"
            >
              Read my thoughts → Blog
            </a>
            <span className="hidden md:inline-block text-[color:var(--color-text-faint)] ml-3">•</span>
          </li>

          <li className="list-disc ml-5 md:list-none md:ml-0 md:inline-flex md:items-center">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('experience')
                if (el) {
                  const offset = 24
                  const top = el.getBoundingClientRect().top + window.scrollY - offset
                  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
                }
              }}
              className="underline underline-offset-4"
            >
              Explore my background → Experience
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

// Paginated projects: show max 3 per page with prev/next buttons
function PaginatedProjects({ projects, page, perPage }: { projects: typeof PROJECTS; page: number; perPage: number }) {
  const pages = Math.max(1, Math.ceil(projects.length / perPage))
  
  const start = page * perPage
  const slice = projects.slice(start, start + perPage)

  return (
    // make each ProjectCard a direct child of the grid so Tailwind gap applies correctly
    <MotionDiv animateKey={page} className="grid gap-3" duration={0.25}>
      {slice.map((p) => (
        <div key={p.slug}>
          <ProjectCard p={p} />
        </div>
      ))}

      {/* Controls are rendered in the Section header */}
    </MotionDiv>
  )
}

// Paginated posts: show max 5 per page with prev/next buttons
function PaginatedPosts({ posts, page, perPage }: { posts: typeof POSTS; page: number; perPage: number }) {
  const pages = Math.max(1, Math.ceil(posts.length / perPage))
  
  const start = page * perPage
  const slice = posts.slice(start, start + perPage)

  return (
    <>
      <div className="divide-y divide-[color:var(--color-border-muted)] rounded-xl border border-[color:var(--color-card-border)]">
        <MotionDiv animateKey={page} duration={0.25}>
          {slice.map((post) => <BlogRow key={post.slug} post={post} />)}
        </MotionDiv>
      </div>

      {/* Controls are rendered in the Section header */}
    </>
  )
}
