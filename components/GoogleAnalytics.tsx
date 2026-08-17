'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const GA_ID = 'G-9NSBVDS8JJ'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    // Skip first render — the gtag init script already fires the initial page_view
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag
    if (typeof gtag !== 'function') return
    gtag('config', GA_ID, { page_path: pathname })
  }, [pathname])

  return null
}
