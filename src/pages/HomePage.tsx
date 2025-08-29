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

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
}

export function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  useDocumentTitle('Kyle Brooks — Portfolio')

  useEffect(() => {
    if ((location.state as any)?.scrollTo === 'about') {
      const el = document.getElementById('about')
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
      navigate('.', { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <main>
      <Hero />
      <Section id="projects" title="Projects">
        <div className="grid gap-4">
          {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>
      <Section id="blog" title="Blog">
        <div className="divide-y divide-white/10 rounded-xl border border-white/10">
          {POSTS.map((post) => <BlogRow key={post.slug} post={post} />)}
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p className="text-white/90">
          Feel free to reach out at <a className="underline" href="mailto:itskylebrooks@icloud.com">itskylebrooks@icloud.com</a>.
        </p>
        <div className="mt-4 flex gap-2">
          <IconLink href="https://github.com/itskylebrooks" label="GitHub" Icon={GithubIcon} />
          <IconLink href="https://linkedin.com/in/itskylebrooks" label="LinkedIn" Icon={LinkedinIcon} />
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
          Full-stack developer & Software Systems Development student (University of Hamburg).
        </p>
        <p className="mt-2 text-white/70">I build minimal, reliable web experiences.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <a href="#projects" className="underline underline-offset-4">View my work → Projects</a>
          <span className="text-white/30">•</span>
          <a href="#blog" className="underline underline-offset-4">Read my thoughts → Blog</a>
          <span className="text-white/30">•</span>
          <a href="#contact" className="underline underline-offset-4">Get in touch → Contact</a>
        </div>
      </div>
    </section>
  )
}
