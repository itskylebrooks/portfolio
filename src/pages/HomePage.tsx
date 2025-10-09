import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { BlogRow } from '../components/BlogRow'
import { IconLink } from '../components/IconLink'
import { Github, Linkedin } from '../components/icons'
import { ArrowBigLeft, ArrowBigRight } from '../components/icons'
import { PROJECTS } from '../content/projects'
import { POSTS } from '../content/posts'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { prefersReducedMotion } from '../utils/prefersReducedMotion'

export function HomePage() {
  const [projectsPage, setProjectsPage] = React.useState(0)
  const projectsPerPage = 3
  const projectsPages = Math.max(1, Math.ceil(PROJECTS.length / projectsPerPage))

  const [postsPage, setPostsPage] = React.useState(0)
  const postsPerPage = 5
  const postsPages = Math.max(1, Math.ceil(POSTS.length / postsPerPage))

  const location = useLocation()
  const navigate = useNavigate()
  useDocumentTitle('Kyle Brooks')

  // No automatic scrolling on navigation — pages must always open at the top.
  // Smooth scrolling is only performed for explicit clicks on the home page.
  useEffect(() => {}, [location.state, navigate])

  // no-op: sessionStorage-driven scrolls removed so pages open at top
  useEffect(() => {}, [])

  const shouldReduceMotion = useReducedMotion()
  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  }

  return (
    <motion.main initial={shouldReduceMotion ? undefined : 'initial'} animate={shouldReduceMotion ? undefined : 'enter'} variants={pageVariants}>
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
                className={`inline-flex items-center justify-center ${projectsPage === 0 ? 'text-white/30 pointer-events-none' : 'text-white/90 hover:text-white'} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
              >
                <ArrowBigLeft size={18} />
              </button>
              <div className="text-sm text-white/60">{projectsPage + 1} / {projectsPages}</div>
              <button
                aria-label="Next projects"
                onClick={() => setProjectsPage((s) => Math.min(projectsPages - 1, s + 1))}
                className={`inline-flex items-center justify-center ${projectsPage === projectsPages - 1 ? 'text-white/30 pointer-events-none' : 'text-white/90 hover:text-white'} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
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
                className={`inline-flex items-center justify-center ${postsPage === 0 ? 'text-white/30 pointer-events-none' : 'text-white/90 hover:text-white'} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
              >
                <ArrowBigLeft size={18} />
              </button>
              <div className="text-sm text-white/60">{postsPage + 1} / {postsPages}</div>
              <button
                aria-label="Next posts"
                onClick={() => setPostsPage((s) => Math.min(postsPages - 1, s + 1))}
                className={`inline-flex items-center justify-center ${postsPage === postsPages - 1 ? 'text-white/30 pointer-events-none' : 'text-white/90 hover:text-white'} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
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
            <h3 className="text-white font-medium">University of Hamburg — B.Sc. Software Systems Development (2024–present)</h3>
            <p className="mt-2 text-white/90">
              At university, I’m grounding myself deeply in computer science, with a special focus on artificial intelligence, machine learning, distributed systems, and thoughtful software design. This journey is shaping how I approach complex problems and build meaningful solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Walddörfer Gymnasium — Abitur (2024, grade 1.4)</h3>
            <p className="mt-2 text-white/90">
              Moving to a new country, I embraced the challenge of adapting and learning, driven by curiosity and a desire to belong. My studies centered on mathematics, computer science, and embedded systems, all while finding my place in a new culture and community.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Skills</h3>
            <p className="mt-2 text-white/90">
              I enjoy building practical projects that span front-end and back-end, focusing on clean, minimal software that just works. My experience covers a range of tools and frameworks, but what drives me most is creating thoughtful, efficient solutions from start to finish.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Languages</h3>
            <p className="mt-2 text-white/90">
              Russian is my mother tongue, German is the language of my daily life, and English is where I feel most at home thinking, writing, and creating. Together, they enrich my perspective and communication.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Personal development</h3>
            <p className="mt-2 text-white/90">
              I see growth as more than study or code — it is about shaping the whole person. My compass has four directions: freedom, love, mastery, and faith. Freedom means living by my own choices; love means creating spaces of warmth and care; mastery means steady effort in study, coding, fitness, and aikidō; faith means holding onto hope and truth even in darkness. Together they keep me balanced — grounding me through discipline, mindfulness, and the simple practices of movement, reflection, and prayer.
            </p>
          </div>
        </div>
      </Section>
    </motion.main>
  )
}

function Hero() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-[820px] px-4 pt-12 pb-10">
  <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Emerging leader & Designer of minimal web experiences</h1>
        <p className="mt-2 text-white/70">Build useful things. Keep moving forward.</p>
        <ul className="mt-6 text-sm md:flex md:flex-wrap md:items-center md:gap-3">
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
            <span className="hidden md:inline-block text-white/30 ml-3">•</span>
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
            <span className="hidden md:inline-block text-white/30 ml-3">•</span>
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
  const shouldReduceMotion = useReducedMotion()

  const start = page * perPage
  const slice = projects.slice(start, start + perPage)

  return (
    // make each ProjectCard a direct child of the grid so Tailwind gap applies correctly
    <motion.div
      key={page}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid gap-3"
    >
      {slice.map((p) => (
        <div key={p.slug}>
          <ProjectCard p={p} />
        </div>
      ))}

      {/* Controls are rendered in the Section header */}
    </motion.div>
  )
}

// Paginated posts: show max 5 per page with prev/next buttons
function PaginatedPosts({ posts, page, perPage }: { posts: typeof POSTS; page: number; perPage: number }) {
  const pages = Math.max(1, Math.ceil(posts.length / perPage))
  const shouldReduceMotion = useReducedMotion()

  const start = page * perPage
  const slice = posts.slice(start, start + perPage)

  return (
    <>
      <div className="divide-y divide-white/10 rounded-xl border border-white/10">
        <motion.div
          key={page}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {slice.map((post) => <BlogRow key={post.slug} post={post} />)}
        </motion.div>
      </div>

      {/* Controls are rendered in the Section header */}
    </>
  )
}
