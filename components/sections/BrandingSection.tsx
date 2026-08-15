'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

function WordLine({
  text, delay, direction, isInView, className, style,
}: {
  text: string; delay: number; direction: 'left' | 'right'
  isInView: boolean; className?: string; style?: React.CSSProperties
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

const calloutText = 'YOUR BUSINESS NEEDS BOTH.'

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const ghostY     = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const ghostScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.06])
  const spotX      = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textY      = useTransform(scrollYProgress, [0, 1], ['0%', '-4%'])

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
        padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      {/* Dark overlay — brighter now (0.58) */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'rgba(7,6,10,0.58)' }} aria-hidden="true" />
      {/* Mobile extra */}
      <div className="absolute inset-0 pointer-events-none md:hidden z-[2]" style={{ background: 'rgba(7,6,10,0.15)' }} aria-hidden="true" />

      {/* Drifting radial spotlight — follows scroll */}
      <motion.div
        className="pointer-events-none absolute z-[3]"
        style={{
          x: spotX,
          top: '10%', left: '30%',
          width: 'clamp(400px, 60vw, 800px)',
          height: 'clamp(400px, 60vw, 800px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,122,101,0.13) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Ghost "BRAND" — parallax drift */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden z-[4]"
        style={{ y: ghostY, scale: ghostScale }}
        aria-hidden="true"
      >
        <motion.span
          className="font-display font-semibold"
          style={{
            fontSize: 'clamp(8rem, 22vw, 20rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(196, 122, 101, 0.10)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          BRAND
        </motion.span>
      </motion.div>

      {/* Top accent line — draws from left */}
      <motion.div
        className="mb-8 relative z-10"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 60, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease }}
        style={{ height: '1px', background: 'linear-gradient(90deg, #C47A65, transparent)' }}
        aria-hidden="true"
      />

      {/* Editorial text block — mild parallax upward on scroll */}
      <motion.div className="relative z-10 max-w-7xl" style={{ y: textY }}>

        {/* "Without marketing," */}
        <WordLine
          text="Without marketing,"
          delay={0.05} direction="left" isInView={isInView}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'rgba(244,239,232,0.45)' }}
        />

        {/* "no one sees you." */}
        <WordLine
          text="no one sees you."
          delay={0.2} direction="left" isInView={isInView}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'rgba(244,239,232,0.45)' }}
        />

        {/* Divider line between dim and bright lines */}
        <motion.div
          className="my-4 md:my-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.32, ease }}
          style={{
            height: '1px',
            originX: 0,
            background: 'linear-gradient(90deg, rgba(196,122,101,0.4), rgba(196,122,101,0.1), transparent)',
          }}
          aria-hidden="true"
        />

        {/* "Without branding," */}
        <WordLine
          text="Without branding,"
          delay={0.38} direction="right" isInView={isInView}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#F4EFE8' }}
        />

        {/* "no one trusts you." */}
        <p
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          aria-label="no one trusts you."
        >
          {['no', 'one'].map((word, i) => (
            <motion.span
              key={word} aria-hidden="true"
              style={{ display: 'inline-block', marginRight: '0.3em', color: '#F4EFE8' }}
              initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.75, delay: 0.52 + i * 0.09, ease }}
            >
              {word}
            </motion.span>
          ))}
          {/* "trusts" — solid terracotta, scale stamp */}
          <motion.span
            aria-hidden="true"
            style={{ display: 'inline-block', marginRight: '0.3em', color: '#D4947E' }}
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

        {/* "YOUR BUSINESS NEEDS BOTH." — letter-by-letter with terracotta glow pulse after reveal */}
        <motion.p
          className="font-display font-semibold mt-5 md:mt-8"
          style={{ fontSize: 'clamp(1.4rem, 3.5vw, 3rem)', letterSpacing: '0.06em' }}
          aria-label={calloutText}
          animate={isInView ? { textShadow: ['0 0 0px rgba(196,122,101,0)', '0 0 24px rgba(196,122,101,0.35)', '0 0 0px rgba(196,122,101,0)'] } : {}}
          transition={{ duration: 3, delay: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {calloutText.split('').map((char, i) => (
            <motion.span
              key={i} aria-hidden="true"
              style={{
                display: 'inline-block',
                color: '#C47A65',
                whiteSpace: char === ' ' ? 'pre' : 'normal',
              }}
              initial={{ opacity: 0, y: -12, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.92 + i * 0.022, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.p>

        {/* Bottom accent line — draws from right after callout */}
        <motion.div
          className="mt-6"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 60, opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 1.6, ease }}
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C47A65)', marginLeft: 'auto' }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
