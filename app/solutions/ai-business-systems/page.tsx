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
  title: 'AI Business Systems — Custom Software for Your Industry | The Solutionists',
  description:
    'Home Services OS, Real Estate OS, E-commerce OS and fully custom business systems — built around how your business actually works, not a generic template.',
  alternates: { canonical: '/solutions/ai-business-systems' },
  openGraph: {
    title: 'AI Business Systems — Custom Software for Your Industry',
    description:
      'Home Services OS, Real Estate OS, E-commerce OS and fully custom business systems — built around how your business actually works, not a generic template.',
    url: 'https://www.wesolutionists.com/solutions/ai-business-systems',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Business Systems — The Solutionists' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'AI Business Systems — Custom Software for Your Industry',
    description:
      'Home Services OS, Real Estate OS, E-commerce OS and fully custom business systems — built around how your business actually works, not a generic template.',
    images: ['/og-image.jpg'],
  },
}

const painPoints = [
  "You're running parts of your business on spreadsheets and sticky notes",
  "Leads and customers fall through the cracks between tools that don't talk to each other",
  'Your team spends hours a week on manual work that could run itself',
  "Off-the-shelf software doesn't fit how your industry actually works",
]

const features = [
  {
    name: 'Home Services OS',
    desc: 'A system built around how service businesses actually work — scheduling, dispatch, follow-up and invoicing connected in one place.',
  },
  {
    name: 'Real Estate OS',
    desc: 'Manage listings, leads and client communication in a system built around a real estate workflow, not a generic CRM you have to bend to fit.',
  },
  {
    name: 'E-commerce OS',
    desc: 'Inventory, orders, fulfillment and customer communication connected — so nothing falls through the cracks as you scale.',
  },
  {
    name: 'Business Automation Systems',
    desc: 'We automate the repetitive work behind the scenes — data entry, follow-ups, notifications — so your team spends time on what actually needs a human.',
  },
  {
    name: 'Custom Business Systems',
    desc: "If your business doesn't fit a template, we build one that fits your business — from the ground up, around your actual workflow.",
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We map your current workflow — the tools you use, where things break, and what a better system would actually look like.',
  },
  {
    number: '02',
    title: 'Design the System',
    desc: "We design a system built specifically around your business, not a generic template you have to adapt to.",
  },
  {
    number: '03',
    title: 'Build & Integrate',
    desc: "We build and connect it to the tools you already use, so nothing has to be replaced that doesn't need to be.",
  },
  {
    number: '04',
    title: 'Ongoing Evolution',
    desc: 'As your business grows and changes, your system evolves with it — new features added as you need them.',
  },
]

const faqs = [
  {
    q: "What if my industry isn't listed?",
    a: "Home Services, Real Estate and E-commerce are our most common builds, not a limit. If your business doesn't fit those categories, we design a fully custom system around how you actually operate.",
  },
  {
    q: 'How is this different from off-the-shelf software?',
    a: "Off-the-shelf tools make you adapt your workflow to fit their software. We build the system around your workflow, so your team doesn't have to change how they work to use it.",
  },
  {
    q: 'Will it work with the tools I already use?',
    a: 'In most cases, yes. We integrate with your existing CRM, calendar, phone system and other business software rather than asking you to replace everything.',
  },
  {
    q: 'How long does it take to build?',
    a: "Timelines depend on scope — a focused automation might take one to two weeks, while a full custom system typically takes four to eight weeks from discovery to launch.",
  },
]

const pkg = solutions.find((s) => s.name === 'AI Business Systems')!

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function AIBusinessSystemsPage() {
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
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <div className="text-left mb-10 md:mb-14">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-body font-normal transition-colors duration-300"
                style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'rgba(196, 122, 101, 0.75)' }}
              >
                ← BACK TO HOME
              </Link>
            </div>
            <RevealOnScroll>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                AI BUSINESS SYSTEMS
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                Get your own intelligent system, built around your business.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p
                className="font-body font-normal text-ink-muted mt-6 mx-auto max-w-2xl"
                style={{ fontSize: '1.1rem', lineHeight: 1.9 }}
              >
                Home Services OS, Real Estate OS, E-commerce OS or something fully custom — software that fits how you actually work, not the other way around.
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
                If any of this sounds like your business, you need a real system.
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
                A system built for your industry — or entirely your own.
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
                From how you work today to a system that runs it.
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
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="AI Business Systems FAQ">
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
                About your AI Business System.
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
                Ready to build your system?
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
