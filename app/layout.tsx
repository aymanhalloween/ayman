import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ayman Hassen',
    template: '%s | Ayman Hassen'
  },
  description: 'Founder of Maidah. Previously Apple, Nike, Alif. Building permanent institutions for Muslims in the West.',
  keywords: [
    'Ayman Hassen',
    'Maidah',
    'Maidah Foundation',
    'Apple',
    'Nike',
    'Alif',
    'Product Manager',
    'Waqf',
    'Endowment',
    'Muslim',
    'Dallas',
  ],
  authors: [{ name: 'Ayman Hassen', url: 'https://aymanhassen.com' }],
  creator: 'Ayman Hassen',
  publisher: 'Ayman Hassen',
  metadataBase: new URL('https://aymanhassen.com'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ayman Hassen',
    description: 'Founder of Maidah. Previously Apple, Nike, Alif. Building permanent institutions for Muslims in the West.',
    url: 'https://aymanhassen.com',
    siteName: 'Ayman Hassen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ayman Hassen',
    description: 'Founder of Maidah. Previously Apple, Nike, Alif.',
    creator: '@aymancooks',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#E8E8E8]">{children}</body>
    </html>
  )
} 