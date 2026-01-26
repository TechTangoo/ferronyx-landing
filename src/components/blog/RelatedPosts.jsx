import React from 'react';
import { getRelatedBlogPosts } from '@/lib/content';
import BlogCard from './BlogCard';

const RelatedPosts = ({ currentSlug }) => {
  const relatedPosts = getRelatedBlogPosts(currentSlug, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-white/[0.08] pt-16 mt-16">
      <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
