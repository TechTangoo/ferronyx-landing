import CaseStudiesListingClient from './CaseStudiesListingClient';

export const metadata = {
    title: 'Case Studies - Customer Success Stories',
    description: 'See how robotics teams are using Ferronyx to debug faster, scale their fleets, and ship more reliable robots. Real results from real customers.',
    keywords: 'robotics case studies, robot fleet success stories, MTTR reduction case study, robot monitoring results, ROS2 observability results',
    alternates: {
        canonical: 'https://ferronyx.com/case-studies',
    },
    openGraph: {
        title: 'Case Studies - Ferronyx Customer Success Stories',
        description: 'See how robotics teams are using Ferronyx to debug faster, scale their fleets, and ship more reliable robots.',
        url: 'https://ferronyx.com/case-studies',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    const caseStudiesSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://ferronyx.com/case-studies/#collection",
        "name": "Ferronyx Case Studies",
        "description": "Customer success stories from robotics teams using Ferronyx.",
        "url": "https://ferronyx.com/case-studies",
        "publisher": {
            "@id": "https://ferronyx.com/#organization"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
            />
            <CaseStudiesListingClient />
        </>
    );
}
