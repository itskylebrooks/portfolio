import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { HomePage } from '../pages/HomePage'
import { ProjectPage } from '../pages/ProjectPage'
import { PostPage } from '../pages/PostPage'
import { NotFoundPage } from '../pages/NotFoundPage'
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className="mx-auto max-w-[820px] px-4 py-10 text-white/50 text-sm">
        © {new Date().getFullYear()} Kyle Brooks — Hamburg, DE. Icons by Lucide.
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  )
}
