import React, { useRef } from 'react';
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FleetCommandCenter from './FleetCommandCenter';
import LightRays from './LightRays';

const FerronyxHero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const dashboardOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.7]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.8, 0]);

    return (
        <section ref={targetRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Primary light rays */}
                <LightRays
                    raysColor="#93C5FD"
                    raysSpeed={0.3}
                    rayLength={8}
                    lightSpread={0.6}
                    raysOrigin="top-center"
                    noiseAmount={0.2}
                    distortion={0.3}
                    className="absolute inset-0 opacity-80 mix-blend-screen"
                />

                {/* Secondary layer */}
                <LightRays
                    raysColor="#60A5FA"
                    raysSpeed={0.2}
                    rayLength={6}
                    lightSpread={0.5}
                    raysOrigin="bottom-left"
                    noiseAmount={0.15}
                    distortion={0.2}
                    className="absolute inset-0 opacity-40 mix-blend-screen"
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505] pointer-events-none"></div>
            </div>

            {/* DESKTOP: Dashboard-First Layout */}
            <div className="hidden md:block">
                {/* Full-Bleed Dashboard Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ opacity: dashboardOpacity }}
                    className="absolute inset-x-0 bottom-0 top-28 md:top-32 z-10 p-4 md:p-8 flex items-center justify-center"
                >
                    <motion.div
                        style={{ scale }}
                        className="w-full h-full max-w-[1600px] max-h-[900px] rounded-2xl border border-white/[0.08] bg-[#0A0A0B]/30 backdrop-blur-md shadow-2xl shadow-blue-500/10 overflow-hidden ring-1 ring-white/5"
                    >
                        {/* Dashboard Chrome Header */}
                        <div className="h-16 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
                            {/* Left: Window controls + Badge + Headline */}
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                                </div>

                                {/* Badge as Dashboard Status */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Fleet Online • Free trial
                                </motion.div>

                                {/* Headline integrated in header */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="hidden lg:flex items-center gap-2 ml-2"
                                >
                                    <div className="h-4 w-px bg-white/[0.1]"></div>
                                    <h1 className="text-base font-medium tracking-tight text-white">
                                        Observability for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Production Robot Fleets</span>
                                    </h1>
                                </motion.div>
                            </div>

                            {/* Right: CTAs as Dashboard Actions */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <a href="https://www.youtube.com/watch?v=-12Zc0KPB2I" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full text-xs h-8 px-4 border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-white backdrop-blur-sm group"
                                    >
                                        <Play className="mr-1.5 h-3 w-3 fill-white" /> Demo
                                    </Button>
                                </a>
                                <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="sm"
                                        className="rounded-full text-xs h-8 px-4 bg-[#F5F5F7] text-black hover:bg-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02]"
                                    >
                                        Start Free
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="h-[calc(100%-4rem)]">
                            <FleetCommandCenter />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vignette for depth */}
                <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>

            {/* MOBILE: Traditional Stack */}
            <div className="md:hidden relative z-10 flex flex-col items-center justify-start pt-32 px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400 mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Free 2-week trial
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 leading-[1.1] text-center mb-4"
                >
                    Observability for <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-600">Robot Fleets</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-[#B4B4B8] text-center leading-relaxed font-normal tracking-tight mb-6 max-w-md"
                >
                    Monitor any Linux robot (ROS2 native). Catch infra + ROS issues before downtime.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-3 w-full max-w-sm mb-12"
                >
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button size="lg" className="rounded-full text-sm h-12 px-8 bg-[#F5F5F7] text-black hover:bg-white border border-transparent font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] w-full">
                            Start Free
                        </Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=-12Zc0KPB2I" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" size="lg" className="rounded-full text-sm h-12 px-8 border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-white backdrop-blur-sm transition-all hover:scale-[1.02] group w-full">
                            <Play className="mr-2 h-3 w-3 fill-white" /> Watch Demo
                        </Button>
                    </a>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-md md:max-w-2xl rounded-xl border border-white/[0.08] bg-[#0A0A0B]/50 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/5"
                >
                    {/* Window Controls */}
                    <div className="h-8 border-b border-white/[0.08] bg-white/[0.02] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2D2D2E]"></div>
                    </div>
                    <div className="h-[350px] overflow-hidden">
                        <FleetCommandCenter />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FerronyxHero;
