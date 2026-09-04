'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Search, CalendarCheck, Package } from 'lucide-react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 700], [0, -105])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-0 md:min-h-[100dvh] flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — fades and settles in rather than appearing instantly */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_25%] md:object-[68%_32%]"
          aria-hidden="true"
        />
      </motion.div>

      {/* Gradient scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,9,12,0.55) 0%, rgba(10,9,12,0.25) 55%, rgba(10,9,12,0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Dark curtain — starts near-opaque, lifts as the image settles in */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: '#0A090C' }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-40 pb-6 md:pb-16 lg:pt-44 lg:pb-0"
      >
        <div className="max-w-3xl">

          {/* Headline — fades in with the background, no word-reveal */}
          <motion.h1
            className="font-display font-semibold"
            style={{ fontSize: 'clamp(2.8rem, 7.5vw, 5.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block" style={{ color: '#F4EFE8' }}>We Are</span>
            <span className="block" style={{ color: '#D4947E' }}>The Solutionists.</span>
          </motion.h1>

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
              <a
                href="#discover"
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
              </a>
              <a
                href="#contact"
                className="font-body font-normal text-center py-3 cursor-pointer transition-colors duration-300"
                style={{ color: 'rgba(196, 122, 101, 0.85)', fontSize: '0.82rem', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C47A65')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(196, 122, 101, 0.75)')}
              >
                Start the conversation →
              </a>
            </div>

            {/* Desktop layout: all 3 buttons */}
            <div className="hidden md:flex flex-wrap gap-4">
              <a
                href="#discover"
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
              </a>
              <a
                href="#contact"
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
                START THE CONVERSATION
              </a>
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
