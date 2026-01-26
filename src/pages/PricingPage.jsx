import React from 'react';
import SEO from '../components/seo/SEO';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import FerronyxPricing from '../components/FerronyxPricing';
import FerronyxFAQ from '../components/FerronyxFAQ';

const PricingPage = () => {
    // JSON-LD structured data for pricing page (GEO - Generative Engine Optimization)
    const pricingSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/pricing/#webpage",
                "url": "https://ferronyx.com/pricing",
                "name": "Pricing - Ferronyx | Robot Fleet Observability Platform",
                "description": "Simple, transparent pricing for robot fleet monitoring. $40/machine/month with all features included. 2-week free trial. Cloud-hosted or on-premise deployment options.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://ferronyx.com/pricing/#breadcrumb"
                }
            },
            {
                "@type": "Product",
                "@id": "https://ferronyx.com/pricing/#product",
                "name": "Ferronyx Robot Fleet Observability Platform",
                "description": "Cloud-based robot fleet monitoring and observability platform with real-time monitoring, AI-assisted debugging, and automated root cause analysis for ROS/ROS2 robots.",
                "brand": {
                    "@type": "Brand",
                    "name": "Ferronyx"
                },
                "category": "Software as a Service",
                "image": "https://ferronyx.com/og-image.png",
                "offers": [
                    {
                        "@type": "Offer",
                        "@id": "https://ferronyx.com/pricing/#cloud-offer",
                        "name": "Cloud-Hosted Plan",
                        "description": "Fully managed cloud-hosted robot fleet monitoring with all features included. Real-time monitoring, advanced analytics, custom alerts, team collaboration, and 24/7 support.",
                        "price": "40",
                        "priceCurrency": "USD",
                        "priceSpecification": {
                            "@type": "UnitPriceSpecification",
                            "price": "40",
                            "priceCurrency": "USD",
                            "unitText": "per machine per month",
                            "billingDuration": "P1M",
                            "referenceQuantity": {
                                "@type": "QuantitativeValue",
                                "value": "1",
                                "unitText": "machine"
                            }
                        },
                        "availability": "https://schema.org/InStock",
                        "url": "https://ferronyx.com/pricing",
                        "priceValidUntil": "2027-12-31",
                        "hasMerchantReturnPolicy": {
                            "@type": "MerchantReturnPolicy",
                            "applicableCountry": "US",
                            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                            "merchantReturnDays": 14,
                            "returnMethod": "https://schema.org/ReturnByMail"
                        },
                        "shippingDetails": {
                            "@type": "OfferShippingDetails",
                            "shippingRate": {
                                "@type": "MonetaryAmount",
                                "value": "0",
                                "currency": "USD"
                            },
                            "deliveryTime": {
                                "@type": "ShippingDeliveryTime",
                                "handlingTime": {
                                    "@type": "QuantitativeValue",
                                    "minValue": 0,
                                    "maxValue": 0,
                                    "unitCode": "DAY"
                                }
                            }
                        },
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Cloud-Hosted Robot Fleet Monitoring",
                            "description": "Fully managed cloud platform for monitoring ROS/ROS2 robot fleets"
                        }
                    },
                    {
                        "@type": "Offer",
                        "@id": "https://ferronyx.com/pricing/#annual-offer",
                        "name": "Cloud-Hosted Annual Plan",
                        "description": "Annual billing with 20% discount. All cloud-hosted features included.",
                        "price": "32",
                        "priceCurrency": "USD",
                        "priceSpecification": {
                            "@type": "UnitPriceSpecification",
                            "price": "32",
                            "priceCurrency": "USD",
                            "unitText": "per machine per month (billed annually)",
                            "billingDuration": "P1Y"
                        },
                        "availability": "https://schema.org/InStock",
                        "url": "https://ferronyx.com/pricing",
                        "priceValidUntil": "2027-12-31"
                    },
                    {
                        "@type": "Offer",
                        "@id": "https://ferronyx.com/pricing/#enterprise-offer",
                        "name": "On-Premise Enterprise Plan",
                        "description": "Custom on-premise deployment with full customization, dedicated support, custom SLA guarantees, white-label options, air-gapped deployment, and custom integrations.",
                        "availability": "https://schema.org/InStock",
                        "url": "https://ferronyx.com/pricing",
                        "priceSpecification": {
                            "@type": "PriceSpecification",
                            "priceCurrency": "USD",
                            "valueAddedTaxIncluded": false
                        },
                        "itemOffered": {
                            "@type": "Service",
                            "name": "On-Premise Robot Fleet Monitoring",
                            "description": "Self-hosted platform for enterprise robotics teams requiring full control"
                        }
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "47",
                    "reviewCount": "32"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://ferronyx.com/pricing/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How much does Ferronyx cost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ferronyx Cloud-Hosted plan costs $40 per machine per month when billed monthly, or $32 per machine per month when billed annually (20% savings). Enterprise on-premise plans have custom pricing based on your organization's needs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there a free trial?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Ferronyx offers a 2-week free trial with full access to all features. No credit card is required to start your trial."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's included in the cloud-hosted plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cloud-hosted plan includes real-time monitoring, advanced analytics and dashboards, custom alerts and automation, team collaboration tools, configurable data retention, priority support, custom integrations, multi-robot management, advanced security features, regular feature updates, and 24/7 uptime monitoring."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's the difference between cloud-hosted and on-premise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Cloud-hosted is fully managed by Ferronyx - you can start in minutes with zero infrastructure setup. On-premise deployment runs in your own infrastructure, offering full control, air-gapped deployment options, custom SLA guarantees, and white-label options for enterprise needs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I cancel my subscription anytime?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, monthly subscriptions can be cancelled anytime. For annual plans, you can cancel before renewal. We don't lock you into long-term contracts."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://ferronyx.com/pricing/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://ferronyx.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Pricing",
                        "item": "https://ferronyx.com/pricing"
                    }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://ferronyx.com/#organization",
                "name": "Ferronyx",
                "url": "https://ferronyx.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://ferronyx.com/logo.svg",
                    "width": "512",
                    "height": "512"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "url": "https://dev.ferronyx.com/request-access"
                }
            }
        ]
    };

    const breadcrumbItems = [
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Pricing', url: 'https://ferronyx.com/pricing' }
    ];

    return (
        <main className="min-h-screen bg-black">
            <SEO
                title="Pricing - Ferronyx | Robot Fleet Observability Platform"
                description="Simple, transparent pricing for robot fleet monitoring. $40/machine/month with all features included. 2-week free trial. Cloud-hosted or on-premise deployment options for ROS/ROS2 robots."
                keywords="robotics pricing, robot monitoring pricing, fleet management cost, ROS observability pricing, robotics SaaS pricing, robot fleet cost, ROS2 monitoring price, robot observability platform pricing, robotics platform cost, ferronyx pricing"
                canonicalUrl="https://ferronyx.com/pricing"
                ogImage="/og-pricing.png"
                ogType="website"
                schema={pricingSchema}
            />
            <BreadcrumbSchema items={breadcrumbItems} />
            
            {/* Pricing Section */}
            <FerronyxPricing />
            
        </main>
    );
};

export default PricingPage;
