import React from 'react'

export function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={[
      'prose prose-invert max-w-none',
      'prose-headings:font-semibold',
      // default text colors; allow overrides via className
      'prose-p:text-white/90',
      'prose-pre:bg-black/50',
      className,
    ].join(' ')}>
      {children}
    </div>
  )
}
