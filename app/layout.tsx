import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayman Hassen — Builder, Operator, Storyteller',
  description: 'Ex-Apple PM, venture strategist, and founder of AI-powered startups. Building products with soul.',
  keywords: ['Ayman Hassen', 'Product Manager', 'AI', 'Startups', 'Apple', 'Venture'],
  authors: [{ name: 'Ayman Hassen' }],
  openGraph: {
    title: 'Ayman Hassen — Builder, Operator, Storyteller',
    description: 'Ex-Apple PM, venture strategist, and founder of AI-powered startups. Building products with soul.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayman Hassen — Builder, Operator, Storyteller',
    description: 'Ex-Apple PM, venture strategist, and founder of AI-powered startups. Building products with soul.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 overflow-hidden">{children}</body>
    </html>
  )
} 