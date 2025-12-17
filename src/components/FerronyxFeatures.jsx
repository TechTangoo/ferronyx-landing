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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-400 w-fit">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Feature Complete
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Built for Modern <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">Robotics Teams</span>
                </h2>
                <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed font-light">
                    Everything you need to observe, debug, and maintain your robot fleet — from real-time telemetry to AI-assisted diagnostics.
                </p>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                
                {/* Row 1 */}
                {/* Feature 1: AI Debugging (Span 4) */}
                <ScrollReveal delay={0.1} className="lg:col-span-4 h-full">
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="p-8 pb-0">
                            <div className="flex items-center gap-2 text-white mb-4">
                                <Bot className="h-5 w-5 text-blue-500" />
                                <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">AI-Powered</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Debug with AI</h3>
                            <p className="text-zinc-500 max-w-lg mb-8 text-sm leading-relaxed">
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
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors group">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                                <Timer className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">10-Minute Setup</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">Single command installation with automatic ROS discovery.</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="font-mono text-[10px] text-zinc-500 bg-black/50 p-3 rounded border border-white/5 break-all">
                                $ curl -sL ferronyx.sh | bash
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Row 2 */}
                {/* Feature 3: Real-time Monitoring (Span 3) */}
                <ScrollReveal delay={0.3} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-zinc-400 mb-4">
                                <CircleGauge className="h-5 w-5 text-blue-500" />
                                <span className="text-sm font-medium uppercase tracking-wider">Real-time</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Monitor Every Robot</h3>
                            <p className="text-zinc-500 text-sm">
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
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors flex flex-col">
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-zinc-400 mb-4">
                                <BellRing className="h-5 w-5 text-blue-500" />
                                <span className="text-sm font-medium uppercase tracking-wider">Smart Alerts</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">SRE-Grade On-Call</h3>
                            <p className="text-zinc-500 text-sm">
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
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">Automated Runbooks</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Define diagnostic procedures once. Ferronyx executes them automatically when alerts fire.</p>
                    </div>
                </ScrollReveal>

                {/* Feature 6: Maintenance Windows (Span 2) */}
                 <ScrollReveal delay={0.6} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                            <CalendarClock className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">Maintenance Windows</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Schedule downtime to silence alerts. No more 3 AM pages for planned work.</p>
                    </div>
                </ScrollReveal>

                 {/* Feature 7: ROS Aware (Span 2) */}
                <ScrollReveal delay={0.7} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:border-white/10 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors">
                            <Brain className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">ROS-Native</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">Auto-detects topics, nodes, and message types without configuration.</p>
                    </div>
                </ScrollReveal>

                 {/* Row 4 */}
                 {/* Feature 8: Historic Insights (Span 3) */}
                 <ScrollReveal delay={0.8} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:border-white/10 transition-colors group flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white/10 transition-colors">
                            <ChartNoAxesCombined className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Historic Insights</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">Correlate past issues and predict failures with 1-year data retention.</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Call to Action Card (Span 3) */}
                 <ScrollReveal delay={0.9} className="lg:col-span-3 h-full">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="h-full rounded-2xl bg-white text-black p-8 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.01]">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Start for free</h3>
                                <p className="text-black/60 text-sm">Connect your first robot in 5 minutes.</p>
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