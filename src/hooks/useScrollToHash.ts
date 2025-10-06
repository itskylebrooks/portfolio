import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { prefersReducedMotion } from '../utils/prefersReducedMotion'

export function useScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#','')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }, [hash, pathname])
}
