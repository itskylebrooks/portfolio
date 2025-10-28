import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '@/shared/components/Page'
export function NotFoundPage() {
  return (
    <Page className="mx-auto max-w-[820px] px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-[color:var(--color-text-primary)]">404 — Page not found</h1>
      <p className="mt-2 text-[color:var(--color-text-tertiary)]">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <Link to="/" className="underline text-[color:var(--color-link)] hover:text-[color:var(--color-link-hover)]">
          Back to home
        </Link>
      </div>
    </Page>
  )
}
