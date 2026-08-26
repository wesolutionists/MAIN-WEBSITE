'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!window.matchMedia('(hover: none), (pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[500px] w-[500px] rounded-full will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(196, 122, 101, 0.025) 0%, rgba(196, 122, 101, 0.008) 40%, transparent 70%)',
        transition: 'transform 0.18s ease-out',
      }}
      aria-hidden="true"
    />
  )
}
