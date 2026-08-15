'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let x = 0
    let y = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const tick = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

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
