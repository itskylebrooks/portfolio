import { useEffect } from 'react'

interface MetaTagsOptions {
  title: string
  description: string
  author?: string
  date?: string
  version?: string
  type?: 'article' | 'website'
  url?: string
  image?: string
}

/**
 * Hook to dynamically update meta tags for better link previews
 * (Open Graph and Twitter Cards)
 */
export function useMetaTags(options: MetaTagsOptions) {
  useEffect(() => {
    const {
      title,
      description,
      author = 'Kyle Brooks',
      date,
      version,
      type = 'website',
      url = window.location.href,
      image,
    } = options

    // Default OG image (you can replace this with a better default image)
    const defaultImage = `${window.location.origin}/icon-black.png`
    const ogImage = image || defaultImage

    // Construct full title with version/date if provided
    let fullTitle = title
    if (version) {
      fullTitle = `${title} v${version}`
    } else if (date) {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      fullTitle = `${title} — ${formattedDate}`
    }

    // Update document title
    document.title = fullTitle

    // Helper to set or update a meta tag
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name'
      let tag = document.querySelector(`meta[${attr}="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Basic meta tags
    setMetaTag('description', description, false)
    setMetaTag('author', author, false)

    // Open Graph tags
    setMetaTag('og:title', fullTitle)
    setMetaTag('og:description', description)
    setMetaTag('og:type', type)
    setMetaTag('og:url', url)
    setMetaTag('og:image', ogImage)
    setMetaTag('og:site_name', author)

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', false)
    setMetaTag('twitter:title', fullTitle, false)
    setMetaTag('twitter:description', description, false)
    setMetaTag('twitter:image', ogImage, false)
    setMetaTag('twitter:creator', `@${author.replace(' ', '')}`, false)

    // Article-specific tags
    if (type === 'article' && date) {
      setMetaTag('article:published_time', new Date(date).toISOString())
      setMetaTag('article:author', author)
    }

    // Cleanup function to reset to default values
    return () => {
      document.title = 'Kyle Brooks'
    }
  }, [options])
}
