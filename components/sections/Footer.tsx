'use client'

import { usePathname } from 'next/navigation'
import Logo from '../Logo'

const links = {
  Explore: [
    { label: 'Solutions', href: '#services' },
    { label: 'Pricing', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  'Our Solutions': [
    { label: 'Digital Foundation', href: '#services' },
    { label: 'AI Workforce', href: '#services' },
    { label: 'AI Business Systems', href: '#services' },
  ],
}

const socials = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/wesolutionists',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thesolutionists',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  const pathname = usePathname()
  const homePrefix = pathname === '/' ? '' : '/'

  return (
    <footer
      className="relative pt-16 overflow-hidden"
      style={{
        paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 0px))',
        borderTop: '1px solid rgba(196, 122, 101, 0.15)',
      }}
      aria-label="Site footer"
    >
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196, 122, 101,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12"
          style={{ borderBottom: '1px solid rgba(196, 122, 101, 0.1)' }}
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" aria-label="The Solutionists — back to top">
              <Logo size="sm" />
            </a>
            <p
              className="font-body font-normal text-ink-muted mt-6 max-w-xs"
              style={{ fontSize: '0.96rem', lineHeight: 1.9 }}
            >
              We help ambitious businesses design their presence, grow their audience and automate
              their operations — so they can focus on building something that lasts.
            </p>
            {/* Emails */}
            <div className="mt-5 flex flex-col gap-1.5">
              {[
                'hello@wesolutionists.com',
                'contact@wesolutionists.com',
                'info@wesolutionists.com',
                'support@wesolutionists.com',
              ].map((email) => (
                <a
                  key={email}
                  href={`https://mail.google.com/mail/?view=cm&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 -my-2 font-body font-normal transition-colors duration-300"
                  style={{ fontSize: '0.85rem', color: 'rgba(196,122,101,0.85)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4947E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(196,122,101,0.7)')}
                >
                  {email}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-ink-muted hover:text-ink transition-colors duration-300"
                  style={{ border: '1px solid rgba(196, 122, 101, 0.2)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.25em' }}
              >
                {group.toUpperCase()}
              </p>
              <ul className="space-y-3.5" role="list">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`${homePrefix}${item.href}`}
                      className="inline-block py-2 -my-2 font-body font-normal text-ink-muted hover:text-ink transition-colors duration-300"
                      style={{ fontSize: '0.96rem' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="font-body font-normal text-ink-dim"
            style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}
          >
            © {new Date().getFullYear()} The Solutionists. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-block py-2 -my-2 font-body font-normal text-ink-dim hover:text-ink-muted transition-colors duration-300"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
