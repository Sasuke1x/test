import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { siteInfo } from '@/data/siteData'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  metadataBase: new URL('https://housetransformersinc.com'),
  title: {
    default: 'House Transformers Inc. | Roofing, Remodeling & Restoration in Glen Burnie, MD',
    template: '%s | House Transformers Inc.',
  },
  description: 'House Transformers Inc. is an award-winning roofing, remodeling, and restoration company in Glen Burnie, MD. Residential and commercial services, emergency response, and insurance support. Call (410) 508-8110.',
  keywords: [
    'roofing contractor',
    'roof replacement',
    'roof repair',
    'siding',
    'windows',
    'kitchen remodeling',
    'bath remodeling',
    'home additions',
    'decks and patios',
    'emergency services',
    'water damage restoration',
    'fire damage restoration',
    'storm damage repair',
    'Glen Burnie MD',
    'commercial roofing',
    'residential remodeling',
  ],
  authors: [{ name: siteInfo.name }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://housetransformersinc.com',
    siteName: siteInfo.name,
    title: 'House Transformers Inc. | Roofing, Remodeling & Restoration',
    description: 'Award-winning roofing and restoration specialists serving Glen Burnie, MD and surrounding communities.',
    images: [
      {
        url: '/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'House Transformers Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Transformers Inc. | Roofing, Remodeling & Restoration',
    description: 'Award-winning roofing and restoration specialists serving Glen Burnie, MD and surrounding communities.',
    images: ['/brand/og-image.jpg'],
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
  verification: {},
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteInfo.name,
  image: 'https://housetransformersinc.com/images/logo-default-191x55.png',
  '@id': 'https://housetransformersinc.com',
  url: 'https://housetransformersinc.com',
  telephone: siteInfo.phoneDigits,
  email: siteInfo.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7442 Baltimore Annapolis Blvd Suite 201',
    addressLocality: 'Glen Burnie',
    addressRegion: 'MD',
    postalCode: '21061',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: ['Glen Burnie, MD', 'Anne Arundel County', 'Maryland', 'DMV Metro'],
  serviceType: [
    'Roofing',
    'Siding',
    'Windows',
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Home Additions',
    'Decks & Patios',
    'Emergency Services',
    'Water Damage Restoration',
    'Fire & Smoke Damage Restoration',
    'Storm Damage Repair',
  ],
  sameAs: [
    siteInfo.social.facebook,
    siteInfo.social.instagram,
    siteInfo.social.linkedin,
    siteInfo.social.youtube,
    siteInfo.social.yelp,
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className={manrope.className}>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
