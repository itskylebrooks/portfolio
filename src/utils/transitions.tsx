import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const DURATION = 0.22

export const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: { duration: DURATION } },
}

// Shared spring used for hover/tap transitions on interactive cards
export const hoverSpring = { type: 'spring', stiffness: 700, damping: 30, mass: 0.6 }
export const tapScale = { scale: 0.995 }
export const projectHover = { y: -4 }

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
}
export function MotionDiv({ children, animateKey, className, duration }: MotionDivProps) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      key={animateKey}
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: duration ?? 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export default {
  DURATION,
  pageVariants,
  hoverSpring,
  tapScale,
  projectHover,
  Page,
  MotionDiv,
}
