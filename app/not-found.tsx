import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#0A090C',
          color: '#F4EFE8',
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.3em',
              color: 'rgba(196, 122, 101, 0.7)',
              marginBottom: '1.5rem',
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Page not found.
          </h1>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(244, 239, 232, 0.55)',
              maxWidth: '380px',
              margin: '0 auto 2.5rem',
            }}
          >
            This page doesn&apos;t exist or has moved. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #C47A65, #D4947E, #C47A65)',
              color: '#0A080C',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            BACK TO HOME
          </Link>
        </div>
      </body>
    </html>
  )
}
