import React from 'react';
import { ArrowUpRight, Bot, CircleGauge, BellRing, Timer, Brain, ChartNoAxesCombined, BookOpen, CalendarClock, Network } from "lucide-react";
import ScrollReveal from './ScrollReveal';
import AIDebugMockup from './AIDebugMockup';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';
import ROS2GraphExplorer from './ROS2GraphExplorer';
import LinuxInfraMonitor from './LinuxInfraMonitor';
import BehavioralAIPreview from './BehavioralAIPreview';

const FerronyxFeatures = () => {
    return (
        <section id="features" className="relative w-full flex flex-col items-center justify-center bg-[#050505] px-4 py-32 border-t border-white/[0.05]">
            {/* Header */}
            <ScrollReveal className="max-w-3xl w-full text-center flex flex-col items-center gap-6 mb-24">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    Engineer-Grade Observability Stack
                </h2>
                <p className="text-lg text-[#8A8F98] max-w-xl leading-relaxed">
                    From Linux infra to ROS2 topics. Full-stack visibility with zero config.
                </p>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

                {/* NEW Feature: ROS2 Auto-Discovery (Span 6 - Full Width) - Dashboard Style */}
                <ScrollReveal delay={0.05} className="lg:col-span-6 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden group hover:border-indigo-500/30 transition-colors relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Dashboard-style header bar */}
                        <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                </div>
                                <Network className="h-3.5 w-3.5 text-indigo-400" />
                                <span className="text-xs font-medium text-white">ROS2 Computation Graph</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-indigo-400/80 uppercase tracking-widest">Zero Config</span>
                            </div>
                        </div>

                        <div className="relative w-full h-auto min-h-[280px] bg-[#050505]/50">
                            <div className="absolute inset-0 p-4">
                                <ROS2GraphExplorer />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 1: AI Debugging (Span 4) - Dashboard Window Style */}
                <ScrollReveal delay={0.1} className="lg:col-span-4 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden group hover:border-purple-500/30 transition-colors relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Dashboard-style header */}
                        <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                </div>
                                <Bot className="h-3.5 w-3.5 text-purple-400" />
                                <span className="text-xs font-medium text-white">AI Debug Assistant</span>
                            </div>
                            <span className="text-xs font-medium text-purple-400/80 uppercase tracking-widest">AI-Powered</span>
                        </div>

                        <div className="relative w-full h-auto min-h-[320px] bg-[#050505]/50">
                            <div className="absolute inset-0 p-4">
                                <AIDebugMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 2: 10-Min Setup (Span 2) - Emerald Accent */}
                <ScrollReveal delay={0.2} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors group relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div>
                            <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                                <Timer className="h-4 w-4" />
                            </div>
                            <h3 className="text-lg font-medium text-[#EDEDED] mb-2">10-Minute Setup</h3>
                            <p className="text-[#8A8F98] text-sm leading-relaxed">Single command installation with automatic ROS discovery.</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/[0.08]">
                            <div className="font-mono text-[10px] text-zinc-500 bg-[#050505] p-3 rounded border border-white/[0.08] select-all group-hover:border-emerald-500/20 transition-colors">
                                $ curl -sL ferronyx.sh | bash
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Row 2 */}
                {/* NEW Feature: Linux Infra Monitor (Span 3) - Terminal Window Style */}
                <ScrollReveal delay={0.25} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden group hover:border-emerald-500/30 transition-colors flex flex-col relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Terminal header - no content, just embedded LinuxInfraMonitor which has its own header */}
                        <div className="flex-1 relative w-full bg-[#050505]/50">
                            <LinuxInfraMonitor />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 3: Real-time Monitoring (Span 3) - Dashboard Window */}
                <ScrollReveal delay={0.3} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden group hover:border-blue-500/30 transition-colors flex flex-col relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Dashboard header */}
                        <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                </div>
                                <CircleGauge className="h-3.5 w-3.5 text-blue-400" />
                                <span className="text-xs font-medium text-white">Fleet Monitoring</span>
                            </div>
                            <span className="text-xs font-medium text-blue-400/80 uppercase tracking-widest">Real-time</span>
                        </div>

                        <div className="flex-1 relative w-full bg-[#050505]/50 min-h-[220px]">
                             <div className="absolute inset-0 p-4">
                                <MonitoringMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Feature 4: On-Call (Span 3) - Dashboard Window */}
                <ScrollReveal delay={0.4} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden group hover:border-amber-500/30 transition-colors flex flex-col relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Dashboard header */}
                        <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                                </div>
                                <BellRing className="h-3.5 w-3.5 text-amber-400" />
                                <span className="text-xs font-medium text-white">Incident Manager</span>
                            </div>
                            <span className="text-xs font-medium text-amber-400/80 uppercase tracking-widest">SRE-Grade</span>
                        </div>

                        <div className="flex-1 relative w-full bg-[#050505]/50 min-h-[220px]">
                             <div className="absolute inset-0 p-4">
                                <OnCallMockup />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                 {/* Row 3 - Small Cards */}
                 {/* NEW Feature: Behavioral AI Preview (Span 2) - Purple Accent */}
                 <ScrollReveal delay={0.5} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-6 hover:border-purple-500/30 transition-colors group relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <BehavioralAIPreview />
                    </div>
                </ScrollReveal>

                 {/* Feature 5 - Pink Accent */}
                 <ScrollReveal delay={0.6} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-8 hover:border-pink-500/30 transition-colors group relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-8 h-8 rounded-md bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 group-hover:text-pink-300 transition-colors">
                            <BookOpen className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-medium text-[#EDEDED] mb-2">Automated Runbooks</h3>
                        <p className="text-[#8A8F98] text-sm leading-relaxed">Define diagnostic procedures once. Ferronyx executes them automatically.</p>
                    </div>
                </ScrollReveal>

                {/* Feature 6 - Yellow Accent */}
                 <ScrollReveal delay={0.6} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-8 hover:border-yellow-500/30 transition-colors group relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-8 h-8 rounded-md bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                            <CalendarClock className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-medium text-[#EDEDED] mb-2">Maintenance Windows</h3>
                        <p className="text-[#8A8F98] text-sm leading-relaxed">Schedule downtime to silence alerts. No more 3 AM pages.</p>
                    </div>
                </ScrollReveal>

                 {/* Feature 7 - Indigo Accent */}
                <ScrollReveal delay={0.7} className="lg:col-span-2 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-8 hover:border-indigo-500/30 transition-colors group relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-8 h-8 rounded-md bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                            <Brain className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-medium text-[#EDEDED] mb-2">ROS-Native</h3>
                        <p className="text-[#8A8F98] text-sm leading-relaxed">Auto-detects topics, nodes, and message types without config.</p>
                    </div>
                </ScrollReveal>

                 {/* Row 4 */}
                 {/* Feature 8 - Cyan Accent */}
                 <ScrollReveal delay={0.8} className="lg:col-span-3 h-full">
                    <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] p-8 hover:border-cyan-500/30 transition-colors group flex items-start gap-4 relative shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <ChartNoAxesCombined className="h-4 w-4" />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-[#EDEDED] mb-1">Historic Insights</h3>
                            <p className="text-[#8A8F98] text-sm leading-relaxed">Correlate past issues and predict failures with 1-year data retention.</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* CTA Card - High Contrast White */}
                 <ScrollReveal delay={0.9} className="lg:col-span-3 h-full">
                    <a href="https://dev.ferronyx.com/request-access" target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="h-full rounded-xl bg-[#EDEDED] text-black p-8 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.01] shadow-lg hover:shadow-white/10">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Request Access</h3>
                                <p className="text-zinc-600 text-sm">Connect your first robot in 5 minutes.</p>
                            </div>
                            <div className="flex items-center gap-2 mt-6 font-semibold group-hover:gap-3 transition-all text-sm">
                                Request Access <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </a>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default FerronyxFeatures;