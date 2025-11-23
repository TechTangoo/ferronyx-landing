import React from 'react'
import AnimatedContent from '../components/AnimatedContent'
import { ChartNoAxesCombined, BellRing, Bot, CircleGauge, Timer, Brain } from 'lucide-react'
import AIDebugMockup from '../components/AIDebugMockup'
import MonitoringMockup from '../components/MonitoringMockup'
import OnCallMockup from '../components/OnCallMockup'

function Features() {
    return (
        <section id="features" className='relative w-full min-h-screen bg-background py-24 lg:py-32'>
            {/* Professional Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0"
                     style={{
                         backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)',
                         backgroundSize: '50px 50px'
                     }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20 lg:mb-32">
                    <AnimatedContent duration={0.8}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Feature Rich Platform
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Built for Modern{' '}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Robotics Teams
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Everything you need to observe, debug, and maintain your robot fleet with enterprise-grade reliability
                        </p>
                    </AnimatedContent>
                </div>

                {/* Feature 1 - AI Debugging */}
                <AnimatedContent duration={0.8}>
                    <div className="mb-32 lg:mb-40">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                                    <Bot className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium text-primary">AI-Powered Debugging</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                        Debug with AI
                                    </h3>
                                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                                        Ask "Why did the camera feed stop?" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes — with human approval and editable commands.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        'Natural language queries to diagnose issues',
                                        'Automatic log and metric correlation', 
                                        'Human-in-the-loop command execution'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            </div>
                                            <span className="text-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
                                <div className="relative bg-card/50 backdrop-blur-sm rounded-xl border border-border p-2">
                                    <AIDebugMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 2 - Real-time Monitoring */}
                <AnimatedContent duration={0.8}>
                    <div className="mb-32 lg:mb-40">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="lg:order-2 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                                    <CircleGauge className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium text-primary">Real-time Monitoring</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                        Monitor Every Robot
                                    </h3>
                                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                                        Track CPU, memory, disk, network, and ROS topics in real-time. Visualize historic data up to one year with InfluxDB-powered analytics.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        'Live system metrics and ROS topic monitoring',
                                        'One year of high-resolution data retention',
                                        'Custom dashboards and visualizations'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            </div>
                                            <span className="text-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative lg:order-1">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-60" />
                                <div className="relative bg-card/50 backdrop-blur-sm rounded-xl border border-border p-2">
                                    <MonitoringMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Feature 3 - On-Call Management */}
                <AnimatedContent duration={0.8}>
                    <div className="mb-32 lg:mb-40">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                                    <BellRing className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium text-primary">Incident Management</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                        SRE-Grade On-Call
                                    </h3>
                                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                                        Customizable escalation policies, incident timelines, and MTTR/MTTA tracking — designed specifically for robotics engineering teams.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        'Escalation policies and on-call scheduling',
                                        'Incident postmortems and analytics'
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            </div>
                                            <span className="text-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
                                <div className="relative bg-card/50 backdrop-blur-sm rounded-xl border border-border p-2">
                                    <OnCallMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Additional Features Grid */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Everything You Need
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Built from the ground up for robotics workloads
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Timer className="w-6 h-6" />,
                                title: "10-Minute Setup",
                                desc: "Single command installation with automatic ROS discovery"
                            },
                            {
                                icon: <Brain className="w-6 h-6" />,
                                title: "ROS-Aware Intelligence",
                                desc: "Auto-detects topics, nodes, and message types"
                            },
                            {
                                icon: <ChartNoAxesCombined className="w-6 h-6" />,
                                title: "Historic Insights",
                                desc: "Correlate past issues and predict failures"
                            }
                        ].map((feature, idx) => (
                            <AnimatedContent key={idx} duration={0.6} delay={idx * 0.1}>
                                <div className="group relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-colors duration-300">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                                            <div className="text-primary">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
                 
export default Features
