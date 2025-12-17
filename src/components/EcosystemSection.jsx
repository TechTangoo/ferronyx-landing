import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";
import logo from '../assets/logo.svg';
import { Cpu, Activity, Brain, Shield, Terminal, Zap, Server, Wifi, Database } from 'lucide-react';

const CircuitBoard = () => {
    // Define the layout of the "Chips" around the central CPU
    const chips = [
        { id: 'ros', label: 'ROS 2 Bridge', icon: <Brain size={18} />, color: 'text-purple-400', x: -280, y: -120 },
        { id: 'infra', label: 'Infrastructure', icon: <Server size={18} />, color: 'text-blue-400', x: -280, y: 0 },
        { id: 'net', label: 'Connectivity', icon: <Wifi size={18} />, color: 'text-cyan-400', x: -280, y: 120 },
        
        { id: 'diag', label: 'Diagnostics', icon: <Activity size={18} />, color: 'text-green-400', x: 280, y: -120 },
        { id: 'security', label: 'Security', icon: <Shield size={18} />, color: 'text-red-400', x: 280, y: 0 },
        { id: 'data', label: 'Data Lake', icon: <Database size={18} />, color: 'text-yellow-400', x: 280, y: 120 },
    ];

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5 py-24 overflow-hidden">
            {/* Background Texture - Circuit Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-20 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit mb-4">
                    The Central Nervous System
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Connecting the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Robotics Gap</span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                    Ferronyx acts as the intelligent bridge between your robot hardware, low-level software, and high-level operations.
                </p>
            </ScrollReveal>

            {/* The Circuit Board Visualization */}
            <ScrollReveal delay={0.2} className="relative w-full max-w-[900px] h-[500px] flex items-center justify-center">
                
                {/* SVG Traces Layer (Behind) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    <defs>
                        <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    
                    {chips.map((chip, i) => {
                        // Calculate path from Chip to Center
                        // Center is (0,0) relative to SVG center. SVG is full width/height.
                        // We need absolute coordinates based on container size (900x500)
                        const centerX = 450;
                        const centerY = 250;
                        const chipX = centerX + chip.x;
                        const chipY = centerY + chip.y;

                        // Create a "Circuit" path (90-degree bends)
                        // Path: Start at Chip -> Horizontal to near center -> Vertical to center Y -> Horizontal to Center
                        const pathString = `M ${chipX} ${chipY} L ${chipX > centerX ? chipX - 100 : chipX + 100} ${chipY} L ${chipX > centerX ? chipX - 100 : chipX + 100} ${centerY} L ${centerX} ${centerY}`;

                        return (
                            <g key={i}>
                                {/* Base Trace */}
                                <path d={pathString} stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
                                
                                {/* Active Data Flow */}
                                <motion.path 
                                    d={pathString} 
                                    stroke="url(#lineGradient)" // We'll just use a color for now
                                    stroke={i < 3 ? "#60a5fa" : "#a855f7"} // Blue for inputs, Purple for outputs
                                    strokeWidth="2" 
                                    fill="none"
                                    strokeDasharray="10 200"
                                    strokeLinecap="round"
                                    filter="url(#glow-line)"
                                    animate={{ strokeDashoffset: [210, 0] }} // Move the dash
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                    style={{ opacity: 0.8 }}
                                />
                            </g>
                        );
                    })}
                </svg>

                {/* Central CPU (Ferronyx Core) */}
                <motion.div 
                    className="relative z-20 w-48 h-32 bg-black/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.15)] group"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Glowing Border Pulse */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-500/50 animate-pulse"></div>
                    
                    <img src={logo} alt="Ferronyx" className="h-10 w-auto mb-3 relative z-10" />
                    <div className="text-sm font-bold text-white tracking-widest uppercase">Ferronyx Core</div>
                    <div className="text-[10px] text-blue-400 mt-1 font-mono">Status: Online</div>

                    {/* Ports visual */}
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-16 bg-zinc-800 border-l border-zinc-700 rounded-l-sm"></div>
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-16 bg-zinc-800 border-r border-zinc-700 rounded-r-sm"></div>
                </motion.div>

                {/* Peripheral Chips */}
                {chips.map((chip, i) => (
                    <motion.div
                        key={chip.id}
                        className="absolute z-10"
                        style={{ x: chip.x, y: chip.y }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                    >
                        <div className={`
                            flex items-center gap-3 p-3 w-48
                            bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-lg
                            hover:border-white/30 hover:bg-zinc-800 transition-all cursor-pointer group
                        `}>
                            <div className={`p-2 rounded bg-white/5 ${chip.color} group-hover:scale-110 transition-transform`}>
                                {chip.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white uppercase tracking-wide">{chip.label}</span>
                                <span className="text-[9px] text-zinc-500 font-mono">LINK_ESTABLISHED</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </ScrollReveal>
        </section>
    );
};

export default CircuitBoard;