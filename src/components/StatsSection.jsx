import React from 'react';
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";

const StatsSection = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <ScrollReveal className="flex flex-col gap-6" delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Enterprise Ready
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                        Over 50,000 hours of <br />
                        <span className="text-zinc-500">uptime managed.</span>
                    </h2>

                    <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                        Join the leading robotics observability platform. Scale your fleet with SRE-grade tools and real-time intelligence.
                    </p>

                    <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group">
                        View Platform Analytics <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </ScrollReveal>

                {/* Stats Grid */}
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]"></div>

                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <ScrollReveal delay={0.2} className="h-full">
                            <motion.div whileHover={{ y: -5 }} className="h-full p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm flex flex-col gap-2 hover:bg-zinc-900/80 transition-colors">
                                <span className="text-sm text-zinc-500">Robots Monitored</span>
                                <span className="text-3xl font-bold text-white">12,400+</span>
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3} className="h-full">
                            <motion.div whileHover={{ y: -5 }} className="h-full p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm flex flex-col gap-2 hover:bg-zinc-900/80 transition-colors">
                                <span className="text-sm text-zinc-500">Daily Alerts Handled</span>
                                <span className="text-3xl font-bold text-white">85K+</span>
                            </motion.div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4} className="col-span-2">
                            <motion.div whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm flex flex-col gap-2 hover:bg-zinc-900/80 transition-colors">
                                <span className="text-sm text-zinc-500">System Uptime</span>
                                <span className="text-3xl font-bold text-white">99.99%</span>
                                <div className="h-1 w-full bg-white/5 mt-2 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "99.99%" }}
                                        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                        className="h-full bg-blue-500/50 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
