'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CursorGlow from '@/components/CursorGlow'
import HeroSection from '@/components/sections/HeroSection'
import TransitionSection from '@/components/sections/TransitionSection'
import ConsultationSection from '@/components/sections/ConsultationSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BrandingSection from '@/components/sections/BrandingSection'
import PackagesSection from '@/components/sections/PackagesSection'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import PortfolioStrip from '@/components/sections/PortfolioStrip'
import Footer from '@/components/sections/Footer'
import ContactModal from '@/components/modals/ContactModal'
import BookingModal from '@/components/modals/BookingModal'
import AuroraBg from '@/components/ui/AuroraBg'

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      {/* Hero-matched aurora glow — fixed behind all content */}
      <AuroraBg />

      {/* Subtle ambient cursor glow */}
      <CursorGlow />

      {/* Navigation */}
      <Header />

      {/* Page content */}
      <main>
        <HeroSection
          onAuditClick={() => setContactOpen(true)}
          onConsultClick={() => setBookingOpen(true)}
        />

        <TransitionSection />

        <ConsultationSection onConsultClick={() => setBookingOpen(true)} />

        <ServicesSection />

        <BrandingSection />

        <PackagesSection onConsultClick={() => setBookingOpen(true)} />

        <AboutSection />

        <PortfolioStrip />

        <ContactSection />

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
