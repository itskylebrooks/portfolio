import { useEffect } from 'react'

export function useProseImageFadeIn() {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const markLoaded = (img: HTMLImageElement) => {
      img.dataset.imageLoaded = 'true'
    }

    const handleImageLoad = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLImageElement)) return
      if (!target.closest('.prose')) return
      markLoaded(target)
    }

    const checkImage = (image: HTMLImageElement) => {
      if (!image.closest('.prose')) return
      if (image.dataset.imageLoaded === 'true') return
      if (image.complete) {
        markLoaded(image)
      } else {
        image.dataset.imageAnimate = 'true'
      }
    }

    const proseImages = document.querySelectorAll<HTMLImageElement>('.prose img')
    proseImages.forEach((img) => checkImage(img))

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            checkImage(node)
          } else if (node instanceof Element) {
            node.querySelectorAll<HTMLImageElement>('.prose img').forEach(checkImage)
          }
        })
      })
    })

    const { body } = document
    if (body) {
      observer.observe(body, { childList: true, subtree: true })
    }
    document.addEventListener('load', handleImageLoad, true)

    return () => {
      observer.disconnect()
      document.removeEventListener('load', handleImageLoad, true)
    }
  }, [])
}
