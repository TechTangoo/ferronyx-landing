import { useEffect } from 'react';

const BASE_URL = 'https://ferronyx.com';

/**
 * SEO Component for managing page-specific meta tags.
 * Updates document head with page-specific SEO and GEO data.
 *
 * Note: The prerender script (scripts/prerender.js) bakes initial meta
 * tags into each route's HTML at build time. This component updates them
 * on client-side navigation so SPA transitions stay correct.
 */
const SEO = ({
    title = "Ferronyx - The Intelligence Layer for Robotics",
    description = "Monitor, debug, and fix your robot fleet from anywhere. Get real-time observability and AI-assisted troubleshooting, all in one cloud dashboard.",
    keywords = "robotics observability, AI-powered debugging, robot fleet management, ROS monitoring, ROS2 observability, robotics SRE, Ferronyx",
    canonicalUrl,
    ogImage = "/og-image.png",
    ogType = "website",
    schema = null,
}) => {
    useEffect(() => {
        // Update title
        document.title = title;

        // Helper to update or create meta tags
        const updateMeta = (name, content, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Resolve OG image to full URL
        const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

        // Basic SEO meta tags
        updateMeta('description', description);
        updateMeta('keywords', keywords);

        // Open Graph tags for social sharing
        updateMeta('og:title', title, true);
        updateMeta('og:description', description, true);
        updateMeta('og:type', ogType, true);
        updateMeta('og:image', fullOgImage, true);
        updateMeta('og:site_name', 'Ferronyx', true);

        // Twitter Card tags
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', title);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', fullOgImage);

        // Canonical URL
        if (canonicalUrl) {
            updateMeta('og:url', canonicalUrl, true);
            updateMeta('twitter:url', canonicalUrl);
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', canonicalUrl);
        }

        // Add page-specific schema markup (for GEO)
        if (schema) {
            // Remove any existing page-specific schema
            const existingSchema = document.querySelector('script[data-page-schema="true"]');
            if (existingSchema) {
                existingSchema.remove();
            }

            const schemaScript = document.createElement('script');
            schemaScript.type = 'application/ld+json';
            schemaScript.setAttribute('data-page-schema', 'true');
            schemaScript.textContent = JSON.stringify(schema);
            document.head.appendChild(schemaScript);
        }

        // Cleanup function
        return () => {
            const pageSchema = document.querySelector('script[data-page-schema="true"]');
            if (pageSchema) {
                pageSchema.remove();
            }
        };
    }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema]);

    return null;
};

export default SEO;
