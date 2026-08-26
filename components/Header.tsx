'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Solutions', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Smooth scroll-progress-linked pill appearance
  const { scrollY } = useScroll()
  const rawProgress = useTransform(scrollY, [0, 110], [0, 1], { clamp: true })
  const progress = useSpring(rawProgress, { stiffness: 90, damping: 22, restDelta: 0.001 })

  const background = useTransform(progress, [0, 1], ['rgba(7,6,10,0.80)', 'rgba(7,6,10,0.95)'])
  const borderColor = useTransform(progress, [0, 1], ['rgba(196,122,101,0.16)', 'rgba(196,122,101,0.30)'])
  const boxShadow = useTransform(progress, [0, 1], [
    '0 4px 28px rgba(0,0,0,0.32)',
    '0 8px 48px rgba(0,0,0,0.54), inset 0 1px 0 rgba(196,122,101,0.07)',
  ])
  const blurAmount = useTransform(progress, [0, 1], [22, 30])
  const backdropFilter = useTransform(blurAmount, (v) => `blur(${v}px) saturate(160%)`)

  return (
    <>
      {/* ── Floating pill nav ── */}
      <header
        className="fixed z-50 left-1/2 -translate-x-1/2"
        style={{ width: 'calc(100% - 32px)', maxWidth: '1200px', top: 'max(1rem, env(safe-area-inset-top, 0px))' }}
      >
        <motion.div
          style={{
            background,
            backdropFilter,
            WebkitBackdropFilter: backdropFilter,
            borderRadius: '14px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor,
            boxShadow,
          }}
        >
          <div className="flex h-[68px] items-center justify-between px-5 lg:px-7">

            {/* Logo */}
            <a href="#" aria-label="The Solutionists — home" className="shrink-0">
              <span className="lg:hidden">
                <Logo size="sm" wordmark={false} />
              </span>
              <span className="hidden lg:inline-block">
                <Logo size="nav" tagline={false} />
              </span>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-7 lg:gap-9"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body font-normal text-ink-soft transition-colors duration-300"
                  style={{
                    fontSize: '0.82rem',
                    letterSpacing: '0.13em',
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C47A65')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#D8CFC6')}
                >
                  {link.label.toUpperCase()}
                </a>
              ))}

              {/* Rose-gold CTA */}
              <a
                href="#contact"
                className="inline-flex items-center font-body font-medium text-bg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #B86855 0%, #D4947E 50%, #B86855 100%)',
                  backgroundSize: '200% 100%',
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 16px rgba(196, 122, 101,0.22), inset 0 1px 0 rgba(255,255,255,0.18)',
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 4px 24px rgba(196, 122, 101,0.4), inset 0 1px 0 rgba(255,255,255,0.22)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 2px 16px rgba(196, 122, 101,0.22), inset 0 1px 0 rgba(255,255,255,0.18)'
                }}
              >
                GET STARTED
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center h-11 w-11 -mr-1.5 rounded text-ink-soft transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C47A65')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D8CFC6')}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </motion.div>

        {/* ── Mobile dropdown (attached below pill) ── */}
        <div
          className="lg:hidden mt-2 overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: menuOpen ? '400px' : '0',
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <nav
            className="flex flex-col"
            aria-label="Mobile navigation"
            style={{
              background: 'rgba(7, 6, 10, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: '12px',
              border: '1px solid rgba(196, 122, 101, 0.2)',
              padding: '8px 0',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body font-normal text-ink-soft py-4 px-6 transition-colors duration-300"
                style={{
                  fontSize: '0.84rem',
                  letterSpacing: '0.15em',
                  borderBottom: '1px solid rgba(196, 122, 101,0.08)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C47A65')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D8CFC6')}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <div className="px-6 py-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center font-body font-semibold text-bg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.16em',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 16px rgba(196, 122, 101,0.25)',
                }}
              >
                GET STARTED
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
