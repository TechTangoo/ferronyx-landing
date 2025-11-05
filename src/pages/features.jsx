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
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge variant="outline" className="inline-flex items-center gap-2 px-3 py-1 mb-4" style={{backgroundColor: `${colors.primary}15`, borderColor: `${colors.border}`, color: colors.light}}>
                                    <Bot size={16} />
                                    <span className="text-sm font-medium">AI-Powered</span>
                                </Badge>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Debug with AI
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Ask "Why did the camera feed stop?" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval and editable commands.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
                                        <span>Natural language queries to diagnose issues</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
                                        <span>Automatic log and metric correlation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
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

                {/* Feature 2 - Real-time Monitoring (Right aligned) */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="lg:order-2">
                                <Badge variant="outline" className="inline-flex items-center gap-2 px-3 py-1 mb-4" style={{backgroundColor: `${colors.primary}15`, borderColor: `${colors.border}`, color: colors.light}}>
                                    <CircleGauge size={16} />
                                    <span className="text-sm font-medium">Real-time</span>
                                </Badge>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Monitor Every Robot
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Track CPU, memory, disk, network, and ROS topics in real-time. Visualize historic data up to one year with InfluxDB-powered analytics.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
                                        <span>Live system metrics and ROS topic monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
                                        <span>One year of high-resolution data retention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
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

                {/* Feature 3 - On-Call Management (Left aligned) */}
                <AnimatedContent duration={0.5}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge variant="outline" className="inline-flex items-center gap-2 px-3 py-1 mb-4" style={{backgroundColor: `${colors.primary}15`, borderColor: `${colors.border}`, color: colors.light}}>
                                    <BellRing size={16} />
                                    <span className="text-sm font-medium">Incident Management</span>
                                </Badge>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    SRE-Grade On-Call
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Customizable escalation policies, incident timelines, and MTTR/MTTA tracking — designed specifically for robotics engineering teams.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    {/*<li className="flex items-start gap-3">*/}
                                    {/*    <span style={{color: colors.success}}>✓</span>*/}
                                    {/*    <span>Smart alerting with Slack, PagerDuty integration</span>*/}
                                    {/*</li>*/}
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
                                        <span>Escalation policies and on-call scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.success}}>✓</span>
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
                        <AnimatedContent key={idx} duration={0.6} delay={idx * 0.1}>
                            <Card className="border" style={{backgroundColor: `${colors.forebackground}`, borderColor: `${colors.border}`}}>
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: `${colors.secondary}`}}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-white/60 text-sm">{feature.desc}</p>
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
