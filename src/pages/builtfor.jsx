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
        title: "Robotics Startups",
        icon: robotics,
        desc: "Scaling from 5 to 500 robots? Monitor your growing fleet, debug issues remotely, and reduce downtime."
    },
    {
        id: 2,
        title: "Warehouse & Logistics",
        icon: teams,
        desc: "Managing AMR fleets? Get real-time visibility into every robot's status, location, and health."
    },
    {
        id: 3,
        title: "Field Robotics",
        icon: research,
        desc: "Robots deployed remotely? Debug from anywhere without SSH tunnels or VPNs."
    },
    {
        id: 4,
        title: "Manufacturing",
        icon: sreengineer,
        desc: "Robot arms and cobots? Track performance, predict maintenance, and minimize production downtime."
    },
    {
        id: 5,
        title: "R&D Teams",
        icon: academics,
        desc: "Running experiments across multiple robots? Focus on research, not infrastructure."
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
                                <Card className="glass-strong card-hover group border-0 h-full relative overflow-hidden">
                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                                        style={{backgroundColor: colors.primary}}
                                    />
                                    <CardContent className="p-8 relative">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                            style={{backgroundColor: `${colors.secondary}`, boxShadow: `0 8px 20px ${colors.glow}`}}
                                        >
                                            <img src={item.icon} alt={item.title} className="w-11 h-11" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {item.title}
                                        </h3>
                                        <p style={{color: colors.textSecondary}} className="text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedContent>
                        ))}

                        {/* CTA Card */}
                        <AnimatedContent duration={0.6} delay={0.5}>
                            <Card className="glass-strong border-0 h-full relative overflow-hidden group">
                                <div
                                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${colors.primary}40, transparent)`
                                    }}
                                />
                                <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full relative">
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{backgroundColor: colors.primary, boxShadow: `0 10px 30px ${colors.glow}`}}>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Ready to Get Started?
                                    </h3>
                                    <p style={{color: colors.textSecondary}} className="mb-6 text-base">
                                        Join teams shipping robots at scale
                                    </p>
                                    <Button
                                        onClick={() => {
                                            const footer = document.getElementById('contact-footer');
                                            footer?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        size="lg"
                                        className="btn-glow hover:scale-105 transition-all duration-300"
                                        style={{
                                            backgroundColor: colors.primary,
                                            color: 'white',
                                            boxShadow: `0 10px 30px ${colors.glow}`
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
