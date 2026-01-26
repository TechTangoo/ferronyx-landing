import UseCasesPageClient from './UseCasesPageClient';

export const metadata = {
    title: 'Use Cases - Robot Fleet Observability Solutions',
    description: 'Discover how Ferronyx solves real robot problems: reduce MTTR, detect sensor drift, debug Nav2 failures, correlate deployments, and get fleet-wide visibility for your robots.',
    keywords: 'robot MTTR reduction, sensor drift detection, Nav2 debugging, ROS2 navigation failures, robot deployment tracking, fleet-wide robot visibility, warehouse robot monitoring, delivery robot observability',
    alternates: {
        canonical: 'https://ferronyx.com/use-cases',
    },
    openGraph: {
        title: 'Use Cases - Ferronyx Robot Fleet Observability',
        description: 'Discover how Ferronyx solves real robot problems: reduce MTTR, detect sensor drift, debug Nav2 failures, and more.',
        url: 'https://ferronyx.com/use-cases',
        type: 'website',
    },
};

export default function UseCasesPage() {
    const useCasesSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://ferronyx.com/use-cases/#webpage",
        "url": "https://ferronyx.com/use-cases",
        "name": "Use Cases - Ferronyx | Robot Fleet Observability Solutions",
        "description": "Discover how Ferronyx solves real robot problems for warehouse AMRs, delivery robots, industrial automation, and more.",
        "isPartOf": {
            "@id": "https://ferronyx.com/#website"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(useCasesSchema) }}
            />
            <UseCasesPageClient />
        </>
    );
}
