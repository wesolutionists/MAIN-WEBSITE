'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'

export default function MobileStickyCTA() {
  const pathname = usePathname()
  const homePrefix = pathname === '/' ? '' : '/'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const footer = document.querySelector('footer')
      const footerTop = footer ? footer.getBoundingClientRect().top + scrollY : document.documentElement.scrollHeight
      const nearFooter = scrollY + window.innerHeight > footerTop
      setVisible(scrollY > 500 && !nearFooter)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <a
      href={`${homePrefix}#contact`}
      aria-label="Start the conversation"
      className="md:hidden fixed z-40 flex items-center gap-2 transition-all duration-300 active:scale-[0.96]"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
        right: '1.25rem',
        padding: '0.85rem 1.3rem',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, #B86855 0%, #D4947E 50%, #B86855 100%)',
        boxShadow: '0 6px 28px rgba(196, 122, 101, 0.45)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <MessageCircle size={15} strokeWidth={2} className="text-bg" aria-hidden="true" />
      <span className="font-body font-semibold text-bg" style={{ fontSize: '0.76rem', letterSpacing: '0.08em' }}>
        START THE CONVERSATION
      </span>
    </a>
  )
}
