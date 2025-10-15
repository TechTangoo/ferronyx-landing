import React from 'react'
import { colors } from '../utils/colors'
import AnimatedContent from '../components/AnimatedContent'

// Features data structure
const featuresData = [
  {
    id: 1,
    title: "Real-Time Robot Monitoring",
    subtitle: "See what's happening inside every robot.",
    description: "Stream live CPU, memory, and disk metrics directly from each device. Visualize short-term trends or drill down into historical data to catch issues before they escalate.",
    icon: "📊"
  },
  {
    id: 2,
    title: "Smart Alerts & Notifications",
    subtitle: "Know when something's wrong — instantly.",
    description: "Define metric thresholds, get real-time alerts, and prioritize responses by severity. Integrated with Slack, email, and webhooks so your team never misses a critical update.",
    icon: "🔔"
  },
  {
    id: 3,
    title: "Robot Assignment & Ownership",
    subtitle: "Accountability built into every alert.",
    description: "Assign robots to specific engineers or teams. Ownership data travels with alerts, ensuring fast, clear response paths and no duplicate work.",
    icon: "👥"
  },
  {
    id: 4,
    title: "AI-Powered ROS 2 Troubleshooting",
    subtitle: "Debug ROS 2 issues — without touching SSH.",
    description: "Chat with an AI assistant that understands ROS 2 logs, topics, and nodes. It analyzes context and suggests root causes and fixes — saving hours of manual debugging.",
    icon: "🤖"
  },
  {
    id: 5,
    title: "Fleet Health Dashboard",
    subtitle: "Your mission control for operational insight.",
    description: "View the live status of all robots in one unified dashboard. See which are healthy, degraded, or offline — with quick access to recent alerts and performance summaries.",
    icon: "🎛️"
  }
];

function Features() {
    return (
        <div className='relative min-h-screen w-screen overflow-hidden' style={{ backgroundColor: colors.background }}>
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
                                Everything You Need to Manage Your ROS 2 Fleet — Remotely.
                            </h2>
                            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                                From live telemetry to AI-powered debugging, get every tool you need to monitor, diagnose, and maintain your robots — all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featuresData.map((feature, index) => (
                                <AnimatedContent key={feature.id} duration={1} delay={0.5 + (index * 0.1)}>
                                    <div 
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
                                        <div className="relative p-8 h-full flex flex-col">
                                            {/* Feature number and icon */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div 
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl"
                                                    style={{ backgroundColor: `${colors.primary}40` }}
                                                >
                                                    {feature.icon}
                                                </div>
                                                <span 
                                                    className="text-sm font-mono px-3 py-1 rounded-full"
                                                    style={{ 
                                                        backgroundColor: `${colors.accent}60`,
                                                        color: colors.text
                                                    }}
                                                >
                                                    Feature {feature.id}
                                                </span>
                                            </div>

                                            {/* Title and subtitle */}
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                                    {feature.title}
                                                </h3>
                                                <p 
                                                    className="text-sm font-medium mb-3"
                                                    style={{ color: colors.light }}
                                                >
                                                    {feature.subtitle}
                                                </p>
                                            </div>

                                            {/* Hover indicator */}
                                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div 
                                                    className="h-1 w-full rounded-full"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Features
