'use client'

import { useId } from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  wordmark?: boolean
}

const sizes = {
  sm: { mark: 44, nameSize: '1.05rem', tagSize: '0.58rem' },
  md: { mark: 54, nameSize: '1.2rem', tagSize: '0.65rem' },
  lg: { mark: 72, nameSize: '1.45rem', tagSize: '0.72rem' },
}

export default function Logo({ className = '', size = 'md', wordmark = true }: LogoProps) {
  const uid = useId().replace(/:/g, '')
  const { mark, nameSize, tagSize } = sizes[size]
  const gradId = `tsGold-${uid}`

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* TS monogram mark — SVG lettermark */}
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={wordmark ? 'true' : undefined}
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id={gradId} x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C47A65" />
            <stop offset="60%" stopColor="#D4947E" />
            <stop offset="100%" stopColor="#C47A65" />
          </linearGradient>
        </defs>

        {/* Open circle arc — ~300°, gap at top-right */}
        <path
          d="M 50 12 A 38 38 0 1 0 82 31"
          stroke={`url(#${gradId})`}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* T — crossbar + stem, left of centre */}
        <line x1="32" y1="42" x2="54" y2="42" stroke={`url(#${gradId})`} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="43" y1="42" x2="43" y2="67" stroke={`url(#${gradId})`} strokeWidth="2.2" strokeLinecap="round" />

        {/* S — two opposing curves, right of centre */}
        <path
          d="M 62 40 C 69 40 69 47 62 50 C 55 53 55 61 62 61"
          stroke={`url(#${gradId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      {wordmark && (
        <div className="flex flex-col leading-none gap-1.5">
          <span
            className="font-display font-semibold text-ink"
            style={{
              fontSize: nameSize,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            The Solutionists
          </span>
          <span
            className="font-body font-normal"
            style={{
              fontSize: tagSize,
              letterSpacing: '0.28em',
              color: '#C47A65',
              opacity: 0.85,
              lineHeight: 1,
            }}
          >
            {'DESIGN · MARKET · AUTOMATE'}
          </span>
        </div>
      )}
    </div>
  )
}
