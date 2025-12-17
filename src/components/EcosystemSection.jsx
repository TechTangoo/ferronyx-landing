import React, { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, useScroll, useTransform } from "framer-motion";
import logo from '../assets/logo.svg';
import { 
    Brain, 
    BellRing, 
    BookOpen, 
    Activity, 
    Terminal, 
    Zap, 
} from 'lucide-react';

// Floating Card Component for the "Liquid" feel
const FloatingCard = ({ item, index, align = 'left' }) => {
    // Randomize floating parameters for organic feel
    const duration = 4 + Math.random() * 2;
    const yOffset = 10 + Math.random() * 5;
    const delay = index * 0.2;

    return (
        <motion.div
            className="relative group"
            animate={{ 
                y: [0, -yOffset, 0],
            }}
            transition={{ 
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {/* Connection Strand (Blurred Line) */}
            <div className={`absolute top-1/2 w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px] hidden lg:block
                ${align === 'left' ? '-right-[100px]' : '-left-[100px]'}
            `}></div>

            <div className={`
                relative flex items-center gap-4 p-5 rounded-2xl 
                bg-white/5 backdrop-blur-xl border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
                transition-all duration-500 ease-out cursor-pointer
                ${align === 'left' ? 'flex-row-reverse text-right' : 'flex-row text-left'}
            `}>
                <div className={`
                    p-3.5 rounded-xl bg-gradient-to-br from-white/10 to-transparent 
                    border border-white/5 shadow-inner ${item.color}
                    group-hover:scale-110 transition-transform duration-500
                `}>
                    {item.icon}
                </div>
                <div>
                    <div className="font-bold text-white text-base tracking-tight mb-0.5">{item.label}</div>
                    <div className="text-xs text-zinc-400 font-medium">{item.desc}</div>
                </div>
                
                {/* Glossy sheen effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

const LiquidLifecycle = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    
    const leftSide = [
        { id: 'ros', label: 'ROS 2 Discovery', icon: <Brain size={20} />, color: 'text-purple-300', desc: "Auto-detect nodes" },
        { id: 'alerts', label: 'Smart Thresholds', icon: <BellRing size={20} />, color: 'text-blue-300', desc: "Configurable rules" },
        { id: 'runbooks', label: 'Runbook Definitions', icon: <BookOpen size={20} />, color: 'text-cyan-300', desc: "Recovery logic" },
    ];

    const rightSide = [
        { id: 'monitor', label: 'Live Monitoring', icon: <Activity size={20} />, color: 'text-green-300', desc: "Real-time telemetry" },
        { id: 'debug', label: 'AI Diagnostics', icon: <Terminal size={20} />, color: 'text-pink-300', desc: "Root cause analysis" },
        { id: 'heal', label: 'Remote Healing', icon: <Zap size={20} />, color: 'text-yellow-300', desc: "Execute fixes" },
    ];

    return (
        <section ref={ref} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5 py-32 overflow-hidden">
             
             {/* Liquid Background Blobs */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <motion.div 
                    style={{ y: yLeft }}
                    className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-60"
                 />
                 <motion.div 
                    style={{ y: yRight }}
                    className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-60"
                 />
             </div>

            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg text-xs font-semibold text-white/80 w-fit mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    End-to-End Reliability
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                    Shift Left. <span className="text-white/20 mx-2">/</span> Shift Right.
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                    Ferronyx bridges the gap between proactive configuration and reactive operations.
                </p>
            </ScrollReveal>

            {/* The Liquid Flow Visualization */}
            <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center">
                
                {/* LEFT SIDE: Floating Stack (Shift Left) */}
                <div className="flex flex-col gap-6 lg:gap-8 perspective-[1000px] relative z-10">
                    <div className="text-center lg:text-right mb-2 lg:pr-4">
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Prevention</span>
                    </div>
                     {leftSide.map((item, i) => (
                         <FloatingCard key={item.id} item={item} index={i} align="left" />
                     ))}
                </div>

                {/* CENTER: Liquid Core */}
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-0 z-20">
                    {/* Central Connection Beam */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[1px]"></div>

                    <motion.div 
                        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.15)] ring-1 ring-white/20"
                        animate={{ 
                            scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img src={logo} alt="Ferronyx" className="h-20 md:h-24 w-auto relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
                        
                        {/* Fluid Ripples */}
                        <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="absolute inset-[-20px] rounded-full border border-purple-400/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
                        
                        {/* Glass Shine */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Floating Stack (Shift Right) */}
                <div className="flex flex-col gap-6 lg:gap-8 perspective-[1000px] relative z-10">
                    <div className="text-center lg:text-left mb-2 lg:pl-4">
                        <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">Resolution</span>
                    </div>
                     {rightSide.map((item, i) => (
                         <FloatingCard key={item.id} item={item} index={i + 3} align="right" />
                     ))}
                </div>

            </div>
        </section>
    );
};

export default LiquidLifecycle;