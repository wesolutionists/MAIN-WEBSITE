import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import AuroraBg from '@/components/ui/AuroraBg'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'
import FloatingBackButton from '@/components/ui/FloatingBackButton'
import { CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Who We Are | The Solutionists',
  description:
    'A small, senior team building intelligent systems and workforce for ambitious businesses — not a big agency playbook. Learn who The Solutionists are and how we work.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us — Who We Are | The Solutionists',
    description:
      'A small, senior team building intelligent systems and workforce for ambitious businesses — not a big agency playbook.',
    url: 'https://www.wesolutionists.com/about',
    siteName: 'The Solutionists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About The Solutionists' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    title: 'About Us — Who We Are | The Solutionists',
    description:
      'A small, senior team building intelligent systems and workforce for ambitious businesses — not a big agency playbook.',
    images: ['/og-image.jpg'],
  },
}

const pillars = [
  {
    number: '01',
    title: 'Curious By Nature',
    desc: 'We stay close to what’s changing — testing new tools before they’re mainstream, tracking how AI is reshaping every industry we touch, and constantly asking whether there’s a better way to solve the problem in front of us. Curiosity isn’t a value on a wall for us — it’s the reason our solutions don’t go stale.',
  },
  {
    number: '02',
    title: 'Built With Purpose',
    desc: 'We don’t build technology for the sake of technology, and we don’t chase trends to look impressive. Every automation, every system, every line of code exists because it solves something real for the business it’s built for — not because it was interesting to build.',
  },
  {
    number: '03',
    title: 'Obsessed With What’s Next',
    desc: 'AI and technology aren’t slowing down, and neither are we. We’re deeply involved in where this is all heading — because the businesses that embrace what’s next now are the ones that will still be relevant when it becomes the new normal.',
  },
]

const differentiators = [
  {
    title: 'A senior team, not a rotating one',
    desc: 'You won’t get handed off to a junior account manager after the sales call. The people who scope your project are the people who build it — which means fewer miscommunications, faster iterations, and work that actually reflects what was promised.',
  },
  {
    title: 'Systems that compound, not just launch',
    desc: 'A website that looks good on launch day and stagnates for three years isn’t a solution — it’s a liability waiting to happen. We build with evolution built in, so what we ship keeps getting more valuable as your business grows around it.',
  },
  {
    title: 'Honesty over the upsell',
    desc: 'If your business doesn’t need AI agents yet, or if a cheaper fix will move the needle faster than a full rebuild, we’ll say so — even when the bigger package would’ve been the easier sale. Trust compounds too, and we’d rather build it than spend it.',
  },
  {
    title: 'One team across design, AI and automation',
    desc: 'Most agencies specialize in one lane — design, or ads, or automation — and stitch together contractors for the rest. We build the website, the AI workforce and the business systems as one connected stack, designed to work together from day one instead of bolted on after.',
  },
]

const approach = [
  {
    number: '01',
    title: 'Understand Before We Build',
    desc: 'Every engagement starts with genuinely understanding how your business works today — what’s manual, what’s breaking, where the opportunity actually is. We don’t pitch a package before we know what you need.',
  },
  {
    number: '02',
    title: 'Design Around Your Business, Not a Template',
    desc: 'You get a solution shaped around how you actually operate — not a generic build you have to adapt your workflow to fit. If something doesn’t serve your business specifically, it doesn’t make it into the build.',
  },
  {
    number: '03',
    title: 'Build, Launch, and Stay Close',
    desc: 'We build fast without cutting corners, and we stay involved through launch — testing, refining and making sure what we shipped actually performs the way it was designed to, not just the way it looked in the mockup.',
  },
  {
    number: '04',
    title: 'Evolve as You Grow',
    desc: 'The business you have in a year won’t be the business you have today. Our systems are built to evolve alongside you — new features, new automations, new capabilities added as you need them, not a static deliverable that gets stale the moment it ships.',
  },
]

export default function AboutPage() {
  return (
    <>
      <AuroraBg />
      <Header />
      <FloatingBackButton />

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                WHO WE ARE
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                We build what we believe the future is.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p
                className="font-body font-normal text-ink-muted mt-6 mx-auto max-w-2xl"
                style={{ fontSize: '1.1rem', lineHeight: 1.9 }}
              >
                A small, senior team — not a big agency playbook. Every solution we build is designed to compound in value over time, not just look good the day it launches.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <AnimatedRule />

        {/* Our story */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="Our story">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                WHY WE EXIST
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                The world is evolving. We help businesses evolve with it.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p className="font-body font-normal text-ink-muted mb-5" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                Most businesses aren&apos;t held back by a lack of effort. They&apos;re held back by outdated systems, tools that don&apos;t talk to each other, and a digital presence that doesn&apos;t reflect how good the business actually is behind the scenes. The gap between what a business is capable of and what its website, its ads and its operations actually show the world — that gap is where opportunity quietly leaks out every single day.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="font-body font-normal text-ink-muted mb-5" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                We started The Solutionists because we kept seeing the same pattern: ambitious businesses doing genuinely good work, but held back by the same handful of solvable problems — a website that doesn&apos;t convert, no system to follow up with leads before they go cold, hours a week lost to manual work that a well-built automation could handle in the background. None of that requires a bigger team. It requires the right systems, built correctly, by people who understand both the technology and the business behind it.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.25}>
              <p className="font-body font-normal text-ink-muted" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                That&apos;s what we build — websites, AI workforce and business systems that close that gap. Not a bigger, slower version of what every other agency already offers, but the right solution for exactly where a business is today, built to keep working as that business grows into where it&apos;s headed next.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <AnimatedRule />

        {/* Pillars */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="What we believe">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                WHAT WE BELIEVE
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Three ideas behind everything we build.
              </h2>
            </RevealOnScroll>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <RevealOnScroll key={pillar.number} delay={0.1 + i * 0.08}>
                  <div className="h-full p-7" style={{ background: '#0F0D12', border: '1px solid rgba(196, 122, 101, 0.13)' }}>
                    <span
                      className="font-display font-light text-ink-muted block mb-3"
                      style={{ fontSize: '0.88rem', letterSpacing: '0.1em' }}
                    >
                      {pillar.number}
                    </span>
                    <h3 className="font-display font-medium text-gold-light mb-2.5" style={{ fontSize: '1.15rem' }}>
                      {pillar.title}
                    </h3>
                    <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.98rem', lineHeight: 1.8 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedRule />

        {/* Differentiators */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="What makes us different">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                WHAT MAKES US DIFFERENT
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Not a bigger agency. A better fit.
              </h2>
            </RevealOnScroll>
            <div className="grid gap-4 md:grid-cols-2">
              {differentiators.map((d, i) => (
                <RevealOnScroll key={d.title} delay={0.1 + i * 0.06}>
                  <div className="p-7" style={{ background: '#0F0D12', border: '1px solid rgba(196, 122, 101, 0.13)' }}>
                    <h3 className="font-display font-medium text-gold-light mb-2.5" style={{ fontSize: '1.15rem' }}>
                      {d.title}
                    </h3>
                    <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.98rem', lineHeight: 1.8 }}>
                      {d.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <AnimatedRule />

        {/* How we work / approach */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16" aria-label="How we work">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
              >
                HOW WE WORK
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink mb-10"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                What working with us actually looks like.
              </h2>
            </RevealOnScroll>
            <div className="flex flex-col gap-2">
              {approach.map((step, i) => (
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

        {/* Cross-link + final CTA */}
        <section className="relative pt-14 pb-16 md:pt-16 md:pb-20 text-center" aria-label="Next steps">
          <div className="mx-auto max-w-2xl px-6 lg:px-10">
            <RevealOnScroll>
              <h2
                className="font-display font-semibold text-ink mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              >
                Want to see if we&apos;re the right fit?
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
                Looking for what we build?{' '}
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
