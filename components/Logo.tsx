import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'mobile' | 'sm' | 'md' | 'lg' | 'nav'
  wordmark?: boolean
  tagline?: boolean
}

const sizes = {
  mobile: { mark: 26, nameSize: '0.64rem', nameSpacing: '0.05em', tagSize: '0.52rem' },
  sm: { mark: 40, nameSize: '1.05rem', nameSpacing: '0.18em', tagSize: '0.58rem' },
  md: { mark: 50, nameSize: '1.2rem', nameSpacing: '0.18em', tagSize: '0.65rem' },
  lg: { mark: 68, nameSize: '1.45rem', nameSpacing: '0.18em', tagSize: '0.72rem' },
  nav: { mark: 46, nameSize: '1.22rem', nameSpacing: '0.18em', tagSize: '0.58rem' },
}

export default function Logo({ className = '', size = 'md', wordmark = true, tagline = true }: LogoProps) {
  const { mark, nameSize, nameSpacing, tagSize } = sizes[size]

  return (
    <div className={`flex items-center ${size === 'mobile' ? 'gap-1.5' : 'gap-3'} ${className}`}>
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
              letterSpacing: nameSpacing,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            The Solutionists
          </span>
          {tagline && (
            <span
              className="font-body font-normal text-gold"
              style={{
                fontSize: tagSize,
                letterSpacing: '0.16em',
                opacity: 0.85,
                lineHeight: 1.3,
              }}
            >
              {'Building what the future is'}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
