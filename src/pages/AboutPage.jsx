import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import { Button } from '../components/ui/button';
import {
    Target,
    Eye,
    Users,
    Rocket,
    Mail,
    Linkedin,
    ArrowRight,
    Bot,
    Zap,
    Shield
} from 'lucide-react';

const values = [
    {
        icon: Target,
        title: "Robotics-First",
        description: "We build specifically for robotics teams. Every feature is designed around the unique challenges of robot operations - from ROS2 topic monitoring to Nav2 stack debugging."
    },
    {
        icon: Eye,
        title: "Observability, Not Just Monitoring",
        description: "Collecting metrics isn't enough. We provide the context and intelligence to understand why your robots fail, not just that they failed."
    },
    {
        icon: Zap,
        title: "Speed to Resolution",
        description: "Every design decision optimizes for faster debugging. AI-assisted root cause analysis, automatic correlation, and timeline replay get you to answers in minutes."
    },
    {
        icon: Shield,
        title: "Production-Grade",
        description: "Built for robots in the real world. We handle the scale, reliability, and security demands of production robot fleets."
    }
];

const milestones = [
    {
        year: "2025",
        title: "Founded",
        description: "Started with a mission to bring modern observability practices to robotics."
    },
    {
        year: "2025",
        title: "First Beta Users",
        description: "Partnered with robotics teams running ROS2 fleets in production environments."
    },
    {
        year: "2025",
        title: "Early Access Launch",
        description: "Opening Ferronyx to robotics teams worldwide. Join the waitlist."
    }
];

const AboutPage = () => {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AboutPage",
                "@id": "https://ferronyx.com/about/#webpage",
                "url": "https://ferronyx.com/about",
                "name": "About Ferronyx - Robotics Observability Company",
                "description": "Ferronyx is the intelligence layer for ROS robots in production. We help robotics teams monitor, debug, and fix their robot fleets with AI-assisted observability.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://ferronyx.com/#organization",
                "name": "Ferronyx",
                "alternateName": "Ferronyx Robotics",
                "url": "https://ferronyx.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://ferronyx.com/logo.svg",
                    "width": "512",
                    "height": "512"
                },
                "description": "Ferronyx is the intelligence layer for ROS robots in production. We provide real-time observability, automated root cause analysis, and AI-assisted debugging for robotics teams running ROS/ROS2 fleets.",
                "foundingDate": "2025",
                "slogan": "The Intelligence Layer for Robotics",
                "knowsAbout": [
                    "Robotics Observability",
                    "ROS2 Monitoring",
                    "Robot Fleet Management",
                    "AI-Powered Debugging",
                    "Robot Operations (RobotOps)",
                    "Autonomous Mobile Robots",
                    "Robot Incident Management"
                ],
                "sameAs": [
                    "https://www.linkedin.com/company/ferronyx-robotics/"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@ferronyx.com",
                    "contactType": "customer support",
                    "availableLanguage": "English"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                },
                "serviceType": [
                    "Robot Fleet Observability",
                    "ROS2 Debugging Tools",
                    "AI Root Cause Analysis",
                    "Robot Incident Management"
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="About Ferronyx - The Robotics Observability Company | ROS2 Fleet Intelligence"
                description="Ferronyx is the intelligence layer for ROS robots in production. We help robotics teams monitor, debug, and fix their robot fleets with AI-assisted observability and automated root cause analysis."
                keywords="Ferronyx, robotics observability company, ROS2 monitoring company, robot fleet management, robotics startup, robot debugging tools, Ferronyx robotics"
                canonicalUrl="https://ferronyx.com/about"
                schema={aboutSchema}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://ferronyx.com' },
                { name: 'About' }
            ]} />

            <main className="min-h-screen bg-black pt-24">
                {/* Hero Section */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-zinc-400 mb-6">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            The Intelligence Layer for Robotics
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
                            Ferronyx is building the observability platform that robotics teams need to run
                            reliable robots in production. We bring modern SRE practices to the physical world.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="px-6 py-16 bg-[#0A0A0B]/50">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Robots are entering production environments faster than ever - warehouses, hospitals,
                                farms, streets. But the tools to operate them reliably haven't kept pace.
                            </p>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Robotics teams today spend hours debugging incidents, manually correlating logs
                                across systems, and flying blind when robots fail in the field. The same problems
                                that software teams solved with observability platforms like Datadog and New Relic
                                now plague robotics.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                <strong className="text-white">We're building Ferronyx to change that.</strong> Our mission
                                is to give every robotics team the visibility and intelligence they need to ship
                                reliable robots - whether they're running 10 robots or 10,000.
                            </p>
                        </div>
                        <div className="bg-black border border-white/[0.08] rounded-xl p-8">
                            <Bot className="h-12 w-12 text-zinc-400 mb-6" />
                            <blockquote className="text-lg text-white font-medium mb-4">
                                "We believe robotics teams deserve the same quality of operational tooling
                                that software teams have had for a decade."
                            </blockquote>
                            <p className="text-zinc-500 text-sm">
                                - Ferronyx Team
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">What We Believe</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Our product decisions are guided by these principles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 hover:border-white/[0.15] transition-all"
                                >
                                    <Icon className="h-8 w-8 text-zinc-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="px-6 py-20 bg-[#0A0A0B]/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0 w-16 text-right">
                                        <span className="text-zinc-500 font-mono text-sm">{milestone.year}</span>
                                    </div>
                                    <div className="flex-shrink-0 w-px bg-white/[0.1] relative">
                                        <div className="absolute top-1 -left-1 w-2 h-2 rounded-full bg-white/50" />
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                                        <p className="text-zinc-400">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="px-6 py-20 max-w-4xl mx-auto">
                    <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            Whether you're interested in early access, have questions about Ferronyx,
                            or want to discuss robotics observability, we'd love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="https://dev.ferronyx.com" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href="mailto:support@ferronyx.com">
                                <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Us
                                </Button>
                            </a>
                        </div>

                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/company/ferronyx-robotics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AboutPage;
