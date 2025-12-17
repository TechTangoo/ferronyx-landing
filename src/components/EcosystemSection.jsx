import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";
import logo from '../assets/logo.svg';
import { 
    Brain, 
    BellRing, 
    BookOpen, 
    Activity, 
    Terminal, 
    Zap, 
    ArrowRight 
} from 'lucide-react';

const LifecycleFlow = () => {
    const leftSide = [
        { id: 'ros', label: 'ROS 2 Discovery', icon: <Brain size={18} />, color: 'text-purple-400', desc: "Auto-detect nodes" },
        { id: 'alerts', label: 'Smart Thresholds', icon: <BellRing size={18} />, color: 'text-blue-400', desc: "Configurable rules" },
        { id: 'runbooks', label: 'Runbook Definitions', icon: <BookOpen size={18} />, color: 'text-cyan-400', desc: "Recovery logic" },
    ];

    const rightSide = [
        { id: 'monitor', label: 'Live Monitoring', icon: <Activity size={18} />, color: 'text-green-400', desc: "Real-time telemetry" },
        { id: 'debug', label: 'AI Diagnostics', icon: <Terminal size={18} />, color: 'text-pink-400', desc: "Root cause analysis" },
        { id: 'heal', label: 'Remote Healing', icon: <Zap size={18} />, color: 'text-yellow-400', desc: "Execute fixes" },
    ];

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5 py-24 overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:30px_30px] opacity-[0.05] pointer-events-none"></div>
             
             {/* Central Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-20 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit mb-4">
                    End-to-End Reliability
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Shift Left. <span className="text-zinc-600 px-2">/</span> Shift Right.
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Ferronyx bridges the gap between proactive configuration and reactive operations. 
                    <br className="hidden md:block"/> Define your rules once, and let the platform enforce them in production.
                </p>
            </ScrollReveal>

            {/* The Flow Visualization */}
            <ScrollReveal delay={0.2} className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                
                {/* LEFT SIDE: Shift Left (Prevention) */}
                <div className="flex-1 flex flex-col gap-4 w-full md:w-auto relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl"></div>
                    
                    <div className="text-center md:text-right mb-4">
                        <h3 className="text-xl font-bold text-white">Shift Left</h3>
                        <p className="text-sm text-blue-400 font-mono">PREVENTION & CONFIG</p>
                    </div>

                    {leftSide.map((item, i) => (
                        <motion.div 
                            key={item.id}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-end gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors relative"
                        >
                            {/* Connector Line to Center (Desktop) */}
                            <div className="hidden md:block absolute right-0 top-1/2 translate-x-full w-[10vw] h-[1px] bg-gradient-to-r from-white/10 to-blue-500/50 z-[-1]"></div>
                            
                            <div className="text-right">
                                <div className="font-bold text-white text-sm">{item.label}</div>
                                <div className="text-xs text-zinc-500">{item.desc}</div>
                            </div>
                            <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CENTER: Ferronyx Core */}
                <div className="relative z-20 mx-8 md:mx-12 shrink-0">
                    <motion.div 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.2)] ring-1 ring-white/10"
                        animate={{ boxShadow: ["0 0 60px rgba(59,130,246,0.2)", "0 0 100px rgba(59,130,246,0.4)", "0 0 60px rgba(59,130,246,0.2)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <img src={logo} alt="Ferronyx" className="h-16 md:h-20 w-auto relative z-10" />
                        
                        {/* Flow Particles passing through */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20"></div>
                             <motion.div 
                                className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-blue-500 blur-[2px]"
                                animate={{ left: ["-50%", "150%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                             />
                        </div>
                    </motion.div>

                    {/* Bridge Label */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-max">
                        <div className="text-white font-bold tracking-widest text-sm">FERRONYX</div>
                        <div className="text-[10px] text-zinc-500 uppercase">The Intelligence Layer</div>
                    </div>
                </div>

                {/* RIGHT SIDE: Shift Right (Resolution) */}
                <div className="flex-1 flex flex-col gap-4 w-full md:w-auto relative group">
                    <div className="absolute -inset-4 bg-gradient-to-l from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl"></div>

                    <div className="text-center md:text-left mb-4">
                        <h3 className="text-xl font-bold text-white">Shift Right</h3>
                        <p className="text-sm text-purple-400 font-mono">OBSERVABILITY & ACTION</p>
                    </div>

                    {rightSide.map((item, i) => (
                        <motion.div 
                            key={item.id}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors relative"
                        >
                            {/* Connector Line from Center (Desktop) */}
                            <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full w-[10vw] h-[1px] bg-gradient-to-l from-white/10 to-purple-500/50 z-[-1]"></div>

                            <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white text-sm">{item.label}</div>
                                <div className="text-xs text-zinc-500">{item.desc}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </ScrollReveal>
            
            {/* Background Flow Animation (Subtle directional flow) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/20 to-transparent pointer-events-none z-0"></div>
            
        </section>
    );
};

export default LifecycleFlow;
