'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
    getAllCaseStudies,
    getAllIndustries,
    getCaseStudiesByIndustry,
    getFeaturedCaseStudies
} from '@/lib/content';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

export default function CaseStudiesListingClient() {
    const [activeIndustry, setActiveIndustry] = useState(null);

    const allCaseStudies = getAllCaseStudies();
    const industries = getAllIndustries();
    const featuredStudies = getFeaturedCaseStudies();

    const filteredStudies = activeIndustry
        ? getCaseStudiesByIndustry(activeIndustry)
        : allCaseStudies;

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
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm"
                    >
                        Case Studies
                    </motion.span>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Customer{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                            Success Stories
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-zinc-400 leading-relaxed"
                    >
                        See how robotics teams are using Ferronyx to debug faster, scale their fleets, and ship more reliable robots.
                    </motion.p>
                </motion.div>
            </section>

            {/* Stats Banner */}
            <motion.section
                className="px-6 pb-16 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
            >
                <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="text-4xl font-bold text-white mb-2">85%</div>
                            <div className="text-zinc-400">Average MTTR Reduction</div>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-zinc-400">Robots Monitored</div>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <div className="text-4xl font-bold text-white mb-2">99.2%</div>
                            <div className="text-zinc-400">Fleet Uptime Achieved</div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Featured Case Study */}
            {featuredStudies.length > 0 && !activeIndustry && (
                <motion.section
                    className="px-6 pb-16 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
                        Featured
                    </h2>
                    <CaseStudyCard caseStudy={featuredStudies[0]} featured />
                </motion.section>
            )}

            {/* Industry Filter */}
            <motion.section
                className="px-6 py-8 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveIndustry(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === null
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
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === industry
                                ? 'bg-white text-black'
                                : 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-white'
                                }`}
                        >
                            {industry}
                        </button>
                    ))}
                </div>
            </motion.section>

            {/* Case Studies Grid */}
            <section className="px-6 py-8 max-w-7xl mx-auto">
                {filteredStudies.length > 0 ? (
                    <motion.div
                        key={activeIndustry || 'all'}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {filteredStudies.map((study) => (
                            <motion.div key={study.slug} variants={fadeInUp}>
                                <CaseStudyCard caseStudy={study} />
                            </motion.div>
                        ))}
                    </motion.div>
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
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleIn}
                >
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
                        <Link href="/#contact-footer">
                            <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                                Book a Demo
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
