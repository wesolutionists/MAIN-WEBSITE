'use client'

import { useEffect, useRef, useState } from 'react'

/** Defers a CSS background-image URL until the element scrolls near the viewport. */
export function useLazyBackground<T extends HTMLElement>(url: string) {
  const ref = useRef<T>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '600px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, backgroundImage: loaded ? `url(${url})` : undefined }
}
