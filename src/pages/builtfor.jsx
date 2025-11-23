import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import Card3D from '../components/Card3D';
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const audienceData = [
    {
        id: 1,
        title: "Robotics Companies",
        icon: robotics,
        desc: "Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments."
    },
    {
        id: 2,
        title: "Research Labs",
        icon: research,
        desc: "Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling."
    },
    {
        id: 3,
        title: "Platform & Autonomy Teams",
        icon: teams,
        desc: "Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights."
    },
    {
        id: 4,
        title: "Robotics SRE & DevOps",
        icon: sreengineer,
        desc: "Implement SRE best practices with on-call workflows, escalation policies, and automated incident management."
    },
    {
        id: 5,
        title: "Academic & R&D Teams",
        icon: academics,
        desc: "Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately."
    }
];

function Builtfor() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    const CardWrapper = ({ children, delay = 0 }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
                {children}
            </motion.div>
        );
    };

    return (
        <div className='relative w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background }}>
            {/* Enhanced Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.primary}30`}} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.accent}30`}} />
            </div>

            {/* Subtle Line Grid */}
            <div className="absolute inset-0 opacity-3">
                <div className="w-full h-full"
                     style={{
                         backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
                         backgroundSize: '50px 50px'
                     }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with animation */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Robotics Teams Worldwide
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        From research labs to production fleets — teams rely on Ferronyx to scale with confidence
                    </p>
                </motion.div>

                {/* Clean Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {audienceData.map((item, idx) => (
                            <CardWrapper key={item.id} delay={idx * 0.1}>
                                <Card3D
                                    className="border h-full transition-all duration-200"
                                    style={{backgroundColor: colors.backgroundCard, borderColor: colors.border}}
                                >
                                    <CardContent className="p-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                                            style={{backgroundColor: colors.backgroundSubtle}}
                                        >
                                            <img src={item.icon} alt={item.title} className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p style={{color: colors.textSecondary}} className="text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card3D>
                            </CardWrapper>
                        ))}

                        {/* CTA Card */}
                        <CardWrapper delay={0.5}>
                            <Card3D
                                className="border h-full transition-all duration-200"
                                style={{backgroundColor: colors.backgroundCard, borderColor: colors.border}}
                            >
                                <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        Ready to Get Started?
                                    </h3>
                                    <p style={{color: colors.textSecondary}} className="mb-5 text-sm">
                                        Join teams shipping robots at scale
                                    </p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full"
                                    >
                                        <Button
                                            onClick={() => {
                                                const footer = document.getElementById('contact-footer');
                                                footer?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="w-full"
                                            style={{
                                                backgroundColor: colors.primary,
                                                color: 'white'
                                            }}
                                        >
                                            Contact Us
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card3D>
                        </CardWrapper>
                </div>
            </div>
        </div>
    )
}

export default Builtfor
