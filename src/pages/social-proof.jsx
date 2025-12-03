import React from 'react';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';

function SocialProof() {
    const stats = [
        {
            value: "99.9%",
            label: "Uptime Reliability",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: "<10min",
            label: "Setup Time",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            value: "Zero",
            label: "Config for ROS2",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            value: "24/7",
            label: "Real-time Monitoring",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative w-screen overflow-hidden py-20" style={{ backgroundColor: colors.background }}>
            {/* Subtle gradient background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: colors.primary }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: colors.accent }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Grid */}
                <AnimatedContent duration={0.8}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <AnimatedContent key={idx} duration={0.6} delay={idx * 0.1}>
                                <div className="glass-strong rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 card-hover">
                                    <div
                                        className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: colors.secondary,
                                            color: colors.primaryLight,
                                            boxShadow: `0 8px 20px ${colors.glow}`
                                        }}
                                    >
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{
                                        backgroundImage: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.accent})`
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-base font-medium" style={{ color: colors.textSecondary }}>
                                        {stat.label}
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </AnimatedContent>

                {/* Trust message */}
                <AnimatedContent duration={0.8} delay={0.4}>
                    <div className="mt-16 text-center">
                        <p className="text-xl font-medium" style={{ color: colors.textSecondary }}>
                            Monitor 100s of robots from a single dashboard
                        </p>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default SocialProof;
