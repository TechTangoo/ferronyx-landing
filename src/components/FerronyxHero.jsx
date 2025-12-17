import React, { useRef } from 'react';
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DashboardIllustration from './DashboardIllustration';
import LightRays from './LightRays';

const FerronyxHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
    // Removed opacity fade to keep dashboard visible

    // Stagger container for children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } // Apple-like ease
        }
    };

    return (
        <section ref={targetRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <LightRays 
                    raysColor="#93C5FD" 
                    raysSpeed={0.4} 
                    rayLength={5} 
                    lightSpread={0.4} 
                    raysOrigin="top-center" 
                    className="absolute inset-0 opacity-100 mix-blend-screen" 
                />
                
                {/* Vignette for text readability */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505] pointer-events-none"></div>
            </div>

            <motion.div
                className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center gap-8 mt-10 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ scale, y }} // Parallax effect on scroll, no opacity fade
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-medium text-zinc-300">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    v1.0 is now live
                </motion.div>

                {/* Main Heading */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 leading-[1.1]">
                    Observe. Diagnose. <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600">Heal.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#B4B4B8] max-w-3xl text-center leading-relaxed font-normal tracking-tight">
                    Ferronyx gives robotics teams a unified view of their entire fleet — with real-time telemetry, SRE-grade incident management and AI-powered debugging.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="rounded-full text-sm h-12 px-8 bg-[#F5F5F7] text-black hover:bg-white border border-transparent font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] w-full cursor-pointer">
                            Start for free
                        </Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=-12Zc0KPB2I" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="rounded-full text-sm h-12 px-8 border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-white backdrop-blur-sm transition-all hover:scale-[1.02] group w-full cursor-pointer">
                            <Play className="mr-2 h-3 w-3 fill-white" /> Watch Demo
                        </Button>
                    </a>
                </motion.div>

                {/* Dashboard Preview - Linear Style Glass */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-16 w-full max-w-5xl rounded-xl border border-white/[0.08] bg-[#0A0A0B]/50 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/5"
                >
                    {/* Window Controls */}
                    <div className="h-8 border-b border-white/[0.08] bg-white/[0.02] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                    </div>
                     <DashboardIllustration />
                </motion.div>
                
                {/* Companies/Social Proof Text */}
                {/*<motion.p variants={itemVariants} className="mt-20 text-sm font-semibold text-zinc-400 uppercase tracking-widest">*/}
                {/*    TRUSTED BY ROBOTICS TEAMS AT*/}
                {/*</motion.p>*/}

            </motion.div>
        </section>
    );
};

export default FerronyxHero;
