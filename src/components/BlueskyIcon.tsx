import React from 'react'

// Note: the original icon had antennae and a center vertical line; these
// elements were intentionally removed to simplify the shape and match the
// Bluesky logo.
export function BlueskyIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
  className={`lucide lucide-butterfly-icon lucide-butterfly ${className}`}
  width="100%"
  height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M20 5c-3.5 0-6.5 3.9-8 6.3C10.5 8.9 7.5 5 4 5a2 2 0 0 0-2 2c0 2.3.6 4.4 1.5 5.6C4 13.5 4.9 14 6 14h2c-.9.4-2.1.9-2.6 1.5-1.6 1.6-.9 3.4.7 4.9 1.6 1.6 3.4 2.3 4.9.7.3-.3 1-1.1 1-1.1s.6.8 1 1.1c1.6 1.6 3.4.9 4.9-.7 1.6-1.6 2.3-3.4.7-4.9-.5-.5-1.7-1.1-2.6-1.5h2c1.1 0 2-.5 2.5-1.4.9-1.2 1.5-3.3 1.5-5.6a2 2 0 0 0-2-2" />
    </svg>
  )
}
