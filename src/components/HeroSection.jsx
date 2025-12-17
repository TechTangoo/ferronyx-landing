import React from 'react';
import { Button } from "./ui/button";
import { Play, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
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

    return (
        <section className="snap-start relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:50px_50px] opacity-[0.07]"></div>
            </div>

            <motion.div
                className="relative z-10 text-center max-w-7xl px-6 flex flex-col items-center gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-blue-100/70 mb-2 hover:bg-white/10 transition-colors cursor-pointer group">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Permissionless access is live
                    <ChevronRight className="h-3 w-3 text-white/50 group-hover:translate-x-0.5 transition-transform" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                    Architect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">your wealth</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-2xl text-center leading-relaxed tracking-tight">
                    Aura is a decentralized protocol allowing for permissionless lending and borrowing specifically for Real World Assets.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
                    <Button size="lg" className="rounded-full text-base px-8 h-14 bg-white text-black hover:bg-zinc-200 font-semibold transition-transform hover:scale-105">
                        Start Engine
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-14 border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 group">
                        <Play className="mr-2 h-4 w-4 fill-white" /> Watch Demo
                    </Button>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
