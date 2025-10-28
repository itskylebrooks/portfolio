import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IconLink } from './IconLink'
import { Github, Linkedin, Mail } from './icons'
import { prefersReducedMotion } from '@/shared/utils/prefersReducedMotion'

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
      // Navigate to home; do not request any scroll state. Home will open at the top.
      navigate('/')
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-header-backdrop)] bg-[color:var(--color-header-bg)] border-b border-[color:var(--color-header-border)]">
      <div className="mx-auto max-w-[820px] px-4 py-3 flex items-center">
        <Link
          to="/"
          onClick={handleNameClick}
          className="text-lg font-medium text-[color:var(--color-text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]"
          aria-label="Go to About section"
        >
          Kyle Brooks
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <IconLink href="https://github.com/itskylebrooks" label="GitHub" Icon={Github} />
          <IconLink href="https://linkedin.com/in/itskylebrooks" label="LinkedIn" Icon={Linkedin} />
          <IconLink href="mailto:itskylebrooks@icloud.com" label="Email" Icon={Mail} />
        </div>
      </div>
    </header>
  )
}
