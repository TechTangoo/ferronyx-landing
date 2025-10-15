import React from 'react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import { OrbitingCircles } from "../components/ui/orbiting-circles"
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';

function Builtfor() {
    return (
        <div className='relative h-screen w-screen overflow-hidden' style={{ backgroundColor: colors.background }}>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}, ${colors.accent} 40%, transparent 70%)`,
                    filter: 'blur(60px)'
                }}
            />
            <AnimatedContent duration={1} delay={0.5}>
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative w-80 h-80 flex items-center justify-center rounded-full border-2"
                        style={{
                            borderColor: `${colors.primary}80`,
                            background: `radial-gradient(circle, ${colors.primary}20, transparent)`
                        }}
                    >
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Who We're
                            </h2>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Built For
                            </h2>
                        </div>
                    </div>
                    <OrbitingCircles >
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={30} radius={250} reverse speed={0.5}>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={30} radius={350} reverse speed={0.2}>
                        <div className="text-center">
                            <div
                                className={`w-26 h-26 flex items-center justify-center rounded-full mb-4 mx-auto`}
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <img src={robotics} alt="robotics" className="w-16 h-16" />
                            </div>
                            <p className="text-white font-medium text-lg text-nowrap">
                                Robotics Companies
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className={`w-26 h-26 flex items-center justify-center rounded-full mb-4 mx-auto `}
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <img src={research} alt="robotics" className="w-16 h-16" />
                            </div>
                            <p className="text-white font-medium text-lg text-nowrap">
                                Research Labs
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className={`w-26 h-26 flex items-center justify-center rounded-full mb-4 mx-auto `}
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <img src={teams} alt="robotics" className="w-16 h-16" />
                            </div>
                            <p className="text-white font-medium text-lg text-nowrap">
                                Platform & Autonomy Teams
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className={`w-26 h-26 flex items-center justify-center rounded-full mb-4 mx-auto `}
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <img src={sreengineer} alt="robotics" className="w-16 h-16" />
                            </div>
                            <p className="text-white font-medium text-lg text-nowrap">
                                Robotics SRE /<br/>DevOps Engineers
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className={`w-26 h-26 flex items-center justify-center rounded-full mb-4 mx-auto `}
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <img src={academics} alt="robotics" className="w-16 h-16" />
                            </div>
                            <p className="text-white font-medium text-lg text-nowrap">
                                Academic & R&D Teams
                            </p>
                        </div>
                    </OrbitingCircles>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Builtfor
