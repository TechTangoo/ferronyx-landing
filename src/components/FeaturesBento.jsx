import React from 'react';
import { Network, Bot, Terminal, CircleGauge, BellRing, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ROS2GraphExplorer from './ROS2GraphExplorer';
import AIDebugMockup from './AIDebugMockup';
import LinuxInfraMonitor from './LinuxInfraMonitor';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';
import BehavioralAIPreview from './BehavioralAIPreview';

const features = [
    {
        id: 'ros2',
        title: 'Zero-Config ROS2 Discovery',
        description: 'Auto-discovers your entire ROS2 computation graph — nodes, topics, services, and message types — all mapped in real-time.',
        icon: Network,
        mockup: ROS2GraphExplorer,
        size: 'large',
    },
    {
        id: 'ai-debug',
        title: 'AI-Powered Debugging',
        description: 'Ask questions in plain English. Get AI root cause analysis across logs, metrics, and ROS2 state.',
        icon: Bot,
        mockup: AIDebugMockup,
        size: 'large',
    },
    {
        id: 'linux',
        title: 'Full Linux System Access',
        description: 'Remote terminal and system monitoring without SSH/VPN. Execute commands across your fleet.',
        icon: Terminal,
        mockup: LinuxInfraMonitor,
        size: 'medium',
    },
    {
        id: 'monitoring',
        title: 'Real-Time Fleet Telemetry',
        description: 'Track CPU, GPU, memory, network, and ROS topics with sub-second latency.',
        icon: CircleGauge,
        mockup: MonitoringMockup,
        size: 'medium',
    },
    {
        id: 'oncall',
        title: 'SRE-Grade Incident Management',
        description: 'Threshold alerts, escalation policies, and MTTR tracking from detection to resolution.',
        icon: BellRing,
        mockup: OnCallMockup,
        size: 'medium',
    },
    {
        id: 'behavioral',
        title: 'Behavioral Observability',
        description: 'Understand the gap between robot intent and execution. AI-powered behavioral analysis.',
        icon: Brain,
        mockup: BehavioralAIPreview,
        size: 'full',
        comingSoon: true,
    },
];

function FeatureCard({ feature, className = '' }) {
    const Icon = feature.icon;
    const Mockup = feature.mockup;

    return (
        <div className={`group relative rounded-xl bg-[#111113] border border-white/[0.06] overflow-hidden blue-glow-card ${className}`}>
            {/* Coming soon ribbon */}
            {feature.comingSoon && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
                    Coming Q2 2026
                </div>
            )}

            <div className="p-6">
                {/* Icon badge */}
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Icon className="h-4 w-4" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>

            {/* Mockup */}
            <div className={`relative border-t border-white/[0.06] ${feature.comingSoon ? 'opacity-50' : ''}`}>
                <div className={`${feature.size === 'full' ? 'h-[200px] md:h-[250px]' : feature.size === 'large' ? 'h-[250px] md:h-[300px]' : 'h-[200px] md:h-[220px]'} overflow-hidden`}>
                    <Mockup />
                </div>
            </div>
        </div>
    );
}

const FeaturesBento = () => {
    const largePair = features.filter(f => f.size === 'large');
    const mediumTriple = features.filter(f => f.size === 'medium');
    const fullWidth = features.filter(f => f.size === 'full');

    return (
        <section id="features" className="relative w-full bg-zinc-950 py-24 md:py-32 px-4 md:px-6">
            {/* Section Header */}
            <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                    Everything you need to monitor{' '}
                    <span className="text-blue-400">robot fleets</span>
                </h2>
                <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                    From Linux infra to ROS2 topics. Full-stack visibility with zero config.
                </p>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Top row: 2 large cards (60/40 split) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {largePair.map((feature, idx) => (
                        <ScrollReveal
                            key={feature.id}
                            delay={idx * 0.1}
                            className={idx === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}
                        >
                            <FeatureCard feature={feature} className="h-full" />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Middle row: 3 equal columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mediumTriple.map((feature, idx) => (
                        <ScrollReveal key={feature.id} delay={idx * 0.1}>
                            <FeatureCard feature={feature} className="h-full" />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom: full-width card */}
                {fullWidth.map(feature => (
                    <ScrollReveal key={feature.id} delay={0.1}>
                        <FeatureCard feature={feature} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default FeaturesBento;
