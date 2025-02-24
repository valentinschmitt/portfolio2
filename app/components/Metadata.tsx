'use client';

import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Valentin Schmitt - Développeur Web Nancy',
    description: 'Expert en développement web à Nancy et en Lorraine. Création de sites web, applications et solutions digitales sur mesure. Plus de 10 ans d\'expérience en Lorraine et dans les Vosges.',
    url: 'https://valentinschmitt.com',
    areaServed: [
      {
        '@type': 'GeoCircle',
        name: 'Nancy et agglomération',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 48.6921,
          longitude: 6.1844
        }
      },
      {
        '@type': 'State',
        name: 'Lorraine'
      },
      {
        '@type': 'State',
        name: 'Vosges'
      }
    ],
    knowsAbout: [
      'Développement Web',
      'React',
      'Next.js',
      'TypeScript',
      'Web Design',
      'UI/UX Design',
      'SEO',
      'Applications Web'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de développement web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création de site web sur mesure'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement d\'applications web'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit et optimisation de présence web'
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
} 