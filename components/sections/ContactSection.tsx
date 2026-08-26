'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New message from ${form.name}`,
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
    fontSize: '1rem',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  return (
    <section
      id="contact"
      className="relative py-12 md:py-16 overflow-hidden"
      aria-label="Contact"
      style={{
        borderTop: '1px solid rgba(196, 122, 101, 0.1)',
        backgroundImage: 'url(/contact-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(10,9,12,0.80) 0%, rgba(10,9,12,0.65) 50%, rgba(10,9,12,0.85) 100%)' }}
        aria-hidden="true"
      />
      {/* Mobile: stronger flat overlay */}
      <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'rgba(10,9,12,0.25)' }} aria-hidden="true" />
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(196, 122, 101, 0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <RevealOnScroll>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Let&apos;s cook together.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p
                className="font-body font-normal text-ink-muted mt-5 max-w-sm"
                style={{ fontSize: '1.05rem', lineHeight: 1.9 }}
              >
                Tell us where your business is today, what you want to achieve or what you&apos;d like to change. We&apos;ll explore what we can build together.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="mt-12 space-y-6">
                {[
                  { label: 'General', value: 'hello@wesolutionists.com', href: 'https://mail.google.com/mail/?view=cm&to=hello@wesolutionists.com' },
                  { label: 'Support', value: 'support@wesolutionists.com', href: 'https://mail.google.com/mail/?view=cm&to=support@wesolutionists.com' },
                  { label: 'Location', value: 'Available Worldwide', href: null },
                  { label: 'Response Time', value: 'Within 24 hours', href: null },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="font-body font-medium text-ink-muted mb-1"
                      style={{ fontSize: '0.78rem', letterSpacing: '0.22em' }}
                    >
                      {item.label.toUpperCase()}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-normal transition-colors duration-300"
                        style={{ fontSize: '1rem', color: 'rgba(196,122,101,0.75)', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#D4947E')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(196,122,101,0.75)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body font-normal text-ink-muted" style={{ fontSize: '1rem' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: form */}
          <RevealOnScroll delay={0.15} direction="left">
            {status === 'sent' ? (
              <div
                className="flex flex-col items-center justify-center h-full py-16 text-center"
                style={{ border: '1px solid rgba(196, 122, 101, 0.15)', padding: '3rem' }}
              >
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center mb-6"
                  style={{ border: '1px solid rgba(196, 122, 101, 0.4)', color: '#C47A65' }}
                >
                  <Send size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3
                  className="font-display font-medium text-ink mb-3"
                  style={{ fontSize: '1.6rem' }}
                >
                  Message received.
                </h3>
                <p
                  className="font-body font-normal text-ink-muted"
                  style={{ fontSize: '1rem', lineHeight: 1.8 }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                noValidate
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-body font-medium text-ink-muted block mb-2"
                    style={{ fontSize: '0.78rem', letterSpacing: '0.22em' }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
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
                  <label
                    htmlFor="contact-email"
                    className="font-body font-medium text-ink-muted block mb-2"
                    style={{ fontSize: '0.78rem', letterSpacing: '0.22em' }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-interest"
                    className="font-body font-medium text-ink-muted block mb-2"
                    style={{ fontSize: '0.78rem', letterSpacing: '0.22em' }}
                  >
                    WHAT CAN WE HELP YOU WITH?
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.7)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(196, 122, 101,0.25)')}
                  >
                    <option value="" style={{ background: '#131118' }}>Select an option</option>
                    <option value="Digital Foundation" style={{ background: '#131118' }}>Digital Foundation</option>
                    <option value="AI Business Systems" style={{ background: '#131118' }}>AI Business Systems</option>
                    <option value="Not sure yet" style={{ background: '#131118' }}>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-body font-medium text-ink-muted block mb-2"
                    style={{ fontSize: '0.78rem', letterSpacing: '0.22em' }}
                  >
                    TELL US A LITTLE ABOUT WHAT YOU&apos;RE LOOKING TO ACHIEVE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="A few words about your business or what you'd like to build..."
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
                  className="inline-flex items-center gap-3 px-8 py-4 font-body font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(196, 122, 101,0.4)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer self-start"
                  style={{
                    background: 'linear-gradient(135deg, #C47A65, #D4947E, #C47A65)',
                    fontSize: '0.76rem',
                    letterSpacing: '0.18em',
                    borderRadius: '50px',
                  }}
                >
                  <Send size={13} strokeWidth={2} aria-hidden="true" />
                  {status === 'sending' ? 'SENDING...' : 'START THE CONVERSATION →'}
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
