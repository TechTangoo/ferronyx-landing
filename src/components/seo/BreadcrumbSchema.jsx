import { useEffect } from 'react';

/**
 * BreadcrumbSchema Component
 *
 * Adds BreadcrumbList structured data for better search engine
 * and AI agent understanding of page hierarchy.
 *
 * @param {Array} items - Array of breadcrumb items, each with { name, url }
 *                        The last item is the current page and doesn't need a URL
 *
 * Example usage:
 * <BreadcrumbSchema items={[
 *   { name: 'Home', url: 'https://ferronyx.com' },
 *   { name: 'Blog', url: 'https://ferronyx.com/blog' },
 *   { name: 'Alert Correlation' }
 * ]} />
 */
const BreadcrumbSchema = ({ items }) => {
    useEffect(() => {
        if (!items || items.length === 0) return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                ...(item.url && { "item": item.url })
            }))
        };

        // Remove any existing breadcrumb schema
        const existingSchema = document.querySelector('script[data-breadcrumb-schema="true"]');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Add new breadcrumb schema
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.setAttribute('data-breadcrumb-schema', 'true');
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);

        // Cleanup function
        return () => {
            const breadcrumbSchema = document.querySelector('script[data-breadcrumb-schema="true"]');
            if (breadcrumbSchema) {
                breadcrumbSchema.remove();
            }
        };
    }, [items]);

    return null;
};

export default BreadcrumbSchema;
