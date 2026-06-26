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
  metadataBase: new URL('https://tru-way.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tru-Way Community Center Inc. | Buffalo NY | After-School & Summer Programs',
    description: 'Serving youth and families in Western New York with after-school programs, summer camps, and community support services since 2000.',
    url: 'https://tru-way.com',
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
    // Add your Google Search Console verification code to Netlify env vars as NEXT_PUBLIC_GSC_VERIFICATION
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        <StructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
