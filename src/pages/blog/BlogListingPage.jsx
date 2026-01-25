import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  getAllBlogPosts,
  getAllBlogCategories,
  getFeaturedBlogPosts,
  getBlogPostsByCategory
} from '@/lib/content';

const BlogListingPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const allPosts = getAllBlogPosts();
  const categories = getAllBlogCategories();
  const featuredPosts = getFeaturedBlogPosts();

  const filteredPosts = activeCategory
    ? getBlogPostsByCategory(activeCategory)
    : allPosts;

  // Schema for the blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ferronyx.com/blog/#webpage",
        "url": "https://ferronyx.com/blog",
        "name": "Ferronyx Blog - Robotics Observability Insights",
        "description": "Expert insights on robotics observability, ROS2 debugging, robot fleet management, and reducing MTTR. Practical guides for robotics teams.",
        "isPartOf": {
          "@id": "https://ferronyx.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "name": "Ferronyx Blog Posts",
        "itemListElement": allPosts.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://ferronyx.com/blog/${post.slug}`,
          "name": post.title
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="Blog - Robotics Observability Insights | Ferronyx"
        description="Expert insights on robotics observability, ROS2 debugging, robot fleet management, and reducing MTTR. Practical guides for robotics teams."
        keywords="robotics blog, ROS2 tutorials, robot debugging guides, robotics observability, MTTR reduction, robot fleet management articles"
        canonicalUrl="https://ferronyx.com/blog"
        schema={blogSchema}
      />

      <main className="min-h-screen bg-black pt-24">
        {/* Hero Section */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-400 mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Robotics Observability Insights
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Expert guides, tutorials, and best practices for running reliable robot fleets in production.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPosts.length > 0 && !activeCategory && (
          <section className="px-6 pb-16 max-w-7xl mx-auto">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
              Featured
            </h2>
            <BlogCard post={featuredPosts[0]} featured />
          </section>
        )}

        {/* All Posts */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold text-white">
              {activeCategory ? activeCategory : 'All Posts'}
            </h2>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-400 mb-4">No posts found in this category.</p>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-blue-400 hover:text-blue-300"
              >
                View all posts
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-[#0A0A0B]/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to put these insights into action?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join robotics teams who are using Ferronyx to debug faster and ship more reliable robots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://dev.ferronyx.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/case-studies">
                <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogListingPage;
