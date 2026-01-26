import BlogListingClient from './BlogListingClient';

export const metadata = {
    title: 'Blog - Robotics Observability Insights',
    description: 'Expert guides, tutorials, and best practices for running reliable robot fleets in production. Learn about ROS2 observability, robot debugging, and fleet management.',
    keywords: 'robotics blog, ROS2 tutorials, robot debugging guides, fleet management best practices, robotics observability, robot MTTR, Nav2 debugging',
    alternates: {
        canonical: 'https://ferronyx.com/blog',
    },
    openGraph: {
        title: 'Blog - Ferronyx Robotics Observability Insights',
        description: 'Expert guides, tutorials, and best practices for running reliable robot fleets in production.',
        url: 'https://ferronyx.com/blog',
        type: 'website',
    },
};

export default function BlogPage() {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://ferronyx.com/blog/#blog",
        "name": "Ferronyx Blog",
        "description": "Expert guides, tutorials, and best practices for running reliable robot fleets in production.",
        "url": "https://ferronyx.com/blog",
        "publisher": {
            "@id": "https://ferronyx.com/#organization"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <BlogListingClient />
        </>
    );
}
