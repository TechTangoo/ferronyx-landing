/**
 * Build-time prerenderer for SEO
 *
 * Generates individual HTML files for each route with correct:
 * - <title>
 * - <meta name="description">
 * - <meta name="keywords">
 * - <link rel="canonical">
 * - Open Graph tags (og:title, og:description, og:url, og:image, og:type)
 * - Twitter Card tags
 * - JSON-LD schema markup (page-specific + BreadcrumbList)
 *
 * This ensures search engine crawlers see correct meta tags without
 * needing to execute JavaScript.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://ferronyx.com';

// ── Route metadata ──────────────────────────────────────────────────────

const blogPosts = [
  {
    slug: 'intelligent-alert-correlation-root-cause-analysis',
    title: 'Intelligent Alert Correlation: Finding Root Causes Automatically',
    excerpt: 'Learn how to correlate related alerts in robot fleets. AI-assisted root cause analysis reduces debugging time from hours to minutes.',
    tags: ['Alerting', 'Root Cause Analysis', 'ROS2', 'Debugging'],
    coverImage: '/blog/alert-correlation.png',
    date: '2026-01-25',
    category: 'Features',
    readingTime: '8 min read',
  },
  {
    slug: 'gpu-monitoring-optimization-insights',
    title: 'GPU Monitoring for Robotics: Beyond Fleet Averages to Actionable Insights',
    excerpt: 'Optimize GPU performance per robot. Detect inference bottlenecks, thermal issues, and memory problems before they cause failures.',
    tags: ['GPU', 'Monitoring', 'Performance', 'Optimization'],
    coverImage: '/blog/gpu-monitoring.png',
    date: '2026-01-23',
    category: 'Features',
    readingTime: '7 min read',
  },
  {
    slug: 'ota-deployment-tracking-failure-correlation',
    title: 'OTA Deployment Tracking: Correlate Deployments with Robot Failures',
    excerpt: "Track what changed and when. Instantly answer 'what changed before this robot failed?' with deployment correlation.",
    tags: ['OTA', 'Deployments', 'Fleet Management', 'Correlation'],
    coverImage: '/blog/ota-tracking.png',
    date: '2026-01-21',
    category: 'Features',
    readingTime: '7 min read',
  },
  {
    slug: 'ros2-observability-complete-guide',
    title: 'ROS2 Observability: Complete Guide to Monitoring & Debugging',
    excerpt: 'Learn to implement comprehensive observability for ROS2 robots. Covers logging, metrics, tracing, alerting, and best practices for production fleets.',
    tags: ['ROS2', 'Observability', 'Monitoring', 'Best Practices'],
    coverImage: '/blog/ros2-observability.png',
    date: '2026-01-20',
    category: 'Guides',
    readingTime: '12 min read',
  },
  {
    slug: 'debug-navigation-failures-ros2',
    title: 'How to Debug Nav2 Navigation Failures in ROS2 [Step-by-Step]',
    excerpt: 'Troubleshoot ROS2 navigation issues. Guide to diagnosing costmap errors, planner failures, controller problems, and sensor integration.',
    tags: ['ROS2', 'Nav2', 'Debugging', 'Navigation'],
    coverImage: '/blog/nav2-debugging.png',
    date: '2026-01-15',
    category: 'Tutorials',
    readingTime: '8 min read',
  },
  {
    slug: 'reducing-robot-mttr-best-practices',
    title: 'Reducing Robot MTTR: Best Practices for Production Teams',
    excerpt: 'Reduce robot troubleshooting time from 4+ hours to 15 minutes. Strategies for faster incident detection, debugging, and resolution.',
    tags: ['MTTR', 'Operations', 'Debugging', 'SRE'],
    coverImage: '/blog/mttr-reduction.png',
    date: '2026-01-10',
    category: 'Best Practices',
    readingTime: '10 min read',
  },
];

const routes = [
  // ── Homepage ──
  {
    path: '/',
    title: 'Ferronyx - The Intelligence Layer for Robotics | ROS2 Observability Platform',
    description: 'Monitor, debug, and fix your robot fleet from anywhere. Real-time ROS2 observability, AI-assisted root cause analysis, and fleet-wide diagnostics. Reduce robot MTTR from hours to minutes.',
    keywords: 'robotics observability, ROS2 observability, robot fleet monitoring, AI-powered debugging, robot incident management, ROS monitoring, robotics SRE, robot MTTR reduction, ROS2 debugging, robot root cause analysis, Ferronyx',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [{ name: 'Home' }],
  },

  // ── Use Cases ──
  {
    path: '/use-cases',
    title: 'Use Cases - Robot Fleet Monitoring & ROS2 Debugging | Ferronyx',
    description: 'Reduce robot MTTR from hours to minutes. Debug ROS2 navigation failures, detect sensor drift, and manage your robot fleet with AI-powered observability.',
    keywords: 'robot MTTR reduction, ROS2 debugging, sensor drift detection, robot fleet management, navigation failure debugging, deployment correlation, robot observability use cases',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Use Cases' },
    ],
  },

  // ── About ──
  {
    path: '/about',
    title: 'About Ferronyx - The Robotics Observability Company | ROS2 Fleet Intelligence',
    description: 'Ferronyx is the intelligence layer for ROS robots in production. We help robotics teams monitor, debug, and fix their robot fleets with AI-assisted observability and automated root cause analysis.',
    keywords: 'Ferronyx, robotics observability company, ROS2 monitoring company, robot fleet management, robotics startup, robot debugging tools, Ferronyx robotics',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'About' },
    ],
  },

  // ── Pricing ──
  {
    path: '/pricing',
    title: 'Pricing - Ferronyx | Robot Fleet Observability Platform',
    description: 'Simple, transparent pricing for robot fleet monitoring. $40/machine/month with all features included. 2-week free trial. Cloud-hosted or on-premise deployment options for ROS/ROS2 robots.',
    keywords: 'robotics pricing, robot monitoring pricing, fleet management cost, ROS observability pricing, robotics SaaS pricing, robot fleet cost, ROS2 monitoring price, robot observability platform pricing, robotics platform cost, ferronyx pricing',
    ogImage: '/og-pricing.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Pricing' },
    ],
  },

  // ── Blog listing ──
  {
    path: '/blog',
    title: 'Blog - Robotics Observability Insights | Ferronyx',
    description: 'Expert insights on robotics observability, ROS2 debugging, robot fleet management, and reducing MTTR. Practical guides for robotics teams.',
    keywords: 'robotics blog, ROS2 tutorials, robot debugging guides, robotics observability, MTTR reduction, robot fleet management articles',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Blog' },
    ],
  },

  // ── Blog posts ──
  ...blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Ferronyx Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    ogImage: post.coverImage || '/og-image.png',
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: post.title },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${BASE_URL}/blog/${post.slug}/#article`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${post.slug}`
      },
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": "Ferronyx Team",
        "@id": `${BASE_URL}/#organization`
      },
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "image": `${BASE_URL}${post.coverImage}`,
      "keywords": post.tags.join(', '),
      "articleSection": post.category,
      "wordCount": (parseInt(post.readingTime) || 7) * 200,
    },
  })),

  // ── Legal pages ──
  {
    path: '/terms',
    title: 'Terms and Conditions - Ferronyx',
    description: 'Terms and Conditions for using the Ferronyx robot fleet observability platform.',
    keywords: 'Ferronyx terms, terms and conditions, robotics platform terms',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Terms and Conditions' },
    ],
  },
  {
    path: '/privacy',
    title: 'Privacy Policy - Ferronyx',
    description: 'Privacy Policy for the Ferronyx robot fleet observability platform. Learn how we collect, use, and protect your data.',
    keywords: 'Ferronyx privacy, privacy policy, robotics platform privacy',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Privacy Policy' },
    ],
  },
  {
    path: '/cookies',
    title: 'Cookie Policy - Ferronyx',
    description: 'Cookie Policy for the Ferronyx robot fleet observability platform. Learn how we use cookies and similar tracking technologies.',
    keywords: 'Ferronyx cookies, cookie policy, robotics platform cookies',
    ogImage: '/og-image.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Cookie Policy' },
    ],
  },
];


// ── Schema builders ─────────────────────────────────────────────────────

function buildBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url }),
    })),
  };
}


// ── HTML transformation ─────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function prerenderRoute(templateHtml, route) {
  let html = templateHtml;
  const canonicalUrl = route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`;
  const fullOgImage = route.ogImage.startsWith('http') ? route.ogImage : `${BASE_URL}${route.ogImage}`;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta name="title"
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${escapeHtml(route.title)}" />`
  );

  // Replace meta name="description"
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace meta name="keywords"
  if (route.keywords) {
    html = html.replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
      `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`
    );
  }

  // Replace canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${fullOgImage}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${route.ogType || 'website'}" />`
  );

  // Replace Twitter Card tags
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${fullOgImage}" />`
  );

  // Build all extra JSON-LD schemas to inject
  const schemas = [];

  // Page-specific schema (BlogPosting, etc.)
  if (route.schema) {
    schemas.push(route.schema);
  }

  // Breadcrumb schema
  const breadcrumbSchema = buildBreadcrumbSchema(route.breadcrumbs);
  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  // Inject all schemas before closing </head>
  if (schemas.length > 0) {
    const schemaTags = schemas
      .map(s => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`)
      .join('\n');
    html = html.replace('</head>', `${schemaTags}\n</head>`);
  }

  return html;
}


// ── Main ────────────────────────────────────────────────────────────────

function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  let count = 0;

  for (const route of routes) {
    const html = prerenderRoute(templateHtml, route);

    if (route.path === '/') {
      // Overwrite the root index.html with homepage-specific meta
      fs.writeFileSync(templatePath, html, 'utf-8');
    } else {
      // Create directory structure: /about -> /dist/about/index.html
      const dir = path.join(DIST_DIR, route.path);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    }

    count++;
    console.log(`  Prerendered: ${route.path}`);
  }

  console.log(`\nPrerendered ${count} routes successfully.`);
}

main();
