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

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
                <AnimatedContent duration={1.5} delay={0.3}>
                    {/* Header Section */}
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <div className="max-w-5xl mx-auto">
                            <div
                                className="inline-block px-5 py-2 rounded-full mb-6 border"
                                style={{
                                    backgroundColor: `${colors.primary}20`,
                                    borderColor: `${colors.primary}60`
                                }}
                            >
                                <p className="text-sm sm:text-base font-medium" style={{color: colors.light}}>
                                    Platform Features
                                </p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Everything You Need to Scale
                                <br />
                                <span style={{color: colors.primary}}>Your Robotic Fleet</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                                From live telemetry to AI-powered debugging — get the complete observability stack built specifically for robotics engineers.
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
                                        className="relative group h-full rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                            borderColor: `${colors.accent}40`
                                        }}
                                    >
                                        {/* Card glow effect on hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"
                                            style={{
                                                background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
                                                filter: 'blur(30px)'
                                            }}
                                        />

                                        {/* Card content */}
                                        <div className="relative p-8 h-full flex flex-col">
                                            {/* Feature icon */}
                                            <div className="mb-6">
                                                <div
                                                    className="flex items-center justify-center w-14 h-14 rounded-xl border group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        backgroundColor: `${colors.primary}50`,
                                                        borderColor: `${colors.primary}60`
                                                    }}
                                                >
                                                    {feature.icon}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                                                {feature.title}
                                            </h3>

                                            {/* Subtitle */}
                                            <p
                                                className="text-base font-medium mb-4"
                                                style={{ color: colors.light }}
                                            >
                                                {feature.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p
                                                className="text-sm sm:text-base leading-relaxed flex-grow"
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {feature.description}
                                            </p>

                                            {/* Hover indicator */}
                                            <div className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                                style={{
                                                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`
                                                }}
                                            />
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
