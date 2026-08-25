import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — The Solutionists',
  description: 'How The Solutionists collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — The Solutionists',
    description: 'How The Solutionists collects, uses and protects your personal information.',
    url: 'https://www.wesolutionists.com/privacy',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Solutionists — Privacy Policy' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'Privacy Policy — The Solutionists',
    description: 'How The Solutionists collects, uses and protects your personal information.',
    images: ['/og-image.jpg'],
  },
}

const sections = [
  {
    title: 'What We Collect',
    body: `When you reach out through our website or fill in a form, we may receive your name, email address, website URL and any details you choose to include in your message. We never collect payment information directly — billing is handled entirely through secure third-party processors.`,
  },
  {
    title: 'Why We Collect It',
    body: `The information you share is used exclusively to respond to your enquiry, deliver the service you requested and refine the quality of our work over time. We do not sell your data, rent it out or pass it to any third party for advertising or marketing purposes.`,
  },
  {
    title: 'Cookies & Analytics',
    body: `Our website uses Google Analytics 4 (GA4) to understand how visitors interact with our pages. GA4 may set cookies and collect anonymised data such as page views, session duration and general location. This data is used solely to improve the site experience and is never sold or used for advertising targeting. We do not use advertising cookies or behavioural profiling tools beyond this. You are free to disable cookies or use a browser extension to opt out of GA4 at any time — doing so will not affect your ability to browse or contact us.`,
  },
  {
    title: 'Third-Party Tools',
    body: `We use Web3Forms to receive contact form submissions. Your message travels securely to our inbox and is not stored on their servers beyond delivery. We also use Google Analytics 4 for site analytics and Vercel Analytics for performance monitoring — both process data in accordance with their own privacy policies. We are not responsible for the independent privacy practices of any external services linked from our website.`,
  },
  {
    title: 'How Long We Keep It',
    body: `We hold your personal information only for as long as it serves the purpose for which it was collected, or as legally required. Once that period ends, the data is deleted. You may request earlier removal at any time by writing to us directly.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to request access to, correction of or deletion of any personal data we hold about you. Submit your request to the email address on this page and we will respond within 30 days. No justification is required — your privacy is yours.`,
  },
  {
    title: 'How We Protect It',
    body: `We apply reasonable technical and organisational measures to safeguard your information from unauthorised access, loss or disclosure. That said, no method of internet transmission is entirely immune to risk, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Policy Updates',
    body: `We may revise this Privacy Policy as our services evolve or regulations change. Any updates will appear on this page with a revised effective date. Continued use of our website after changes are published constitutes acceptance of the updated terms.`,
  },
]

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0A090C', color: '#F4EFE8', minHeight: '100dvh', fontFamily: 'Belleza, Georgia, serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(196, 122, 101, 0.12)', padding: '1.5rem 2rem' }}>
        <Link
          href="/"
          style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(196, 122, 101, 0.7)', textDecoration: 'none' }}
        >
          ← BACK TO HOME
        </Link>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(3rem, 8vw, 6rem) 2rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'rgba(196,122,101,0.7)', marginBottom: '1.25rem' }}>
          LEGAL
        </p>
        <h1
          style={{
            fontFamily: 'Cormorant, Georgia, serif',
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

        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,122,101,0.5), transparent)', marginBottom: '3.5rem' }} />

        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(244,239,232,0.65)', marginBottom: '3rem' }}>
          At The Solutionists, your privacy is not a checkbox — it is a commitment. This policy explains
          what we collect, how we use it and what control you have over it.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2
                style={{
                  fontFamily: 'Cormorant, Georgia, serif',
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
            Reach us directly at{' '}
            <a href="https://mail.google.com/mail/?view=cm&to=hello@wesolutionists.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C47A65', textDecoration: 'none' }}>
              hello@wesolutionists.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
