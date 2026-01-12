import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ayman Hassen | Product Manager & Investor',
    template: '%s | Ayman Hassen'
  },
  description: 'Product manager and investor based in SF and Dallas. Experience building products at Apple, strategy at Nike, and operating partner at Alif VC. Currently investing into companies and building WAQF endowment fund.',
  keywords: [
    'Ayman Hassen',
    'Product Manager',
    'Investor',
    'Venture Capital',
    'Apple Product Manager',
    'Nike Strategy',
    'Alif VC',
    'Hassen Ventures',
    'San Francisco',
    'Dallas',
    'WAQF',
    'Endowment Fund',
    'Startup Advisor',
    'Tech Advisor',
    'Product Strategy',
    'Operating Partner'
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
    title: 'Ayman Hassen | Product Manager & Investor',
    description: 'Product manager and investor based in SF and Dallas. Experience at Apple, Nike, and Alif VC. Building the future through startups and WAQF endowment fund.',
    url: 'https://aymanhassen.com',
    siteName: 'Ayman Hassen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayman Hassen | Product Manager & Investor',
    description: 'Product manager and investor based in SF and Dallas. Experience at Apple, Nike, and Alif VC.',
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
      <body className="bg-white text-black">{children}</body>
    </html>
  )
} 