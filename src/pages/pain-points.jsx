import React from 'react';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import { ArrowRight } from 'lucide-react';

const painPoints = [
    {
        problem: "I don't know if my robots are online",
        solution: "Real-time status dashboard"
    },
    {
        problem: "I find out about issues after customers complain",
        solution: "Proactive alerting before failures"
    },
    {
        problem: "I can't debug robots deployed in the field",
        solution: "Remote command execution & diagnostics"
    },
    {
        problem: "My team gets alert fatigue",
        solution: "Smart thresholds & maintenance windows"
    },
    {
        problem: "ROS2 monitoring is a nightmare to set up",
        solution: "Zero-config ROS2 discovery"
    },
    {
        problem: "We waste hours SSHing into individual robots",
        solution: "Fleet-wide visibility in one place"
    }
];

function PainPoints() {
    return (
        <div className="relative w-screen overflow-hidden py-24" style={{ backgroundColor: colors.background }}>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-0 w-full h-96 blur-3xl"
                     style={{ background: `linear-gradient(90deg, ${colors.primary}40, transparent, ${colors.accent}40)` }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContent duration={0.8}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Pain Points We Solve
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Stop firefighting. Start preventing.
                        </p>
                    </div>

                    {/* Pain Points Grid */}
                    <div className="space-y-4">
                        {painPoints.map((item, idx) => (
                            <AnimatedContent key={idx} duration={0.5} delay={idx * 0.1}>
                                <div
                                    className="grid md:grid-cols-2 gap-4 md:gap-8 items-center p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        border: `1px solid ${colors.border}`
                                    }}
                                >
                                    {/* Problem */}
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                                        >
                                            <span className="text-red-400 text-lg">✕</span>
                                        </div>
                                        <p className="text-lg text-white/70 italic">"{item.problem}"</p>
                                    </div>

                                    {/* Arrow (visible on md+) */}
                                    <div className="hidden md:flex items-center">
                                        <ArrowRight className="w-5 h-5 mr-4 flex-shrink-0" style={{ color: colors.primary }} />
                                        {/* Solution */}
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${colors.primary}30` }}
                                            >
                                                <span style={{ color: colors.success }}>✓</span>
                                            </div>
                                            <p className="text-lg font-semibold" style={{ color: colors.primaryLight }}>
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Solution (visible on mobile) */}
                                    <div className="flex md:hidden items-center gap-4 pl-14">
                                        <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: colors.primary }} />
                                        <p className="text-base font-semibold" style={{ color: colors.primaryLight }}>
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}

export default PainPoints;
