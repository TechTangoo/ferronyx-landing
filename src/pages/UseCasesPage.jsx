import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import SROnlyKeywords from '../components/seo/SROnlyKeywords';
import { Button } from '../components/ui/button';
import {
    Warehouse,
    Bot,
    Truck,
    Factory,
    Clock,
    AlertTriangle,
    Cpu,
    Navigation,
    Activity,
    Shield,
    Zap,
    ArrowRight
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

const useCases = [
    {
        id: "reduce-mttr",
        icon: Clock,
        title: "Reduce Robot MTTR",
        subtitle: "From hours to minutes",
        problem: "Robotics teams spend 3-4 hours debugging each incident, manually correlating logs, metrics, and sensor data across multiple systems.",
        solution: "Ferronyx automatically correlates all telemetry data and uses AI to identify root causes instantly. Teams see exactly what changed before a failure occurred.",
        outcome: "Reduce mean time to resolution from 4 hours to under 15 minutes",
        keywords: ["robot MTTR reduction", "robot debugging time", "incident resolution"]
    },
    {
        id: "sensor-drift",
        icon: Activity,
        title: "Detect Sensor Drift Early",
        subtitle: "Before it causes failures",
        problem: "Sensor calibration degrades over time, leading to navigation errors, collision risks, and mission failures that are hard to diagnose.",
        solution: "Continuous monitoring of sensor health metrics with anomaly detection that catches drift patterns before they impact operations.",
        outcome: "Catch sensor issues days before they cause operational failures",
        keywords: ["sensor drift detection", "robot sensor monitoring", "predictive maintenance"]
    },
    {
        id: "navigation-failures",
        icon: Navigation,
        title: "Debug Navigation Failures",
        subtitle: "ROS2 Nav2 stack visibility",
        problem: "Robots fail in specific locations or conditions. Diagnosing Nav2 issues requires correlating costmaps, localization, and planner data manually.",
        solution: "Full visibility into the Nav2 stack with timeline replay. See exactly what the robot saw, planned, and executed at the moment of failure.",
        outcome: "Identify navigation failure root causes in minutes, not days",
        keywords: ["ROS2 navigation debugging", "Nav2 troubleshooting", "robot path planning issues"]
    },
    {
        id: "deployment-correlation",
        icon: Zap,
        title: "Correlate Deployments with Incidents",
        subtitle: "Track what changed",
        problem: "After a software update, robots start failing. Which change caused it? Rollback everything or spend hours hunting?",
        solution: "Automatic deployment markers in your timeline. Instantly see which code changes, config updates, or firmware versions correlate with new failures.",
        outcome: "Identify bad deployments within minutes of rollout",
        keywords: ["deployment tracking", "robot software updates", "change correlation"]
    },
    {
        id: "fleet-visibility",
        icon: Shield,
        title: "Fleet-Wide Visibility",
        subtitle: "One dashboard for all robots",
        problem: "Managing 10, 50, or 500 robots means context-switching between individual robot logs and losing the fleet-wide picture.",
        solution: "Unified fleet dashboard showing health, alerts, and anomalies across your entire robot population with drill-down to individual units.",
        outcome: "Single pane of glass for fleet operations",
        keywords: ["robot fleet management", "fleet monitoring dashboard", "multi-robot visibility"]
    },
    {
        id: "resource-throttling",
        icon: Cpu,
        title: "Catch Resource Throttling",
        subtitle: "CPU, memory, disk issues",
        problem: "Robots slow down or crash due to resource constraints. By the time you SSH in, the issue has passed and logs are gone.",
        solution: "Continuous resource monitoring with automatic capture when thresholds are exceeded. See the full context of what was running when resources spiked.",
        outcome: "Never lose critical debugging context to resource issues",
        keywords: ["robot CPU monitoring", "resource throttling", "robot performance issues"]
    }
];

const industries = [
    {
        icon: Warehouse,
        title: "Warehouse AMRs",
        description: "Autonomous mobile robots for picking, packing, and logistics. Monitor navigation, obstacle avoidance, and mission completion across your fleet.",
        examples: ["Pick-and-place robots", "Goods-to-person systems", "Sortation robots"]
    },
    {
        icon: Bot,
        title: "Humanoids & Manipulation",
        description: "Complex robotic systems with multiple sensors and actuators. Track arm movements, grip success rates, and manipulation task completion.",
        examples: ["Collaborative robots", "Assembly arms", "Service robots"]
    },
    {
        icon: Truck,
        title: "Delivery Robots",
        description: "Last-mile delivery robots operating in dynamic outdoor environments. Monitor localization accuracy, delivery success, and route optimization.",
        examples: ["Sidewalk delivery bots", "Campus delivery", "Food delivery robots"]
    },
    {
        icon: Factory,
        title: "Industrial Automation",
        description: "Production line robots and AGVs. Track cycle times, failure rates, and coordinate multi-robot workflows.",
        examples: ["AGVs", "Palletizers", "Inspection robots"]
    }
];

const UseCasesPage = () => {
    const useCasesSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/use-cases/#webpage",
                "url": "https://ferronyx.com/use-cases",
                "name": "Use Cases - Ferronyx Robot Observability Platform",
                "description": "Discover how Ferronyx helps robotics teams reduce MTTR, detect sensor drift, debug navigation failures, and manage robot fleets at scale.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                },
                "about": {
                    "@id": "https://ferronyx.com/#software"
                }
            },
            {
                "@type": "ItemList",
                "name": "Ferronyx Use Cases",
                "description": "Common problems Ferronyx solves for robotics teams",
                "itemListElement": useCases.map((useCase, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": useCase.title,
                    "description": useCase.solution
                }))
            },
            ...useCases.map(useCase => ({
                "@type": "HowTo",
                "name": `How to ${useCase.title}`,
                "description": useCase.problem,
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Identify the Problem",
                        "text": useCase.problem
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Apply Ferronyx Solution",
                        "text": useCase.solution
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Achieve Outcome",
                        "text": useCase.outcome
                    }
                ],
                "tool": {
                    "@type": "SoftwareApplication",
                    "name": "Ferronyx"
                }
            }))
        ]
    };

    return (
        <>
            <SEO
                title="Use Cases - Robot Fleet Monitoring & ROS2 Debugging | Ferronyx"
                description="Reduce robot MTTR from hours to minutes. Debug ROS2 navigation failures, detect sensor drift, and manage your robot fleet with AI-powered observability."
                keywords="robot MTTR reduction, ROS2 debugging, sensor drift detection, robot fleet management, navigation failure debugging, deployment correlation, robot observability use cases"
                canonicalUrl="https://ferronyx.com/use-cases"
                schema={useCasesSchema}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://ferronyx.com' },
                { name: 'Use Cases' }
            ]} />

            {/* Hidden semantic content for AI agents and screen readers */}
            <SROnlyKeywords>
                Warehouse robot monitoring. Delivery robot fleet management.
                Industrial robot observability. AGV monitoring platform.
                Humanoid robot debugging. Manipulation robot observability.
                How to reduce robot MTTR. How to debug ROS2 navigation failures.
                Robot sensor drift detection software. Fleet-wide robot visibility.
                AMR observability platform. Autonomous mobile robot monitoring.
                Robot operations management. Robotics SRE tools.
                ROS2 robot fleet diagnostics. Robot failure analysis.
            </SROnlyKeywords>

            <main className="min-h-screen bg-black pt-24">
                {/* Hero Section */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span 
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm"
                        >
                            Use Cases
                        </motion.span>
                        <motion.h1 
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        >
                            Solve Real{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                                Robot Problems
                            </span>
                        </motion.h1>
                        <motion.p 
                            variants={fadeInUp}
                            className="text-xl text-zinc-400 leading-relaxed"
                        >
                            From debugging navigation failures to reducing fleet-wide MTTR,
                            see how Ferronyx helps robotics teams ship reliable robots faster.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Use Cases Grid */}
                <section className="px-6 py-16 max-w-7xl mx-auto">
                    <motion.h2 
                        className="text-2xl font-semibold text-white mb-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        Common Challenges We Solve
                    </motion.h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <motion.article
                                    key={useCase.id}
                                    id={useCase.id}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.15] transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors">
                                            <Icon className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white">
                                                {useCase.title}
                                            </h3>
                                            <span className="text-xs text-zinc-500">
                                                {useCase.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <p className=" text-white leading-relaxed mb-4">
                                        {useCase.problem}
                                    </p>
                                    
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                                        {useCase.solution}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-white/[0.05]">
                                        <p className="text-sm text-blue-400">{useCase.outcome}</p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </section>

                {/* Industries Section */}
                <section className="px-6 py-20 bg-[#0A0A0B]/50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Built for Every Robot Type
                            </h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                Whether you're running warehouse AMRs, delivery bots, or industrial automation,
                                Ferronyx adapts to your fleet.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {industries.map((industry) => {
                                const Icon = industry.icon;
                                return (
                                    <motion.div
                                        key={industry.title}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                        className="bg-black border border-white/[0.08] rounded-xl p-6 hover:border-white/[0.15] transition-all"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4"
                                        >
                                            <Icon className="h-6 w-6 text-blue-400" />
                                        </motion.div>
                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {industry.title}
                                        </h3>
                                        <p className="text-sm text-zinc-400 mb-4">
                                            {industry.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {industry.examples.map((example) => (
                                                <span
                                                    key={example}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/[0.05] text-zinc-500"
                                                >
                                                    {example}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section 
                    className="px-6 py-20 max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scaleIn}
                >
                    <motion.h2 
                        className="text-3xl font-bold text-white mb-4"
                        variants={fadeInUp}
                    >
                        Ready to Debug Faster?
                    </motion.h2>
                    <motion.p 
                        className="text-zinc-400 mb-8 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Join robotics teams who have reduced their debugging time from hours to minutes.
                        See Ferronyx in action with your own robot data.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
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
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link to="/#contact-footer">
                                <Button variant="outline" className="border-white/[0.15] text-white hover:bg-white/[0.05] font-medium px-8 py-6 text-base">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </main>
        </>
    );
};

export default UseCasesPage;
