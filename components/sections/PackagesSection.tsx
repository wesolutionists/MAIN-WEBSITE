'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from '../ui/RevealOnScroll'
import { Check } from 'lucide-react'

interface Props {
  onConsultClick: (packageName: string) => void
}

const packages = [
  {
    number: '01',
    name: 'Digital Foundation',
    promise: 'Your foundation, built to convert.',
    price: '$299',
    monthly: '$99',
    featured: false,
    features: [
      'Custom Websites',
      'E-commerce Websites',
      'Meta Ads Systems',
      'Creative Strategy',
      'Lead Generation',
    ],
    cta: 'Start Building',
  },
  {
    number: '02',
    name: 'AI Workforce',
    promise: 'A team that never clocks out.',
    price: '$799+',
    monthly: '$199',
    featured: true,
    features: [
      'AI Voice Agents',
      'AI Chatbots',
      'AI Customer Support',
      'AI Follow-Up Agents',
      'AI Receptionist Agents',
    ],
    cta: 'Build Your Workforce',
  },
  {
    number: '03',
    name: 'AI Business Systems',
    promise: 'Software built around how you work.',
    price: '$1,499+',
    monthly: '$399',
    featured: false,
    features: [
      'Home Services OS',
      'Real Estate OS',
      'E-commerce OS',
      'Business Automation Systems',
      'CUSTOM BUSINESS SYSTEMS',
    ],
    cta: 'Build Your System',
  },
]

function PricingCard({
  pkg,
  onConsultClick,
}: {
  pkg: (typeof packages)[0]
  onConsultClick: (packageName: string) => void
}) {
  const [hovered, setHovered] = useState(false)

  // Featured card: CSS animation handles border/shadow at idle; inline style takes over on hover
  const featuredIdle = pkg.featured && !hovered

  return (
    <motion.article
      className={`group relative flex flex-col gap-4 p-6 md:p-7 h-full cursor-default${featuredIdle ? ' featured-card-pulse' : ''}`}
      style={{
        background: hovered ? '#161320' : pkg.featured ? '#131118' : '#0F0D12',
        ...(!featuredIdle && {
          border: hovered
            ? '1px solid rgba(196, 122, 101, 0.45)'
            : pkg.featured
            ? '1px solid rgba(196, 122, 101, 0.35)'
            : '1px solid rgba(196, 122, 101, 0.13)',
          boxShadow: hovered
            ? '0 32px 80px rgba(196,122,101,0.18), 0 10px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(196,122,101,0.14)'
            : '0 4px 24px rgba(0,0,0,0.35)',
        }),
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.5s ease',
      }}
      whileHover={{ y: -12, scale: 1.024 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${pkg.name} package`}
    >
      {/* Top accent line — reveals on hover for all cards */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(196,122,101,0.7), transparent)',
          opacity: hovered || pkg.featured ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Most Popular badge */}
      {pkg.featured && (
        <p
          className="font-body font-medium badge-shimmer absolute -top-3.5 right-8 px-3 py-0.5 text-[0.62rem] tracking-widest uppercase"
          style={{ background: hovered ? '#161320' : '#131118', letterSpacing: '0.18em', transition: 'background 0.4s ease' }}
          aria-hidden="true"
        >
          Most Popular
        </p>
      )}

      {/* Package name */}
      <div>
        <div className="flex items-baseline gap-2.5 mb-2">
          <span
            className="font-display font-light shrink-0"
            style={{ fontSize: '0.82rem', letterSpacing: '0.1em', color: 'rgba(196, 122, 101, 0.55)' }}
          >
            {pkg.number}
          </span>
          <h3
            className="font-display font-medium text-ink transition-all duration-500"
            style={{
              fontSize: '1.3rem',
              lineHeight: 1.2,
              letterSpacing: '0.01em',
              transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            {pkg.name}
          </h3>
        </div>
        <p
          className="font-body font-normal text-ink-muted italic"
          style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}
        >
          {pkg.promise}
        </p>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-3.5">
        <div>
          <span
            className="font-display font-semibold text-ink transition-all duration-500"
            style={{
              fontSize: hovered ? '2.8rem' : '2.5rem',
              lineHeight: 1,
            }}
          >
            {pkg.price}
          </span>
          <p
            className="font-body font-medium text-ink-muted mt-1.5"
            style={{ fontSize: '0.66rem', letterSpacing: '0.2em' }}
          >
            ONE-TIME IMPLEMENTATION
          </p>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-display font-semibold text-gold-light"
            style={{ fontSize: '1.15rem', lineHeight: 1 }}
          >
            + {pkg.monthly}
            <span className="font-body font-normal" style={{ fontSize: '0.72rem', color: 'rgba(212,148,126,0.7)' }}>/mo</span>
          </span>
        </div>
        <p
          className="font-body font-medium text-ink-dim -mt-2.5"
          style={{ fontSize: '0.66rem', letterSpacing: '0.2em' }}
        >
          ONGOING EVOLUTION
        </p>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full transition-all duration-500"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, rgba(196,122,101,0.4), rgba(196,122,101,0.1))'
            : 'rgba(196, 122, 101, 0.15)',
        }}
        aria-hidden="true"
      />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1" role="list">
        {pkg.features.map((feature, fi) => {
          const isEmphasized = feature === feature.toUpperCase() && /[A-Z]/.test(feature)
          return (
            <motion.li
              key={feature}
              className="flex items-start gap-3"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.4, delay: fi * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Check
                size={14}
                strokeWidth={2.5}
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  marginTop: '0.125rem',
                  color: isEmphasized ? '#D4947E' : hovered ? '#D4947E' : '#AEA8A4',
                  transition: 'color 0.4s ease',
                }}
              />
              <span
                className={isEmphasized ? 'font-body font-semibold transition-colors duration-300' : 'font-body font-normal transition-colors duration-300'}
                style={{
                  fontSize: isEmphasized ? '0.8rem' : '0.86rem',
                  lineHeight: 1.55,
                  letterSpacing: isEmphasized ? '0.08em' : 'normal',
                  color: isEmphasized ? '#D4947E' : hovered ? '#D8CFC6' : '#AEA8A4',
                }}
              >
                {feature}
              </span>
            </motion.li>
          )
        })}
      </ul>

      {/* Bottom reveal line */}
      <div
        className="h-px transition-all duration-700"
        style={{
          width: hovered ? '100%' : '0%',
          background: 'linear-gradient(90deg, rgba(196,122,101,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* CTA */}
      <button
        onClick={() => onConsultClick(pkg.name)}
        className="w-full py-3 font-body font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer"
        style={
          pkg.featured
            ? {
                background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                color: '#0A090C',
                fontSize: '0.76rem',
                letterSpacing: '0.18em',
                boxShadow: hovered
                  ? '0 6px 28px rgba(196,122,101,0.45)'
                  : '0 4px 20px rgba(196,122,101,0.25)',
              }
            : {
                border: `1px solid rgba(196, 122, 101, ${hovered ? '0.55' : '0.3'})`,
                color: hovered ? '#D4947E' : '#C47A65',
                fontSize: '0.76rem',
                letterSpacing: '0.18em',
                background: hovered ? 'rgba(196,122,101,0.06)' : 'transparent',
              }
        }
      >
        {pkg.cta.toUpperCase()} →
      </button>
    </motion.article>
  )
}

export default function PackagesSection({ onConsultClick }: Props) {
  return (
    <section
      id="packages"
      className="relative py-8 md:py-10 overflow-hidden"
      aria-label="Packages"
      style={{
        backgroundImage: 'url(/pricing-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,9,12,0.72) 0%, rgba(10,9,12,0.55) 50%, rgba(10,9,12,0.82) 100%)' }}
        aria-hidden="true"
      />
      {/* Mobile: stronger flat overlay */}
      <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'rgba(10,9,12,0.30)' }} aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-4"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                YOUR INVESTMENT
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Choose Your Transformation
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.15}>
            <p
              className="font-body font-normal text-ink-muted max-w-xs"
              style={{ fontSize: '0.96rem', lineHeight: 1.8 }}
            >
              Not sure which fits best? Book a free call and we&apos;ll recommend the right path.
            </p>
          </RevealOnScroll>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 items-start">
          {packages.map((pkg, i) => (
            <RevealOnScroll key={pkg.name} delay={i * 0.12}>
              <PricingCard pkg={pkg} onConsultClick={onConsultClick} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom note */}
        <RevealOnScroll delay={0.2}>
          <p
            className="mt-10 text-center font-body font-normal text-ink-dim"
            style={{ fontSize: '0.86rem', letterSpacing: '0.1em' }}
          >
            Pricing shown covers one-time implementation plus ongoing evolution. Custom scopes available — let&apos;s talk.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
