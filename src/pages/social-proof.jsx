import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';

function SocialProof() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
            value: "10min",
            label: "Average Setup Time",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            value: "1000+",
            label: "Robots Monitored",
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
        <div className="relative w-screen overflow-hidden py-16 border-y" style={{ backgroundColor: colors.background, borderColor: colors.border }}>

            <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
                        >
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="rounded-lg p-6 text-center border transition-all duration-200"
                                style={{backgroundColor: colors.backgroundCard, borderColor: colors.border}}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
                                    style={{
                                        backgroundColor: colors.backgroundSubtle,
                                        color: colors.textSecondary
                                    }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-normal" style={{ color: colors.textMuted }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <AnimatedContent duration={0.8} delay={0.4}>
                    <div className="mt-16 text-center border-t pt-16" style={{borderColor: colors.border}}>
                        <p className="text-xs font-medium uppercase tracking-wider mb-8" style={{ color: colors.textMuted }}>
                            Trusted by robotics teams worldwide
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                            {/* Placeholder for company logos - you can replace with actual logos */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="px-6 py-3"
                                >
                                    <div className="text-sm font-medium" style={{ color: colors.textSecondary }}>
                                        Company {i}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default SocialProof;
