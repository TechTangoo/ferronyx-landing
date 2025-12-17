import React from 'react';
import { Factory, FlaskConical, Layers, ServerCog, GraduationCap } from "lucide-react";
import ScrollReveal from './ScrollReveal';
import { Card, CardContent } from "./ui/card";

const solutions = [
    {
        icon: <Factory className="h-6 w-6 text-blue-400" />,
        title: "Robotics Companies",
        desc: "Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments."
    },
    {
        icon: <FlaskConical className="h-6 w-6 text-purple-400" />,
        title: "Research Labs",
        desc: "Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling."
    },
    {
        icon: <Layers className="h-6 w-6 text-pink-400" />,
        title: "Platform & Autonomy Teams",
        desc: "Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights."
    },
    {
        icon: <ServerCog className="h-6 w-6 text-orange-400" />,
        title: "Robotics SRE & DevOps",
        desc: "Implement SRE best practices with on-call workflows, escalation policies, and automated incident management."
    },
    {
        icon: <GraduationCap className="h-6 w-6 text-green-400" />,
        title: "Academic & R&D Teams",
        desc: "Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately."
    }
];

const FerronyxSolutions = () => {
    return (
        <section id="built-for" className="relative w-full bg-black py-24 px-6 border-t border-white/5">
            <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Trusted by Robotics Teams <br />
                    <span className="text-zinc-500">Worldwide</span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    From research labs to production fleets — teams rely on Ferronyx to scale with confidence.
                </p>
            </ScrollReveal>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((item, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                        <div className="group h-full p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
                
                {/* CTA Card */}
                <ScrollReveal delay={0.5} className="h-full">
                    <div className="h-full p-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex flex-col justify-center items-center text-center hover:bg-blue-500/20 transition-all cursor-pointer group" onClick={() => document.getElementById('contact-footer')?.scrollIntoView({behavior: 'smooth'})}>
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to scale?</h3>
                        <p className="text-blue-200/70 mb-6 text-sm">Join the next generation of robotics companies.</p>
                        <span className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm group-hover:bg-blue-500 transition-colors">
                            Contact Sales
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FerronyxSolutions;
