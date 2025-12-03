import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';
import { Bot, User, Play, Edit, X, Sparkles } from 'lucide-react';

// Matches the real dashboard styling
const AIDebugMockup = () => {
    const [typingIndex, setTypingIndex] = useState(0);
    const aiResponse = "Analyzing /camera/image_raw topic...";

    useEffect(() => {
        if (typingIndex < aiResponse.length) {
            const timer = setTimeout(() => {
                setTypingIndex(typingIndex + 1);
            }, 40);
            return () => clearTimeout(timer);
        }
    }, [typingIndex]);

    return (
        <div
            className="relative w-full rounded-xl overflow-hidden shadow-2xl"
            style={{
                background: '#0f0f14',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 ml-4">
                    <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-white/50 max-w-xs">
                        app.ferronyx.com/ai-debug
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {/* Header */}
                <div
                    className="rounded-lg p-4 flex items-center justify-between"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${colors.primary}30` }}>
                            <Sparkles className="w-5 h-5" style={{ color: colors.primary }} />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-sm">AI Debug Assistant</div>
                            <div className="text-white/50 text-[10px]">Powered by Ferronyx AI</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white/50 text-[10px]">Online</span>
                    </div>
                </div>

                {/* Chat area */}
                <div
                    className="rounded-lg p-4 space-y-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    {/* User message */}
                    <div className="flex justify-end">
                        <div className="flex items-start gap-2 max-w-[80%]">
                            <div
                                className="p-3 rounded-lg"
                                style={{ background: `${colors.primary}30` }}
                            >
                                <p className="text-white text-xs">
                                    Why did the camera feed stop on RB-001?
                                </p>
                            </div>
                            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${colors.primary}50` }}>
                                <User size={14} className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-start">
                        <div className="flex items-start gap-2 max-w-[90%]">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${colors.accent}50` }}>
                                <Bot size={14} className="text-white" />
                            </div>
                            <div>
                                <div
                                    className="p-3 rounded-lg"
                                    style={{ background: 'rgba(0,0,0,0.3)' }}
                                >
                                    <p className="text-white/90 text-xs mb-3">
                                        {aiResponse.substring(0, typingIndex)}
                                        {typingIndex < aiResponse.length && (
                                            <span className="inline-block w-0.5 h-3 ml-0.5 bg-white/60 animate-pulse" />
                                        )}
                                    </p>

                                    {typingIndex >= aiResponse.length && (
                                        <>
                                            {/* Issue found */}
                                            <div className="p-2 rounded bg-red-500/10 border border-red-500/20 mb-3">
                                                <div className="text-red-400 text-[10px] font-medium mb-1">Issue Detected:</div>
                                                <div className="font-mono text-[10px] text-white/80">
                                                    <div>● USB bandwidth exhausted</div>
                                                    <div className="text-white/50 ml-3">/dev/video0: Device busy</div>
                                                </div>
                                            </div>

                                            {/* Suggested fix */}
                                            <div className="text-white/50 text-[10px] mb-2">Suggested fix:</div>
                                            <div
                                                className="p-2 rounded font-mono text-[10px]"
                                                style={{ background: 'rgba(0,0,0,0.4)' }}
                                            >
                                                <span style={{ color: colors.primary }}>rosnode</span>
                                                <span className="text-white"> restart camera_node</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Action buttons */}
                                {typingIndex >= aiResponse.length && (
                                    <div className="flex gap-2 mt-2">
                                        <button
                                            className="flex items-center gap-1 px-3 py-1.5 rounded text-[10px] font-medium transition-all hover:scale-105"
                                            style={{ backgroundColor: colors.primary, color: 'white' }}
                                        >
                                            <Play size={10} />
                                            Execute
                                        </button>
                                        <button
                                            className="flex items-center gap-1 px-3 py-1.5 rounded text-[10px] font-medium border transition-all hover:bg-white/5"
                                            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                                        >
                                            <Edit size={10} />
                                            Edit
                                        </button>
                                        <button
                                            className="flex items-center gap-1 px-3 py-1.5 rounded text-[10px] font-medium border transition-all hover:bg-white/5"
                                            style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'white/60' }}
                                        >
                                            <X size={10} />
                                            Dismiss
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div
                    className="rounded-lg p-3 flex items-center gap-3"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <input
                        type="text"
                        placeholder="Ask about your robots..."
                        className="flex-1 bg-transparent text-white text-xs placeholder-white/30 outline-none"
                        disabled
                    />
                    <div
                        className="p-2 rounded-lg cursor-pointer"
                        style={{ background: `${colors.primary}40` }}
                    >
                        <Sparkles size={14} style={{ color: colors.primaryLight }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIDebugMockup;
