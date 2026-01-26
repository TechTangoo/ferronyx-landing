'use client'

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/content';

const BlogCard = ({ post, featured = false }) => {
  const { slug, title, excerpt, date, author, category, readingTime, coverImage } = post;

  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="group block bg-[#0A0A0B] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Cover Image */}
          <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
            {coverImage ? (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-white/10">F</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                {category}
              </span>
              <span className="text-zinc-500 text-sm">{formatDate(date)}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>

            <p className="text-zinc-400 mb-6 line-clamp-3">
              {excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Clock className="h-4 w-4" />
                {readingTime}
              </div>
              <span className="text-blue-400 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-[#0A0A0B] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all"
    >
      {/* Cover Image */}
      <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-bold text-white/10">F</div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
          <span>{formatDate(date)}</span>
          <span className="text-zinc-700">|</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
          {excerpt}
        </p>

        <span className="text-blue-400 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
