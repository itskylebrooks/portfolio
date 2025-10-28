import type { Transition, Variants } from 'framer-motion'

export const MOTION_DURATION = 0.22

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION },
  },
}

export const fadeInUp = (offset = 8, duration = 0.25): Variants => ({
  initial: { opacity: 0, y: offset },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration },
  },
})

export const hoverSpring: Transition = { type: 'spring', stiffness: 700, damping: 30, mass: 0.6 }
export const tapScale = { scale: 0.995 }
export const projectHover = { y: -4 }
