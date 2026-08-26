'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const solutions = [
  'Custom Websites',
  'Automated Websites',
  'E-commerce Websites',
  'Meta Ads Systems',
  'Creative Strategy',
  'Lead Generation',
  'Conversion Systems',
  'AI Voice Agents',
  'AI Chatbots',
  'AI Customer Support',
  'AI Follow-Up Agents',
  'AI Receptionist Agents',
  'Home Services OS',
  'Real Estate OS',
  'Healthcare OS',
  'E-commerce OS',
  'Business Automation Systems',
]

const row1Base = solutions.slice(0, 9)
const row2Base = solutions.slice(9)

const row1 = [...row1Base, ...row1Base, ...row1Base]
const row2 = [...row2Base, ...row2Base, ...row2Base]

function Pill({ label }: { label: string }) {
  return (
    <span
      className="group inline-flex shrink-0 cursor-default items-center transition-all duration-300"
      style={{
        padding: '0.6rem 1.4rem',
        borderRadius: '999px',
        border: '1px solid rgba(196, 122, 101, 0.22)',
        background: 'rgba(196, 122, 101, 0.05)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(196, 122, 101, 0.65)'
        el.style.background = 'rgba(196, 122, 101, 0.12)'
        el.style.boxShadow = '0 4px 20px rgba(196, 122, 101, 0.18)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(196, 122, 101, 0.22)'
        el.style.background = 'rgba(196, 122, 101, 0.05)'
        el.style.boxShadow = 'none'
        el.style.transform = 'translateY(0)'
      }}
    >
      <span
        className="font-body font-normal text-ink-soft whitespace-nowrap transition-colors duration-300"
        style={{
          fontSize: '0.82rem',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </span>
    </span>
  )
}

export default function TransitionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="relative pt-5 pb-8 md:pt-6 md:pb-10 overflow-hidden"
      aria-label="Trusted by"
      style={{
        borderTop: '1px solid rgba(196, 122, 101, 0.08)',
        borderBottom: '1px solid rgba(196, 122, 101, 0.08)',
        background: '#0A090C',
      }}
    >

      {/* Edge fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #0A090C, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #0A090C, transparent)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative z-10 mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-body font-medium"
            style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: 'rgba(196,122,101,0.6)' }}
          >
            TRUSTED FOR
          </p>
        </motion.div>

        {/* Animated divider line */}
        <motion.div
          className="mx-auto mt-3"
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,122,101,0.5), transparent)' }}
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: '120px', opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Row 1 — scrolls left */}
      <motion.div
        className="relative z-10 overflow-hidden mb-3"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="marquee-track flex items-center gap-3 w-max">
          {row1.map((label, i) => (
            <Pill key={i} label={label} />
          ))}
        </div>
      </motion.div>

      {/* Row 2 — scrolls right */}
      <motion.div
        className="relative z-10 overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="marquee-track-reverse flex items-center gap-3 w-max">
          {row2.map((label, i) => (
            <Pill key={i} label={label} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
