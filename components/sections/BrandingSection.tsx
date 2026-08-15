'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

function WordLine({
  text,
  delay,
  direction,
  isInView,
  className,
  style,
}: {
  text: string
  delay: number
  direction: 'left' | 'right'
  isInView: boolean
  className?: string
  style?: React.CSSProperties
}) {
  const words = text.split(' ')
  const xFrom = direction === 'left' ? -28 : 28
  return (
    <p className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: 'inline-block', marginRight: i < words.length - 1 ? '0.3em' : 0 }}
          initial={{ opacity: 0, x: xFrom, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.75, delay: delay + i * 0.09, ease }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const ghostScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.06])

  const calloutText = 'YOUR BUSINESS NEEDS BOTH.'

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Branding"
      style={{
        backgroundImage: 'url(/transition-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid rgba(196, 122, 101, 0.1)',
        borderBottom: '1px solid rgba(196, 122, 101, 0.1)',
        padding: 'clamp(3rem, 7vw, 5rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      {/* Dark overlay — always on */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(7,6,10,0.80)' }}
        aria-hidden="true"
      />
      {/* Mobile: extra overlay for portrait screens */}
      <div className="absolute inset-0 pointer-events-none md:hidden z-[2]" style={{ background: 'rgba(7,6,10,0.18)' }} aria-hidden="true" />

      {/* Ghost "BRAND" — parallax drift, sits above overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden z-[3]"
        style={{ y: ghostY, scale: ghostScale }}
        aria-hidden="true"
      >
        <span
          className="font-display font-semibold"
          style={{
            fontSize: 'clamp(8rem, 22vw, 20rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(196, 122, 101, 0.07)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          BRAND
        </span>
      </motion.div>

      {/* Accent line — draws in on view */}
      <motion.div
        className="mb-14 relative z-10"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 40, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease }}
        style={{ height: '1px', background: 'linear-gradient(90deg, #C47A65, transparent)' }}
        aria-hidden="true"
      />

      {/* Editorial text block */}
      <div className="relative z-10 max-w-7xl">

        {/* "Without marketing," — dim, from left */}
        <WordLine
          text="Without marketing,"
          delay={0.05}
          direction="left"
          isInView={isInView}
          className="font-display font-light italic"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'rgba(244, 239, 232, 0.45)',
          }}
        />

        {/* "no one sees you." — dim, from left */}
        <WordLine
          text="no one sees you."
          delay={0.2}
          direction="left"
          isInView={isInView}
          className="font-display font-light italic"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'rgba(244, 239, 232, 0.45)',
          }}
        />

        {/* "Without branding," — bright, from right */}
        <WordLine
          text="Without branding,"
          delay={0.38}
          direction="right"
          isInView={isInView}
          className="font-display font-light italic mt-4 md:mt-6"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#F4EFE8',
          }}
        />

        {/* "no one trusts you." — bright, from right, "trusts" pops */}
        <p
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          aria-label="no one trusts you."
        >
          {['no', 'one'].map((word, i) => (
            <motion.span
              key={word}
              aria-hidden="true"
              style={{ display: 'inline-block', marginRight: '0.3em', color: '#F4EFE8' }}
              initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.75, delay: 0.52 + i * 0.09, ease }}
            >
              {word}
            </motion.span>
          ))}
          {/* "trusts" — scale stamp + glow pop */}
          <motion.span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              marginRight: '0.3em',
              background: 'linear-gradient(135deg, #D4947E, #C47A65)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, scale: 1.35, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.55, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            trusts
          </motion.span>
          <motion.span
            aria-hidden="true"
            style={{ display: 'inline-block', color: '#F4EFE8' }}
            initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, delay: 0.8, ease }}
          >
            you.
          </motion.span>
        </p>

        {/* "YOUR BUSINESS NEEDS BOTH." — letter-by-letter drop */}
        <p
          className="font-display font-semibold mt-8 md:mt-12"
          style={{ fontSize: 'clamp(1.4rem, 3.5vw, 3rem)', letterSpacing: '0.06em' }}
          aria-label={calloutText}
        >
          {calloutText.split('').map((char, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              style={{
                display: 'inline-block',
                color: 'rgba(244, 239, 232, 0.38)',
                whiteSpace: char === ' ' ? 'pre' : 'normal',
              }}
              initial={{ opacity: 0, y: -12, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.92 + i * 0.022, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}
