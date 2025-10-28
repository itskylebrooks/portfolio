import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-[820px] px-4 py-10 text-sm text-[color:var(--color-text-tertiary)] flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4">
      <div className="w-full flex justify-center sm:justify-start text-center sm:text-left order-2 sm:order-1">
        <div>
          © {year} Kyle Brooks — Hamburg, DE. Icons by{' '}
          <a
            href="https://lucide.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[color:var(--color-link)] hover:text-[color:var(--color-link-hover)]"
          >
            Lucide
          </a>
          .
        </div>
      </div>

      <div className="w-full flex justify-center sm:justify-end order-1 sm:order-2">
        <div className="flex items-center gap-3 text-[color:var(--color-text-secondary)]">
          <Link to="/imprint" className="underline hover:text-[color:var(--color-link-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)]">
            Imprint
          </Link>
          <Link to="/privacy" className="underline hover:text-[color:var(--color-link-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)]">
            Privacy Policy
          </Link>
          <Link to="/license" className="underline hover:text-[color:var(--color-link-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)]">
            License
          </Link>
        </div>
      </div>
    </footer>
  )
}
