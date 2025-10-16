import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';
import { Bot, User, Play, Edit, X } from 'lucide-react';

const AIDebugMockup = () => {
    const [typingIndex, setTypingIndex] = useState(0);
    const aiResponse = "Analyzing /camera/image_raw topic... Issue detected:";

    useEffect(() => {
        if (typingIndex < aiResponse.length) {
            const timer = setTimeout(() => {
                setTypingIndex(typingIndex + 1);
            }, 30);
            return () => clearTimeout(timer);
        }
    }, [typingIndex]);

    return (
        <div className="relative w-full aspect-video rounded-xl border overflow-hidden"
             style={{
                 backgroundColor: `${colors.forebackground}`,
                 borderColor: `${colors.primary}40`
             }}>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full"
                     style={{
                         backgroundImage: `linear-gradient(${colors.primary}40 1px, transparent 1px), linear-gradient(90deg, ${colors.primary}40 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                     }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b" style={{borderColor: `${colors.primary}30`}}>
                    <div className="flex items-center gap-2">
                        <Bot size={20} color={colors.primary} />
                        <span className="text-white font-semibold text-sm md:text-base">AI Debug Assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/50 text-xs">Online</span>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-hidden space-y-3 md:space-y-4 mb-4">

                    {/* User Message */}
                    <div className="flex justify-end animate-fadeIn">
                        <div className="max-w-[85%] md:max-w-[70%]">
                            <div className="flex items-start gap-2 justify-end">
                                <div
                                    className="p-2 md:p-3 rounded-lg"
                                    style={{backgroundColor: `${colors.primary}40`}}
                                >
                                    <p className="text-white text-xs md:text-sm">
                                        Why did the camera feed stop on robot-01?
                                    </p>
                                </div>
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                     style={{backgroundColor: `${colors.primary}60`}}>
                                    <User size={14} color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start animate-fadeIn" style={{animationDelay: '0.3s'}}>
                        <div className="max-w-[90%] md:max-w-[80%]">
                            <div className="flex items-start gap-2">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                     style={{backgroundColor: `${colors.accent}60`}}>
                                    <Bot size={14} color={colors.light} />
                                </div>
                                <div>
                                    <div
                                        className="p-2 md:p-3 rounded-lg mb-2"
                                        style={{backgroundColor: `${colors.secondary}`}}
                                    >
                                        <p className="text-white/90 text-xs md:text-sm mb-2">
                                            {aiResponse.substring(0, typingIndex)}
                                            {typingIndex < aiResponse.length && (
                                                <span className="inline-block w-1 h-4 ml-1 bg-white/60 animate-pulse" />
                                            )}
                                        </p>

                                        {typingIndex >= aiResponse.length && (
                                            <>
                                                <div
                                                    className="mt-3 p-2 rounded font-mono text-xs bg-black/40 text-green-400"
                                                >
                                                    <div>● USB bandwidth exhausted</div>
                                                    <div className="mt-1 text-white/70">  /dev/video0: Device busy</div>
                                                </div>

                                                {/* Suggested Fix */}
                                                <div className="mt-3 pt-3 border-t" style={{borderColor: `${colors.primary}30`}}>
                                                    <p className="text-white/70 text-xs mb-2">Suggested fix:</p>
                                                    <div
                                                        className="p-2 rounded font-mono text-xs"
                                                        style={{backgroundColor: `${colors.forebackground}`}}
                                                    >
                                                        <span style={{color: colors.accent}}>rosnode</span>
                                                        <span className="text-white"> restart camera_node</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    {typingIndex >= aiResponse.length && (
                                        <div className="flex gap-2 ml-2 animate-fadeIn">
                                            <button
                                                className="flex items-center gap-1 px-2 md:px-3 py-1.5 rounded text-xs font-medium transition-all hover:scale-105"
                                                style={{backgroundColor: colors.primary, color: 'white'}}
                                            >
                                                <Play size={12} />
                                                <span className="hidden md:inline">Execute</span>
                                            </button>
                                            <button
                                                className="flex items-center gap-1 px-2 md:px-3 py-1.5 rounded text-xs font-medium border transition-all hover:bg-white/5"
                                                style={{borderColor: `${colors.primary}60`, color: colors.light}}
                                            >
                                                <Edit size={12} />
                                                <span className="hidden md:inline">Edit</span>
                                            </button>
                                            <button
                                                className="flex items-center gap-1 px-2 md:px-3 py-1.5 rounded text-xs font-medium border transition-all hover:bg-white/5"
                                                style={{borderColor: `${colors.primary}40`, color: 'white/60'}}
                                            >
                                                <X size={12} />
                                                <span className="hidden md:inline">Dismiss</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Box */}
                <div
                    className="flex items-center gap-2 p-2 md:p-3 rounded-lg border"
                    style={{
                        backgroundColor: `${colors.secondary}`,
                        borderColor: `${colors.primary}30`
                    }}
                >
                    <input
                        type="text"
                        placeholder="Ask about your robots..."
                        className="flex-1 bg-transparent text-white text-xs md:text-sm placeholder-white/40 outline-none"
                        disabled
                    />
                    <div
                        className="p-1.5 md:p-2 rounded cursor-pointer"
                        style={{backgroundColor: `${colors.primary}40`}}
                    >
                        <Bot size={16} color={colors.light} />
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="absolute -top-20 right-0 w-96 h-96 opacity-20 blur-3xl"
                style={{backgroundColor: colors.accent}}
            />
        </div>
    );
};

export default AIDebugMockup;
