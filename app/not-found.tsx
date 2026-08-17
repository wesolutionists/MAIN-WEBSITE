import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | The Solutionists',
  description: 'This page does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div
      style={{
        background: '#0A090C',
        color: '#F4EFE8',
        minHeight: '100dvh',
        fontFamily: 'Belleza, Georgia, serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,122,101,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* 404 ghost number */}
      <p
        aria-hidden="true"
        style={{
          fontFamily: 'Cormorant, Georgia, serif',
          fontSize: 'clamp(7rem, 22vw, 16rem)',
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(196,122,101,0.18)',
          userSelect: 'none',
          marginBottom: '-0.1em',
        }}
      >
        404
      </p>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          width: '48px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C47A65, transparent)',
          margin: '0 auto 2rem',
        }}
      />

      <p
        style={{
          fontSize: '0.72rem',
          letterSpacing: '0.3em',
          color: 'rgba(196,122,101,0.7)',
          marginBottom: '1.25rem',
        }}
      >
        PAGE NOT FOUND
      </p>

      <h1
        style={{
          fontFamily: 'Cormorant, Georgia, serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          maxWidth: '480px',
        }}
      >
        This page doesn't exist.
      </h1>

      <p
        style={{
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'rgba(244,239,232,0.5)',
          maxWidth: '380px',
          marginBottom: '2.5rem',
        }}
      >
        The page you're looking for may have moved or never existed. Let's get you back on track.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.85rem 2.2rem',
          background: 'linear-gradient(135deg, #C47A65, #D4947E, #C47A65)',
          color: '#fff',
          fontFamily: 'Belleza, Georgia, serif',
          fontSize: '0.72rem',
          letterSpacing: '0.18em',
          borderRadius: '50px',
          textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(196,122,101,0.3)',
        }}
      >
        BACK TO HOME
      </Link>
    </div>
  )
}
