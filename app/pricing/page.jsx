import FerronyxPricing from '@/components/FerronyxPricing';

export const metadata = {
    title: 'Pricing - Robot Fleet Observability Platform',
    description: 'Simple, transparent pricing for robot fleet monitoring. $40/machine/month with all features included. 2-week free trial. Cloud-hosted or on-premise deployment options for ROS/ROS2 robots.',
    keywords: 'robotics pricing, robot monitoring pricing, fleet management cost, ROS observability pricing, robotics SaaS pricing, robot fleet cost, ROS2 monitoring price, robot observability platform pricing',
    alternates: {
        canonical: 'https://ferronyx.com/pricing',
    },
    openGraph: {
        title: 'Pricing - Ferronyx Robot Fleet Observability',
        description: 'Simple, transparent pricing for robot fleet monitoring. $40/machine/month with all features included.',
        url: 'https://ferronyx.com/pricing',
        type: 'website',
    },
};

export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/pricing/#webpage",
                "url": "https://ferronyx.com/pricing",
                "name": "Pricing - Ferronyx | Robot Fleet Observability Platform",
                "description": "Simple, transparent pricing for robot fleet monitoring.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                }
            },
            {
                "@type": "Product",
                "@id": "https://ferronyx.com/pricing/#product",
                "name": "Ferronyx Robot Fleet Observability Platform",
                "description": "Cloud-based robot fleet monitoring and observability platform.",
                "brand": {
                    "@type": "Brand",
                    "name": "Ferronyx"
                },
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Cloud-Hosted Plan",
                        "price": "40",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            <FerronyxPricing />
        </main>
    );
}
