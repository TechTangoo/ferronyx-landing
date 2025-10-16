import React from 'react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';

function Builtfor() {
    return (
        <div className='relative h-full w-screen overflow-hidden' style={{ backgroundColor: colors.background }}>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}, ${colors.accent} 40%, transparent 70%)`,
                    filter: 'blur(80px)'
                }}
            />
            <AnimatedContent duration={1} delay={0.3}>
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
                    {/* Header Section */}
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Built for Teams Who Ship Robots
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            From early-stage startups to enterprise fleets — Ferronyx gives robotics engineers the observability and control they need to scale with confidence.
                        </p>
                    </div>

                    {/* Who uses Ferronyx cards */}
                    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
                        <AnimatedContent duration={0.8} delay={0.1}>
                            <div
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto"
                                    style={{ backgroundColor: `${colors.primary}60` }}
                                >
                                    <img src={robotics} alt="robotics" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center">
                                    Robotics Companies
                                </h3>
                                <p className="text-sm text-white/70 text-center leading-relaxed">
                                    Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent duration={0.8} delay={0.2}>
                            <div
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto"
                                    style={{ backgroundColor: `${colors.primary}60` }}
                                >
                                    <img src={research} alt="research" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center">
                                    Research Labs
                                </h3>
                                <p className="text-sm text-white/70 text-center leading-relaxed">
                                    Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent duration={0.8} delay={0.3}>
                            <div
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto"
                                    style={{ backgroundColor: `${colors.primary}60` }}
                                >
                                    <img src={teams} alt="teams" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center">
                                    Platform Teams
                                </h3>
                                <p className="text-sm text-white/70 text-center leading-relaxed">
                                    Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent duration={0.8} delay={0.4}>
                            <div
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto"
                                    style={{ backgroundColor: `${colors.primary}60` }}
                                >
                                    <img src={sreengineer} alt="sre" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center">
                                    Robotics SRE & DevOps
                                </h3>
                                <p className="text-sm text-white/70 text-center leading-relaxed">
                                    Implement SRE best practices with on-call workflows, escalation policies, and automated incident management.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent duration={0.8} delay={0.5}>
                            <div
                                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}, ${colors.secondary})`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div
                                    className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto"
                                    style={{ backgroundColor: `${colors.primary}60` }}
                                >
                                    <img src={academics} alt="academics" className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 text-center">
                                    Academic & R&D Teams
                                </h3>
                                <p className="text-sm text-white/70 text-center leading-relaxed">
                                    Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately.
                                </p>
                            </div>
                        </AnimatedContent>

                        {/* Empty slot for symmetry on larger screens */}
                        <div className="hidden lg:block"></div>
                    </div>

                    {/* Bottom CTA */}
                    <AnimatedContent duration={1} delay={0.6}>
                        <div className="max-w-3xl mx-auto text-center">
                            <div
                                className="p-10 rounded-2xl border"
                                style={{
                                    background: `linear-gradient(145deg, ${colors.forebackground}80, ${colors.secondary}80)`,
                                    borderColor: `${colors.primary}60`
                                }}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    From Prototype to Production
                                </h3>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    Whether you're debugging a single robot in the lab or managing a fleet of hundreds in the field — Ferronyx scales with you.
                                </p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Builtfor
