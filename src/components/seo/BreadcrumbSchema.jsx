import { useMemo } from 'react';

/**
 * BreadcrumbSchema Component
 *
 * Renders BreadcrumbList structured data as an inline <script> tag
 * so it's present in the initial HTML (no useEffect delay).
 *
 * The prerender script also injects breadcrumb schema at build time,
 * so crawlers see it even without JS execution.
 *
 * @param {Array} items - Array of breadcrumb items, each with { name, url }
 *                        The last item is the current page and doesn't need a URL
 */
const BreadcrumbSchema = ({ items }) => {
    const schema = useMemo(() => {
        if (!items || items.length === 0) return null;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                ...(item.url && { "item": item.url })
            }))
        };
    }, [items]);

    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default BreadcrumbSchema;
