import React from 'react'
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import { OrbitingCircles } from "../components/ui/orbiting-circles"

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
                    <OrbitingCircles iconSize={30} radius={250} reverse speed={0.75}>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                        <p className='text-white'>●</p>
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={30} radius={350} reverse speed={0.5}>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto"
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <p className="text-white font-medium text-sm max-w-[140px]">
                                Robotics<br />Companies
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto"
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <p className="text-white font-medium text-sm max-w-[140px]">
                                Research<br />Labs
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto"
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.999 1.999 0 0 0 18.06 7h-.72c-.8 0-1.54.5-1.85 1.26l-1.92 5.77c-.14.42.08.87.5 1.01l4.48 1.5V22h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5V15H3.5v7h4z" />
                                </svg>
                            </div>
                            <p className="text-white font-medium text-sm max-w-[140px]">
                                Platform &<br />Autonomy Teams
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto"
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19A2 2 0 0 0 5 21H11V19.13L13.5 21.5C14.09 22.09 15 21.67 15 20.84V18H19A2 2 0 0 0 21 16V13C21 11.89 20.11 11 19 11H15V9H21Z" />
                                </svg>
                            </div>
                            <p className="text-white font-medium text-sm max-w-[180px]">
                                Robotics SRE /<br />DevOps Engineers
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto"
                                style={{ backgroundColor: `${colors.primary}40` }}
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" />
                                </svg>
                            </div>
                            <p className="text-white font-medium text-sm max-w-[140px]">
                                Academic & R&D<br />Teams
                            </p>
                        </div>
                    </OrbitingCircles>
                </div>
            </AnimatedContent>
        </div>
    )
}

export default Builtfor
