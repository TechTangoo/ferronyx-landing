'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function BlogListingClient() {
    const [activeCategory, setActiveCategory] = useState(null);

    const allPosts = getAllBlogPosts();
    const categories = getAllBlogCategories();
    const featuredPosts = getFeaturedBlogPosts();

    const filteredPosts = activeCategory
        ? getBlogPostsByCategory(activeCategory)
        : allPosts;

    return (
        <main className="min-h-screen bg-black pt-24">
            {/* Hero Section */}
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm"
                        variants={fadeInUp}
                    >
                        Blog
                    </motion.span>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        variants={fadeInUp}
                    >
                        Robotics Observability{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                            Insights
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-zinc-400 leading-relaxed"
                        variants={fadeInUp}
                    >
                        Expert guides, tutorials, and best practices for running reliable robot fleets in production.
                    </motion.p>
                </motion.div>
            </section>

            {/* Featured Post */}
            {featuredPosts.length > 0 && !activeCategory && (
                <motion.section
                    className="px-6 pb-16 max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
                        Featured
                    </h2>
                    <BlogCard post={featuredPosts[0]} featured />
                </motion.section>
            )}

            {/* All Posts */}
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-white">
                        {activeCategory ? activeCategory : 'All Posts'}
                    </h2>
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </motion.div>

                {filteredPosts.length > 0 ? (
                    <motion.div
                        key={activeCategory || 'all'}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {filteredPosts.map((post) => (
                            <motion.div key={post.slug} variants={fadeInUp}>
                                <BlogCard post={post} />
                            </motion.div>
                        ))}
                    </motion.div>
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
            <motion.section
                className="px-6 py-20 bg-[#0A0A0B]/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
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
                        <Link href="/case-studies">
                            <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                                View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
