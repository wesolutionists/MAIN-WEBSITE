'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  amount?: number
  distance?: number
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  direction = 'up',
  amount = 0.12,
  distance = 36,
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? distance : 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : initial
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
