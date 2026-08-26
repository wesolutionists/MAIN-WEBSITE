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

export default function BrandingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const spotX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-4%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden"
      aria-label="Branding"
      style={{
        backgroundImage: 'url(/transition-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(480px, 72vh, 760px)',
        padding: 'clamp(3rem, 6vh, 5rem) clamp(1.25rem, 5vw, 4rem)',
      }}
    >
      {/* Dark overlay — brighter now (0.58) */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'rgba(7,6,10,0.58)' }} aria-hidden="true" />
      {/* Mobile extra */}
      <div className="absolute inset-0 pointer-events-none md:hidden z-[2]" style={{ background: 'rgba(7,6,10,0.15)' }} aria-hidden="true" />

      {/* Drifting radial spotlight — follows scroll, with a periodic power-on flicker */}
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
        animate={{ opacity: [1, 0.25, 0.85, 0.35, 1, 0.6, 1, 1] }}
        transition={{
          duration: 1.4,
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
          repeat: Infinity,
          repeatDelay: 6.5,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

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

        {/* "Artificial intelligence" */}
        <WordLine
          text="Artificial intelligence"
          delay={0.05} direction="left" isInView={isInView}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'rgba(244,239,232,0.45)' }}
        />

        {/* "won't replace humans," */}
        <WordLine
          text="won't replace humans,"
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

        {/* "but humans using" */}
        <WordLine
          text="but humans using"
          delay={0.38} direction="right" isInView={isInView}
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#F4EFE8' }}
        />

        {/* "artificial intelligence will replace those who don't." */}
        <p
          className="font-display font-light italic"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 6rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          aria-label="artificial intelligence will replace those who don't."
        >
          {/* "artificial intelligence" — solid terracotta, scale stamp */}
          <motion.span
            aria-hidden="true"
            style={{ display: 'inline-block', marginRight: '0.3em', color: '#D4947E' }}
            initial={{ opacity: 0, scale: 1.35, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.55, delay: 0.52, ease: [0.34, 1.56, 0.64, 1] }}
          >
            artificial intelligence
          </motion.span>
          {['will', 'replace', 'those', 'who', "don't."].map((word, i) => (
            <motion.span
              key={word} aria-hidden="true"
              style={{ display: 'inline-block', marginRight: i < 4 ? '0.3em' : 0, color: '#F4EFE8' }}
              initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.75, delay: 0.72 + i * 0.09, ease }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Bottom accent line — draws from right */}
        <motion.div
          className="mt-8 md:mt-10"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 60, opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 1.3, ease }}
          style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C47A65)', marginLeft: 'auto' }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
