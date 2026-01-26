/**
 * Content utilities for loading and filtering blog posts and case studies
 */

// Blog posts metadata - manually maintained for now
// In production, this could be auto-generated from MDX frontmatter
export const blogPosts = [
  {
    slug: 'intelligent-alert-correlation-root-cause-analysis',
    title: 'Intelligent Alert Correlation: Finding the Root Cause Automatically',
    excerpt: 'Learn how Ferronyx correlates related alerts to identify root causes automatically. Stop chasing symptoms and fix the real problem.',
    date: '2026-01-25',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Features',
    tags: ['Alerting', 'Root Cause Analysis', 'ROS2', 'Debugging'],
    readingTime: '8 min read',
    coverImage: '/blog/alert-correlation.png',
    featured: true
  },
  {
    slug: 'gpu-monitoring-optimization-insights',
    title: 'GPU Monitoring: Beyond Averages to Actionable Insights',
    excerpt: 'Discover why fleet-average GPU metrics hide critical problems and how per-GPU monitoring reveals optimization opportunities.',
    date: '2026-01-23',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Features',
    tags: ['GPU', 'Monitoring', 'Performance', 'Optimization'],
    readingTime: '7 min read',
    coverImage: '/blog/gpu-monitoring.png',
    featured: true
  },
  {
    slug: 'ota-deployment-tracking-failure-correlation',
    title: 'OTA Deployment Tracking: One View of Deployments and Failures',
    excerpt: 'See how Ferronyx correlates OTA deployments with robot failures, making "what changed?" the easiest question to answer.',
    date: '2026-01-21',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Features',
    tags: ['OTA', 'Deployments', 'Fleet Management', 'Correlation'],
    readingTime: '7 min read',
    coverImage: '/blog/ota-tracking.png',
    featured: false
  },
  {
    slug: 'ros2-observability-complete-guide',
    title: 'ROS2 Observability: A Complete Guide',
    excerpt: 'Learn how to implement comprehensive observability for your ROS2 robot fleet. From logging and metrics to tracing and alerting.',
    date: '2026-01-20',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Guides',
    tags: ['ROS2', 'Observability', 'Monitoring', 'Best Practices'],
    readingTime: '12 min read',
    coverImage: '/blog/ros2-observability.png',
    featured: true
  },
  {
    slug: 'debug-navigation-failures-ros2',
    title: 'How to Debug Navigation Failures in ROS2',
    excerpt: 'Step-by-step guide to diagnosing and fixing common Nav2 navigation issues in production robot fleets.',
    date: '2026-01-15',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Tutorials',
    tags: ['ROS2', 'Nav2', 'Debugging', 'Navigation'],
    readingTime: '8 min read',
    coverImage: '/blog/nav2-debugging.png',
    featured: false
  },
  {
    slug: 'reducing-robot-mttr-best-practices',
    title: 'Reducing Robot MTTR: Best Practices',
    excerpt: 'Proven strategies to reduce your robot fleet\'s mean time to resolution from hours to minutes.',
    date: '2026-01-10',
    author: {
      name: 'Ferronyx Team',
      avatar: '/avatars/team.png'
    },
    category: 'Best Practices',
    tags: ['MTTR', 'Operations', 'Debugging', 'SRE'],
    readingTime: '10 min read',
    coverImage: '/blog/mttr-reduction.png',
    featured: true
  }
];

// Case studies metadata
export const caseStudies = [
  {
    slug: 'warehouse-amr-fleet-mttr-reduction',
    title: 'Warehouse AMR Fleet: 85% MTTR Reduction',
    company: 'Major Logistics Provider',
    industry: 'Warehouse & Logistics',
    logo: '/case-studies/warehouse-logo.png',
    excerpt: 'How a leading logistics company reduced their robot debugging time from 4 hours to 30 minutes using Ferronyx.',
    metrics: [
      { label: 'MTTR Reduction', value: '85%' },
      { label: 'Fleet Size', value: '120+ AMRs' },
      { label: 'Incidents/Month', value: '200+' }
    ],
    tags: ['Warehouse', 'AMR', 'MTTR'],
    featured: true
  },
  {
    slug: 'delivery-robot-fleet-scaling',
    title: 'Delivery Robot Fleet: Scaling to 500+ Robots',
    company: 'Urban Delivery Startup',
    industry: 'Last-Mile Delivery',
    logo: '/case-studies/delivery-logo.png',
    excerpt: 'Scaling a delivery robot fleet from 50 to 500+ robots while maintaining operational excellence with unified observability.',
    metrics: [
      { label: 'Fleet Growth', value: '10x' },
      { label: 'Uptime', value: '99.2%' },
      { label: 'Debug Time', value: '-70%' }
    ],
    tags: ['Delivery', 'Scaling', 'Fleet Management'],
    featured: true
  }
];

// Get all blog posts sorted by date
export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// Get featured blog posts
export function getFeaturedBlogPosts() {
  return blogPosts.filter(post => post.featured);
}

// Get blog posts by category
export function getBlogPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

// Get blog posts by tag
export function getBlogPostsByTag(tag) {
  return blogPosts.filter(post => post.tags.includes(tag));
}

// Get related blog posts (by tags)
export function getRelatedBlogPosts(currentSlug, limit = 3) {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  const otherPosts = blogPosts.filter(post => post.slug !== currentSlug);

  // Score posts by shared tags
  const scored = otherPosts.map(post => ({
    ...post,
    score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
  }));

  // Sort by score, then by date
  scored.sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date));

  return scored.slice(0, limit);
}

// Get all unique blog categories
export function getAllBlogCategories() {
  return [...new Set(blogPosts.map(post => post.category))];
}

// Get all unique blog tags
export function getAllBlogTags() {
  const tags = blogPosts.flatMap(post => post.tags);
  return [...new Set(tags)];
}

// Get all case studies
export function getAllCaseStudies() {
  return [...caseStudies];
}

// Get a single case study by slug
export function getCaseStudyBySlug(slug) {
  return caseStudies.find(study => study.slug === slug);
}

// Get case studies by industry
export function getCaseStudiesByIndustry(industry) {
  return caseStudies.filter(study => study.industry === industry);
}

// Get featured case studies
export function getFeaturedCaseStudies() {
  return caseStudies.filter(study => study.featured);
}

// Get all unique industries
export function getAllIndustries() {
  return [...new Set(caseStudies.map(study => study.industry))];
}

// Format date for display
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Calculate reading time (rough estimate)
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
