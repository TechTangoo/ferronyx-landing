import FerronyxHero from '@/components/FerronyxHero'
import FerronyxFeaturesScroll from '@/components/FerronyxFeaturesScroll'
import HowItWorks from '@/components/HowItWorks'
import FerronyxSolutions from '@/components/FerronyxSolutions'
import FerronyxFAQ from '@/components/FerronyxFAQ'
import SROnlyKeywords from '@/components/seo/SROnlyKeywords'

export const metadata = {
  title: 'Ferronyx - The Intelligence Layer for Robotics | ROS2 Observability Platform',
  description: 'Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics. Reduce robot MTTR from hours to minutes.',
  keywords: 'robotics observability, ROS2 observability, robot fleet monitoring, AI-powered debugging, robot incident management, ROS monitoring, robotics SRE, robot MTTR reduction, ROS2 debugging, robot root cause analysis, Ferronyx',
  alternates: {
    canonical: 'https://ferronyx.com',
  },
  openGraph: {
    title: 'Ferronyx - The Intelligence Layer for Robotics',
    description: 'Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics.',
    url: 'https://ferronyx.com',
    type: 'website',
  },
}

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ferronyx.com/#software",
        "name": "Ferronyx",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-based, Linux",
        "description": "Real-time robot fleet observability platform with AI-assisted debugging, automated root cause analysis, and incident management for ROS/ROS2 robots in production.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder",
          "description": "Early access program available"
        },
        "featureList": [
          "Real-time ROS2 topic monitoring",
          "Fleet-wide robot diagnostics",
          "AI-powered root cause analysis",
          "Automated incident detection",
          "Deployment correlation tracking",
          "Robot MTTR reduction",
          "Sensor drift detection",
          "Navigation failure debugging"
        ],
        "publisher": {
          "@id": "https://ferronyx.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ferronyx.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Ferronyx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ferronyx is the intelligence layer for ROS robots in production. It provides real-time observability, automated root cause analysis, and AI-assisted debugging for robotics teams running ROS/ROS2 fleets."
            }
          },
          {
            "@type": "Question",
            "name": "How does Ferronyx reduce robot MTTR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ferronyx reduces robot MTTR through AI-assisted root cause analysis, automatic correlation of logs, metrics, and sensor data, deployment markers, and timeline replay."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <SROnlyKeywords>
        Ferronyx provides robotics observability for ROS2 fleets.
        Robot monitoring platform. AI-powered robot debugging.
        Robot fleet management software. ROS2 production monitoring.
        Autonomous mobile robot observability. AMR fleet management.
        Robot incident management. Robot MTTR reduction tool.
        Nav2 debugging. ROS2 topic monitoring. Robot sensor drift detection.
        What is Ferronyx? Ferronyx is the intelligence layer for ROS robots in production.
        Real-time observability, automated root cause analysis, and AI-assisted debugging.
        Reduce robot debugging time from hours to minutes.
      </SROnlyKeywords>
      <FerronyxHero />
      <FerronyxFeaturesScroll />
      <HowItWorks />
      <FerronyxSolutions />
      <FerronyxFAQ />
    </>
  )
}
