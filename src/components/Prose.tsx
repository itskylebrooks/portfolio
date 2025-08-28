import React from 'react'
export function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose prose-invert max-w-none prose-headings:font-semibold prose-h2:text-white prose-p:text-white/90 prose-pre:bg-black/50"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
