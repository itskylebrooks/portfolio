import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    // Always ensure navigation opens pages at the top.
    // No smooth scrolling and no anchor jumps — pages must open at top with no exceptions.
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hash, pathname])
}
