'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

// Words come into focus (blur + brighten) as the section scrolls through view,
// rather than firing a one-time timed fade — the reveal tracks scroll directly.
function ScrubWord({
  progress, range, children, className, style,
}: {
  progress: MotionValue<number>; range: [number, number]
  children: React.ReactNode; className?: string; style?: React.CSSProperties
}) {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true })
  const blur = useTransform(opacity, (v) => `blur(${(1 - v) * 7}px)`)
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', opacity, filter: blur, ...style }}
    >
      {children}
    </motion.span>
  )
}

function ScrubLine({
  text, progress, unitStart, unitSpan, className, style,
}: {
  text: string; progress: MotionValue<number>; unitStart: number; unitSpan: number
  className?: string; style?: React.CSSProperties
}) {
  const words = text.split(' ')
  return (
    <p className={className} style={style} aria-label={text}>
      {words.map((word, i) => {
        const start = unitStart + i * unitSpan
        return (
          <ScrubWord
            key={i}
            progress={progress}
            range={[start, Math.min(1, start + unitSpan * 2.2)]}
            style={{ marginRight: i < words.length - 1 ? '0.3em' : 0 }}
          >
            {word}
          </ScrubWord>
        )
      })}
    </p>
  )
}

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const spotX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-4%'])

  // Word reveal uses its own tighter scroll window — as the section enters and
  // settles into view, not the section's whole (much longer) scroll transit —
  // so it finishes while still comfortably on screen, not as it scrolls away.
  const { scrollYProgress: reveal } = useScroll({ target: sectionRef, offset: ['start 0.92', 'start 0.4'] })
  const unitSpan = 1 / 14 // 14 reveal units across the whole statement

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden"
      aria-label="Branding"
      style={{
        backgroundImage: isInView ? 'url(/transition-bg.webp)' : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(340px, 48vh, 540px)',
        padding: 'clamp(2rem, 4vh, 3.25rem) clamp(1.25rem, 5vw, 4rem)',
      }}
    >
      {/* Dark overlay — brighter now (0.58) */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'rgba(7,6,10,0.58)' }} aria-hidden="true" />
      {/* Mobile extra */}
      <div className="absolute inset-0 pointer-events-none md:hidden z-[2]" style={{ background: 'rgba(7,6,10,0.15)' }} aria-hidden="true" />

      {/* Drifting radial spotlight — follows scroll, steady glow */}
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

      {/* Top accent line — draws from left, then pulses continuously */}
      <motion.div
        className="mb-8 relative z-10"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 60, opacity: [1, 0.5, 1] } : {}}
        transition={{
          width: { duration: 1.1, ease },
          opacity: { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
        }}
        style={{ height: '1px', background: 'linear-gradient(90deg, #C47A65, transparent)' }}
        aria-hidden="true"
      />

      {/* Editorial text block — mild parallax upward on scroll */}
      <motion.div className="relative z-10 max-w-7xl" style={{ y: textY }}>

        {/* "Artificial intelligence" */}
        <ScrubLine
          text="Artificial intelligence"
          progress={reveal} unitStart={0 * unitSpan} unitSpan={unitSpan}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(1.8rem, 4.8vw, 4.4rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'rgba(244,239,232,0.45)' }}
        />

        {/* "won't replace humans," */}
        <ScrubLine
          text="won't replace humans,"
          progress={reveal} unitStart={2 * unitSpan} unitSpan={unitSpan}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(1.8rem, 4.8vw, 4.4rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'rgba(244,239,232,0.45)' }}
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

        {/* "but humans using" */}
        <ScrubLine
          text="but humans using"
          progress={reveal} unitStart={5 * unitSpan} unitSpan={unitSpan}
          className="font-display font-light italic text-ink"
          style={{ fontSize: 'clamp(1.8rem, 4.8vw, 4.4rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
        />

        {/* "artificial intelligence will replace those who don't." */}
        <p
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(1.8rem, 4.8vw, 4.4rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          aria-label="artificial intelligence will replace those who don't."
        >
          {/* "artificial intelligence" — solid terracotta, scale stamp */}
          <ScrubWord
            progress={reveal}
            range={[8 * unitSpan, Math.min(1, 8 * unitSpan + unitSpan * 2.2)]}
            className="text-gold-light"
            style={{ marginRight: '0.3em' }}
          >
            artificial intelligence
          </ScrubWord>
          {['will', 'replace', 'those', 'who', "don't."].map((word, i) => {
            const start = (9 + i) * unitSpan
            return (
              <ScrubWord
                key={word}
                progress={reveal}
                range={[start, Math.min(1, start + unitSpan * 2.2)]}
                className="text-ink"
                style={{ marginRight: i < 4 ? '0.3em' : 0 }}
              >
                {word}
              </ScrubWord>
            )
          })}
        </p>

        {/* Bottom accent line — draws from right, then pulses continuously */}
        <motion.div
          className="mt-8 md:mt-10"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 60, opacity: [1, 0.5, 1] } : {}}
          transition={{
            width: { duration: 1.1, delay: 1.3, ease },
            opacity: { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 2.4 },
          }}
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C47A65)', marginLeft: 'auto' }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
