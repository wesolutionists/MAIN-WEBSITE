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
  distance = 56,
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })

  const initial = {
    opacity: 0,
    filter: 'blur(8px)',
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
          ? { opacity: 1, filter: 'blur(0px)', y: 0, x: 0 }
          : initial
      }
      transition={{
        duration: 1.0,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
