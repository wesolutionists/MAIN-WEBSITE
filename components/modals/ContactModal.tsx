'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { useFocusTrap } from '../ui/useFocusTrap'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', website: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(dialogRef, isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Trap Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Free Audit Request from ${form.name}`,
          botcheck: false,
          spam_filter: false,
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'idle')
    } catch {
      setStatus('idle')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(196, 122, 101, 0.25)',
    color: '#F4EFE8',
    fontFamily: 'Belleza, Georgia, serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    padding: '10px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10, 9, 12, 0.85)', backdropFilter: 'blur(12px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Get a Free Audit"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto"
        style={{
          background: '#131118',
          border: '1px solid rgba(196, 122, 101, 0.2)',
        }}
      >
        {/* Gold top line */}
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #B86855, #D4947E, #B86855)' }} aria-hidden="true" />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="font-body font-medium text-ink-muted mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.28em' }}>
                FREE AUDIT
              </p>
              <h2 className="font-display font-semibold text-ink" style={{ fontSize: '1.9rem', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                Let&apos;s audit your business.
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-ink-muted hover:text-ink transition-colors duration-300 ml-4 mt-1"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {status === 'sent' ? (
            <div className="py-12 text-center">
              <div
                className="mx-auto h-12 w-12 rounded-full flex items-center justify-center text-gold mb-4"
                style={{ border: '1px solid rgba(196, 122, 101, 0.4)' }}
              >
                <Send size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-display font-medium text-ink mb-2" style={{ fontSize: '1.4rem' }}>Request received.</h3>
              <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.88rem', lineHeight: 1.75 }}>
                We&apos;ll review your details and be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
              <div className="grid grid-cols-2 gap-7">
                <div>
                  <label htmlFor="audit-name" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                    YOUR NAME
                  </label>
                  <input
                    ref={firstInputRef}
                    id="audit-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                  />
                </div>
                <div>
                  <label htmlFor="audit-email" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                    EMAIL
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@co.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="audit-website" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  WEBSITE URL (if any)
                </label>
                <input
                  id="audit-website"
                  type="url"
                  name="website"
                  autoComplete="url"
                  placeholder="https://yoursite.com"
                  value={form.website}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                />
              </div>

              <div>
                <label htmlFor="audit-budget" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  BUDGET RANGE
                </label>
                <select
                  id="audit-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                >
                  <option value="" style={{ background: '#131118' }}>Select a range</option>
                  <option value="under-150" style={{ background: '#131118' }}>Under $150</option>
                  <option value="150-300" style={{ background: '#131118' }}>$150 – $300</option>
                  <option value="300-700" style={{ background: '#131118' }}>$300 – $700</option>
                  <option value="700-plus" style={{ background: '#131118' }}>$700+</option>
                  <option value="unsure" style={{ background: '#131118' }}>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="audit-message" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  WHAT ARE YOUR BIGGEST CHALLENGES?
                </label>
                <textarea
                  id="audit-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what's not working..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 font-body font-medium text-bg transition-all duration-300 hover:shadow-[0_0_30px_rgba(196, 122, 101,0.25)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #B86855, #D4947E, #B86855)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                }}
              >
                {status === 'sending' ? 'SUBMITTING...' : 'REQUEST MY FREE AUDIT'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
