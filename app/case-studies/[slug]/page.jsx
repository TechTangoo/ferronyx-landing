import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, caseStudies } from '@/lib/content';
import CaseStudyClient from './CaseStudyClient';

// Generate static params for all case studies
export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: `${caseStudy.title} | Case Study`,
        description: caseStudy.excerpt,
        keywords: `${caseStudy.company}, ${caseStudy.industry}, ${caseStudy.tags?.join(', ')}, robotics case study`,
        alternates: {
            canonical: `https://ferronyx.com/case-studies/${slug}`,
        },
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.excerpt,
            url: `https://ferronyx.com/case-studies/${slug}`,
            type: 'article',
        },
    };
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    // Generate schema for the case study
    const caseStudySchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://ferronyx.com/case-studies/${slug}/#article`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ferronyx.com/case-studies/${slug}`
        },
        "headline": caseStudy.title,
        "description": caseStudy.excerpt,
        "author": {
            "@type": "Organization",
            "name": "Ferronyx",
            "@id": "https://ferronyx.com/#organization"
        },
        "publisher": {
            "@id": "https://ferronyx.com/#organization"
        },
        "about": {
            "@type": "Organization",
            "name": caseStudy.company
        },
        "keywords": caseStudy.tags?.join(', '),
        "articleSection": "Case Studies"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
            />
            <CaseStudyClient caseStudy={caseStudy} slug={slug} />
        </>
    );
}
