import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  getAllCaseStudies,
  getAllIndustries,
  getCaseStudiesByIndustry,
  getFeaturedCaseStudies
} from '@/lib/content';

const CaseStudiesListingPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const allCaseStudies = getAllCaseStudies();
  const industries = getAllIndustries();
  const featuredStudies = getFeaturedCaseStudies();

  const filteredStudies = activeIndustry
    ? getCaseStudiesByIndustry(activeIndustry)
    : allCaseStudies;

  // Schema for case studies page
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ferronyx.com/case-studies/#webpage",
        "url": "https://ferronyx.com/case-studies",
        "name": "Case Studies - Ferronyx Customer Success Stories",
        "description": "See how robotics teams have reduced MTTR by 85%, scaled their fleets, and improved operational efficiency with Ferronyx.",
        "isPartOf": {
          "@id": "https://ferronyx.com/#website"
        }
      },
      {
        "@type": "ItemList",
        "name": "Ferronyx Case Studies",
        "itemListElement": allCaseStudies.map((study, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://ferronyx.com/case-studies/${study.slug}`,
          "name": study.title
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="Case Studies - Customer Success Stories | Ferronyx"
        description="See how robotics teams have reduced MTTR by 85%, scaled their fleets, and improved operational efficiency with Ferronyx observability platform."
        keywords="robotics case studies, robot fleet success stories, MTTR reduction case study, warehouse AMR case study, delivery robot case study"
        canonicalUrl="https://ferronyx.com/case-studies"
        schema={caseStudiesSchema}
      />

      <main className="min-h-screen bg-black pt-24">
        {/* Hero Section */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-400 mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Customer Success Stories
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              See how robotics teams are using Ferronyx to debug faster, scale their fleets, and ship more reliable robots.
            </p>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="px-6 pb-16 max-w-5xl mx-auto">
          <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-zinc-400">Average MTTR Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-zinc-400">Robots Monitored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.2%</div>
                <div className="text-zinc-400">Fleet Uptime Achieved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredStudies.length > 0 && !activeIndustry && (
          <section className="px-6 pb-16 max-w-7xl mx-auto">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
              Featured
            </h2>
            <CaseStudyCard caseStudy={featuredStudies[0]} featured />
          </section>
        )}

        {/* Industry Filter */}
        <section className="px-6 py-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveIndustry(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndustry === null
                  ? 'bg-white text-black'
                  : 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-white'
              }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === industry
                    ? 'bg-white text-black'
                    : 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="px-6 py-8 max-w-7xl mx-auto">
          {filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.slug} caseStudy={study} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-400 mb-4">No case studies found in this industry.</p>
              <button
                onClick={() => setActiveIndustry(null)}
                className="text-blue-400 hover:text-blue-300"
              >
                View all case studies
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-[#0A0A0B]/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to write your success story?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join leading robotics companies who trust Ferronyx to keep their robots running reliably.
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
        </section>
      </main>
    </>
  );
};

export default CaseStudiesListingPage;
