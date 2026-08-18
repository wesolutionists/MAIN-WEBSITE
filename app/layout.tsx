import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0A090C',
}

export const metadata: Metadata = {
  title: 'The Solutionists — Design. Market. Automate.',
  description:
    'We help businesses build lasting legacies through premium web design, data-driven Meta Ads and intelligent automation.',
  metadataBase: new URL('https://www.wesolutionists.com'),
  alternates: {
    canonical: 'https://www.wesolutionists.com/',
  },
  authors: [{ name: 'The Solutionists', url: 'https://www.wesolutionists.com/' }],
  openGraph: {
    title: 'The Solutionists — Design. Market. Automate.',
    description:
      'We help businesses build lasting legacies through premium web design, data-driven Meta Ads and intelligent automation.',
    type: 'website',
    url: 'https://www.wesolutionists.com/',
    siteName: 'The Solutionists',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A dark, premium hero image for The Solutionists digital agency — web design, marketing and automation.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wesolutionists',
    creator: '@wesolutionists',
    title: 'The Solutionists — Design. Market. Automate.',
    description:
      'We help businesses build lasting legacies through premium web design, data-driven Meta Ads and intelligent automation.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: 'https://www.wesolutionists.com/favicon.jpg', type: 'image/jpeg' }],
    apple: 'https://www.wesolutionists.com/apple-touch-icon.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'The Solutionists',
                url: 'https://www.wesolutionists.com/',
                logo: 'https://www.wesolutionists.com/logo.jpg',
                description:
                  'We help businesses build lasting legacies through premium web design, data-driven Meta Ads and intelligent automation.',
                email: 'hello@wesolutionists.com',
                sameAs: [
                  'https://x.com/wesolutionists',
                  'https://www.linkedin.com/in/thesolutionists',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'The Solutionists',
                url: 'https://www.wesolutionists.com/',
              },
            ]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9NSBVDS8JJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9NSBVDS8JJ');
          `}
        </Script>
        <GoogleAnalytics />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
