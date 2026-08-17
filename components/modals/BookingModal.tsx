'use client'

import { useState, useEffect, useRef } from 'react'
import { X, CalendarCheck } from 'lucide-react'
import { useFocusTrap } from '../ui/useFocusTrap'

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedPackage?: string
}

export default function BookingModal({ isOpen, onClose, selectedPackage }: Props) {
  const [form, setForm] = useState({ name: '', email: '', preferred: '', message: '' })
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
          subject: `Consultation Booking from ${form.name}${selectedPackage ? ` — ${selectedPackage}` : ''}`,
          botcheck: false,
          spam_filter: false,
          package: selectedPackage || 'General Consultation',
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
    fontFamily: 'var(--font-montserrat)',
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
      aria-label="Book a Free Consultation"
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
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #C47A65, #D4947E, #C47A65)' }} aria-hidden="true" />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="font-body font-medium text-ink-muted mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.28em' }}>
                {selectedPackage ? selectedPackage.toUpperCase() : 'FREE CONSULTATION'}
              </p>
              <h2 className="font-display font-semibold text-ink" style={{ fontSize: '1.9rem', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                Book your discovery call.
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
                className="mx-auto h-12 w-12 rounded-full flex items-center justify-center mb-4"
                style={{ border: '1px solid rgba(196, 122, 101, 0.4)', color: '#C47A65' }}
              >
                <CalendarCheck size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-display font-medium text-ink mb-2" style={{ fontSize: '1.4rem' }}>Booking request sent.</h3>
              <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.88rem', lineHeight: 1.75 }}>
                We&apos;ll confirm your slot within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
              <p className="font-body font-normal text-ink-muted" style={{ fontSize: '0.85rem', lineHeight: 1.75 }}>
                No pitch. No pressure. Just an honest conversation about your business and where you want to go.
              </p>

              <div className="grid grid-cols-2 gap-7">
                <div>
                  <label htmlFor="book-name" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                    YOUR NAME
                  </label>
                  <input
                    ref={firstInputRef}
                    id="book-name"
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
                  <label htmlFor="book-email" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                    EMAIL
                  </label>
                  <input
                    id="book-email"
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
                <label htmlFor="book-preferred" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  PREFERRED TIME SLOT
                </label>
                <select
                  id="book-preferred"
                  name="preferred"
                  value={form.preferred}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                >
                  <option value="" style={{ background: '#131118' }}>Choose a time</option>
                  <option value="morning" style={{ background: '#131118' }}>Morning (9am – 12pm)</option>
                  <option value="afternoon" style={{ background: '#131118' }}>Afternoon (12pm – 5pm)</option>
                  <option value="evening" style={{ background: '#131118' }}>Evening (5pm – 8pm)</option>
                  <option value="flexible" style={{ background: '#131118' }}>Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="book-message" className="font-body font-normal text-gold-dim block mb-1.5" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  WHAT WOULD YOU LIKE TO DISCUSS?
                </label>
                <textarea
                  id="book-message"
                  name="message"
                  rows={3}
                  placeholder="Brief context about your business and goals..."
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
                  background: 'linear-gradient(135deg, #C47A65, #D4947E, #C47A65)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                }}
              >
                {status === 'sending' ? 'BOOKING...' : 'CONFIRM BOOKING REQUEST'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
