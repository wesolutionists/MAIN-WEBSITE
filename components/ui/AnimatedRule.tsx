'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  delay?: number
  className?: string
}

export default function AnimatedRule({ delay = 0, className }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })

  return (
    <div ref={ref} className={`h-px overflow-hidden ${className ?? ''}`} style={{ background: 'transparent' }} aria-hidden="true">
      <motion.div
        className="h-full"
        style={{ background: 'linear-gradient(90deg, rgba(196,122,101,0.55), rgba(196,122,101,0.18), transparent)' }}
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}
