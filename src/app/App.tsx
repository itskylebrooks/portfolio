import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { HomePage } from '../pages/HomePage'
import { ProjectPage } from '../pages/ProjectPage'
import { PostPage } from '../pages/PostPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ImprintPage } from '../pages/ImprintPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { LicensePage } from '../pages/LicensePage'
import { useScrollToHash } from '../hooks/useScrollToHash'

function Shell() {
  useScrollToHash()
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] selection:bg-white/20">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
  <Route path="/imprint" element={<ImprintPage />} />
  <Route path="/privacy" element={<PrivacyPage />} />
  <Route path="/license" element={<LicensePage />} />
  <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className="mx-auto max-w-[820px] px-4 py-10 text-white/50 text-sm flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4">
        {/* Buttons row (on mobile: first line, centered) */}
        <div className="w-full flex justify-center sm:justify-start">
          <div className="flex items-center gap-3">
            <a href="/imprint" className="underline hover:text-white">Imprint</a>
            <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>
            <a href="/license" className="underline hover:text-white">License</a>
          </div>
        </div>

        {/* Copyright row (on mobile: second line, centered) */}
        <div className="w-full flex justify-center sm:justify-end text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Kyle Brooks — Hamburg, DE. Icons by{' '}
            <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Lucide</a>.
          </div>
        </div>
      </footer>
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
