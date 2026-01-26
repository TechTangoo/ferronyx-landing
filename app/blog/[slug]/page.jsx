import { notFound } from 'next/navigation';
import { getBlogPostBySlug, blogPosts } from '@/lib/content';
import BlogPostClient from './BlogPostClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags?.join(', '),
        alternates: {
            canonical: `https://ferronyx.com/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://ferronyx.com/blog/${slug}`,
            type: 'article',
            images: [post.coverImage || '/og-image.png'],
            publishedTime: post.date,
            authors: [post.author?.name || 'Ferronyx Team'],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage || '/og-image.png'],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Generate schema for the blog post
    const postSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `https://ferronyx.com/blog/${slug}/#article`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ferronyx.com/blog/${slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": post.author?.name || "Ferronyx Team",
            "@id": "https://ferronyx.com/#organization"
        },
        "publisher": {
            "@id": "https://ferronyx.com/#organization"
        },
        "image": post.coverImage ? `https://ferronyx.com${post.coverImage}` : "https://ferronyx.com/og-image.png",
        "keywords": post.tags?.join(', '),
        "articleSection": post.category
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
            />
            <BlogPostClient post={post} slug={slug} />
        </>
    );
}
