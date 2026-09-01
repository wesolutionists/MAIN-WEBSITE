'use client'

import RevealOnScroll from '../ui/RevealOnScroll'

const tools = [
  'Stripe',
  'Shopify',
  'Meta',
  'Google Workspace',
  'WhatsApp',
  'n8n',
  'Slack',
]

export default function TrustedTools() {
  return (
    <section
      className="relative py-10 md:py-12 overflow-hidden"
      aria-label="Tools we integrate with"
      style={{ borderTop: '1px solid rgba(196, 122, 101, 0.08)' }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <RevealOnScroll>
          <p
            className="font-body font-medium"
            style={{ fontSize: '0.7rem', letterSpacing: '0.32em', color: 'rgba(196,122,101,0.55)' }}
          >
            CONNECTS WITH THE TOOLS YOU ALREADY USE
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center font-body font-normal text-ink-muted"
                style={{
                  padding: '0.55rem 1.3rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(196, 122, 101, 0.16)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.03em',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
