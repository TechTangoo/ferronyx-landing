/**
 * SROnlyKeywords Component
 *
 * Renders semantically rich, visually hidden text that is accessible to:
 * - Screen readers (for accessibility)
 * - Search engine crawlers (for SEO)
 * - AI/LLM agents (for GEO - Generative Engine Optimization)
 *
 * This helps provide additional context about page content without
 * affecting the visual design.
 */
const SROnlyKeywords = ({ keywords, children }) => {
    // If keywords array is provided, join them with periods
    // If children (text) is provided, render that directly
    const content = keywords ? keywords.join('. ') + '.' : children;

    return (
        <span className="sr-only">
            {content}
        </span>
    );
};

export default SROnlyKeywords;
