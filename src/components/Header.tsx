import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IconLink } from './IconLink'
import { Github, Linkedin, Mail, Twitter } from './icons'
import { prefersReducedMotion } from '../utils/prefersReducedMotion'

export function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function handleNameClick(e: React.MouseEvent) {
    e.preventDefault()
    if (pathname === '/') {
      const el = document.getElementById('about')
      if (el) {
        const offset = 24 // scroll a little higher than the section top
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollTo: 'about' } })
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-[820px] px-4 py-3 flex items-center">
        <Link
          to="/"
          onClick={handleNameClick}
          className="text-lg font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ring-offset-2 ring-offset-black"
          aria-label="Go to About section"
        >
          Kyle Brooks
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <IconLink href="https://x.com/itiskylebrooks" label="X" Icon={Twitter} />
          <IconLink href="https://github.com/itskylebrooks" label="GitHub" Icon={Github} />
          <IconLink href="https://linkedin.com/in/itskylebrooks" label="LinkedIn" Icon={Linkedin} />
          <IconLink href="mailto:itskylebrooks@icloud.com" label="Email" Icon={Mail} />
        </div>
      </div>
    </header>
  )
}
