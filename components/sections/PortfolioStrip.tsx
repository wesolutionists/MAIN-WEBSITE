'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import AnimatedRule from '@/components/ui/AnimatedRule'

const projects = [
  {
    tag: 'HVAC & CLIMATE CONTROL',
    name: 'AeroFlo HVAC Solutions',
    image: '/portfolio/aeroflo-hvac.webp',
  },
  {
    tag: 'AI ANALYTICS & DATA',
    name: 'AI Index Analytics',
    image: '/portfolio/ai-index-analytics.webp',
  },
  {
    tag: 'AI AUTOMATION',
    name: 'SphereAI',
    image: '/portfolio/sphereai.webp',
  },
  {
    tag: 'ROOFING & HOME SERVICES',
    name: 'PeakGuard Roofing',
    image: '/portfolio/peakguard-roofing.webp',
  },
  {
    tag: 'AI / FINTECH',
    name: 'AlgoLift',
    image: '/portfolio/algolift.webp',
  },
  {
    tag: 'AMAZON PPC AUTOMATION',
    name: 'RankPilot Ads',
    image: '/portfolio/rankpilot-ads.webp',
  },
  {
    tag: 'LEAD GEN & EMAIL AUTOMATION',
    name: 'ReachLoop',
    image: '/portfolio/reachloop.webp',
  },
]

function MarqueeCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article
      className="group relative flex-shrink-0 cursor-default"
      style={{ width: '220px', marginRight: '10px' }}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '7/4', border: '1px solid rgba(196, 122, 101, 0.14)' }}
      >
        <Image
          src={project.image}
          alt={`${project.name} — ${project.tag.toLowerCase()} project by The Solutionists`}
          fill
          sizes="220px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'rgba(196, 122, 101, 0.07)' }}
          aria-hidden="true"
        />
      </div>
      <div
        className="px-3 py-2.5"
        style={{
          background: '#0F0D12',
          border: '1px solid rgba(196, 122, 101, 0.13)',
          borderTop: 'none',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <p
          className="font-body font-medium text-ink-muted mb-1"
          style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
        >
          {project.tag}
        </p>
        <h3
          className="font-display font-semibold text-ink"
          style={{ fontSize: '1.05rem', lineHeight: 1.2 }}
        >
          {project.name}
        </h3>
      </div>
    </article>
  )
}

export default function PortfolioStrip() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  // Row 2 starts offset by 2 for visual variety
  const row2Base = [...projects.slice(2), ...projects.slice(0, 2)]
  const row1 = [...projects, ...projects]
  const row2 = [...row2Base, ...row2Base]

  return (
    <section
      className="relative pt-10 md:pt-12 pb-12 md:pb-16 overflow-hidden"
      aria-label="Portfolio"
    >
      <AnimatedRule />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-10 md:mt-12">
        <motion.div
          ref={headerRef}
          className="mb-10 flex items-end justify-between gap-6"
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={isHeaderInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p
              className="font-body font-medium text-ink-muted mb-4"
              style={{ fontSize: '0.75rem', letterSpacing: '0.32em' }}
            >
              OUR WORK
            </p>
            <h2
              className="font-display font-semibold text-ink"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Selected Projects
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Dual marquee rows — full bleed */}
      <div className="relative">
        {/* Edge fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10"
          style={{ background: 'linear-gradient(to right, #0A090C, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10"
          style={{ background: 'linear-gradient(to left, #0A090C, transparent)' }}
          aria-hidden="true"
        />

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-3">
          <div className="portfolio-track-left flex" style={{ width: 'max-content' }}>
            {row1.map((project, i) => (
              <MarqueeCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="portfolio-track-right flex" style={{ width: 'max-content' }}>
            {row2.map((project, i) => (
              <MarqueeCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
