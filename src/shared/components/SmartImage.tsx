import React from 'react'
import { cn } from '@/shared/utils/cn'

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
  const [loaded, setLoaded] = React.useState(false)
  const [ratio, setRatio] = React.useState(() => width / height)
  const resolvedContainerStyle: React.CSSProperties = {
    aspectRatio: containerStyle?.aspectRatio ?? `${ratio}`,
    ...containerStyle,
  }

  const handleLoad = React.useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const img = event.currentTarget
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(img.naturalWidth / img.naturalHeight)
      }
      setLoaded(true)
      onLoad?.(event)
    },
    [onLoad],
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
        ref={ref}
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
