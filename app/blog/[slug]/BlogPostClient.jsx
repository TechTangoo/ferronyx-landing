'use client'

import { Suspense, lazy, useMemo } from 'react';
import BlogPost from '@/components/blog/BlogPost';
import SROnlyKeywords from '@/components/seo/SROnlyKeywords';

// SR-only keywords for each blog post
const blogKeywords = {
    'intelligent-alert-correlation-root-cause-analysis': `
    Alert correlation for robotics. Root cause analysis for robots.
    ROS2 alert management. Robot debugging automation.
    Reduce robot alert fatigue. Fix robot failures faster.
  `,
    'gpu-monitoring-optimization-insights': `
    Robot GPU monitoring. GPU utilization for ROS2 robots.
    CUDA monitoring for robotics. Robot inference optimization.
  `,
    'ota-deployment-tracking-failure-correlation': `
    Robot OTA updates tracking. Deployment correlation for robot failures.
    Software update tracking for robots. Robot rollback detection.
  `,
    'ros2-observability-complete-guide': `
    ROS2 observability guide. How to monitor ROS2 robots.
    ROS2 logging best practices. ROS2 metrics collection.
  `,
    'debug-navigation-failures-ros2': `
    Debug ROS2 navigation failures. Nav2 troubleshooting guide.
    Fix Nav2 issues. ROS2 navigation debugging tutorial.
  `,
    'reducing-robot-mttr-best-practices': `
    Reduce robot MTTR. Robot debugging best practices.
    Mean time to resolution for robots. Faster robot incident resolution.
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

export default function BlogPostClient({ post, slug }) {
    const MDXContent = useMemo(() => {
        return blogContent[slug] || null;
    }, [slug]);

    if (!MDXContent) {
        return (
            <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
                <div className="text-zinc-400">Blog post not found.</div>
            </div>
        );
    }

    return (
        <>
            {blogKeywords[slug] && (
                <SROnlyKeywords>{blogKeywords[slug]}</SROnlyKeywords>
            )}

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
}
