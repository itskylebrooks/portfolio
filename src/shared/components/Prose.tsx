import React from 'react'

export function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const images = Array.from(container.querySelectorAll<HTMLImageElement>('img'))
    const removeListeners: Array<() => void> = []

    for (const img of images) {
      img.dataset.fadeImage = 'true'

      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy'
      }
      if (!img.decoding || img.decoding === 'auto') {
        img.decoding = 'async'
      }

      const markLoaded = () => {
        img.dataset.fadeImageReady = 'true'
      }

      if (img.complete && img.naturalWidth > 0) {
        markLoaded()
        continue
      }

      img.addEventListener('load', markLoaded, { once: true })
      removeListeners.push(() => img.removeEventListener('load', markLoaded))
    }

    return () => {
      removeListeners.forEach((remove) => remove())
    }
  }, [children])

  return (
    <div
      ref={containerRef}
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
