'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'VANTAGE', sub: 'Consulting' },
  { name: 'BLOOM', sub: 'Wellness' },
  { name: 'ARCLINE', sub: 'Architecture' },
  { name: 'STRATA', sub: 'Real Estate' },
  { name: 'KOVA', sub: 'E-Commerce' },
  { name: 'FORGE', sub: 'Technology' },
]

const row1 = [...clients, ...clients, ...clients]
const row2 = [...clients].reverse()
const allRow2 = [...row2, ...row2, ...row2]

function ClientItem({ name, sub }: { name: string; sub: string }) {
  return (
    <div
      className="group flex flex-col items-center gap-1 shrink-0 cursor-default"
      style={{ minWidth: '130px' }}
    >
      <span
        className="font-display font-semibold transition-all duration-400"
        style={{
          fontSize: '1.15rem',
          letterSpacing: '0.18em',
          lineHeight: 1,
          color: 'rgba(244,239,232,0.45)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.color = '#D4947E'
          el.style.textShadow = '0 0 20px rgba(196,122,101,0.4)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.color = 'rgba(244,239,232,0.45)'
          el.style.textShadow = 'none'
        }}
      >
        {name}
      </span>
      <span
        className="font-body font-normal transition-colors duration-400"
        style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(244,239,232,0.22)' }}
      >
        {sub.toUpperCase()}
      </span>
    </div>
  )
}

export default function TransitionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16 overflow-hidden"
      aria-label="Trusted by"
      style={{
        backgroundImage: 'url(/transition-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid rgba(196, 122, 101, 0.08)',
        borderBottom: '1px solid rgba(196, 122, 101, 0.08)',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(10,9,12,0.78)' }}
        aria-hidden="true"
      />

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
      <div className="relative z-10 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-body font-medium"
            style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: 'rgba(196,122,101,0.6)' }}
          >
            TRUSTED BY
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
        className="relative z-10 overflow-hidden mb-5"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="marquee-track flex items-center gap-16 w-max">
          {row1.map((client, i) => (
            <ClientItem key={i} name={client.name} sub={client.sub} />
          ))}
        </div>
      </motion.div>

      {/* Glowing separator */}
      <motion.div
        className="relative z-10 mx-auto mb-5"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,122,101,0.25), transparent)' }}
        initial={{ width: '0%', opacity: 0 }}
        animate={inView ? { width: '60%', opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Row 2 — scrolls right */}
      <motion.div
        className="relative z-10 overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="marquee-track-reverse flex items-center gap-16 w-max">
          {allRow2.map((client, i) => (
            <ClientItem key={i} name={client.name} sub={client.sub} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
