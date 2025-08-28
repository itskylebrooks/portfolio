import React from 'react'
import { Link } from 'react-router-dom'
export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-[820px] px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-white">404 — Page not found</h1>
      <p className="text-white/70 mt-2">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6"><Link to="/" className="underline">Back to home</Link></div>
    </main>
  )
}
