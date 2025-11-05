import React from 'react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

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
            {/* Enhanced Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.primary}30`}} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                     style={{backgroundColor: `${colors.accent}30`}} />
            </div>

            {/* Subtle Line Grid */}
            <div className="absolute inset-0 opacity-3">
                <div className="w-full h-full"
                     style={{
                         backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
                         backgroundSize: '50px 50px'
                     }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                <Card
                                    className="group border h-full hover:border-opacity-100 transition-all duration-300 relative overflow-hidden"
                                    style={{
                                        backgroundColor: `${colors.forebackground}`,
                                        borderColor: `${colors.border}`
                                    }}
                                >
                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute -inset-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                                        style={{backgroundColor: colors.primary}}
                                    />
                                    <CardContent className="p-8 relative">
                                        <div
                                            className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                            style={{backgroundColor: `${colors.secondary}`}}
                                        >
                                            <img src={item.icon} alt={item.title} className="w-9 h-9" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedContent>
                        ))}

                        {/* CTA Card */}
                        <AnimatedContent duration={0.6} delay={0.5}>
                            <Card
                                className="border h-full"
                                style={{
                                    backgroundColor: `${colors.primary}15`,
                                    borderColor: `${colors.primary}`
                                }}
                            >
                                <CardContent className="p-8 flex flex-col justify-center items-center text-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-white/70 mb-6">
                                        Join teams shipping robots at scale
                                    </p>
                                    <Button
                                        onClick={() => {
                                            const footer = document.getElementById('contact-footer');
                                            footer?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        size="lg"
                                        style={{
                                            backgroundColor: colors.primary,
                                            color: 'white'
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </CardContent>
                            </Card>
                        </AnimatedContent>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Builtfor
