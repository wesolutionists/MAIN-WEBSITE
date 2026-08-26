'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from '../ui/RevealOnScroll'
import AnimatedRule from '@/components/ui/AnimatedRule'

const faqs = [
  {
    q: "I'm not sure what my business needs. Can you help me figure it out?",
    a: "Absolutely. You don't need a technical plan to start. Tell us where your business is today and what you're trying to achieve — we'll identify where technology can create the most meaningful value.",
  },
  {
    q: 'Is AI actually useful for a business like mine?',
    a: 'It depends on your business. We look for practical opportunities where AI can reduce repetitive work, improve customer experiences, increase responsiveness or help your team operate more effectively.',
  },
  {
    q: 'Can you build something specifically around my business?',
    a: "Yes. Every business is different, so we design systems around your workflows, customers, tools and goals — rather than forcing you into a predefined model.",
  },
  {
    q: "Will this actually make my business better or just give me another system to manage?",
    a: "The goal is to remove complexity, not create it. We build systems that take repetitive work off your team's plate, connect your operations and make important processes easier to manage.",
  },
  {
    q: 'Can you work with the tools and systems I already use?',
    a: 'Yes. Where possible, we integrate with your existing website, CRM, communication platforms and business software rather than asking you to replace everything.',
  },
  {
    q: 'What does it cost to work with The Solutionists?',
    a: 'Our solutions have a one-time implementation cost followed by a monthly fee for ongoing evolution, maintenance and optimization. Starting prices are shown in our investment section.',
  },
  {
    q: 'What happens after I contact you?',
    a: "We'll review what you've shared, understand what you're trying to achieve and come back with a clear direction for what makes sense next — no obligation to move forward.",
  },
  {
    q: "What if I have an idea that isn't listed on your website?",
    a: "Tell us anyway. Our listed solutions are starting points, not limits. If there's a better way to solve your problem, we'll explore it with you and build around what your business actually needs.",
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
              className="font-display font-semibold"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#D4947E' }}
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
                        color: open === i ? '#F4EFE8' : '#D8CFC6',
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
