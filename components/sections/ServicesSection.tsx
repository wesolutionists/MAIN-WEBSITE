'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from '../ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="9" width="56" height="46" rx="2.5" stroke="currentColor" strokeWidth="0.75"/>
        <line x1="4" y1="20" x2="60" y2="20" stroke="currentColor" strokeWidth="0.75"/>
        <circle cx="11" cy="14.5" r="1.8" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="18" cy="14.5" r="1.8" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="25" cy="14.5" r="1.8" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        <rect x="31" y="11.5" width="24" height="6" rx="1" stroke="currentColor" strokeWidth="0.45" opacity="0.3"/>
        <rect x="10" y="26" width="20" height="22" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.45"/>
        <rect x="34" y="26" width="22" height="9" rx="1" stroke="currentColor" strokeWidth="0.6" opacity="0.45"/>
        <line x1="34" y1="40" x2="56" y2="40" stroke="currentColor" strokeWidth="0.55" opacity="0.3"/>
        <line x1="34" y1="44" x2="51" y2="44" stroke="currentColor" strokeWidth="0.55" opacity="0.22"/>
        <line x1="34" y1="48" x2="44" y2="48" stroke="currentColor" strokeWidth="0.55" opacity="0.15"/>
        <path d="M20 41 L23 38 L26 41 L23 44 Z" stroke="#C47A65" strokeWidth="0.75" fill="rgba(196,122,101,0.15)"/>
      </svg>
    ),
    number: '01',
    title: 'Digital Foundation',
    items: [
      'Custom Websites',
      'Automated Websites',
      'E-commerce Websites',
      'Meta Ads Systems',
      'Creative Strategy',
      'Lead Generation',
    ],
    quote: 'Build your digital foundation to acquire and grow.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="35" cy="38" r="20" stroke="currentColor" strokeWidth="0.6" opacity="0.2"/>
        <circle cx="35" cy="38" r="13" stroke="currentColor" strokeWidth="0.65" opacity="0.32"/>
        <circle cx="35" cy="38" r="7" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <circle cx="35" cy="38" r="2.5" fill="currentColor" opacity="0.5"/>
        <line x1="35" y1="14" x2="35" y2="60" stroke="currentColor" strokeWidth="0.4" opacity="0.18" strokeDasharray="2 3"/>
        <line x1="11" y1="38" x2="59" y2="38" stroke="currentColor" strokeWidth="0.4" opacity="0.18" strokeDasharray="2 3"/>
        <path d="M11 54 L28 30 L42 22" stroke="#C47A65" strokeWidth="0.95" strokeLinecap="round"/>
        <path d="M42 22 L36 26 M42 22 L38 28" stroke="#C47A65" strokeWidth="0.95" strokeLinecap="round"/>
        <circle cx="11" cy="54" r="1.5" fill="#C47A65" opacity="0.45"/>
        <circle cx="28" cy="30" r="1.5" fill="#C47A65" opacity="0.65"/>
        <circle cx="42" cy="22" r="2" fill="#C47A65" opacity="0.85"/>
      </svg>
    ),
    number: '02',
    title: 'AI Workforce',
    items: [
      'AI Voice Agents',
      'AI Chatbots',
      'AI Customer Support',
      'AI Follow-Up Agents',
      'AI Receptionist Agents',
      'MORE INTELLIGENT AGENTS',
    ],
    quote: 'Build your intelligent workforce.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="7" stroke="#C47A65" strokeWidth="0.9"/>
        <circle cx="32" cy="32" r="2.5" fill="#C47A65" opacity="0.45"/>
        <circle cx="12" cy="14" r="4.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
        <circle cx="52" cy="14" r="4.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
        <circle cx="10" cy="52" r="4" stroke="currentColor" strokeWidth="0.65" opacity="0.45"/>
        <circle cx="54" cy="52" r="4" stroke="currentColor" strokeWidth="0.65" opacity="0.45"/>
        <path d="M16 14 L32 14 L32 25" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
        <path d="M47.5 14 L32 14" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
        <path d="M32 39 L32 52 L14 52" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
        <path d="M32 39 L32 52 L50 52" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
        <line x1="30" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
        <line x1="30" y1="51" x2="34" y2="51" stroke="currentColor" strokeWidth="0.5" opacity="0.35"/>
        <line x1="18" y1="50" x2="18" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        <line x1="46" y1="50" x2="46" y2="54" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      </svg>
    ),
    number: '03',
    title: 'AI Business Systems',
    items: [
      'Home Services OS',
      'Real Estate OS',
      'Healthcare OS',
      'E-commerce OS',
      'Business Automation Systems',
      'CUSTOM BUSINESS SYSTEMS',
    ],
    quote: 'Get your own intelligent system.',
  },
]

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -y * 10, ry: x * 10 })
  }

  const onMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={wrapRef}
      className="h-full"
      style={{ perspective: '900px' }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
    >
      <motion.article
        className="group relative flex flex-col gap-6 p-8 md:p-10 h-full cursor-default"
        style={{
          background: hovered ? '#131118' : '#0F0D12',
          border: `1px solid rgba(196, 122, 101, ${hovered ? '0.32' : '0.13'})`,
          boxShadow: hovered
            ? '0 8px 50px rgba(196,122,101,0.09), 0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(196,122,101,0.07)'
            : '0 4px 24px rgba(0,0,0,0.35)',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.5s ease',
        }}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(90deg, transparent, #C47A65, transparent)' }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className="flex h-20 w-20 items-center justify-center text-gold"
          style={{
            border: '1px solid rgba(196, 122, 101, 0.25)',
            background: 'rgba(196, 122, 101, 0.04)',
          }}
        >
          <div className="h-12 w-12">{service.icon}</div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 flex-1">
          <h3
            className="font-display font-semibold text-ink"
            style={{ fontSize: '1.5rem', lineHeight: 1.2 }}
          >
            {service.title}
          </h3>

          <ul className="flex flex-col gap-2.5 flex-1">
            {service.items.map((item) => {
              const isEmphasized = item === item.toUpperCase() && /[A-Z]/.test(item)
              return (
                <li key={item} className="flex items-baseline gap-2.5">
                  <span
                    className="shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '999px',
                      background: isEmphasized ? '#D4947E' : 'rgba(196, 122, 101, 0.5)',
                      transform: 'translateY(-2px)',
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className={isEmphasized ? 'font-body font-semibold' : 'font-body font-normal'}
                    style={{
                      fontSize: isEmphasized ? '0.92rem' : '1.02rem',
                      lineHeight: 1.7,
                      color: isEmphasized ? '#D4947E' : '#D8CFC6',
                      letterSpacing: isEmphasized ? '0.1em' : 'normal',
                    }}
                  >
                    {item}
                  </span>
                </li>
              )
            })}
          </ul>

          <p
            className="font-display font-medium italic text-ink-soft"
            style={{
              fontSize: '1.32rem',
              lineHeight: 1.5,
              borderTop: '1px solid rgba(196, 122, 101, 0.15)',
              paddingTop: '1.25rem',
              marginTop: '0.25rem',
            }}
          >
            {service.quote}
          </p>
        </div>

        {/* Bottom gold line */}
        <div
          className="h-px w-0 group-hover:w-full transition-all duration-700"
          style={{ background: 'linear-gradient(90deg, #C47A65, transparent)' }}
          aria-hidden="true"
        />
      </motion.article>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative pt-8 md:pt-10 pb-9 md:pb-12 overflow-hidden"
      aria-label="Services"
    >
      <AnimatedRule />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-8 md:mt-10">
        {/* Section header */}
        <div className="mb-8 md:mb-10">
          <RevealOnScroll>
            <h2
              className="font-display font-semibold text-ink"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Solutions
            </h2>
          </RevealOnScroll>
        </div>

        {/* Service cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.12}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
