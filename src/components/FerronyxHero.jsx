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
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    // Stagger container for children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
        }
    };

    const scrollToFooter = () => {
        const footerElement = document.getElementById('contact-footer');
        if (footerElement) {
            footerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section ref={targetRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* The Orb Component */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
                     <Orb hue={210} size={80} />
                </div>
                
                {/* Grid Overlay for texture */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:50px_50px] opacity-[0.07] pointer-events-none mix-blend-overlay"></div>
            </div>

            <motion.div
                className="relative z-10 text-center max-w-7xl px-6 flex flex-col items-center gap-8 md:gap-10 mt-10 md:mt-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ opacity, scale, y }} // Parallax effect on scroll
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-blue-100/70 mb-2 hover:bg-white/10 transition-colors cursor-pointer group">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Full stack observability for robotic fleets
                    <ChevronRight className="h-3 w-3 text-white/50 group-hover:translate-x-0.5 transition-transform" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[0.9]">
                    Observe. Diagnose. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-200 to-white/40">Heal.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-2xl text-center leading-relaxed tracking-tight">
                    Ferronyx gives robotics teams a unified view of their entire fleet — with real-time telemetry, SRE-grade incident management, and AI-powered debugging.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="rounded-full text-base px-8 h-12 sm:h-14 bg-white text-black hover:bg-zinc-200 font-semibold transition-transform hover:scale-105 w-full cursor-pointer">
                            Get Started
                        </Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=-12Zc0KPB2I" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 sm:h-14 border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 group w-full cursor-pointer">
                            <Play className="mr-2 h-4 w-4 fill-white" /> Watch Demo
                        </Button>
                    </a>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-12 w-full max-w-5xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl shadow-blue-900/20 overflow-hidden"
                >
                     <DashboardIllustration />
                </motion.div>
                
                {/* Feature Pills */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500 mt-8">
                     <div className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span> 10-minute setup
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span> Zero-config ROS2 integration
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span> AI-assisted debugging
                     </div>
                </motion.div>

            </motion.div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default FerronyxHero;