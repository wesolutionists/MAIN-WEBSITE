import RevealOnScroll from '../ui/RevealOnScroll'
import CountUp from '../ui/CountUp'
import AnimatedRule from '@/components/ui/AnimatedRule'

const stats = [
  { value: '250+', label: 'Happy Clients', barPct: 82 },
  { value: '2,000+', label: 'Projects Delivered', barPct: 93 },
  { value: '3', label: 'Growth Solutions', barPct: 55 },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-10 md:pt-12 pb-12 md:pb-16 overflow-hidden"
      aria-label="About Us"
    >
      <AnimatedRule />
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(196, 122, 101, 0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 mt-10 md:mt-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            <RevealOnScroll>
              <p
                className="font-body font-medium text-ink-muted mb-5"
                style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
              >
                WHO WE ARE
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display font-semibold text-ink text-balance"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                Let&apos;s Build Your Legacy.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div
                className="mt-8 h-px w-16"
                style={{ background: 'linear-gradient(90deg, #C47A65, transparent)' }}
                aria-hidden="true"
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div className="mt-8 space-y-8">
                <div>
                  <p
                    className="font-body font-medium text-ink-muted mb-3"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.22em' }}
                  >
                    OUR VISION
                  </p>
                  <p
                    className="font-body font-normal text-ink-muted"
                    style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
                  >
                    To combine AI, automation, modern technology and strategic marketing to help businesses
                    build a lasting legacy — one that outlives the campaign, the trend and the noise.
                  </p>
                </div>
                <div>
                  <p
                    className="font-body font-medium text-ink-muted mb-3"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.22em' }}
                  >
                    OUR MISSION
                  </p>
                  <p
                    className="font-body font-normal text-ink-muted"
                    style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
                  >
                    Transform ideas into intelligent systems that help businesses grow — sustainably, scalably,
                    and with purpose.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: stat showcase */}
          <div className="flex flex-col gap-3">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={0.1 + i * 0.1}>
                <div
                  className="group relative flex flex-col justify-center px-10 py-10 transition-all duration-500 overflow-hidden"
                  style={{
                    background: '#0F0D12',
                    border: '1px solid rgba(196, 122, 101, 0.13)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#131118'
                    e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.3)'
                    e.currentTarget.style.boxShadow =
                      '0 8px 50px rgba(196, 122, 101,0.08), 0 4px 24px rgba(0,0,0,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0F0D12'
                    e.currentTarget.style.borderColor = 'rgba(196, 122, 101, 0.13)'
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)'
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: 'linear-gradient(180deg, transparent, rgba(196, 122, 101, 0.5), transparent)' }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-body font-medium text-ink-muted mb-3"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
                  >
                    {stat.label.toUpperCase()}
                  </p>
                  <CountUp
                    value={stat.value}
                    className="font-display font-semibold"
                    style={{
                      fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                      lineHeight: 1,
                      color: '#F4EFE8',
                      letterSpacing: '-0.03em',
                    }}
                    showBar
                    barPct={stat.barPct}
                    duration={2200}
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
