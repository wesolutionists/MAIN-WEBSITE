const clients = [
  { name: 'VANTAGE', sub: 'Consulting' },
  { name: 'BLOOM', sub: 'Wellness' },
  { name: 'ARCLINE', sub: 'Architecture' },
  { name: 'STRATA', sub: 'Real Estate' },
  { name: 'KOVA', sub: 'E-Commerce' },
  { name: 'FORGE', sub: 'Technology' },
]

// Duplicated for seamless marquee loop
const allClients = [...clients, ...clients]

export default function TransitionSection() {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
      aria-label="Trusted by"
      style={{ borderTop: '1px solid rgba(196, 122, 101, 0.08)', borderBottom: '1px solid rgba(196, 122, 101, 0.08)' }}
    >
      {/* Left + right fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: 'linear-gradient(to right, #0A090C, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: 'linear-gradient(to left, #0A090C, transparent)' }}
        aria-hidden="true"
      />

      <div className="mb-8 text-center">
        <p
          className="font-body font-medium text-ink-dim"
          style={{ fontSize: '0.7rem', letterSpacing: '0.35em' }}
        >
          TRUSTED BY
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-16 w-max">
          {allClients.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 shrink-0"
              style={{ minWidth: '120px' }}
            >
              <span
                className="font-display font-semibold text-ink-muted"
                style={{
                  fontSize: '1.15rem',
                  letterSpacing: '0.18em',
                  lineHeight: 1,
                  opacity: 0.55,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
              >
                {client.name}
              </span>
              <span
                className="font-body font-normal text-ink-dim"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', opacity: 0.4 }}
              >
                {client.sub.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
