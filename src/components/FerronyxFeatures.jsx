import React from 'react';
import { ArrowUpRight, Bot, CircleGauge, BellRing, Timer, Brain, ChartNoAxesCombined, BookOpen, CalendarClock } from "lucide-react";
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";
import AIDebugMockup from './AIDebugMockup';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';

const FerronyxFeatures = () => {
    return (
        <section id="features" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-24 border-t border-white/5">
            {/* Header */}
            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Feature Complete
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Built for Modern <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Robotics Teams</span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Everything you need to observe, debug, and maintain your robot fleet — from real-time telemetry to AI-assisted diagnostics.
                </p>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                
                {/* Row 1 */}
                {/* Feature 1: AI Debugging (Span 4) */}
                <ScrollReveal delay={0.1} className="lg:col-span-4 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="p-8 pb-0">
                            <div className="flex items-center gap-2 text-blue-400 mb-4">
                                <Bot className="h-5 w-5" />
                                <span className="text-sm font-semibold uppercase tracking-wider">AI-Powered</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Debug with AI</h3>
                            <p className="text-zinc-400 max-w-lg mb-8">
                                Ask "Why did the camera feed stop?" and Ferronyx analyzes logs, metrics, and ROS topics to suggest fixes.
                            </p>
                        </div>
                        <div className="relative w-full h-auto min-h-[300px] border-t border-white/5 bg-black/20">
                            <div className="absolute inset-0 p-4">
                                <AIDebugMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 2: 10-Min Setup (Span 2) */}
                <ScrollReveal delay={0.2} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                <Timer className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">10-Minute Setup</h3>
                            <p className="text-zinc-400">Single command installation with automatic ROS discovery.</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="font-mono text-xs text-zinc-500 bg-black/50 p-3 rounded-lg border border-white/5">
                                $ curl -sL ferronyx.sh | bash
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Row 2 */}
                {/* Feature 3: Real-time Monitoring (Span 3) */}
                <ScrollReveal delay={0.3} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-purple-400 mb-4">
                                <CircleGauge className="h-5 w-5" />
                                <span className="text-sm font-semibold uppercase tracking-wider">Real-time</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Monitor Every Robot</h3>
                            <p className="text-zinc-400">
                                Track CPU, memory, disk, network, and ROS topics in real-time.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full border-t border-white/5 bg-black/20 min-h-[200px]">
                             <div className="absolute inset-0 p-4">
                                <MonitoringMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 4: On-Call (Span 3) */}
                <ScrollReveal delay={0.4} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-orange-400 mb-4">
                                <BellRing className="h-5 w-5" />
                                <span className="text-sm font-semibold uppercase tracking-wider">Smart Alerts</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">SRE-Grade On-Call</h3>
                            <p className="text-zinc-400">
                                Customizable thresholds, escalation policies, and incident timelines.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full border-t border-white/5 bg-black/20 min-h-[200px]">
                             <div className="absolute inset-0 p-4">
                                <OnCallMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                 {/* Row 3 */}
                 {/* Feature 5: Automated Runbooks (Span 2) */}
                 <ScrollReveal delay={0.5} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Automated Runbooks</h3>
                        <p className="text-zinc-400 text-sm">Define diagnostic procedures once. Ferronyx executes them automatically when alerts fire.</p>
                    </div>
                </ScrollReveal>

                {/* Feature 6: Maintenance Windows (Span 2) */}
                 <ScrollReveal delay={0.6} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 transition-transform">
                            <CalendarClock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Maintenance Windows</h3>
                        <p className="text-zinc-400 text-sm">Schedule downtime to silence alerts. No more 3 AM pages for planned work.</p>
                    </div>
                </ScrollReveal>

                 {/* Feature 7: ROS Aware (Span 2) */}
                <ScrollReveal delay={0.7} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                            <Brain className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">ROS-Native</h3>
                        <p className="text-zinc-400 text-sm">Auto-detects topics, nodes, and message types without configuration.</p>
                    </div>
                </ScrollReveal>

                 {/* Row 4 */}
                 {/* Feature 8: Historic Insights (Span 3) */}
                 <ScrollReveal delay={0.8} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-3xl bg-zinc-900/40 border border-white/5 p-8 hover:border-white/10 transition-colors group flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-400 group-hover:scale-110 transition-transform">
                            <ChartNoAxesCombined className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Historic Insights</h3>
                            <p className="text-zinc-400 text-sm">Correlate past issues and predict failures with 1-year data retention.</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Call to Action Card (Span 3) */}
                 <ScrollReveal delay={0.9} className="lg:col-span-3 h-full">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="h-full rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-between text-white group cursor-pointer transition-transform hover:scale-[1.02]">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Start for free</h3>
                                <p className="text-blue-100/80 text-sm">Connect your first robot in 5 minutes.</p>
                            </div>
                            <div className="flex items-center gap-2 mt-6 font-semibold group-hover:gap-3 transition-all">
                                Get Started <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </a>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default FerronyxFeatures;
