'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
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

type Project = (typeof projects)[number]

function MarqueeCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  return (
    <article
      className="group relative flex-shrink-0 cursor-pointer"
      style={{ width: '132px', marginRight: '8px' }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.name} larger`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(project)
        }
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '7/4', border: '1px solid rgba(196, 122, 101, 0.14)' }}
      >
        <Image
          src={project.image}
          alt={`${project.name} — ${project.tag.toLowerCase()} project by The Solutionists`}
          fill
          sizes="132px"
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
        className="px-2 py-1.5"
        style={{
          background: '#0F0D12',
          border: '1px solid rgba(196, 122, 101, 0.13)',
          borderTop: 'none',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <p
          className="font-body font-medium text-ink-muted mb-0.5 truncate"
          style={{ fontSize: '0.5rem', letterSpacing: '0.14em' }}
        >
          {project.tag}
        </p>
        <h3
          className="font-display font-semibold text-ink truncate"
          style={{ fontSize: '0.8rem', lineHeight: 1.2 }}
        >
          {project.name}
        </h3>
      </div>
    </article>
  )
}

function PortfolioRow({
  projectsList,
  direction,
  onSelect,
}: {
  projectsList: Project[]
  direction: 'left' | 'right'
  onSelect: (p: Project) => void
}) {
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleInteractionStart = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    setPaused(true)
  }
  const handleInteractionEnd = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), 1500)
  }

  return (
    <div
      className="overflow-x-auto no-scrollbar"
      style={{ touchAction: 'pan-x' }}
      onPointerDown={handleInteractionStart}
      onPointerUp={handleInteractionEnd}
      onPointerLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className={`flex ${direction === 'left' ? 'portfolio-track-left' : 'portfolio-track-right'}`}
        style={{ width: 'max-content', animationPlayState: paused ? 'paused' : 'running' }}
      >
        {projectsList.map((project, i) => (
          <MarqueeCard key={i} project={project} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

export default function PortfolioStrip() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })
  const [selected, setSelected] = useState<Project | null>(null)

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

      {/* Dual marquee rows — full bleed, draggable/scrollable */}
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

        <div className="mb-3">
          <PortfolioRow projectsList={row1} direction="left" onSelect={setSelected} />
        </div>
        <PortfolioRow projectsList={row2} direction="right" onSelect={setSelected} />
      </div>

      {/* Enlarge lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.name}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'rgba(7,6,10,0.92)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 text-ink-muted hover:text-ink transition-colors duration-300"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '7/4', border: '1px solid rgba(196, 122, 101, 0.2)' }}
              >
                <Image
                  src={selected.image}
                  alt={`${selected.name} — ${selected.tag.toLowerCase()} project by The Solutionists`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover object-top"
                />
              </div>
              <div
                className="px-5 py-4"
                style={{ background: '#0F0D12', border: '1px solid rgba(196, 122, 101, 0.18)', borderTop: 'none' }}
              >
                <p
                  className="font-body font-medium text-ink-muted mb-1"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.2em' }}
                >
                  {selected.tag}
                </p>
                <h3 className="font-display font-semibold text-ink" style={{ fontSize: '1.4rem' }}>
                  {selected.name}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
