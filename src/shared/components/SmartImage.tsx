import React from 'react'
import { cn } from '@/shared/utils/cn'

// Tracks fully-loaded image sources so repeat views can skip the entry animation.
const imageCache = new Set<string>()
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const assignForwardRef = <T,>(ref: React.ForwardedRef<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ;(ref as React.MutableRefObject<T | null>).current = value
  }
}

const getCacheKey = (src?: string, srcSet?: string) => {
  if (src) {
    return src
  }
  if (srcSet) {
    return srcSet
  }
  return undefined
}

type SmartImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> & {
  width: number
  height: number
  priority?: boolean
  containerClassName?: string
  containerStyle?: React.CSSProperties
}

export const SmartImage = React.forwardRef<HTMLImageElement, SmartImageProps>(function SmartImage(
  {
    width,
    height,
    priority = false,
    className,
    style,
    loading,
    decoding,
    fetchPriority,
    onLoad,
    containerClassName,
    containerStyle,
    ...imgProps
  },
  ref,
) {
  const cacheKey = React.useMemo(() => getCacheKey(imgProps.src, imgProps.srcSet), [imgProps.src, imgProps.srcSet])
  const [loaded, setLoaded] = React.useState(() => (cacheKey ? imageCache.has(cacheKey) : false))
  const [ratio, setRatio] = React.useState(() => width / height)
  const imageRef = React.useRef<HTMLImageElement | null>(null)

  const assignRefs = React.useCallback(
    (node: HTMLImageElement | null) => {
      imageRef.current = node
      assignForwardRef(ref, node)
    },
    [ref],
  )

  const updateRatioFromImage = React.useCallback((img: HTMLImageElement) => {
    if (img.naturalWidth && img.naturalHeight) {
      setRatio(img.naturalWidth / img.naturalHeight)
    }
  }, [])

  const cacheLoadedSource = React.useCallback(
    (srcValue?: string) => {
      if (cacheKey) {
        imageCache.add(cacheKey)
      }
      if (srcValue) {
        imageCache.add(srcValue)
      }
    },
    [cacheKey],
  )

  useIsomorphicLayoutEffect(() => {
    if (!cacheKey) {
      const img = imageRef.current
      if (img?.complete && img.naturalWidth && img.naturalHeight) {
        updateRatioFromImage(img)
        setLoaded(true)
      } else {
        setLoaded(false)
      }
      return
    }

    if (imageCache.has(cacheKey)) {
      setLoaded(true)
      return
    }

    const img = imageRef.current
    if (img?.complete && img.naturalWidth && img.naturalHeight) {
      updateRatioFromImage(img)
      cacheLoadedSource(img.currentSrc || img.src)
      setLoaded(true)
    } else {
      setLoaded(false)
    }
  }, [cacheKey, cacheLoadedSource, updateRatioFromImage])

  const resolvedContainerStyle: React.CSSProperties = {
    aspectRatio: containerStyle?.aspectRatio ?? `${ratio}`,
    ...containerStyle,
  }

  const handleLoad = React.useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.currentTarget
      updateRatioFromImage(img)
      setLoaded(true)
      cacheLoadedSource(img.currentSrc || img.src)
      onLoad?.(event)
    },
    [cacheLoadedSource, onLoad, updateRatioFromImage],
  )

  const resolvedLoading = priority ? 'eager' : loading ?? 'lazy'
  const resolvedDecoding = decoding ?? 'async'
  const resolvedFetchPriority = priority ? 'high' : fetchPriority

  return (
    <div
      className={cn('smart-image', loaded && 'smart-image--loaded', containerClassName)}
      style={resolvedContainerStyle}
    >
      <img
        ref={assignRefs}
        width={width}
        height={height}
        loading={resolvedLoading}
        decoding={resolvedDecoding}
        fetchPriority={resolvedFetchPriority}
        onLoad={handleLoad}
        className={className}
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(1.02)',
          filter: loaded ? 'blur(0px)' : 'blur(8px)',
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          ...style,
        }}
        {...imgProps}
      />
    </div>
  )
})
