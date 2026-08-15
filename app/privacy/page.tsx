import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — The Solutionists',
  description: 'How The Solutionists collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: `When you use our website or submit a form, we may collect your name, email address, website URL, and any message or details you choose to share. We do not collect payment information directly — all transactions are handled by third-party processors.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you provide solely to respond to your enquiries, deliver the services you've requested, and improve our offerings. We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: 'Cookies',
    body: `Our website may use essential cookies to ensure basic functionality. We do not use tracking or advertising cookies. You can disable cookies in your browser settings at any time without affecting your ability to use the site.`,
  },
  {
    title: 'Third-Party Services',
    body: `We use Web3Forms to process contact form submissions. Your data is transmitted securely and used only for delivering your message to us. We are not responsible for the privacy practices of third-party services we link to.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, please contact us at the email address listed on this site. We will respond within 30 days.`,
  },
  {
    title: 'Security',
    body: `We take reasonable technical and organisational measures to protect your information from unauthorised access, disclosure, or loss. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.`,
  },
]

export default function PrivacyPage() {
  return (
    <div
      style={{
        background: '#0A090C',
        color: '#F4EFE8',
        minHeight: '100dvh',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid rgba(196, 122, 101, 0.12)',
          padding: '1.5rem 2rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: 'rgba(196, 122, 101, 0.7)',
            textDecoration: 'none',
          }}
        >
          ← BACK TO HOME
        </Link>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(3rem, 8vw, 6rem) 2rem' }}>
        {/* Title */}
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'rgba(196,122,101,0.7)', marginBottom: '1.25rem' }}>
          LEGAL
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.88rem', color: 'rgba(244,239,232,0.4)', marginBottom: '3.5rem', letterSpacing: '0.05em' }}>
          Effective date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(196,122,101,0.5), transparent)',
            marginBottom: '3.5rem',
          }}
        />

        {/* Intro */}
        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(244,239,232,0.65)', marginBottom: '3rem' }}>
          The Solutionists (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains
          what information we collect, how we use it, and your rights in relation to it.
        </p>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem',
                  color: '#F4EFE8',
                }}
              >
                {i + 1}. {s.title}
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(244,239,232,0.6)' }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            border: '1px solid rgba(196,122,101,0.15)',
            background: '#0F0D12',
          }}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'rgba(196,122,101,0.7)', marginBottom: '0.5rem' }}>
            QUESTIONS?
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(244,239,232,0.6)' }}>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:hello@thesolutionists.com" style={{ color: '#C47A65', textDecoration: 'none' }}>
              hello@thesolutionists.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
