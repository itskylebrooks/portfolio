import React from 'react'
export function IconLink({ href, label, Icon }: { href: string; label: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-lg text-[color:var(--color-icon-muted)] hover:text-[color:var(--color-icon-strong)] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-ring-offset)]"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}
