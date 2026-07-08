import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'glace14 | Studio Créatif Paris',
    template: '%s | Studio Glace14',
  },
  description: 'Studio professionnel de production photo, vidéo et audio au coeur de Paris. Location de studio avec cyclorama, éclairage professionnel et équipements haut de gamme. Réservez en ligne.',
  generator: 'v0.app',
  metadataBase: new URL('https://glace14.com'),
  
  // Alternate languages for SEO
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/?lang=en',
    },
  },
  
  // Open Graph / Social Media Sharing
  openGraph: {
    title: 'Studio Glace14 | Location Studio Photo & Vidéo Paris',
    description: 'Studio professionnel de 96.76m² avec cyclorama 3 faces, éclairage professionnel et équipements haut de gamme. Réservez et payez en ligne.',
    url: 'https://glace14.com',
    siteName: 'Studio Glace14',
    images: [
      {
        url: '/og-image.png',
        width: 1456,
        height: 816,
        alt: 'Studio Glace14 - Studio Créatif Paris',
        type: 'image/png',
      },
    ],
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Glace14 | Location Studio Photo & Vidéo Paris',
    description: 'Studio professionnel de production photo, vidéo et audio à Paris. Cyclorama 3 faces, éclairage pro, réservation en ligne.',
    images: ['/og-image.png'],
    site: '@glace14studio',
    creator: '@glace14studio',
  },
  
  // Favicon and Icons
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
  
  // SEO metadata
  keywords: [
    'studio photo Paris',
    'location studio photo',
    'studio vidéo Paris',
    'cyclorama Paris',
    'studio production',
    'location studio créatif',
    'studio photo professionnel',
    'espace créatif Paris',
    'glace14',
    'studio avec cyclorama',
  ],
  authors: [{ name: 'Studio Glace14', url: 'https://glace14.com' }],
  creator: 'Studio Glace14',
  publisher: 'Studio Glace14',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'photography',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
