import React from 'react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';

const audienceData = [
    {
        id: 1,
        title: "Robotics Companies",
        icon: robotics,
        desc: "Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments."
    },
    {
        id: 2,
        title: "Research Labs",
        icon: research,
        desc: "Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling."
    },
    {
        id: 3,
        title: "Platform & Autonomy Teams",
        icon: teams,
        desc: "Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights."
    },
    {
        id: 4,
        title: "Robotics SRE & DevOps",
        icon: sreengineer,
        desc: "Implement SRE best practices with on-call workflows, escalation policies, and automated incident management."
    },
    {
        id: 5,
        title: "Academic & R&D Teams",
        icon: academics,
        desc: "Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately."
    }
];

function Builtfor() {
    return (
        <div className='relative w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedContent duration={0.8}>
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Trusted by Robotics Teams Worldwide
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            From research labs to production fleets — teams rely on Ferronyx to scale with confidence
                        </p>
                    </div>

                    {/* Clean Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {audienceData.map((item, idx) => (
                            <AnimatedContent key={item.id} duration={0.6} delay={idx * 0.1}>
                                <div
                                    className="p-8 rounded-xl border h-full hover:border-opacity-100 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${colors.forebackground}`,
                                        borderColor: `${colors.primary}30`
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                                        style={{backgroundColor: `${colors.primary}30`}}
                                    >
                                        <img src={item.icon} alt={item.title} className="w-9 h-9" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </AnimatedContent>
                        ))}

                        {/* CTA Card */}
                        <AnimatedContent duration={0.6} delay={0.5}>
                            <div
                                className="p-8 rounded-xl border h-full flex flex-col justify-center items-center text-center"
                                style={{
                                    backgroundColor: `${colors.primary}20`,
                                    borderColor: `${colors.primary}60`
                                }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-white/70 mb-6">
                                    Join teams shipping robots at scale
                                </p>
                                <button
                                    onClick={() => {
                                        const footer = document.getElementById('contact-footer');
                                        footer?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                                    style={{
                                        backgroundColor: colors.primary,
                                        color: 'white'
                                    }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </AnimatedContent>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Builtfor
