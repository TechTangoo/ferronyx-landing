import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from "framer-motion";
import logo from '../assets/logo.svg';
import { Cpu, Activity, Brain, Shield, Terminal, Zap } from 'lucide-react';

const StarField = () => {
    // Generate static stars to avoid hydration mismatch
    const stars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: 0.2
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

const EcosystemGraph = () => {
    // Layout using Polar Coordinates (Angle & Distance)
    const nodes = [
        { id: 1, icon: <Brain size={24} />, label: "ROS 2 Native", desc: "Auto-discovery", color: "text-purple-400", angle: 270 }, // Top
        { id: 2, icon: <Cpu size={24} />, label: "Infrastructure", desc: "CPU/RAM/Net", color: "text-blue-400", angle: 330 }, // Top Right
        { id: 3, icon: <Activity size={24} />, label: "Diagnostics", desc: "Root Cause", color: "text-green-400", angle: 30 }, // Bottom Right
        { id: 4, icon: <Zap size={24} />, label: "Healing", desc: "Runbooks", color: "text-yellow-400", angle: 90 }, // Bottom
        { id: 5, icon: <Terminal size={24} />, label: "Remote Ops", desc: "Secure Shell", color: "text-pink-400", angle: 150 }, // Bottom Left
        { id: 6, icon: <Shield size={24} />, label: "Security", desc: "Audit Logs", color: "text-cyan-400", angle: 210 }, // Top Left
    ];

    const radius = 260; // Distance from center

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5 py-24 overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
             <StarField />
             
            <ScrollReveal className="max-w-4xl w-full text-center flex flex-col items-center gap-6 mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit mb-4">
                    The Missing Link
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Closing the gap in <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Robotics Operations</span>
                </h2>
                <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                    Ferronyx unifies your fragmented stack. We connect the hardware, the software, and the operations into a single, intelligent nervous system.
                </p>
            </ScrollReveal>

            {/* The Solar System Graph */}
            <ScrollReveal delay={0.2} className="relative w-full max-w-[900px] h-[700px] flex items-center justify-center perspective-[1000px]">
                
                {/* Orbital Rings (Visual) */}
                <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5 animate-spin-slow duration-[60s]"></div>
                <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5 animate-spin-slow duration-[60s] delay-75" style={{animationDirection: 'reverse'}}></div>

                {/* Center Hub */}
                <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.3)] ring-1 ring-white/10 group">
                    <img src={logo} alt="Ferronyx" className="h-16 md:h-20 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 relative" />
                    {/* Living Core Effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
                    <div className="absolute inset-[-40px] rounded-full bg-blue-500/5 blur-3xl animate-pulse delay-75"></div>
                </div>

                {/* Rotating Node Container */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    {nodes.map((node, i) => {
                        return (
                            <div
                                key={i}
                                className="absolute flex flex-col items-center justify-center pointer-events-auto"
                                style={{
                                    transform: `rotate(${node.angle}deg) translate(${radius}px) rotate(-${node.angle}deg)`,
                                    // The double rotate trick places them in circle but keeps them upright relative to the container.
                                    // BUT since the container is rotating, we need to Counter-Rotate the nodes themselves dynamically.
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                                    className="relative flex flex-col items-center justify-center"
                                >
                                    {/* Connection Beam to Center */}
                                    {/* Since this whole group orbits, the "Center" is always relative (0,0) in the parent. 
                                        But we are translated OUT by Radius. 
                                        So the line needs to go from (0,0) local to (0,0) parent.
                                        Which means x: -Radius (rotated?) No, easier:
                                        Just visual absolute line pointing 'inwards'.
                                        In local space, 'Inwards' depends on angle. 
                                        Let's just use the absolute position tricks.
                                    */}
                                    <div 
                                        className="absolute z-[-1] h-[1px] bg-gradient-to-l from-blue-500/40 to-transparent w-[260px]"
                                        style={{
                                            right: '50%', // Starts at center of node
                                            top: '50%',
                                            transformOrigin: 'right center',
                                            transform: `rotate(${node.angle}deg)` // This is static relative to the node wrapper
                                            // Wait, if the wrapper is counter-rotating, this static rotation spins relative to the wrapper.
                                            // 360 - 360 = 0. So it stays pointing in one direction relative to screen?
                                            // This math is tricky. Let's simplify:
                                            // The line should be OUTSIDE the counter-rotating div, in the "Translated" div.
                                        }}
                                    />

                                    {/* Circular Node Card */}
                                    <div className={`
                                        relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32
                                        bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full
                                        hover:border-white/40 hover:scale-110 transition-all duration-300 cursor-pointer group
                                        shadow-[0_0_30px_rgba(0,0,0,0.5)]
                                    `}>
                                        <div className={`p-2 rounded-full bg-white/5 ${node.color} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                            {node.icon}
                                        </div>
                                        <h3 className="text-[10px] md:text-xs font-bold text-white mb-0.5 leading-tight">{node.label}</h3>
                                        <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-tighter">{node.desc}</p>
                                        
                                        {/* Hover Glow */}
                                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md bg-current ${node.color}`}></div>
                                    </div>
                                    
                                </motion.div>
                                
                                {/* Connection Line - Placed OUTSIDE the counter-rotating child, so it stays fixed relative to the 'Spoke' */}
                                {/* We rotate it to point to center. Since we are at 'angle', pointing to center is angle + 180. */}
                                <div 
                                    className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-[-10]"
                                    style={{
                                        width: `${radius}px`,
                                        transformOrigin: 'left center',
                                        transform: `rotate(${node.angle + 180}deg)`
                                    }}
                                >
                                     {/* Particle flowing to center */}
                                     <motion.div 
                                        className="absolute top-[-1px] left-0 w-12 h-[3px] bg-blue-400/50 rounded-full blur-[2px]"
                                        animate={{ x: [0, radius], opacity: [0, 1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                     />
                                </div>

                            </div>
                        );
                    })}
                </motion.div>

            </ScrollReveal>
        </section>
    );
};

export default EcosystemGraph;
