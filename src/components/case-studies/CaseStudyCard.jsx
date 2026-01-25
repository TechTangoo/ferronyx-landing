import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

const CaseStudyCard = ({ caseStudy, featured = false }) => {
  const { slug, title, company, industry, logo, excerpt, metrics, tags } = caseStudy;

  if (featured) {
    return (
      <Link
        to={`/case-studies/${slug}`}
        className="group block bg-[#0A0A0B] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Logo/Visual */}
          <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-zinc-800 to-zinc-900 p-12 flex items-center justify-center relative">
            {logo ? (
              <img
                src={logo}
                alt={`${company} logo`}
                className="max-w-[200px] max-h-[100px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <Building2 className="h-24 w-24 text-white/20" />
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                {industry}
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm text-zinc-500 mb-2">{company}</p>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 mb-6 line-clamp-3">
              {excerpt}
            </p>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-zinc-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            <span className="text-blue-400 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
              Read case study <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/case-studies/${slug}`}
      className="group block bg-[#0A0A0B] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.15] transition-all"
    >
      {/* Header with logo */}
      <div className="aspect-[2/1] bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 flex items-center justify-center relative">
        {logo ? (
          <img
            src={logo}
            alt={`${company} logo`}
            className="max-w-[120px] max-h-[60px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <Building2 className="h-16 w-16 text-white/20" />
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
            {industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-zinc-500 mb-1">{company}</p>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Key Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex gap-4 mb-4">
            {metrics.slice(0, 2).map((metric, index) => (
              <div key={index}>
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-zinc-500">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <span className="text-blue-400 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
          Read case study <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
