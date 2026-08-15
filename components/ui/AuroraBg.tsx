export default function AuroraBg() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Orb 1 — warm rose-gold, top-right (matches hero glow) */}
      <div
        style={{
          position: 'absolute',
          width: '70vw',
          height: '70vw',
          top: '-20vw',
          right: '-15vw',
          background:
            'radial-gradient(circle, rgba(196,122,101,0.09) 0%, rgba(180,90,70,0.04) 35%, transparent 68%)',
          filter: 'blur(52px)',
          animation: 'aurora-1 22s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — deep terracotta, bottom-left */}
      <div
        style={{
          position: 'absolute',
          width: '80vw',
          height: '80vw',
          bottom: '-30vw',
          left: '-22vw',
          background:
            'radial-gradient(circle, rgba(160,80,55,0.07) 0%, rgba(130,55,40,0.03) 38%, transparent 68%)',
          filter: 'blur(65px)',
          animation: 'aurora-2 28s ease-in-out infinite',
        }}
      />

      {/* Orb 3 — soft rose-amber, center */}
      <div
        style={{
          position: 'absolute',
          width: '55vw',
          height: '55vw',
          top: '35%',
          left: '20%',
          background:
            'radial-gradient(circle, rgba(212,148,126,0.045) 0%, rgba(196,100,75,0.02) 40%, transparent 70%)',
          filter: 'blur(45px)',
          animation: 'aurora-3 18s ease-in-out infinite',
        }}
      />

      {/* Deep vignette — keeps edges pure black, gives hero-like depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(10,9,12,0.6) 75%, rgba(10,9,12,0.85) 100%)',
        }}
      />
    </div>
  )
}
