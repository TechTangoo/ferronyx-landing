import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.6 }
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
        year: "2026",
        title: "Founded",
        description: "Started with a mission to bring modern observability practices to robotics."
    },
    {
        year: "2026",
        title: "First Beta Users",
        description: "Partnered with robotics teams running ROS2 fleets in production environments."
    },
    {
        year: "2026",
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
                "foundingDate": "2026",
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
                    <motion.div 
                        className="max-w-4xl"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span 
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm"
                        >
                            About Us
                        </motion.span>
                        <motion.h1 
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        >
                            The Intelligence Layer for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                                Robotics
                            </span>
                        </motion.h1>
                        <motion.p 
                            variants={fadeInUp}
                            className="text-xl text-zinc-400 leading-relaxed max-w-3xl"
                        >
                            Ferronyx is building the observability platform that robotics teams need to run
                            reliable robots in production. We bring modern SRE practices to the physical world.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="px-6 py-16 bg-[#0A0A0B]/50">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6">Our Mission</motion.h2>
                            <motion.p variants={fadeInUp} className="text-zinc-400 leading-relaxed mb-6">
                                Robots are entering production environments faster than ever - warehouses, hospitals,
                                farms, streets. But the tools to operate them reliably haven't kept pace.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-zinc-400 leading-relaxed mb-6">
                                Robotics teams today spend hours debugging incidents, manually correlating logs
                                across systems, and flying blind when robots fail in the field. The same problems
                                that software teams solved with observability platforms like Datadog and New Relic
                                now plague robotics.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-zinc-400 leading-relaxed">
                                <strong className="text-white">We're building Ferronyx to change that.</strong> Our mission
                                is to give every robotics team the visibility and intelligence they need to ship
                                reliable robots - whether they're running 10 robots or 10,000.
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            className="bg-black border border-white/[0.08] rounded-xl p-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <Bot className="h-12 w-12 text-blue-400 mb-6" />
                            <blockquote className="text-lg text-white font-medium mb-4">
                                "We believe robotics teams deserve the same quality of operational tooling
                                that software teams have had for a decade."
                            </blockquote>
                            <p className="text-zinc-500 text-sm">
                                - Ferronyx Team
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">What We Believe</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Our product decisions are guided by these principles.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        y: -5, 
                                        transition: { duration: 0.5 } 
                                    }}
                                    className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 hover:border-white/[0.15] transition-all"
                                >
                                    <motion.div
                                    >
                                        <Icon className="h-8 w-8 text-blue-400 mb-4" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </section>

                {/* Timeline Section */}
                <section className="px-6 py-20 bg-[#0A0A0B]/50">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2 
                            className="text-3xl font-bold text-white mb-12 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            Our Journey
                        </motion.h2>
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex gap-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={{
                                        hidden: { opacity: 0, x: -30 },
                                        visible: { 
                                            opacity: 1, 
                                            x: 0,
                                            transition: { 
                                                duration: 0.5, 
                                                delay: index * 0.15,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }
                                        }
                                    }}
                                >
                                    <div className="flex-shrink-0 w-16 text-right">
                                        <span className="text-zinc-500 font-mono text-sm">{milestone.year}</span>
                                    </div>
                                    <div className="flex-shrink-0 w-px bg-white/[0.1] relative">
                                        <motion.div 
                                            className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-blue-500"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                                        />
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                                        <p className="text-zinc-400">{milestone.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="px-6 py-20 max-w-4xl mx-auto">
                    <motion.div 
                        className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 md:p-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                    >
                        <motion.h2 
                            className="text-3xl font-bold text-white mb-4"
                            variants={fadeInUp}
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.p 
                            className="text-zinc-400 mb-8 max-w-xl mx-auto"
                            variants={fadeInUp}
                        >
                            Whether you're interested in early access, have questions about Ferronyx,
                            or want to discuss robotics observability, we'd love to hear from you.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                            variants={fadeInUp}
                        >
                            <motion.a 
                                href="https://dev.ferronyx.com/register" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-base">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.a>
                            <motion.a 
                                href="mailto:support@ferronyx.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Us
                                </Button>
                            </motion.a>
                        </motion.div>

                        <motion.div 
                            className="flex justify-center gap-4"
                            variants={fadeInUp}
                        >
                            <motion.a
                                href="https://www.linkedin.com/company/ferronyx-robotics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Linkedin className="h-4 w-4" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default AboutPage;
