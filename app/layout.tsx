import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayman Hassen',
  description: 'Product guy that builds cool stuff based in SF/Dallas. Experience at Apple, Nike, and Alif VC. Currently consulting for various companies.',
  keywords: ['Ayman Hassen', 'Product Manager', 'Consultant', 'Apple', 'Nike', 'Alif VC', 'Hassen Labs'],
  authors: [{ name: 'Ayman Hassen' }],
  openGraph: {
    title: 'Ayman Hassen',
    description: 'Product guy that builds cool stuff based in SF/Dallas. Experience at Apple, Nike, and Alif VC. Currently consulting for various companies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayman Hassen',
    description: 'Product guy that builds cool stuff based in SF/Dallas. Experience at Apple, Nike, and Alif VC. Currently consulting for various companies.',
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