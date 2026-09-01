import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import AuroraBg from '@/components/ui/AuroraBg'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'
import FloatingBackButton from '@/components/ui/FloatingBackButton'
import { solutions } from '@/lib/solutions'
import { CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Foundation — Websites, Meta Ads & Lead Generation | The Solutionists',
  description:
    'A website built to convert, ads built around your real numbers, and a brand that looks the same everywhere. The digital foundation your business grows on.',
  alternates: { canonical: '/solutions/digital-foundation' },
  openGraph: {
    title: 'Digital Foundation — Websites, Meta Ads & Lead Generation',
    description:
      'A website built to convert, ads built around your real numbers, and a brand that looks the same everywhere. The digital foundation your business grows on.',
    url: 'https://www.wesolutionists.com/solutions/digital-foundation',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Digital Foundation — The Solutionists' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'Digital Foundation — Websites, Meta Ads & Lead Generation',
    description:
      'A website built to convert, ads built around your real numbers, and a brand that looks the same everywhere. The digital foundation your business grows on.',
    images: ['/og-image.jpg'],
  },
}

const painPoints = [
  'Your website looks outdated next to competitors who are winning the click',
  "You're running ads that send traffic to a site that doesn't convert",
  "You don't show up when people search for what you do",
  'Your brand looks like three different businesses across your site, ads and social',
]

const features = [
  {
    name: 'Custom Websites',
    desc: 'A fast, premium website built to convert visitors into customers — not just look nice. Every page is designed around a clear next step.',
  },
  {
    name: 'E-commerce Websites',
    desc: 'A store built to sell, not just display products — clean checkout, mobile-first design, and the trust signals that turn browsers into buyers.',
  },
  {
    name: 'Meta Ads Systems',
    desc: 'Facebook and Instagram campaigns built around your actual offer, tracked and optimized against real numbers — not likes and impressions.',
  },
  {
    name: 'Creative Strategy',
    desc: 'Consistent, on-brand visuals and messaging across your website, ads and social — so every touchpoint looks like the same business.',
  },
  {
    name: 'Lead Generation',
    desc: 'Landing pages, forms and follow-up systems built specifically to turn traffic into leads you can actually reach.',
  },
  {
    name: 'SEO Optimization',
    desc: "Technical and on-page SEO so your site actually shows up when people search for what you do — not just when they search your business name.",
  },
  {
    name: 'Social Media Management',
    desc: 'Consistent posting and content built around your brand voice, keeping your social presence active without it eating your week.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: "We learn your business, your current presence, and what \"working\" actually looks like for you.",
  },
  {
    number: '02',
    title: 'Design & Build',
    desc: 'We design and build your website and creative assets around your brand and your customer.',
  },
  {
    number: '03',
    title: 'Launch & Connect Ads',
    desc: 'Your site goes live, connected to a Meta Ads system built around your actual offer.',
  },
  {
    number: '04',
    title: 'Ongoing Growth',
    desc: 'We monitor performance and refine monthly as your business and market change.',
  },
]

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Most Digital Foundation builds go live within 2-4 weeks, depending on scope and how quickly we get content and feedback from you.',
  },
  {
    q: 'Do you handle hosting and maintenance?',
    a: "Yes. We handle hosting, updates and technical maintenance so you don't have to think about it — that's part of the ongoing evolution fee.",
  },
  {
    q: 'Can you run ads without building a new website?',
    a: "In some cases, yes — if your existing site converts well enough to send traffic to. We'll tell you honestly during the discovery call if a new site isn't necessary yet.",
  },
  {
    q: 'What if I already have a website I like?',
    a: "We can build the Meta Ads and lead generation systems around your existing site, or refresh specific pages instead of a full rebuild — whatever actually moves the needle.",
  },
]

const pkg = solutions.find((s) => s.name === 'Digital Foundation')!

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function DigitalFoundationPage() {
  return (
    <>
      <AuroraBg />
      <Header />
      <FloatingBackButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                DIGITAL FOUNDATION
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                A digital foundation built to acquire and grow.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p
                className="font-body font-normal text-ink-muted mt-6 mx-auto max-w-2xl"
                style={{ fontSize: '1.1rem', lineHeight: 1.9 }}
              >
                A website built to convert, ads built around your real numbers, and a brand that looks the same everywhere someone finds you.
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
                If any of this sounds like your business, your digital foundation needs work.
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
                Everything your business needs to be found and chosen.
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
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="Digital Foundation FAQ">
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
                About your Digital Foundation.
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
                Ready to build your Digital Foundation?
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
