import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from '@/shared/components/Footer'
import { Header } from '@/shared/components/Header'
import { useScrollToHash } from '@/shared/hooks/useScrollToHash'
import { BlogIndexPage, PostPage } from '@/features/blog'
import { HomePage } from '@/features/home'
import { ImprintPage, LicensePage, PrivacyPage } from '@/features/legal'
import { NotFoundPage } from '@/features/misc'
import { ProjectPage } from '@/features/work'

function Shell() {
  useScrollToHash()

  // Prevent browser native scroll restoration (especially mobile WebKit) from
  // automatically restoring scroll positions which can cause a double-jump.
  React.useEffect(() => {
    if (typeof window === 'undefined' || !('history' in window)) return
    const prev = (window.history as any).scrollRestoration
    try {
      ;(window.history as any).scrollRestoration = 'manual'
    } catch (_) {}
    return () => {
      try {
        ;(window.history as any).scrollRestoration = prev
      } catch (_) {}
    }
  }, [])
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/license" element={<LicensePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Shell />
    </Router>
  )
}
