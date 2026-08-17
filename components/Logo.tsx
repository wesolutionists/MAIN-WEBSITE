import Image from 'next/image'

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
  const { mark, nameSize, tagSize } = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.jpg"
        alt="The Solutionists"
        width={mark}
        height={mark}
        style={{ flexShrink: 0, objectFit: 'contain' }}
        priority
      />

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
