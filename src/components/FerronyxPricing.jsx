import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Cloud, Server, Sparkles, ArrowRight } from 'lucide-react';

const FerronyxPricing = () => {
  // SEO: Update meta tags and add structured data when component mounts
  useEffect(() => {
    // Update page title
    document.title = 'Pricing - Ferronyx | Robot Fleet Observability';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Simple, transparent pricing for robot fleet monitoring. $29/machine/month with all features included. 1-month free trial. Cloud-hosted or on-premise deployment options.');
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'robotics pricing, robot monitoring pricing, fleet management cost, ROS observability pricing, robotics SaaS pricing, robot fleet cost');
    
    // Add Open Graph tags for social sharing
    const ogTags = [
      { property: 'og:title', content: 'Pricing - Ferronyx | Robot Fleet Observability' },
      { property: 'og:description', content: 'Simple pricing: $29/machine/month with all features. 1-month free trial. No credit card required.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ferronyx.com/#pricing' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Pricing - Ferronyx' },
      { name: 'twitter:description', content: 'Simple pricing: $29/machine/month. 1-month free trial. All features included.' },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Add JSON-LD structured data for pricing
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Ferronyx Robot Fleet Observability",
      "description": "Cloud-based robot fleet monitoring and observability platform",
      "brand": {
        "@type": "Brand",
        "name": "Ferronyx"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Cloud-Hosted Plan",
          "price": "29",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "USD",
            "unitText": "per machine per month"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://ferronyx.com/#pricing",
          "priceValidUntil": "2026-12-31",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "minValue": 1
          },
          "description": "Fully managed cloud-hosted robot fleet monitoring with all features included"
        },
        {
          "@type": "Offer",
          "name": "On-Premise Enterprise Plan",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://ferronyx.com/#pricing",
          "description": "Custom on-premise deployment with full customization and dedicated support"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
      }
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"][data-pricing]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-pricing', 'true');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
    // Cleanup function to restore original meta tags when component unmounts
    return () => {
      document.title = 'Ferronyx - The Intelligence Layer for Robotics';
      const originalDescription = document.querySelector('meta[name="description"]');
      if (originalDescription) {
        originalDescription.setAttribute('content', 'Monitor, debug, and fix your robot fleet from anywhere. Get real-time observability and AI-assisted troubleshooting, all in one cloud dashboard.');
      }
    };
  }, []);

  const monthlyPrice = 29;

  const sharedFeatures = [
    'Real-time monitoring',
    'Advanced analytics & dashboards',
    'Custom alerts & automation',
    'Team collaboration tools',
    'Configurable data retention',
    'Priority support',
    'Custom integrations',
    'Multi-robot management',
    'Advanced security features',
    'Regular feature updates',
    '24/7 uptime monitoring',
  ];

  const enterpriseFeatures = [
    'Deploy in your premises (On-prem / private cloud)',
    'Full customization',
    'Dedicated support team',
    'Custom SLA guarantees',
    'White-label options',
    'Custom training & onboarding',
    'Air-gapped deployment',
    'Custom integrations',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="pricing"
      className="relative min-h-screen w-full py-24 md:py-32 overflow-hidden"
      
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Choose your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
              deployment
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Start with a 1-month free trial. No credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Cloud-Hosted Plan */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full rounded-3xl p-8 lg:p-10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm">
              {/* Badge */}
              <div className="absolute -top-3.5 left-8 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-semibold text-white shadow-lg shadow-blue-500/25">
                Most Popular
              </div>

              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Cloud-Hosted</h3>
                  <p className="text-sm text-zinc-400">Fully managed. Start in minutes.</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${monthlyPrice}
                  </span>
                  <span className="text-zinc-500 text-sm">/machine/month</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">
                  Billed monthly, cancel anytime
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://dev.ferronyx.com/request-access"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 group/btn mb-8"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                  Everything included
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {sharedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* On-Premise Plan */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative h-full rounded-3xl p-8 lg:p-10 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex p-2.5 rounded-xl bg-white/5 text-zinc-400 mb-4">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">On-Premise</h3>
                  <p className="text-sm text-zinc-400">Your infrastructure, full control.</p>
                </div>
              </div>

              {/* Custom Pricing */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <p className="text-sm text-zinc-500 mt-2">
                  Tailored to your organization's needs
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://dev.ferronyx.com/request-access"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn mb-8"
              >
                Contact Sales
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                  Enterprise features
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <Check className="h-3 w-3 text-zinc-500" />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-white mb-1">1 month</div>
              <p className="text-xs text-zinc-500">Free trial</p>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-white mb-1">$29</div>
              <p className="text-xs text-zinc-500">Per machine/month</p>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <p className="text-xs text-zinc-500">Support</p>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-zinc-500 mt-12"
        >
          Questions?{' '}
          <a
            href="https://dev.ferronyx.com/request-access"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
          >
            Talk to our team
          </a>
        </motion.p> */}
      </div>
    </section>
  );
};

export default FerronyxPricing;