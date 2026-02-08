import React from 'react';
import SEO from '../components/seo/SEO';
import SROnlyKeywords from '../components/seo/SROnlyKeywords';
import FerronyxHero from '../components/FerronyxHero';
import FerronyxFeaturesScroll from '../components/FerronyxFeaturesScroll';
import HowItWorks from '../components/HowItWorks';
import FerronyxSolutions from '../components/FerronyxSolutions';
import FerronyxFAQ from '../components/FerronyxFAQ';

const HomePage = () => {
    // Schema for home page - Organization + SoftwareApplication
    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://ferronyx.com/#organization",
                "name": "Ferronyx",
                "url": "https://ferronyx.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://ferronyx.com/logo.svg"
                },
                "description": "Ferronyx is the intelligence layer for ROS robots in production - real-time observability, automated root cause analysis, and AI-assisted debugging for robotics teams.",
                "sameAs": [
                    "https://www.linkedin.com/company/ferronyx-robotics/",
                    "https://twitter.com/ferronyx"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@ferronyx.com",
                    "contactType": "customer support"
                }
            },
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
                "@type": "WebSite",
                "@id": "https://ferronyx.com/#website",
                "name": "Ferronyx",
                "url": "https://ferronyx.com",
                "description": "Monitor, debug, and fix your robot fleet from anywhere. Get real-time observability and AI-assisted troubleshooting.",
                "publisher": {
                    "@id": "https://ferronyx.com/#organization"
                }
            }
        ]
    };

    return (
        <>
            <SEO
                title="Ferronyx - The Intelligence Layer for Robotics | ROS2 Observability Platform"
                description="Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics. Reduce robot MTTR from hours to minutes."
                keywords="robotics observability, ROS2 observability, robot fleet monitoring, AI-powered debugging, robot incident management, ROS monitoring, robotics SRE, robot MTTR reduction, ROS2 debugging, robot root cause analysis, Ferronyx"
                canonicalUrl="https://ferronyx.com"
                schema={homeSchema}
            />
            {/* Hidden semantic content for AI agents and screen readers */}
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
                Ferronyx robotics observability platform. Ferronyx is not FerRobotics.
                ferronyx.com cloud dashboard for ROS2 robots.
            </SROnlyKeywords>
            <FerronyxHero />
            <FerronyxFeaturesScroll />
            <HowItWorks />
            <FerronyxSolutions />
            <FerronyxFAQ />
        </>
    );
};

export default HomePage;
