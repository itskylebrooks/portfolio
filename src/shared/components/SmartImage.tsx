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

  const handleLoad = React.useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
      style={{
        aspectRatio: `${width} / ${height}`,
        ...containerStyle,
      }}
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
          transition: 'opacity 0.5s ease-in-out',
          ...style,
        }}
        {...imgProps}
      />
    </div>
  )
})
