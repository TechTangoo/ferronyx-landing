import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { colors } from '../utils/colors'
import AnimatedContent from '../components/AnimatedContent'
import NetworkBackground from '../components/NetworkBackground'
import Card3D from '../components/Card3D'
import { ChartNoAxesCombined, BellRing, Users, Bot, CircleGauge, Timer, Brain, ScanEye } from 'lucide-react'
import AIDebugMockup from '../components/AIDebugMockup'
import MonitoringMockup from '../components/MonitoringMockup'
import OnCallMockup from '../components/OnCallMockup'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge';

function Features() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    const FeatureCard = ({ children, delay = 0 }) => {
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
        <div className='relative w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background}}>
            {/* Static network background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <NetworkBackground animate={false} density="light" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with scroll animation */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Built for Modern Robotics Teams
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Everything you need to observe, debug, and maintain your robot fleet
                    </p>
                </motion.div>

                {/* Feature 1 - AI Debugging */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-xs font-medium mb-6 uppercase tracking-wider" style={{color: colors.textMuted}}>
                                    AI-Powered Debugging
                                </div>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    Debug with AI
                                </h3>
                                <p className="text-lg mb-8 leading-relaxed" style={{color: colors.textSecondary}}>
                                    Ask "Why did the camera feed stop?" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval and editable commands.
                                </p>
                                <ul className="space-y-3 text-sm" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Natural language queries to diagnose issues</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Automatic log and metric correlation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Human-in-the-loop command execution</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <AIDebugMockup />
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 2 - Real-time Monitoring */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="lg:order-2">
                                <div className="text-xs font-medium mb-6 uppercase tracking-wider" style={{color: colors.textMuted}}>
                                    Real-time Monitoring
                                </div>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    Monitor Every Robot
                                </h3>
                                <p className="text-lg mb-8 leading-relaxed" style={{color: colors.textSecondary}}>
                                    Track CPU, memory, disk, network, and ROS topics in real-time. Visualize historic data up to one year with InfluxDB-powered analytics.
                                </p>
                                <ul className="space-y-3 text-sm" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Live system metrics and ROS topic monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>One year of high-resolution data retention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Custom dashboards and visualizations</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative lg:order-1">
                                <MonitoringMockup />
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 3 - On-Call Management */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="text-xs font-medium mb-6 uppercase tracking-wider" style={{color: colors.textMuted}}>
                                    Incident Management
                                </div>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    SRE-Grade On-Call
                                </h3>
                                <p className="text-lg mb-8 leading-relaxed" style={{color: colors.textSecondary}}>
                                    Customizable escalation policies, incident timelines, and MTTR/MTTA tracking — designed specifically for robotics engineering teams.
                                </p>
                                <ul className="space-y-3 text-sm" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Escalation policies and on-call scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: colors.success}} />
                                        <span>Incident postmortems and analytics</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <OnCallMockup />
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Additional Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {[
                        {
                            icon: <Timer strokeWidth={0.8} size={24} color={colors.light} />,
                            title: "10-Minute Setup",
                            desc: "Single command installation with automatic ROS discovery"
                        },
                        {
                            icon: <Brain strokeWidth={0.8} size={24} color={colors.light} />,
                            title: "ROS-Aware Intelligence",
                            desc: "Auto-detects topics, nodes, and message types"
                        },
                        {
                            icon: <ChartNoAxesCombined strokeWidth={0.8} size={24} color={colors.light} />,
                            title: "Historic Insights",
                            desc: "Correlate past issues and predict failures"
                        }
                    ].map((feature, idx) => (
                        <FeatureCard key={idx} delay={idx * 0.1}>
                            <Card3D
                                className="border h-full transition-all duration-200"
                                style={{backgroundColor: colors.backgroundCard, borderColor: colors.border}}
                            >
                                <CardContent className="p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                                        style={{backgroundColor: colors.backgroundSubtle}}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                    <p style={{color: colors.textSecondary}} className="text-sm leading-relaxed">{feature.desc}</p>
                                </CardContent>
                            </Card3D>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
