import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import AuroraBg from '@/components/ui/AuroraBg'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'
import { solutions } from '@/lib/solutions'
import { CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Workforce for Business — Voice Agents, Chatbots & Support | The Solutionists',
  description:
    'Answer every call, chat and follow-up without hiring. AI voice agents, chatbots, customer support and receptionist agents built around how your business actually runs.',
  alternates: { canonical: '/solutions/ai-workforce' },
  openGraph: {
    title: 'AI Workforce for Business — Voice Agents, Chatbots & Support',
    description:
      'Answer every call, chat and follow-up without hiring. AI voice agents, chatbots, customer support and receptionist agents built around how your business actually runs.',
    url: 'https://www.wesolutionists.com/solutions/ai-workforce',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Workforce — The Solutionists' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'AI Workforce for Business — Voice Agents, Chatbots & Support',
    description:
      'Answer every call, chat and follow-up without hiring. AI voice agents, chatbots, customer support and receptionist agents built around how your business actually runs.',
    images: ['/og-image.jpg'],
  },
}

const painPoints = [
  'Calls going unanswered after hours, or during your busiest hours',
  'Leads that go cold because nobody followed up fast enough',
  'The same five questions answered over and over by your team',
  "You're growing, but hiring another person isn't the right move yet",
]

const features = [
  {
    name: 'AI Voice Agents',
    desc: 'Answer, qualify and route every call — even after hours — without a single ring going unanswered. Sounds natural, follows your scripts, and hands off to your team exactly when a human is needed.',
  },
  {
    name: 'AI Chatbots',
    desc: 'Live on your website and social channels, answering common questions instantly and capturing leads around the clock — only escalating the conversations that actually need a person.',
  },
  {
    name: 'AI Customer Support',
    desc: "Handles repetitive support questions day and night, resolving what it can and flagging what it can't — so your team spends time on problems that matter, not questions they've answered a hundred times.",
  },
  {
    name: 'AI Follow-Up Agents',
    desc: "Never let a lead go cold. Follows up with prospects and past customers on the schedule you set, so pipeline doesn't leak out the back door.",
  },
  {
    name: 'AI Receptionist Agents',
    desc: 'An always-on front desk that greets callers, books appointments and directs people to the right place — the way a great receptionist would.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We learn your business, your call/chat volume, and exactly where the friction is today.',
  },
  {
    number: '02',
    title: 'Build & Integrate',
    desc: 'We configure your AI workforce to your workflows, tone and existing tools — CRM, calendar, phone system.',
  },
  {
    number: '03',
    title: 'Launch & Monitor',
    desc: 'Your AI agents go live. We watch closely in the first weeks and tune based on real conversations.',
  },
  {
    number: '04',
    title: 'Ongoing Evolution',
    desc: 'Monthly refinement as your business changes, with new agents added whenever you need them.',
  },
]

const faqs = [
  {
    q: 'Will it sound robotic?',
    a: "No. Our voice and chat agents are built to sound natural and match your brand's tone — most callers don't realize they're not speaking to a person until it's helpful to know.",
  },
  {
    q: "What happens if the AI can't handle something?",
    a: "It hands off to your team immediately, with full context of the conversation so far — nobody has to repeat themselves, and nothing falls through the cracks.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most AI Workforce builds go from discovery call to live in under two weeks, depending on how many agents and integrations are involved.',
  },
  {
    q: 'Is my data secure?',
    a: "Yes. Conversations and customer data are handled through secure, access-controlled systems, and we never sell or share your data with third parties.",
  },
]

const pkg = solutions.find((s) => s.name === 'AI Workforce')!

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function AIWorkforcePage() {
  return (
    <>
      <AuroraBg />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                AI WORKFORCE
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                AI Workforce for businesses ready to scale without hiring.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p
                className="font-body font-normal text-ink-muted mt-6 mx-auto max-w-2xl"
                style={{ fontSize: '1.1rem', lineHeight: 1.9 }}
              >
                Voice agents, chatbots, customer support and follow-up — built around how your business actually runs, answering every call and chat whether it&apos;s 2pm or 2am.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    borderRadius: '50px',
                    boxShadow: '0 4px 24px rgba(196, 122, 101, 0.35)',
                  }}
                >
                  <CalendarCheck size={14} strokeWidth={2} aria-hidden="true" />
                  START THE CONVERSATION
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <AnimatedRule />

        {/* Who it's for */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="Who this is for">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                SOUND FAMILIAR?
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                If any of this sounds like your business, an AI Workforce closes the gap.
              </h2>
            </RevealOnScroll>
            <div className="flex flex-col gap-3">
              {painPoints.map((point, i) => (
                <RevealOnScroll key={point} delay={0.1 + i * 0.08}>
                  <div
                    className="flex items-start gap-4 p-5"
                    style={{ background: '#0F0D12', border: '1px solid rgba(196, 122, 101, 0.13)' }}
                  >
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ width: '4px', height: '4px', borderRadius: '999px', background: '#D4947E', marginTop: '0.6rem' }}
                      aria-hidden="true"
                    />
                    <p className="font-body font-normal text-ink-muted" style={{ fontSize: '1.02rem', lineHeight: 1.7 }}>
                      {point}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedRule />

        {/* What's included */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="What's included">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                WHAT&apos;S INCLUDED
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Five agents. One workforce.
              </h2>
            </RevealOnScroll>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((f, i) => (
                <RevealOnScroll key={f.name} delay={0.1 + i * 0.06}>
                  <div
                    className="p-7"
                    style={{ background: '#0F0D12', border: '1px solid rgba(196, 122, 101, 0.13)' }}
                  >
                    <h3 className="font-display font-medium text-gold-light mb-2.5" style={{ fontSize: '1.15rem' }}>
                      {f.name}
                    </h3>
                    <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.98rem', lineHeight: 1.8 }}>
                      {f.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedRule />

        {/* How it works */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="How it works">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                HOW IT WORKS
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                From first call to fully live.
              </h2>
            </RevealOnScroll>
            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <RevealOnScroll key={step.number} delay={0.1 + i * 0.08}>
                  <div className="flex gap-5 p-6" style={{ borderBottom: '1px solid rgba(196, 122, 101, 0.1)' }}>
                    <span
                      className="font-display font-light text-gold-light shrink-0"
                      style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display font-medium text-ink mb-1.5" style={{ fontSize: '1.15rem' }}>
                        {step.title}
                      </h3>
                      <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.96rem', lineHeight: 1.8 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedRule />

        {/* Pricing */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="Pricing">
          <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                YOUR INVESTMENT
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="mt-4">
                <span className="font-display font-semibold text-ink" style={{ fontSize: '3rem', lineHeight: 1 }}>
                  {pkg.price}
                </span>
                <p className="font-body font-medium text-ink-muted mt-2" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                  ONE-TIME IMPLEMENTATION
                </p>
                <p className="font-display font-semibold text-gold-light mt-4" style={{ fontSize: '1.3rem' }}>
                  + {pkg.monthly}<span className="font-body font-normal" style={{ fontSize: '0.8rem' }}>/mo</span>
                </p>
                <p className="font-body font-medium text-ink-dim mt-1" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                  ONGOING EVOLUTION
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <a
                href="/#packages"
                className="inline-block mt-8 font-body font-normal transition-colors duration-300"
                style={{ fontSize: '0.85rem', color: 'rgba(196,122,101,0.75)', letterSpacing: '0.05em' }}
              >
                See how this compares to our other solutions →
              </a>
            </RevealOnScroll>
          </div>
        </section>

        <AnimatedRule />

        {/* FAQ */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="AI Workforce FAQ">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                COMMON QUESTIONS
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-gold-light mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                About your AI Workforce.
              </h2>
            </RevealOnScroll>
            <dl className="flex flex-col gap-8">
              {faqs.map((faq, i) => (
                <RevealOnScroll key={faq.q} delay={0.1 + i * 0.06}>
                  <div>
                    <dt>
                      <h3 className="font-display font-medium text-ink mb-2" style={{ fontSize: '1.1rem' }}>
                        {faq.q}
                      </h3>
                    </dt>
                    <dd className="font-body font-normal text-ink-muted" style={{ fontSize: '0.98rem', lineHeight: 1.85 }}>
                      {faq.a}
                    </dd>
                  </div>
                </RevealOnScroll>
              ))}
            </dl>
          </div>
        </section>

        <AnimatedRule />

        {/* Cross-link + final CTA */}
        <section className="relative pt-14 pb-16 md:pt-16 md:pb-20 text-center" aria-label="Next steps">
          <div className="mx-auto max-w-2xl px-6 lg:px-10">
            <RevealOnScroll>
              <h2
                className="font-display font-semibold text-ink mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Ready to build your AI Workforce?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                  boxShadow: '0 4px 24px rgba(196, 122, 101, 0.35)',
                }}
              >
                <CalendarCheck size={14} strokeWidth={2} aria-hidden="true" />
                START THE CONVERSATION
              </a>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="font-body font-normal text-ink-dim mt-10" style={{ fontSize: '0.85rem' }}>
                Looking for something else?{' '}
                <Link href="/#services" className="transition-colors duration-300" style={{ color: '#C47A65' }}>
                  See all our Solutions →
                </Link>
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
