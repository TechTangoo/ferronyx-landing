import AboutPageClient from './AboutPageClient';

export const metadata = {
    title: 'About Us - The Intelligence Layer for Robotics',
    description: 'Ferronyx is building the observability platform that robotics teams need to run reliable robots in production. We bring modern SRE practices to the physical world.',
    keywords: 'Ferronyx, robotics observability, robot monitoring company, ROS2 observability, robotics SRE, robot fleet management',
    alternates: {
        canonical: 'https://ferronyx.com/about',
    },
    openGraph: {
        title: 'About Ferronyx - The Intelligence Layer for Robotics',
        description: 'Ferronyx is building the observability platform that robotics teams need to run reliable robots in production.',
        url: 'https://ferronyx.com/about',
        type: 'website',
    },
};

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@id": "https://ferronyx.com/#organization"
        },
        "url": "https://ferronyx.com/about",
        "name": "About Ferronyx",
        "description": "Ferronyx is building the observability platform that robotics teams need to run reliable robots in production."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <AboutPageClient />
        </>
    );
}
