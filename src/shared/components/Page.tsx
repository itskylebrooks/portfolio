import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, pageVariants } from '@/shared/animations'

type PageProps = React.ComponentProps<typeof motion.main> & { children?: React.ReactNode }
export function Page({ children, className, ...rest }: PageProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.main
      className={className}
      initial={shouldReduceMotion ? undefined : 'initial'}
      animate={shouldReduceMotion ? undefined : 'enter'}
      variants={pageVariants}
      {...rest}
    >
      {children}
    </motion.main>
  )
}

type MotionDivProps = {
  children?: React.ReactNode
  animateKey?: React.Key
  className?: string
  duration?: number
  offset?: number
  skipInitialAnimation?: boolean
}

export function MotionDiv({ children, animateKey, className, duration, offset, skipInitialAnimation }: MotionDivProps) {
  const shouldReduceMotion = useReducedMotion()
  const variants = React.useMemo(() => fadeInUp(offset, duration), [duration, offset])

  return (
    <motion.div
      key={animateKey}
      className={className}
      initial={shouldReduceMotion ? undefined : skipInitialAnimation ? false : 'initial'}
      animate={shouldReduceMotion ? undefined : 'animate'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
