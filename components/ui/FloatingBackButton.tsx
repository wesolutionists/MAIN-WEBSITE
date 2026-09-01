'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function FloatingBackButton() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="fixed z-40 flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
        left: '1.5rem',
        padding: '0.7rem 1.1rem',
        borderRadius: '999px',
        background: 'rgba(7, 6, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(196, 122, 101, 0.25)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        color: 'rgba(196, 122, 101, 0.85)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.6)'
        e.currentTarget.style.color = '#D4947E'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.25)'
        e.currentTarget.style.color = 'rgba(196, 122, 101, 0.85)'
      }}
    >
      <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
      <span className="font-body font-medium" style={{ fontSize: '0.76rem', letterSpacing: '0.1em' }}>
        HOME
      </span>
    </Link>
  )
}
