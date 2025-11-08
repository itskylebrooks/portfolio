import React from 'react'

export function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        'prose prose-invert max-w-none',
        'prose-headings:font-semibold',
        'prose-p:text-[color:var(--color-text-secondary)]',
        'prose-li:text-[color:var(--color-text-secondary)]',
        'prose-strong:text-[color:var(--color-text-primary)]',
        'prose-code:text-[color:var(--color-text-secondary)]',
        'prose-pre:bg-[color:var(--color-surface-active)]',
        'prose-a:text-[color:var(--color-text-secondary)]',
        'prose-a:underline',
        'prose-a:decoration-[color:var(--color-text-secondary)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
