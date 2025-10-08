import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
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

  // Also support scrolling back from other pages via sessionStorage flag.
  useEffect(() => {
    try {
      const target = sessionStorage.getItem('scrollTo')
      if (target) {
        const id = target === 'work' ? 'work' : target === 'blog' ? 'blog' : null
        if (id) {
          const el = document.getElementById(id)
          if (el) {
            const offset = 24
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
          }
        }
        sessionStorage.removeItem('scrollTo')
      }
    } catch (_) {}
  }, [])

  const shouldReduceMotion = useReducedMotion()
  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  }

  return (
    <motion.main initial={shouldReduceMotion ? undefined : 'initial'} animate={shouldReduceMotion ? undefined : 'enter'} variants={pageVariants}>
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
            <a href="#work" className="underline underline-offset-4">View my projects → Work</a>
            <span className="hidden md:inline-block text-white/30 ml-3">•</span>
          </li>

          <li className="list-disc ml-5 mb-2 md:mb-0 md:list-none md:ml-0 md:inline-flex md:items-center">
            <a href="#blog" className="underline underline-offset-4">Read my thoughts → Blog</a>
            <span className="hidden md:inline-block text-white/30 ml-3">•</span>
          </li>

          <li className="list-disc ml-5 md:list-none md:ml-0 md:inline-flex md:items-center">
            <a href="#experience" className="underline underline-offset-4">Explore my background → Experience</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
