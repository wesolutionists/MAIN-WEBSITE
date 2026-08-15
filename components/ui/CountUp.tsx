'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

function parseVal(val: string) {
  const m = val.match(/^([^0-9]*)([0-9][0-9,]*)([^0-9]*)$/)
  if (!m) return { num: 0, prefix: '', suffix: val, hasComma: false }
  return {
    prefix: m[1],
    num: parseInt(m[2].replace(/,/g, ''), 10),
    suffix: m[3],
    hasComma: m[2].includes(','),
  }
}

interface Props {
  value: string
  className?: string
  style?: React.CSSProperties
  duration?: number
  showBar?: boolean
  barPct?: number
}

export default function CountUp({ value, className, style, duration = 2000, showBar, barPct = 75 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const [pulsing, setPulsing] = useState(false)
  const { num, prefix, suffix, hasComma } = parseVal(value)

  useEffect(() => {
    if (!isInView) return
    setTriggered(true)
    let raf: number
    const start = performance.now()

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * num))
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setPulsing(true)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, num, duration])

  const display = hasComma && count >= 1000 ? count.toLocaleString() : String(count)

  return (
    <>
      <span ref={ref} className={`${className ?? ''} ${pulsing ? 'stat-pulse' : ''}`.trim()} style={style}>
        {prefix}{display}{suffix}
      </span>
      {showBar && (
        <div
          className="mt-5 h-px overflow-hidden"
          style={{ background: 'rgba(196, 122, 101, 0.12)' }}
          aria-hidden="true"
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #C47A65, rgba(212,148,126,0.4))',
              width: triggered ? `${barPct}%` : '0%',
              transition: triggered ? `width ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)` : 'none',
            }}
          />
        </div>
      )}
    </>
  )
}
