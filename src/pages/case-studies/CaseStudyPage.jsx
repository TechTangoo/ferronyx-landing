import React, { Suspense, lazy, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Building2, Quote } from 'lucide-react';
import { getCaseStudyBySlug } from '@/lib/content';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/blog/MDXComponents';

// Lazy load MDX content files
const caseStudyContent = {
  'warehouse-amr-fleet-mttr-reduction': lazy(() => import('@/content/case-studies/warehouse-amr-fleet-mttr-reduction.mdx')),
  'delivery-robot-fleet-scaling': lazy(() => import('@/content/case-studies/delivery-robot-fleet-scaling.mdx')),
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);

  // Get the MDX component for this case study
  const MDXContent = useMemo(() => {
    return caseStudyContent[slug] || null;
  }, [slug]);

  // If case study not found, redirect to listing
  if (!caseStudy || !MDXContent) {
    return <Navigate to="/case-studies" replace />;
  }

  const { title, company, industry, logo, excerpt, metrics, tags } = caseStudy;

  // Generate schema for the case study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://ferronyx.com/case-studies/${slug}/#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ferronyx.com/case-studies/${slug}`
    },
    "headline": title,
    "description": excerpt,
    "author": {
      "@type": "Organization",
      "name": "Ferronyx",
      "@id": "https://ferronyx.com/#organization"
    },
    "publisher": {
      "@id": "https://ferronyx.com/#organization"
    },
    "about": {
      "@type": "Organization",
      "name": company
    },
    "keywords": tags?.join(', '),
    "articleSection": "Case Studies"
  };

  return (
    <>
      <SEO
        title={`${title} | Ferronyx Case Study`}
        description={excerpt}
        keywords={`${company}, ${industry}, ${tags?.join(', ')}, robotics case study`}
        canonicalUrl={`https://ferronyx.com/case-studies/${slug}`}
        ogType="article"
        schema={caseStudySchema}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Case Studies', url: 'https://ferronyx.com/case-studies' },
        { name: title }
      ]} />

      <main className="min-h-screen bg-black pt-24">
        {/* Hero Image */}
        {logo && (
          <div className="w-full max-w-6xl mx-auto px-6 mb-8">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <img 
                src={logo} 
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-400 text-xs font-medium">
                  {industry}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <header className="px-6 py-8 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </nav>

          {/* Industry Badge (only if no hero image) */}
          {!logo && (
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
              {industry}
            </span>
          )}

          {/* Company */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg bg-white/[0.05] flex items-center justify-center">
              <Building2 className="h-5 w-5 text-zinc-500" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Case Study</p>
              <p className="text-white font-medium">{company}</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-zinc-400 leading-relaxed">
            {excerpt}
          </p>
        </header>

        {/* Metrics Section */}
        {metrics && metrics.length > 0 && (
          <section className="px-6 pb-12 max-w-5xl mx-auto">
            <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8">
              <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6 text-center">
                Key Results
              </h2>
              <div className={`grid grid-cols-1 md:grid-cols-${Math.min(metrics.length, 3)} gap-8`}>
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-zinc-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <article className="px-6 pb-20 max-w-4xl mx-auto">
          <div className="prose-custom">
            <Suspense
              fallback={
                <div className="text-zinc-400 text-center py-8">
                  Loading case study...
                </div>
              }
            >
              <MDXProvider components={MDXComponents}>
                <MDXContent />
              </MDXProvider>
            </Suspense>
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
              Want similar results for your robot fleet?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
              Join leading robotics companies who trust Ferronyx for their observability needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://dev.ferronyx.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/#contact-footer">
                <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default CaseStudyPage;
