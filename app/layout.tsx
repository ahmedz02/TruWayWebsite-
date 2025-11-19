import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  title: 'Tru-Way Community Center Inc. | Buffalo NY | After-School & Summer Programs',
  description: 'Tru-Way Community Center Inc. serves youth and families in Western New York with after-school programs, summer camps, and community support services. Located in Buffalo, NY since 2000.',
  keywords: [
    'community center',
    'Buffalo NY',
    'after school programs',
    'summer programs',
    'youth programs',
    'community services',
    'Western New York',
    'Tru-Way Inc.',
    'Buffalo community center',
    'youth activities',
    'after school care',
    'summer camp Buffalo',
    'community support',
    'Buffalo youth programs'
  ],
  authors: [{ name: 'Tru-Way Community Center Inc.' }],
  creator: 'Tru-Way Community Center Inc.',
  publisher: 'Tru-Way Community Center Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://truwaycommunitycenter.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tru-Way Community Center Inc. | Buffalo NY | After-School & Summer Programs',
    description: 'Serving youth and families in Western New York with after-school programs, summer camps, and community support services since 2000.',
    url: 'https://truwaycommunitycenter.com',
    siteName: 'Tru-Way Community Center Inc.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/heroimage.jpg',
        width: 1424,
        height: 800,
        alt: 'Tru-Way Community Center Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tru-Way Community Center Inc. | Buffalo NY',
    description: 'Serving youth and families in Western New York with after-school programs, summer camps, and community support services.',
    images: ['/heroimage.jpg'],
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
