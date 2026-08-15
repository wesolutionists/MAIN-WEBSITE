'use client'

import { useEffect, RefObject } from 'react'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return
    const el = ref.current
    const nodes = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (!nodes.length) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [active, ref])
}
