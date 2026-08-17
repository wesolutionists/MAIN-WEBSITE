import type { Metadata, Viewport } from 'next'
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
    canonical: '/',
  },
  openGraph: {
    title: 'The Solutionists — Design. Market. Automate.',
    description:
      'We help businesses build lasting legacies through premium web design, data-driven Meta Ads and intelligent automation.',
    type: 'website',
    url: 'https://www.wesolutionists.com',
    siteName: 'The Solutionists',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Solutionists — Design. Market. Automate.',
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
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
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
      <body>{children}</body>
    </html>
  )
}
