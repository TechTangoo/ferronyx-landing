import React from 'react'
import { colors } from '../utils/colors'
import AnimatedContent from '../components/AnimatedContent'
import { ChartNoAxesCombined, BellRing, Users, Bot, CircleGauge, Timer, Brain, ScanEye } from 'lucide-react'
import AIDebugMockup from '../components/AIDebugMockup'
import MonitoringMockup from '../components/MonitoringMockup'
import OnCallMockup from '../components/OnCallMockup'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge';

function Features() {
    return (
        <div className='relative w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background}}>
            {/* Enhanced Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.primary}30`}} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.accent}30`}} />
            </div>

            {/* Dot Grid Pattern */}
            <div className="absolute inset-0 opacity-3"
                 style={{
                     backgroundImage: `radial-gradient(circle, ${colors.border} 1px, transparent 1px)`,
                     backgroundSize: '30px 30px'
                 }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Built for Modern Robotics Teams
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Everything you need to observe, debug, and maintain your robot fleet
                    </p>
                </div>

                {/* Feature 1 - AI Debugging (Left aligned, large) */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <Badge variant="outline" className="glass inline-flex items-center gap-2 px-4 py-2 mb-6 border-0" style={{color: colors.primaryLight}}>
                                    <Bot size={18} />
                                    <span className="text-sm font-semibold">AI-Powered</span>
                                </Badge>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    Debug with AI
                                </h3>
                                <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                    Ask <span className="font-semibold text-white">"Why did the camera feed stop?"</span> and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval and editable commands.
                                </p>
                                <ul className="space-y-4" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Natural language queries to diagnose issues</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Automatic log and metric correlation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Human-in-the-loop command execution</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50" style={{backgroundColor: colors.primary}} />
                                <div className="relative">
                                    <AIDebugMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 2 - Real-time Monitoring (Right aligned) */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="lg:order-2">
                                <Badge variant="outline" className="glass inline-flex items-center gap-2 px-4 py-2 mb-6 border-0" style={{color: colors.primaryLight}}>
                                    <CircleGauge size={18} />
                                    <span className="text-sm font-semibold">Real-time</span>
                                </Badge>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    Monitor Every Robot
                                </h3>
                                <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                    Track CPU, memory, disk, network, and ROS topics in real-time. Visualize historic data up to one year with <span className="font-semibold text-white">InfluxDB-powered analytics</span>.
                                </p>
                                <ul className="space-y-4" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Live system metrics and ROS topic monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">One year of high-resolution data retention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Custom dashboards and visualizations</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative lg:order-1 group">
                                <div className="absolute -inset-4 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50" style={{backgroundColor: colors.accentBlue}} />
                                <div className="relative">
                                    <MonitoringMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 3 - On-Call Management (Left aligned) */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <Badge variant="outline" className="glass inline-flex items-center gap-2 px-4 py-2 mb-6 border-0" style={{color: colors.primaryLight}}>
                                    <BellRing size={18} />
                                    <span className="text-sm font-semibold">Incident Management</span>
                                </Badge>
                                <h3 className="text-display font-bold text-white mb-6 leading-tight">
                                    SRE-Grade On-Call
                                </h3>
                                <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                    Customizable escalation policies, incident timelines, and <span className="font-semibold text-white">MTTR/MTTA tracking</span> — designed specifically for robotics engineering teams.
                                </p>
                                <ul className="space-y-4" style={{color: colors.textSecondary}}>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Escalation policies and on-call scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-0.5 flex-shrink-0" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span className="text-lg">Incident postmortems and analytics</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50" style={{backgroundColor: colors.accent}} />
                                <div className="relative">
                                    <OnCallMockup />
                                </div>
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
                        <AnimatedContent key={idx} duration={0.6} delay={idx * 0.1}>
                            <Card className="glass-strong card-hover border-0 h-full">
                                <CardContent className="p-8">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300" style={{backgroundColor: `${colors.secondary}`, boxShadow: `0 8px 16px ${colors.glow}`}}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                                    <p style={{color: colors.textSecondary}} className="text-base leading-relaxed">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
