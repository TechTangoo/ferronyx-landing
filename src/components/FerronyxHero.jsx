import React, { useRef } from 'react';
import { Button } from "./ui/button";
import { ChevronRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DashboardIllustration from './DashboardIllustration';
import Orb from './Orb';

const FerronyxHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

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
                {/* The Orb Component */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-60">
                     <Orb hue={220} size={70} />
                </div>
                
                {/* Grid Overlay for texture - Extremely subtle */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.04] pointer-events-none mix-blend-plus-lighter"></div>
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>
            </div>

            <motion.div
                className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center gap-8 mt-10 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ opacity, scale, y }} // Parallax effect on scroll
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors cursor-pointer group">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    v1.0 is now live
                    <div className="h-3 w-[1px] bg-white/10 mx-1"></div>
                    <span className="flex items-center text-zinc-400 group-hover:text-white transition-colors">
                        Read the announcement <ChevronRight className="h-3 w-3 ml-1" />
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.1] md:leading-[1.05]">
                    Observe. Diagnose. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600">Heal.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#8A8F98] max-w-2xl text-center leading-relaxed font-normal">
                    Ferronyx is the intelligence layer for your robot fleet. <br className="hidden md:block" /> Real-time telemetry, SRE-grade incidents, and AI debugging.
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
                <motion.p variants={itemVariants} className="mt-12 text-xs font-medium text-zinc-600 uppercase tracking-widest">
                    TRUSTED BY ROBOTICS TEAMS AT
                </motion.p>

            </motion.div>
        </section>
    );
};

export default FerronyxHero;
