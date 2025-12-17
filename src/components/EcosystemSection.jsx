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

const FloatingCard = ({ item, index, align = 'left' }) => {
    // Randomize floating parameters for organic feel
    const duration = 4 + Math.random() * 2;
    const yOffset = 8 + Math.random() * 4;
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
            {/* Connection Strand */}
            <div className={`absolute top-1/2 w-[80px] h-[1px] hidden lg:block
                ${align === 'left' 
                    ? '-right-[80px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent' 
                    : '-left-[80px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent'}
            `}></div>

            <div className={`
                relative flex items-center gap-4 p-4 rounded-xl 
                bg-[#0A0A0B]/80 backdrop-blur-md border border-white/[0.08]
                shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                hover:bg-[#0A0A0B] hover:scale-[1.02]
                transition-all duration-500 ease-out cursor-pointer
                ${align === 'left' ? 'flex-row-reverse text-right hover:border-blue-500/30' : 'flex-row text-left hover:border-purple-500/30'}
            `}>
                <div className={`
                    p-2.5 rounded-lg border 
                    ${align === 'left' 
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:text-blue-300' 
                        : 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:text-purple-300'}
                    transition-colors duration-300
                `}>
                    {item.icon}
                </div>
                <div>
                    <div className="font-medium text-[#EDEDED] text-sm mb-0.5">{item.label}</div>
                    <div className="text-[11px] text-[#8A8F98]">{item.desc}</div>
                </div>
                
                {/* Top Highlight - Color Coded */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${align === 'left' ? 'via-blue-500/20' : 'via-purple-500/20'} to-transparent rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
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

    const yLeft = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    
    const leftSide = [
        { id: 'ros', label: 'ROS 2 Discovery', icon: <Brain size={18} />, desc: "Auto-detect nodes" },
        { id: 'alerts', label: 'Smart Thresholds', icon: <BellRing size={18} />, desc: "Configurable rules" },
        { id: 'runbooks', label: 'Runbook Definitions', icon: <BookOpen size={18} />, desc: "Recovery logic" },
    ];

    const rightSide = [
        { id: 'monitor', label: 'Live Monitoring', icon: <Activity size={18} />, desc: "Real-time telemetry" },
        { id: 'debug', label: 'AI Diagnostics', icon: <Terminal size={18} />, desc: "Root cause analysis" },
        { id: 'heal', label: 'Remote Healing', icon: <Zap size={18} />, desc: "Execute fixes" },
    ];

    return (
        <section ref={ref} className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] px-6 border-t border-white/[0.05] py-32 overflow-hidden">
             
             {/* Liquid Background Blobs - Subtle & Dark */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <motion.div 
                    style={{ y: yLeft }}
                    className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px]"
                 />
                 <motion.div 
                    style={{ y: yRight }}
                    className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-purple-500/[0.05] rounded-full blur-[100px]"
                 />
             </div>

            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs font-medium text-zinc-400 w-fit mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse"></span>
                    End-to-End Reliability
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                    Shift Left. <span className="text-white/20 mx-2">/</span> Shift Right.
                </h2>
                <p className="text-lg text-[#8A8F98] max-w-2xl leading-relaxed">
                    Ferronyx bridges the gap between proactive configuration and reactive operations.
                </p>
            </ScrollReveal>

            {/* The Liquid Flow Visualization */}
            <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center">
                
                {/* LEFT SIDE: Shift Left */}
                <div className="flex flex-col gap-5 lg:gap-6 perspective-[1000px] relative z-10">
                    <div className="text-center lg:text-right mb-1 lg:pr-2">
                        <span className="text-[10px] font-bold text-blue-500/70 uppercase tracking-widest">Prevention</span>
                    </div>
                     {leftSide.map((item, i) => (
                         <FloatingCard key={item.id} item={item} index={i} align="left" />
                     ))}
                </div>

                {/* CENTER: Liquid Core */}
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-0 z-20">
                    {/* Central Connection Beam */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[0.5px]"></div>

                    <motion.div 
                        className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.1)] ring-1 ring-white/[0.05]"
                        animate={{ 
                            scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img src={logo} alt="Ferronyx" className="h-16 md:h-20 w-auto relative z-10 opacity-90" />
                        
                        {/* Subtle Ripples */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="absolute inset-[-15px] rounded-full border border-purple-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1.5s]"></div>
                        
                        {/* Glass Shine */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/[0.05] to-transparent pointer-events-none"></div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Shift Right */}
                <div className="flex flex-col gap-5 lg:gap-6 perspective-[1000px] relative z-10">
                    <div className="text-center lg:text-left mb-1 lg:pl-2">
                        <span className="text-[10px] font-bold text-purple-500/70 uppercase tracking-widest">Resolution</span>
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