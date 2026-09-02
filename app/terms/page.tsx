import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — The Solutionists',
  description: 'Terms and conditions governing the use of The Solutionists services.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service — The Solutionists',
    description: 'Terms and conditions governing the use of The Solutionists services.',
    url: 'https://www.wesolutionists.com/terms',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Solutionists — Terms of Service' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'Terms of Service — The Solutionists',
    description: 'Terms and conditions governing the use of The Solutionists services.',
    images: ['/og-image.jpg'],
  },
}

const sections = [
  {
    title: 'Acceptance',
    body: `By engaging The Solutionists for any service or browsing our website, you confirm that you have read and agree to these Terms of Service. If any part of these terms does not suit your situation, please reach out before proceeding — we are happy to clarify.`,
  },
  {
    title: 'Scope of Services',
    body: `The Solutionists delivers web design and development, digital marketing and business automation services. The precise scope, timeline and deliverables for each project are defined in a separate proposal or agreement issued prior to commencement. Nothing outside that document is implied.`,
  },
  {
    title: 'Payment',
    body: `Payment terms are specified per project. A deposit is typically required before work begins. The remaining balance becomes due upon completion unless otherwise agreed in writing. Projects paused by outstanding payment may incur delays, and resumed timelines are subject to availability.`,
  },
  {
    title: 'Ownership of Deliverables',
    body: `Once full payment is received, you own the final deliverables created for your project. We reserve the right to feature completed work in our portfolio unless you request otherwise in writing prior to project close. Proprietary tools, frameworks or internal libraries we use remain our intellectual property regardless of payment.`,
  },
  {
    title: 'Your Responsibilities',
    body: `You agree to supply accurate information, provide timely feedback and deliver any required content or assets within agreed timeframes. Delays on your end may shift the project timeline accordingly. You also confirm that any materials you provide do not infringe on anyone else's rights.`,
  },
  {
    title: 'Revisions',
    body: `Each project includes a defined number of revision rounds as stated in your proposal. Requests that fall outside the agreed scope may attract additional fees. Significant changes to the project direction will be captured in a revised agreement before work continues.`,
  },
  {
    title: 'Liability',
    body: `To the extent permitted by law, The Solutionists is not liable for indirect, incidental or consequential losses arising from the use of our services or deliverables. Our total liability in any case is capped at the amount paid for the specific service in question.`,
  },
  {
    title: 'Confidentiality',
    body: `Both parties agree to protect any sensitive or proprietary information shared during the engagement. This obligation does not expire when the project ends — it continues for as long as the information remains non-public.`,
  },
  {
    title: 'Termination',
    body: `Either party may end a project by providing written notice. Work completed up to the point of termination will be invoiced accordingly. Deposits are non-refundable unless a separate written agreement states otherwise.`,
  },
  {
    title: 'Governing Law',
    body: `These terms are governed by applicable law. Should any dispute arise, both parties commit to resolving it through good-faith discussion before pursuing formal action.`,
  },
  {
    title: 'Changes to These Terms',
    body: `We may update these Terms of Service at any time. Revised terms take effect when posted to this page. Continuing to use our services after that point means you accept the changes.`,
  },
]

export default function TermsPage() {
  return (
    <div style={{ background: '#0A090C', color: '#F4EFE8', minHeight: '100dvh', fontFamily: 'Belleza, Georgia, serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(196, 122, 101, 0.12)', padding: '1.5rem 2rem' }}>
        <Link
          href="/"
          style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(196, 122, 101, 0.85)', textDecoration: 'none' }}
        >
          ← BACK TO HOME
        </Link>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(3rem, 8vw, 6rem) 2rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'rgba(196,122,101,0.85)', marginBottom: '1.25rem' }}>
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
          Terms of Service
        </h1>
        <p style={{ fontSize: '0.88rem', color: 'rgba(244,239,232,0.55)', marginBottom: '3.5rem', letterSpacing: '0.05em' }}>
          Effective date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(196,122,101,0.5), transparent)', marginBottom: '3.5rem' }} />

        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(244,239,232,0.65)', marginBottom: '3rem' }}>
          These terms govern every engagement between you and The Solutionists. We have written them
          to be clear and fair — please read them before we begin working together.
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
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'rgba(196,122,101,0.85)', marginBottom: '0.5rem' }}>
            QUESTIONS?
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(244,239,232,0.6)' }}>
            If anything here is unclear, reach out at{' '}
            <a href="https://mail.google.com/mail/?view=cm&to=hello@wesolutionists.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C47A65', textDecoration: 'none' }}>
              hello@wesolutionists.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
