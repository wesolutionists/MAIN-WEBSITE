import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — The Solutionists',
  description: 'Terms and conditions governing the use of The Solutionists services.',
}

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the services provided by The Solutionists, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: 'Services',
    body: `The Solutionists provides web design and development, digital marketing, and business automation services. The scope, timeline, and deliverables for each engagement will be outlined in a separate project agreement or proposal provided to the client.`,
  },
  {
    title: 'Payment',
    body: `Payment terms are specified in individual project agreements. Unless otherwise agreed, a deposit is required before work begins. Remaining balances are due upon project completion. Late payments may result in project delays or suspension of services.`,
  },
  {
    title: 'Intellectual Property',
    body: `Upon receipt of full payment, you will own the final deliverables produced for your project. We retain the right to display completed work in our portfolio unless you request otherwise in writing. We retain ownership of any proprietary tools, frameworks, or code libraries used in delivering our services.`,
  },
  {
    title: 'Client Responsibilities',
    body: `You agree to provide accurate information, timely feedback, and any content or assets required for project completion. Delays caused by late client input may extend project timelines. You warrant that any materials you provide do not infringe on third-party rights.`,
  },
  {
    title: 'Revisions and Changes',
    body: `Each project includes a specified number of revision rounds as outlined in your project agreement. Requests beyond the agreed scope may be subject to additional fees. Significant scope changes will be documented in a revised proposal.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by law, The Solutionists shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid for the specific service in question.`,
  },
  {
    title: 'Confidentiality',
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of the working relationship.`,
  },
  {
    title: 'Termination',
    body: `Either party may terminate a project with written notice. In the event of termination, you will be invoiced for work completed to date. Deposits are non-refundable unless otherwise agreed in writing.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation before any formal proceedings.`,
  },
  {
    title: 'Changes to These Terms',
    body: `We reserve the right to update these Terms of Service at any time. Updated terms will be posted on this page. Continued use of our services after any changes constitutes acceptance of the revised terms.`,
  },
]

export default function TermsPage() {
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
          Terms of Service
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
          Please read these Terms of Service carefully before engaging The Solutionists for any service.
          By proceeding with a project or using our website, you acknowledge that you have read, understood,
          and agree to be bound by these terms.
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
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:hello@wesolutionists.com" style={{ color: '#C47A65', textDecoration: 'none' }}>
              hello@wesolutionists.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
