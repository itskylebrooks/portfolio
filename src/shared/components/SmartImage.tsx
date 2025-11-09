import React from 'react'
import { cn } from '@/shared/utils/cn'

type SmartImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> & {
  width: number
  height: number
  blurSrc?: string
  priority?: boolean
  containerClassName?: string
  containerStyle?: React.CSSProperties
}

export const SmartImage = React.forwardRef<HTMLImageElement, SmartImageProps>(function SmartImage(
  {
    width,
    height,
    blurSrc,
    priority = false,
    className,
    style,
    loading,
    decoding,
    fetchpriority,
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
  const resolvedFetchPriority = priority ? 'high' : fetchpriority

  const backgroundStyles = loaded
    ? {}
    : {
        backgroundColor: blurSrc ? undefined : 'var(--color-image-placeholder)',
        backgroundImage: blurSrc
          ? `url(${blurSrc})`
          : 'linear-gradient(135deg, var(--color-image-placeholder-highlight), transparent)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }

  return (
    <div
      className={cn('smart-image', loaded && 'smart-image--loaded', containerClassName)}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...backgroundStyles,
        ...containerStyle,
      }}
    >
      <img
        ref={ref}
        width={width}
        height={height}
        loading={resolvedLoading}
        decoding={resolvedDecoding}
        fetchpriority={resolvedFetchPriority}
        onLoad={handleLoad}
        className={className}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          ...style,
        }}
        {...imgProps}
      />
    </div>
  )
})
