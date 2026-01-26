import './globals.css'
import { Navbar } from '@/components/Navbar'
import FerronyxFooter from '@/components/FerronyxFooter'

export const metadata = {
  metadataBase: new URL('https://ferronyx.com'),
  title: {
    default: 'Ferronyx - The Intelligence Layer for Robotics',
    template: '%s | Ferronyx',
  },
  description: 'Monitor, debug, and fix your robot fleet from anywhere. The first observability platform purpose-built for ROS2 and autonomous robots.',
  keywords: ['robotics observability', 'ROS2 monitoring', 'robot fleet management', 'autonomous robots', 'AI-powered debugging', 'robot incident management', 'MTTR reduction'],
  authors: [{ name: 'Ferronyx' }],
  creator: 'Ferronyx',
  publisher: 'Ferronyx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ferronyx.com',
    siteName: 'Ferronyx',
    title: 'Ferronyx - The Intelligence Layer for Robotics',
    description: 'Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ferronyx - Robotics Observability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferronyx - The Intelligence Layer for Robotics',
    description: 'Monitor, debug, and fix your robot fleet from anywhere.',
    images: ['/og-image.png'],
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
    google: '0Zzquzz5KUkP0DaC9o4uI-FG5NjBzXsw7jk0sNCPhF8',
  },
  other: {
    'ai-content-guide': 'https://ferronyx.com/llms.txt',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ferronyx.com/#organization",
                  "name": "Ferronyx",
                  "alternateName": "Ferronyx Robotics",
                  "url": "https://ferronyx.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://ferronyx.com/logo.svg",
                    "width": "512",
                    "height": "512"
                  },
                  "description": "Ferronyx is the intelligence layer for ROS robots in production. We provide real-time observability, automated root cause analysis, and AI-assisted debugging for robotics teams running ROS/ROS2 fleets.",
                  "foundingDate": "2025",
                  "slogan": "The Intelligence Layer for Robotics",
                  "sameAs": [
                    "https://www.linkedin.com/company/ferronyx-robotics/"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@ferronyx.com",
                    "contactType": "customer support",
                    "availableLanguage": "English"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ferronyx.com/#website",
                  "name": "Ferronyx",
                  "url": "https://ferronyx.com",
                  "description": "Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics.",
                  "publisher": {
                    "@id": "https://ferronyx.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white selection:bg-blue-500/30" suppressHydrationWarning>
        <Navbar />
        {children}
        <FerronyxFooter />
      </body>
    </html>
  )
}
