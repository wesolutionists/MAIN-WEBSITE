import RevealOnScroll from '../ui/RevealOnScroll'
import { CalendarCheck } from 'lucide-react'

interface Props {
  onConsultClick: () => void
}

export default function ConsultationSection({ onConsultClick }: Props) {
  return (
    <section
      id="discover"
      className="relative pt-12 pb-9 md:pt-16 md:pb-12 overflow-hidden"
      aria-label="Free Consultation"
      style={{
        borderTop: '1px solid rgba(196, 122, 101, 0.1)',
        borderBottom: '1px solid rgba(196, 122, 101, 0.1)',
        backgroundImage: 'url(/consultation-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay — left/right on desktop, top/bottom on mobile */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to right, rgba(10,9,12,0.88) 0%, rgba(10,9,12,0.65) 50%, rgba(10,9,12,0.88) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{ background: 'rgba(10,9,12,0.82)' }}
        aria-hidden="true"
      />

      {/* Atmospheric left glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(196, 122, 101, 0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <RevealOnScroll>
              <p
                className="font-body font-medium text-gold mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                NO PITCH, JUST CLARITY
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                Discover what your business is missing.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p
                className="font-body font-normal text-ink-muted mt-6 max-w-md"
                style={{ fontSize: '1.08rem', lineHeight: 1.9 }}
              >
                Your biggest opportunity might be one conversation away. We&apos;ll listen, understand your
                business and show you exactly what&apos;s holding you back — no pitch, no pressure.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <button
                onClick={onConsultClick}
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 font-body font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.18em',
                  borderRadius: '50px',
                  boxShadow: '0 4px 24px rgba(196, 122, 101, 0.35)',
                }}
              >
                <CalendarCheck size={14} strokeWidth={2} aria-hidden="true" />
                GET YOUR FREE AUDIT
              </button>
            </RevealOnScroll>
          </div>

          {/* Right: pillars — each staggered from right */}
          <div className="flex flex-col gap-2 md:gap-3">
            {[
              {
                number: '01',
                title: 'Understand Your Business',
                desc: 'Understand how your business works, what it attracts, what it serves, how it operates and where it stands today.',
              },
              {
                number: '02',
                title: 'Identify Opportunities',
                desc: 'We uncover overlooked opportunities, inefficiencies and areas where your business can improve and evolve.',
              },
              {
                number: '03',
                title: 'A Clear Direction',
                desc: 'Leave with a clear direction for what comes next — whether we work together or not.',
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.number} delay={0.1 + i * 0.12} direction="right">
                <div
                  className="group flex gap-5 p-5 md:gap-6 md:p-8 transition-all duration-400"
                  style={{
                    background: '#0F0D12',
                    border: '1px solid rgba(196, 122, 101, 0.12)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#131118'
                    e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.28)'
                    e.currentTarget.style.boxShadow = '0 6px 32px rgba(196, 122, 101,0.07), 0 4px 20px rgba(0,0,0,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0F0D12'
                    e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.12)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  <span
                    className="font-display font-semibold text-gold-light shrink-0 mt-0.5"
                    style={{ fontSize: '0.88rem', letterSpacing: '0.1em' }}
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3
                      className="font-display font-medium text-ink mb-2"
                      style={{ fontSize: '1.22rem' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body font-normal text-ink-muted"
                      style={{ fontSize: '0.96rem', lineHeight: 1.8 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
