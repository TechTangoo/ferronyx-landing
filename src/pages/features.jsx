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
        <div className='relative h-full w-screen overflow-hidden' style={{ backgroundColor: colors.background }}>
            {/* Subtle light glow in the middle */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}, ${colors.accent} 40%, transparent 70%)`,
                    filter: 'blur(60px)'
                }}
            />

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
                <AnimatedContent duration={2} delay={0.5}>
                    {/* Header Section */}
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Everything You Need to Manage Your Robotic Fleet — Remotely.
                            </h2>
                            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                                From live telemetry to AI-powered debugging, get every tool you need to monitor, diagnose, and maintain your robots — all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <AnimatedContent duration={1} >
                        <div className="max-w-7xl mx-auto">

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {featuresData.map((feature, index) => (
                                    <div
                                    key={feature.id} 
                                        className="relative group h-full"
                                        style={{
                                            background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                            borderRadius: '16px',
                                            border: `1px solid ${colors.accent}40`
                                        }}
                                    >
                                        {/* Card glow effect on hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                                            style={{
                                                background: `linear-gradient(145deg, ${colors.primary}, ${colors.accent})`,
                                                filter: 'blur(20px)'
                                            }}
                                        />

                                        {/* Card content */}
                                        <div className="relative p-6 h-full flex flex-col">
                                            {/* Feature number and icon */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl border border-white/20"
                                                    style={{ backgroundColor: `${colors.primary}40` }}
                                                >
                                                    {feature.icon}
                                                </div>
                                            </div>

                                            {/* Title and subtitle */}
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                                    {feature.title}
                                                </h3>
                                                {/* <p 
                                                    className="text-md font-medium mb-3"
                                                    style={{ color: colors.light }}
                                                >
                                                    {feature.subtitle}
                                                </p> */}
                                            </div>

                                            {/* Description */}
                                            <p
                                                className="text-sm leading-relaxed flex-grow"
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {feature.description}
                                            </p>

                                            {/* Hover indicator */}
                                            {/* <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div 
                                                    className="h-1 w-full rounded-full"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`
                                                    }}
                                                />
                                            </div> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Features
