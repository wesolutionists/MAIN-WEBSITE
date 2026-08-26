import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'nav'
  wordmark?: boolean
  tagline?: boolean
}

const sizes = {
  sm: { mark: 40, nameSize: '1.05rem', tagSize: '0.58rem' },
  md: { mark: 50, nameSize: '1.2rem', tagSize: '0.65rem' },
  lg: { mark: 68, nameSize: '1.45rem', tagSize: '0.72rem' },
  nav: { mark: 46, nameSize: '1.22rem', tagSize: '0.58rem' },
}

export default function Logo({ className = '', size = 'md', wordmark = true, tagline = true }: LogoProps) {
  const { mark, nameSize, tagSize } = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div style={{ width: mark, height: mark, flexShrink: 0, position: 'relative' }}>
        <Image
          src="/logo.jpg"
          alt="The Solutionists"
          fill
          sizes={`${mark}px`}
          style={{
            objectFit: 'contain',
            mixBlendMode: 'lighten',
            filter: 'contrast(1.1) brightness(1.05)',
          }}
          priority
        />
      </div>

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
          {tagline && (
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
          )}
        </div>
      )}
    </div>
  )
}
