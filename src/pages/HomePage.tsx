import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { BlogRow } from '../components/BlogRow'
import { IconLink } from '../components/IconLink'
import { GithubIcon } from '../components/icons/GithubIcon'
import { LinkedinIcon } from '../components/icons/LinkedinIcon'
import { PROJECTS } from '../content/projects'
import { POSTS } from '../content/posts'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { prefersReducedMotion } from '../utils/prefersReducedMotion'

export function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  useDocumentTitle('Kyle Brooks')

  useEffect(() => {
    if ((location.state as any)?.scrollTo === 'about') {
      const el = document.getElementById('about')
      if (el) {
        const offset = 24 // keep consistent with header click
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
      }
      navigate('.', { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <main>
      <Hero />
      <Section id="work" title="Work">
        <div className="grid gap-4">
          {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>
      <Section id="blog" title="Blog">
        <div className="divide-y divide-white/10 rounded-xl border border-white/10">
          {POSTS.map((post) => <BlogRow key={post.slug} post={post} />)}
        </div>
      </Section>
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-medium">University of Hamburg — B.Sc. Software Systems Development (2024–present)</h3>
            <p className="mt-2 text-white/90">
              I am building a strong foundation in computer science with practical coursework in distributed systems, software engineering, databases, and computer vision, while gradually moving toward a specialization in Artificial Intelligence and Machine Learning.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Walddörfer Gymnasium — Abitur (2024, grade 1.4)</h3>
            <p className="mt-2 text-white/90">
              My focus was on mathematics, computer science, and embedded systems. Beyond academics, this was also a time of integration into Western society: learning German, adapting to a new environment, and finishing school in my adopted country.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Skills</h3>
            <p className="mt-2 text-white/90">
              My technical profile combines programming in Java, Python, and JavaScript/TypeScript with modern frameworks such as React, Next.js, and Tailwind. I have practical experience with databases and developer tools including Supabase, MongoDB, Git, Vercel, Netlify, and LaTeX. Conceptually, I am most drawn to algorithms, data structures, distributed systems, and computer vision.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium">Languages</h3>
            <p className="mt-2 text-white/90">
              My mother tongue is Russian, the language of my everyday environment is German, and the language I most enjoy thinking, writing, and building in is English. Together they give me a broad cultural and communicative range.
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
    </main>
  )
}

function Hero() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-[820px] px-4 pt-12 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Kyle Brooks</h1>
        <p className="mt-3 text-white/80 text-lg">
          Emerging leader & builder of minimal web experiences.
        </p>
        <p className="mt-2 text-white/70">Build useful things. Keep moving forward.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <a href="#work" className="underline underline-offset-4">View my projects → Work</a>
          <span className="text-white/30">•</span>
          <a href="#blog" className="underline underline-offset-4">Read my thoughts → Blog</a>
          <span className="text-white/30">•</span>
          <a href="#experience" className="underline underline-offset-4">Explore my background → Experience</a>
        </div>
      </div>
    </section>
  )
}
