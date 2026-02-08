import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MDXComponents from './MDXComponents';
import RelatedPosts from './RelatedPosts';
import { formatDate } from '@/lib/content';
import { trackBlogRead, trackShareClick, trackEmailSubscribe, trackCTAClick } from '@/lib/analytics';

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

// Social share URLs
const getShareUrls = (slug, title) => {
  const url = encodeURIComponent(`https://ferronyx.com/blog/${slug}`);
  const text = encodeURIComponent(title);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`
  };
};

const BlogPost = ({ post, children }) => {
  const { slug, title, excerpt, date, author, category, tags, readingTime, coverImage } = post;
  const shareUrls = getShareUrls(slug, title);

  // Track blog post view on mount
  useEffect(() => {
    trackBlogRead(slug, title, category);
  }, [slug, title, category]);

  // Handle share click tracking
  const handleShareClick = (platform) => {
    trackShareClick(platform, slug);
  };

  // Handle email subscription form submit
  const handleEmailSubmit = (e) => {
    trackEmailSubscribe('blog_post');
    // Form will submit normally to the action URL
  };

  // Handle CTA click tracking
  const handleCTAClick = () => {
    trackCTAClick('Get Started', 'blog_post_cta');
  };

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
          {/* Share Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-zinc-600 text-xs">Share:</span>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
              aria-label="Share on LinkedIn"
              onClick={() => handleShareClick('linkedin')}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
              aria-label="Share on Twitter"
              onClick={() => handleShareClick('twitter')}
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
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

        {/* Email Signup Section */}
        {/*<motion.div*/}
        {/*  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mt-12"*/}
        {/*  initial={{ opacity: 0, y: 20 }}*/}
        {/*  whileInView={{ opacity: 1, y: 0 }}*/}
        {/*  viewport={{ once: true }}*/}
        {/*  transition={{ duration: 0.5 }}*/}
        {/*>*/}
        {/*  <div className="flex items-start gap-4">*/}
        {/*    <div className="p-3 bg-blue-500/20 rounded-lg">*/}
        {/*      <Mail className="h-6 w-6 text-blue-400" />*/}
        {/*    </div>*/}
        {/*    <div className="flex-1">*/}
        {/*      <h3 className="text-lg font-bold text-white mb-2">*/}
        {/*        Get ROS2 debugging tips in your inbox*/}
        {/*      </h3>*/}
        {/*      <p className="text-zinc-400 text-sm mb-4">*/}
        {/*        Weekly insights on robot observability, debugging techniques, and best practices for production fleets.*/}
        {/*      </p>*/}
        {/*      <form*/}
        {/*        action="https://dev.ferronyx.com/subscribe"*/}
        {/*        method="POST"*/}
        {/*        className="flex gap-3 flex-col sm:flex-row"*/}
        {/*        onSubmit={handleEmailSubmit}*/}
        {/*      >*/}
        {/*        <input*/}
        {/*          type="email"*/}
        {/*          name="email"*/}
        {/*          placeholder="your@email.com"*/}
        {/*          required*/}
        {/*          className="flex-1 px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 text-sm"*/}
        {/*        />*/}
        {/*        <Button*/}
        {/*          type="submit"*/}
        {/*          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 text-sm whitespace-nowrap"*/}
        {/*        >*/}
        {/*          Subscribe*/}
        {/*        </Button>*/}
        {/*      </form>*/}
        {/*      <p className="text-zinc-600 text-xs mt-2">No spam. Unsubscribe anytime.</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</motion.div>*/}

        {/* Author Bio Section */}
        <motion.div
          className="flex items-center gap-4 mt-8 p-6 bg-white/[0.02] border border-white/[0.08] rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
            FT
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold">{author?.name || 'Ferronyx Team'}</h4>
            <p className="text-zinc-400 text-sm">Building the intelligence layer for robotics. We help teams debug robots in minutes, not hours.</p>
            <a
              href="https://www.linkedin.com/company/ferronyx-robotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-2"
            >
              <Linkedin className="h-4 w-4" />
              Follow on LinkedIn
            </a>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 mt-8 text-center"
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
              <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div className="flex gap-3 justify-center">
              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:border-white/20 transition-colors text-sm"
                onClick={() => handleShareClick('linkedin')}
              >
                <Linkedin className="h-4 w-4" />
                Share
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:border-white/20 transition-colors text-sm"
                onClick={() => handleShareClick('twitter')}
              >
                <Twitter className="h-4 w-4" />
                Tweet
              </a>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <RelatedPosts currentSlug={slug} />
      </motion.div>
    </article>
  );
};

export default BlogPost;
