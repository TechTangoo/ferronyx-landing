import React from 'react'
import { colors } from '../utils/colors'
import AnimatedContent from '../components/AnimatedContent'
import { ChartNoAxesCombined, BellRing, Users, Bot, CircleGauge, Timer, Brain, ScanEye } from 'lucide-react';


// Features data structure
const featuresData = [
    {
        id: 1,
        title: "AI-Assisted Debugging",
        subtitle: "Chat with your robot.",
        description: "Ask \"Why did camera feed stop?\" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval, clear explanations, and editable commands.",
        emoji: "🧠",
        icon: <Bot strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 2,
        title: "Machine Metrics Monitoring",
        subtitle: "See what your robot feels.",
        description: "Track CPU, memory, disk, and network usage in real-time. Visualize historic data up to one year with InfluxDB-powered analytics.",
        emoji: "📊",
        icon: <ScanEye strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 3,
        title: "10-Minute Setup",
        subtitle: "Install. Connect. Relax.",
        description: "Drop in a single command, and Ferronyx auto-discovers ROS topics, configures telemetry, and starts streaming data securely to the cloud.",
        emoji: "🚀",
        icon: <Timer strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 4,
        title: "ROS-Aware Intelligence",
        subtitle: "Understands your robot's language.",
        description: "Automatically detects ROS topics, nodes, and message types — builds alerts and correlation graphs without any manual configuration.",
        emoji: "🧩",
        icon: <Brain strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 5,
        title: "Alerting & Incident Automation",
        subtitle: "Never miss a signal.",
        description: "Set alerts on any metric or ROS event. Integrate with your on-call system — Slack, PagerDuty, or Ferronyx On-Call — for instant notifications and context.",
        emoji: "🕑",
        icon: <BellRing strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 6,
        title: "Ferronyx On-Call",
        subtitle: "SRE-grade reliability for robotics.",
        description: "Customizable escalation policies, incident timelines, and MTTR/MTTA tracking — designed for robotics engineering teams.",
        emoji: "👩‍💻",
        icon: <Users strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 7,
        title: "Historic Insights & Trends",
        subtitle: "Learn from every incident.",
        description: "Ferronyx stores one year of high-resolution data, so you can correlate past issues, detect degradation, and predict failures before they happen.",
        emoji: "🧾",
        icon: <ChartNoAxesCombined strokeWidth={0.8} size={28} color={colors.light} />
    },
    {
        id: 8,
        title: "Unified Fleet View",
        subtitle: "One dashboard, every robot.",
        description: "Monitor all robots — ROS or not — from a single control plane. Filter by health, uptime, alerts, or AI diagnostics, and act instantly.",
        emoji: "🌍",
        icon: <CircleGauge strokeWidth={0.8} size={28} color={colors.light} />
    }
];

function Features() {
    return (
        <div className='relative w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <AnimatedContent duration={0.8}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{backgroundColor: `${colors.primary}20`, borderColor: `${colors.primary}60`, border: '1px solid'}}>
                                    <Bot size={16} color={colors.light} />
                                    <span className="text-sm font-medium" style={{color: colors.light}}>AI-Powered</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Debug with AI
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Ask "Why did the camera feed stop?" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval and editable commands.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Natural language queries to diagnose issues</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Automatic log and metric correlation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Human-in-the-loop command execution</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="aspect-video rounded-lg border" style={{backgroundColor: `${colors.forebackground}`, borderColor: `${colors.primary}30`}}>
                                    <div className="p-6 h-full flex items-center justify-center text-white/40">
                                        AI Debug Interface Mockup
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 2 - Real-time Monitoring (Right aligned) */}
                <AnimatedContent duration={0.8}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{backgroundColor: `${colors.primary}20`, borderColor: `${colors.primary}60`, border: '1px solid'}}>
                                    <CircleGauge size={16} color={colors.light} />
                                    <span className="text-sm font-medium" style={{color: colors.light}}>Real-time</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Monitor Every Robot
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Track CPU, memory, disk, network, and ROS topics in real-time. Visualize historic data up to one year with InfluxDB-powered analytics.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Live system metrics and ROS topic monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>One year of high-resolution data retention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Custom dashboards and visualizations</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative lg:order-1">
                                <div className="aspect-video rounded-lg border" style={{backgroundColor: `${colors.forebackground}`, borderColor: `${colors.primary}30`}}>
                                    <div className="p-6 h-full flex items-center justify-center text-white/40">
                                        Monitoring Dashboard Mockup
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 3 - On-Call Management (Left aligned) */}
                <AnimatedContent duration={0.8}>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{backgroundColor: `${colors.primary}20`, borderColor: `${colors.primary}60`, border: '1px solid'}}>
                                    <BellRing size={16} color={colors.light} />
                                    <span className="text-sm font-medium" style={{color: colors.light}}>Incident Management</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    SRE-Grade On-Call
                                </h3>
                                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                    Customizable escalation policies, incident timelines, and MTTR/MTTA tracking — designed specifically for robotics engineering teams.
                                </p>
                                <ul className="space-y-3 text-white/60">
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Smart alerting with Slack, PagerDuty integration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Escalation policies and on-call scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{color: colors.primary}}>✓</span>
                                        <span>Incident postmortems and analytics</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="aspect-video rounded-lg border" style={{backgroundColor: `${colors.forebackground}`, borderColor: `${colors.primary}30`}}>
                                    <div className="p-6 h-full flex items-center justify-center text-white/40">
                                        On-Call Dashboard Mockup
                                    </div>
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
                            <div className="p-6 rounded-xl border" style={{backgroundColor: `${colors.forebackground}`, borderColor: `${colors.primary}30`}}>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: `${colors.primary}30`}}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-white/60 text-sm">{feature.desc}</p>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
