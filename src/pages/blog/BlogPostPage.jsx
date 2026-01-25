import React, { Suspense, lazy, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import SROnlyKeywords from '@/components/seo/SROnlyKeywords';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import BlogPost from '@/components/blog/BlogPost';
import { getBlogPostBySlug } from '@/lib/content';

// SR-only keywords for each blog post (for AI/LLM discoverability)
const blogKeywords = {
  'intelligent-alert-correlation-root-cause-analysis': `
    Alert correlation for robotics. Root cause analysis for robots.
    ROS2 alert management. Robot debugging automation.
    Reduce robot alert fatigue. Fix robot failures faster.
    How alert correlation works. Intelligent incident management for robots.
  `,
  'gpu-monitoring-optimization-insights': `
    Robot GPU monitoring. GPU utilization for ROS2 robots.
    CUDA monitoring for robotics. Robot inference optimization.
    GPU thermal management for robots. Per-GPU metrics for robot fleets.
  `,
  'ota-deployment-tracking-failure-correlation': `
    Robot OTA updates tracking. Deployment correlation for robot failures.
    Software update tracking for robots. Robot rollback detection.
    Correlate deployments with robot incidents. ROS2 deployment monitoring.
  `,
  'ros2-observability-complete-guide': `
    ROS2 observability guide. How to monitor ROS2 robots.
    ROS2 logging best practices. ROS2 metrics collection.
    ROS2 topic monitoring. Robot observability implementation.
    Complete guide to ROS2 monitoring in production.
  `,
  'debug-navigation-failures-ros2': `
    Debug ROS2 navigation failures. Nav2 troubleshooting guide.
    Fix Nav2 issues. ROS2 navigation debugging tutorial.
    Robot navigation failure analysis. Costmap debugging for robots.
  `,
  'reducing-robot-mttr-best-practices': `
    Reduce robot MTTR. Robot debugging best practices.
    Mean time to resolution for robots. Faster robot incident resolution.
    Robot operations efficiency. Robotics incident management best practices.
  `,
};

// Lazy load MDX content files
const blogContent = {
  'intelligent-alert-correlation-root-cause-analysis': lazy(() => import('@/content/blog/intelligent-alert-correlation-root-cause-analysis.mdx')),
  'gpu-monitoring-optimization-insights': lazy(() => import('@/content/blog/gpu-monitoring-optimization-insights.mdx')),
  'ota-deployment-tracking-failure-correlation': lazy(() => import('@/content/blog/ota-deployment-tracking-failure-correlation.mdx')),
  'ros2-observability-complete-guide': lazy(() => import('@/content/blog/ros2-observability-complete-guide.mdx')),
  'debug-navigation-failures-ros2': lazy(() => import('@/content/blog/debug-navigation-failures-ros2.mdx')),
  'reducing-robot-mttr-best-practices': lazy(() => import('@/content/blog/reducing-robot-mttr-best-practices.mdx')),
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  // Get the MDX component for this post
  const MDXContent = useMemo(() => {
    return blogContent[slug] || null;
  }, [slug]);

  // If post not found, redirect to blog listing
  if (!post || !MDXContent) {
    return <Navigate to="/blog" replace />;
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
    "articleSection": post.category,
    "wordCount": 1500, // Approximate
    "isPartOf": {
      "@id": "https://ferronyx.com/blog/#webpage"
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Ferronyx Blog`}
        description={post.excerpt}
        keywords={post.tags?.join(', ')}
        canonicalUrl={`https://ferronyx.com/blog/${slug}`}
        ogImage={post.coverImage || '/og-image.png'}
        ogType="article"
        schema={postSchema}
      />

      {/* Hidden semantic content for AI agents and screen readers */}
      {blogKeywords[slug] && (
        <SROnlyKeywords>{blogKeywords[slug]}</SROnlyKeywords>
      )}

      {/* Breadcrumb structured data for search engines and AI agents */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Blog', url: 'https://ferronyx.com/blog' },
        { name: post.title }
      ]} />

      <Suspense
        fallback={
          <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
            <div className="text-zinc-400">Loading article...</div>
          </div>
        }
      >
        <BlogPost post={post}>
          <MDXContent />
        </BlogPost>
      </Suspense>
    </>
  );
};

export default BlogPostPage;
