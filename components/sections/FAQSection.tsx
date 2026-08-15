'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from '../ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'

const faqs = [
  {
    q: 'How long does a website project take?',
    a: 'Most projects are completed within 2–4 weeks, depending on the scope and how quickly content is provided. We work efficiently without cutting corners — quality is non-negotiable.',
  },
  {
    q: 'Do I need to have content ready before we start?',
    a: 'Not necessarily. We can guide you through what\'s needed and even help craft copy that speaks to your audience. The clearer your vision, the faster we move.',
  },
  {
    q: 'What is n8n and how does automation help my business?',
    a: 'n8n is an open-source workflow automation platform that connects your tools — CRM, email, forms, databases — and automates repetitive tasks like lead follow-ups, notifications, and data syncing. Less manual work. More revenue.',
  },
  {
    q: 'Do you run ads on platforms other than Meta?',
    a: 'We specialize in Meta (Facebook & Instagram) Ads because that\'s where the ROI is strongest for most businesses. Multi-platform strategies can be discussed during your consultation.',
  },
  {
    q: 'Can I upgrade my package after we start?',
    a: 'Absolutely. Many clients start with the Starter package and scale into Growth or Full Automation as their business expands. We make transitions seamless.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Every package includes post-launch support, and extended maintenance plans are available. We don\'t disappear after delivery — we\'re invested in your continued success.',
  },
  {
    q: 'What makes The Solutionists different from other agencies?',
    a: 'We combine design, marketing, and automation under one roof — so your brand, your traffic, and your systems all speak the same language. No handoffs, no gaps, no excuses.',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="relative pt-10 md:pt-12 pb-12 md:pb-16 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <AnimatedRule />
      <div className="mx-auto max-w-4xl px-6 lg:px-10 mt-10 md:mt-12">
        {/* Header */}
        <div className="mb-14">
          <RevealOnScroll>
            <p
              className="font-body font-medium text-ink-muted mb-4"
              style={{ fontSize: '0.78rem', letterSpacing: '0.3em' }}
            >
              GOT QUESTIONS
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              className="font-display font-semibold text-ink"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              We Have Answers
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p
              className="font-body font-normal text-ink-muted mt-5 max-w-xl"
              style={{ fontSize: '1.05rem', lineHeight: 1.85 }}
            >
              Straight answers to the questions we hear most. If yours isn&apos;t here, just ask.
            </p>
          </RevealOnScroll>
        </div>

        {/* Accordion */}
        <dl>
          {faqs.map((faq, i) => (
            <RevealOnScroll key={faq.q} delay={i * 0.05}>
              <div
                className="border-b"
                style={{ borderColor: 'rgba(196, 122, 101, 0.12)' }}
              >
                <dt>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-7 text-left group cursor-pointer"
                    onClick={() => toggle(i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className="font-display font-medium transition-colors duration-300"
                      style={{
                        fontSize: '1.18rem',
                        lineHeight: 1.35,
                        color: open === i ? '#F4EFE8' : '#D8D0C8',
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      className="shrink-0"
                      style={{ color: open === i ? '#C47A65' : '#AEA8A4' }}
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      aria-hidden="true"
                    >
                      <Plus size={16} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.dd
                      key={`faq-${i}`}
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.42, ease },
                        opacity: { duration: 0.25, ease: 'easeOut' },
                      }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="font-body font-normal text-ink-muted pb-7 pr-10"
                        style={{ fontSize: '1rem', lineHeight: 1.9 }}
                      >
                        {faq.a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </dl>
      </div>
    </section>
  )
}
