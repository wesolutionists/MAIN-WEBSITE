import RevealOnScroll from '../ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'

const pillars = [
  {
    number: '01',
    title: 'Curious By Nature',
    desc: 'We stay close to what’s changing — exploring new technology, new possibilities and better ways to solve real business problems.',
  },
  {
    number: '02',
    title: 'Built With Purpose',
    desc: 'We don’t build technology for the sake of technology. We build with intention, solving problems that matter and creating value that lasts.',
  },
  {
    number: '03',
    title: 'Obsessed With What’s Next',
    desc: 'We’re deeply involved in the evolution of AI and technology because we believe the businesses that embrace what’s next will shape what comes after.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative pt-8 md:pt-10 pb-9 md:pb-12 overflow-hidden"
      aria-label="About Us"
    >
      <AnimatedRule />
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(196, 122, 101, 0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 mt-8 md:mt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

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
                We Build What We Believe The Future Is
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p
                className="font-body font-normal text-ink-muted mt-6 max-w-md"
                style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
              >
                A small, senior team — not a big agency playbook. Every solution is built to compound, not just launch.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div
                className="mt-8 h-px w-16"
                style={{ background: 'linear-gradient(90deg, #C47A65, transparent)' }}
                aria-hidden="true"
              />
            </RevealOnScroll>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-2.5">
            {pillars.map((pillar, i) => (
              <RevealOnScroll key={pillar.number} delay={0.1 + i * 0.1}>
                <div
                  className="group relative flex gap-5 px-7 py-7 md:gap-6 md:px-8 md:py-8 transition-all duration-500 overflow-hidden"
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
                  <span
                    className="font-display font-light text-ink-muted shrink-0 mt-0.5"
                    style={{ fontSize: '0.88rem', letterSpacing: '0.1em' }}
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h3
                      className="font-display font-medium mb-2"
                      style={{ fontSize: '1.22rem', color: '#D4947E' }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="font-body font-normal text-ink-muted"
                      style={{ fontSize: '0.96rem', lineHeight: 1.8 }}
                    >
                      {pillar.desc}
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
