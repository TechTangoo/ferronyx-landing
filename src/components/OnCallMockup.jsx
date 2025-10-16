import React from 'react';
import { colors } from '../utils/colors';
import { AlertTriangle, CheckCircle, Clock, Bell } from 'lucide-react';

const OnCallMockup = () => {
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
            <div className="relative z-10 p-4 md:p-6 h-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-white font-semibold text-sm md:text-base">Incident Management</h3>
                        <p className="text-white/50 text-xs">3 active alerts</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="px-2 md:px-3 py-1 rounded text-xs font-medium"
                            style={{backgroundColor: `${colors.primary}40`, color: colors.light}}
                        >
                            All Incidents
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
                    {[
                        { label: 'MTTR', value: '12m', sublabel: '-5m', color: 'green' },
                        { label: 'Active', value: '3', sublabel: '2 critical', color: 'red' },
                        { label: 'Resolved Today', value: '18', sublabel: '+3', color: 'blue' }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-2 md:p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <div className="text-white/60 text-xs mb-1">{stat.label}</div>
                            <div className="text-white font-bold text-lg md:text-xl">{stat.value}</div>
                            <div className={`text-xs ${
                                stat.color === 'green' ? 'text-green-400' :
                                stat.color === 'red' ? 'text-red-400' :
                                'text-blue-400'
                            }`}>
                                {stat.sublabel}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Incidents List */}
                <div className="space-y-2 md:space-y-3">

                    {/* Critical Alert */}
                    <div
                        className="p-3 rounded-lg border-l-4 animate-fadeIn"
                        style={{
                            backgroundColor: `${colors.secondary}`,
                            borderLeftColor: '#ef4444'
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                                <AlertTriangle size={16} className="text-red-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-white font-medium text-xs md:text-sm">Robot-01 CPU Threshold Exceeded</span>
                                    <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-red-500/20 text-red-400">
                                        Critical
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-white/50">
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        2m ago
                                    </span>
                                    <span>Assigned to: Alex Chen</span>
                                </div>
                            </div>
                            <button
                                className="px-2 md:px-3 py-1 rounded text-xs font-medium border"
                                style={{borderColor: `${colors.primary}60`, color: colors.light}}
                            >
                                Acknowledge
                            </button>
                        </div>
                    </div>

                    {/* Warning Alert */}
                    <div
                        className="p-3 rounded-lg border-l-4 animate-fadeIn"
                        style={{
                            backgroundColor: `${colors.secondary}`,
                            borderLeftColor: '#f59e0b',
                            animationDelay: '0.1s'
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                                <Bell size={16} className="text-yellow-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-white font-medium text-xs md:text-sm">High Memory Usage - Robot-03</span>
                                    <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
                                        Warning
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-white/50">
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        15m ago
                                    </span>
                                    <span>Escalated to L2</span>
                                </div>
                            </div>
                            <button
                                className="px-2 md:px-3 py-1 rounded text-xs font-medium"
                                style={{backgroundColor: `${colors.primary}40`, color: 'white'}}
                            >
                                View
                            </button>
                        </div>
                    </div>

                    {/* Resolved */}
                    <div
                        className="p-3 rounded-lg border-l-4 opacity-60 animate-fadeIn"
                        style={{
                            backgroundColor: `${colors.secondary}`,
                            borderLeftColor: '#10b981',
                            animationDelay: '0.2s'
                        }}
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle size={16} className="text-green-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-white font-medium text-xs md:text-sm">Camera Feed Restored</span>
                                    <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-400">
                                        Resolved
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-white/50">
                                    <span>MTTR: 8m 32s</span>
                                    <span>Resolved by: AI Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integration Badges */}
                {/*<div className="absolute bottom-4 right-4 flex gap-2">*/}
                {/*    {['Slack', 'PagerDuty'].map((service, idx) => (*/}
                {/*        <div*/}
                {/*            key={service}*/}
                {/*            className="px-2 py-1 rounded text-xs font-medium border animate-fadeIn"*/}
                {/*            style={{*/}
                {/*                backgroundColor: `${colors.secondary}`,*/}
                {/*                borderColor: `${colors.primary}40`,*/}
                {/*                color: colors.light,*/}
                {/*                animationDelay: `${0.5 + idx * 0.1}s`*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            {service}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>

            {/* Glow Effect */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl"
                style={{backgroundColor: colors.accent}}
            />
        </div>
    );
};

export default OnCallMockup;
