export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CommunityOrganization',
    name: 'Tru-Way Community Center Inc.',
    alternateName: 'Tru-Way Inc.',
    url: 'https://truwaycommunitycenter.com',
    logo: 'https://truwaycommunitycenter.com/heroimage.jpg',
    image: 'https://truwaycommunitycenter.com/heroimage.jpg',
    description: 'Tru-Way Community Center Inc. serves youth and families in Western New York with after-school programs, summer camps, and community support services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2056 Genesee Street',
      addressLocality: 'Buffalo',
      addressRegion: 'NY',
      postalCode: '14211',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.9275',
      longitude: '-78.8294',
    },
    telephone: '+17168920258',
    email: 'truway@roadrunner.com',
    foundingDate: '2000',
    founder: {
      '@type': 'Person',
      name: 'Dr. Virginia Williams',
    },
    areaServed: {
      '@type': 'City',
      name: 'Buffalo',
    },
    serviceType: [
      'After-School Programs',
      'Summer Programs',
      'Youth Activities',
      'Community Support Services',
    ],
    sameAs: [
      'https://www.facebook.com/truwaycc/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
