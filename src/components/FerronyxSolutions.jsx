import React from 'react';
import { Factory, FlaskConical, Layers, ServerCog, GraduationCap, ArrowRight } from "lucide-react";
import ScrollReveal from './ScrollReveal';

const solutions = [
    {
        icon: <Factory className="h-4 w-4" />,
        color: "text-blue-400 group-hover:text-blue-300",
        bg: "bg-blue-500/10",
        title: "Robotics Companies",
        desc: "Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments."
    },
    {
        icon: <FlaskConical className="h-4 w-4" />,
        color: "text-purple-400 group-hover:text-purple-300",
        bg: "bg-purple-500/10",
        title: "Research Labs",
        desc: "Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling."
    },
    {
        icon: <Layers className="h-4 w-4" />,
        color: "text-pink-400 group-hover:text-pink-300",
        bg: "bg-pink-500/10",
        title: "Platform & Autonomy",
        desc: "Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights."
    },
    {
        icon: <ServerCog className="h-4 w-4" />,
        color: "text-amber-400 group-hover:text-amber-300",
        bg: "bg-amber-500/10",
        title: "Robotics SRE & DevOps",
        desc: "Implement SRE best practices with on-call workflows, escalation policies, and automated incident management."
    },
    {
        icon: <GraduationCap className="h-4 w-4" />,
        color: "text-emerald-400 group-hover:text-emerald-300",
        bg: "bg-emerald-500/10",
        title: "Academic & R&D Teams",
        desc: "Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately."
    }
];

const FerronyxSolutions = () => {
    return (
        <section id="built-for" className="relative w-full bg-[#050505] py-32 px-6 border-t border-white/[0.05]">
            <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Trusted by Robotics Teams
                </h2>
                <p className="text-lg text-[#8A8F98] max-w-xl mx-auto">
                    From research labs to production fleets — teams rely on Ferronyx to scale with confidence.
                </p>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((item, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                        <div className="group h-full p-8 rounded-xl bg-[#0A0A0B] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 relative overflow-hidden">
                             {/* Top Highlight */}
                             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"></div>
                            
                            <div className={`w-8 h-8 rounded-md flex items-center justify-center mb-6 ${item.bg} ${item.color} transition-colors border border-white/5`}>
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-medium text-[#EDEDED] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#8A8F98] leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
                
                {/* CTA Card - High Contrast */}
                <ScrollReveal delay={0.5} className="h-full">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="h-full p-8 rounded-xl bg-[#EDEDED] text-black flex flex-col justify-center items-center text-center hover:scale-[1.01] transition-transform cursor-pointer group shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Ready to scale your fleet?</h3>
                            <p className="text-zinc-600 mb-6 text-sm">Get full observability across all your robots.</p>
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050505] text-white font-medium text-sm group-hover:bg-zinc-800 transition-colors">
                                Contact Sales <ArrowRight className="h-3 w-3" />
                            </span>
                        </div>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FerronyxSolutions;