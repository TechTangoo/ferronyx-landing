/**
 * Generate plain text versions of blog posts for AI agents
 *
 * Reads MDX files from /src/content/blog/ and generates:
 * - /public/blog/[slug].txt for each post
 * - /public/blog/index.txt with listing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_CONTENT_DIR = path.join(ROOT_DIR, 'src/content/blog');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public/blog');

// Blog metadata from src/lib/content.js
const blogPosts = [
  {
    slug: 'intelligent-alert-correlation-root-cause-analysis',
    title: 'Intelligent Alert Correlation: Finding the Root Cause Automatically',
    excerpt: 'Learn how Ferronyx correlates related alerts to identify root causes automatically. Stop chasing symptoms and fix the real problem.',
    date: '2025-01-25',
    category: 'Features',
    tags: ['Alerting', 'Root Cause Analysis', 'ROS2', 'Debugging'],
    readingTime: '8 min read'
  },
  {
    slug: 'gpu-monitoring-optimization-insights',
    title: 'GPU Monitoring: Beyond Averages to Actionable Insights',
    excerpt: 'Discover why fleet-average GPU metrics hide critical problems and how per-GPU monitoring reveals optimization opportunities.',
    date: '2025-01-23',
    category: 'Features',
    tags: ['GPU', 'Monitoring', 'Performance', 'Optimization'],
    readingTime: '7 min read'
  },
  {
    slug: 'ota-deployment-tracking-failure-correlation',
    title: 'OTA Deployment Tracking: One View of Deployments and Failures',
    excerpt: 'See how Ferronyx correlates OTA deployments with robot failures, making "what changed?" the easiest question to answer.',
    date: '2025-01-21',
    category: 'Features',
    tags: ['OTA', 'Deployments', 'Fleet Management', 'Correlation'],
    readingTime: '7 min read'
  },
  {
    slug: 'ros2-observability-complete-guide',
    title: 'ROS2 Observability: A Complete Guide',
    excerpt: 'Learn how to implement comprehensive observability for your ROS2 robot fleet. From logging and metrics to tracing and alerting.',
    date: '2025-01-20',
    category: 'Guides',
    tags: ['ROS2', 'Observability', 'Monitoring', 'Best Practices'],
    readingTime: '12 min read'
  },
  {
    slug: 'debug-navigation-failures-ros2',
    title: 'How to Debug Navigation Failures in ROS2',
    excerpt: 'Step-by-step guide to diagnosing and fixing common Nav2 navigation issues in production robot fleets.',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['ROS2', 'Nav2', 'Debugging', 'Navigation'],
    readingTime: '8 min read'
  },
  {
    slug: 'reducing-robot-mttr-best-practices',
    title: 'Reducing Robot MTTR: Best Practices',
    excerpt: 'Proven strategies to reduce your robot fleet\'s mean time to resolution from hours to minutes.',
    date: '2025-01-10',
    category: 'Best Practices',
    tags: ['MTTR', 'Operations', 'Debugging', 'SRE'],
    readingTime: '10 min read'
  }
];

/**
 * Extract QuickAnswer content from MDX
 */
function extractQuickAnswer(content) {
  const quickAnswerMatch = content.match(/<QuickAnswer>([\s\S]*?)<\/QuickAnswer>/);
  if (quickAnswerMatch) {
    // Remove the bold question prefix, keep just the answer
    let answer = quickAnswerMatch[1].trim();
    // Remove markdown bold **text**
    answer = answer.replace(/\*\*(.*?)\*\*/g, '$1');
    return answer;
  }
  return null;
}

/**
 * Convert MDX to plain text
 * - Remove JSX components
 * - Keep markdown structure
 * - Preserve code blocks
 */
function mdxToPlainText(content) {
  let text = content;

  // Extract QuickAnswer first (will be placed at top)
  const quickAnswer = extractQuickAnswer(text);

  // Remove QuickAnswer component (will add at top)
  text = text.replace(/<QuickAnswer>[\s\S]*?<\/QuickAnswer>\n*/g, '');

  // Remove Callout components but keep content
  text = text.replace(/<Callout[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/Callout>/g, (match, title, content) => {
    return `**${title}**\n${content.trim()}\n`;
  });

  // Remove MetricGrid and MetricCard - convert to text
  text = text.replace(/<MetricGrid>[\s\S]*?<\/MetricGrid>/g, (match) => {
    const metrics = [];
    const cardMatches = match.matchAll(/<MetricCard\s+value="([^"]*)"\s+label="([^"]*)"\s+description="([^"]*)"\s*\/>/g);
    for (const cardMatch of cardMatches) {
      metrics.push(`- ${cardMatch[2]}: ${cardMatch[1]} (${cardMatch[3]})`);
    }
    return metrics.length > 0 ? metrics.join('\n') + '\n' : '';
  });

  // Remove any remaining JSX-style components (self-closing)
  text = text.replace(/<[A-Z][a-zA-Z]*\s*[^>]*\/>/g, '');

  // Remove any remaining JSX-style components (with children) - be careful not to remove markdown
  text = text.replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, '');

  // Clean up extra whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();

  return { text, quickAnswer };
}

/**
 * Format date for display
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate .txt file for a single blog post
 */
function generateBlogTxt(post) {
  const mdxPath = path.join(BLOG_CONTENT_DIR, `${post.slug}.mdx`);

  if (!fs.existsSync(mdxPath)) {
    console.warn(`Warning: MDX file not found for ${post.slug}`);
    return null;
  }

  const mdxContent = fs.readFileSync(mdxPath, 'utf-8');
  const { text, quickAnswer } = mdxToPlainText(mdxContent);

  // Build the output
  let output = `# ${post.title}\n\n`;

  if (quickAnswer) {
    output += `> Quick Answer: ${quickAnswer}\n\n`;
  }

  output += `URL: https://ferronyx.com/blog/${post.slug}\n`;
  output += `Date: ${formatDate(post.date)} | Category: ${post.category} | Reading Time: ${post.readingTime}\n`;
  output += `Tags: ${post.tags.join(', ')}\n\n`;
  output += `---\n\n`;
  output += text;
  output += `\n\n---\n\n`;
  output += `Related: https://ferronyx.com/llms.txt\n`;

  return output;
}

/**
 * Generate index.txt with listing of all blog posts
 */
function generateIndexTxt() {
  let output = `# Ferronyx Technical Blog\n\n`;
  output += `> AI-readable plain text versions of all blog posts about ROS2 observability, robot debugging, and fleet operations.\n\n`;
  output += `URL: https://ferronyx.com/blog\n\n`;
  output += `---\n\n`;
  output += `## All Posts\n\n`;

  // Sort by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const post of sortedPosts) {
    output += `### ${post.title}\n`;
    output += `${post.excerpt}\n`;
    output += `- Date: ${formatDate(post.date)}\n`;
    output += `- Category: ${post.category}\n`;
    output += `- Tags: ${post.tags.join(', ')}\n`;
    output += `- Read: https://ferronyx.com/blog/${post.slug}.txt\n\n`;
  }

  output += `---\n\n`;
  output += `More info: https://ferronyx.com/llms.txt\n`;

  return output;
}

/**
 * Main function
 */
function main() {
  console.log('Generating blog .txt files for AI agents...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Generate individual blog post .txt files
  let generatedCount = 0;
  for (const post of blogPosts) {
    const txtContent = generateBlogTxt(post);
    if (txtContent) {
      const outputPath = path.join(OUTPUT_DIR, `${post.slug}.txt`);
      fs.writeFileSync(outputPath, txtContent, 'utf-8');
      console.log(`  Generated: /public/blog/${post.slug}.txt`);
      generatedCount++;
    }
  }

  // Generate index.txt
  const indexContent = generateIndexTxt();
  const indexPath = path.join(OUTPUT_DIR, 'index.txt');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log(`  Generated: /public/blog/index.txt`);

  console.log(`\nDone! Generated ${generatedCount} blog .txt files + index.txt`);
}

main();
