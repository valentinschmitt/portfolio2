import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CtaBanner from './components/CtaBanner'
import StructuredData from './components/Metadata'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL('https://valentinschmitt.com'),
  title: {
    default: 'Valentin Schmitt - Développeur Web Nancy | Expert Web Lorraine',
    template: '%s | Valentin Schmitt - Développeur Web Nancy'
  },
  description: 'Expert en développement web à Nancy et en Lorraine. Création de sites web, applications et solutions digitales sur mesure. Plus de 10 ans d\'expérience en Lorraine et dans les Vosges.',
  keywords: [
    'développeur web nancy',
    'développeur web lorraine',
    'développeur web vosges',
    'création site web nancy',
    'développeur freelance nancy',
    'expert web nancy',
    'création application web lorraine',
    'développeur react nancy',
    'développeur nextjs lorraine',
    'création site internet nancy'
  ],
  authors: [{ name: 'Valentin Schmitt' }],
  creator: 'Valentin Schmitt',
  publisher: 'Valentin Schmitt',
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
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
  openGraph: {
    title: 'Valentin Schmitt - Développeur Web Nancy | Expert Web Lorraine',
    description: 'Expert en développement web à Nancy et en Lorraine. Création de sites web, applications et solutions digitales sur mesure.',
    url: 'https://valentinschmitt.com',
    siteName: 'Valentin Schmitt - Développeur Web Nancy',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentin Schmitt - Développeur Web Nancy',
    description: 'Expert en développement web à Nancy et en Lorraine. Création de sites web, applications et solutions digitales sur mesure.',
    creator: '@valentinschmitt',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white">
        <StructuredData />
        <CtaBanner />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
