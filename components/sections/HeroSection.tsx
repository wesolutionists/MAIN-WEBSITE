'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, CalendarCheck, Package } from 'lucide-react'

interface Props {
  onAuditClick: () => void
  onConsultClick: () => void
}

const lines = [
  { text: 'We Are', accent: false, delay: 0.1 },
  { text: 'The Solutionists.', accent: true, delay: 0.32 },
]

export default function HeroSection({ onAuditClick, onConsultClick }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 700], [0, -105])

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top md:object-center"
        src="/hero-bg.mp4"
        poster="/hero-poster.png"
        preload="metadata"
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Gradient scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,9,12,0.55) 0%, rgba(10,9,12,0.25) 55%, rgba(10,9,12,0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-20 hidden lg:block"
        style={{
          border: '1px solid rgba(196, 122, 101, 0.35)',
          boxShadow: 'inset 0 0 80px rgba(196, 122, 101, 0.06)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full opacity-15 hidden lg:block"
        style={{ border: '1px solid rgba(196, 122, 101, 0.2)' }}
        aria-hidden="true"
      />

      {/* Content with parallax */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-40 pb-24 lg:pt-44 lg:pb-0"
      >
        <div className="max-w-3xl">

          {/* Headline — word by word */}
          <h1
            className="font-display font-semibold"
            style={{ fontSize: 'clamp(2.8rem, 7.5vw, 5.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
          >
            {lines.map((line) => (
              <span key={line.text} className="block overflow-hidden" style={{ paddingBottom: '0.06em' }}>
                <motion.span
                  className="block"
                  style={{ color: line.accent ? '#D4947E' : '#F4EFE8' }}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.1,
                    delay: line.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            className="font-body font-normal text-ink-soft mt-8 max-w-xl"
            style={{ fontSize: '1.18rem', lineHeight: 1.8, letterSpacing: '0.01em' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The world is evolving. We help ambitious businesses evolve with it, building intelligent systems and workforce that simplify operations, unlock opportunities and create lasting value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Mobile layout: primary full-width + text link */}
            <div className="flex md:hidden flex-col gap-5">
              <button
                onClick={onAuditClick}
                className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 font-body font-semibold text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                  boxShadow: '0 4px 24px rgba(196, 122, 101, 0.35)',
                }}
              >
                <Search size={14} strokeWidth={2} aria-hidden="true" />
                GET A FREE AUDIT
              </button>
              <button
                onClick={onConsultClick}
                className="font-body font-normal text-center cursor-pointer transition-colors duration-300"
                style={{ color: 'rgba(196, 122, 101, 0.75)', fontSize: '0.82rem', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C47A65')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(196, 122, 101, 0.75)')}
              >
                Book a free consultation →
              </button>
            </div>

            {/* Desktop layout: all 3 buttons */}
            <div className="hidden md:flex flex-wrap gap-4">
              <button
                onClick={onAuditClick}
                className="group inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                  boxShadow: '0 4px 24px rgba(196, 122, 101, 0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(196, 122, 101, 0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(196, 122, 101, 0.35)' }}
              >
                <Search size={14} strokeWidth={2} aria-hidden="true" />
                GET A FREE AUDIT
              </button>
              <button
                onClick={onConsultClick}
                className="inline-flex items-center gap-3 px-8 py-4 font-body font-medium text-gold-light transition-all duration-300 active:scale-[0.98] cursor-pointer"
                style={{
                  border: '1px solid rgba(196, 122, 101, 0.6)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                  background: 'rgba(196, 122, 101, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(196, 122, 101, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.9)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(196, 122, 101, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.6)'
                }}
              >
                <CalendarCheck size={14} strokeWidth={1.5} aria-hidden="true" />
                BOOK A FREE CONSULTATION
              </button>
              <a
                href="#packages"
                className="inline-flex items-center gap-3 px-8 py-4 font-body font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer"
                style={{
                  border: '1px solid rgba(196, 122, 101, 0.3)',
                  color: '#C8BEB8',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.6)'
                  e.currentTarget.style.color = '#D4947E'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.3)'
                  e.currentTarget.style.color = '#C8BEB8'
                }}
              >
                <Package size={14} strokeWidth={1.5} aria-hidden="true" />
                VIEW PACKAGES
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A090C)' }}
        aria-hidden="true"
      />
    </section>
  )
}
