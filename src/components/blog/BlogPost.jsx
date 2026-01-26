import React from 'react';
import { Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MDXComponents from './MDXComponents';
import RelatedPosts from './RelatedPosts';
import { formatDate } from '@/lib/content';

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

const BlogPost = ({ post, children }) => {
  const { slug, title, excerpt, date, author, category, tags, readingTime, coverImage } = post;

  return (
    <article className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <motion.header 
        className="px-6 py-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Breadcrumb */}
        <motion.nav className="mb-8" variants={fadeInUp}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.nav>

        {/* Category */}
        <motion.span 
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4"
          variants={fadeInUp}
        >
          {category}
        </motion.span>

        {/* Title */}
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          variants={fadeInUp}
        >
          {title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p 
          className="text-xl text-zinc-400 mb-8 leading-relaxed"
          variants={fadeInUp}
        >
          {excerpt}
        </motion.p>

        {/* Meta */}
        <motion.div 
          className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 pb-8 border-b border-white/[0.08]"
          variants={fadeInUp}
        >
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
        </motion.div>
      </motion.header>

      {/* Cover Image */}
      {coverImage && (
        <motion.div 
          className="px-6 pb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="aspect-[2/1] rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.08]">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="px-6 pb-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="prose-custom">
          <MDXProvider components={MDXComponents}>
            {children}
          </MDXProvider>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <motion.div 
            className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/[0.08]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.05] text-zinc-400 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to reduce your robot debugging time?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Join robotics teams who have reduced their MTTR from hours to minutes with Ferronyx.
          </p>
          <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        {/* Related Posts */}
        <RelatedPosts currentSlug={slug} />
      </motion.div>
    </article>
  );
};

export default BlogPost;
