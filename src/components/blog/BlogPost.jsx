import React from 'react';
import { Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MDXComponents from './MDXComponents';
import RelatedPosts from './RelatedPosts';
import { formatDate } from '@/lib/content';

const BlogPost = ({ post, children }) => {
  const { slug, title, excerpt, date, author, category, tags, readingTime, coverImage } = post;

  return (
    <article className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <header className="px-6 py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </nav>

        {/* Category */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
          {category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {formatDate(date)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {readingTime}
          </div>
          {author && (
            <div className="flex items-center gap-2">
              <span>By {author.name}</span>
            </div>
          )}
        </div>
      </header>

      {/* Cover Image */}
      {coverImage && (
        <div className="px-6 pb-12 max-w-5xl mx-auto">
          <div className="aspect-[2/1] rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.08]">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="prose-custom">
          <MDXProvider components={MDXComponents}>
            {children}
          </MDXProvider>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/[0.08]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.05] text-zinc-400 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to reduce your robot debugging time?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Join robotics teams who have reduced their MTTR from hours to minutes with Ferronyx.
          </p>
          <a href="https://dev.ferronyx.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Related Posts */}
        <RelatedPosts currentSlug={slug} />
      </div>
    </article>
  );
};

export default BlogPost;
