import React from 'react';
import { colors } from '../utils/colors';
import { Activity, Cpu, HardDrive, TrendingUp, AlertTriangle, Bot, Network, CheckCircle } from 'lucide-react';

const DashboardIllustration = () => {
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

            {/* Main Content */}
            <div className="relative z-10 p-4 md:p-6 h-full">

                {/* Header Bar */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/60" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-white/60 text-xs font-mono">Ferronyx Dashboard</span>
                    </div>
                    <div className="h-5 px-2 rounded border flex items-center gap-1.5" style={{borderColor: `${colors.primary}40`, backgroundColor: `${colors.primary}20`}}>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs" style={{color: colors.light}}>Live</span>
                    </div>
                </div>

                {/* Top Stats Bar */}
                <div className="grid grid-cols-4 gap-2 mb-3 md:mb-4">
                    {[
                        { label: 'Fleet Health', value: '94%', color: '#10b981' },
                        { label: 'Active Bots', value: '24', color: '#3b82f6' },
                        { label: 'Uptime', value: '99.9%', color: '#10b981' },
                        { label: 'Alerts', value: '3', color: '#ef4444' }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-2 rounded border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${stat.color}30`,
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <div className="text-white/60 text-xs mb-1">{stat.label}</div>
                            <div className="text-white font-bold text-sm md:text-base">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-3">

                    {/* Left Section */}
                    <div className="space-y-3">

                        {/* Metrics Mini Cards */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.2s'
                            }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white/70 text-xs font-medium">Robot-01 Status</span>
                                <span className="text-xs px-1.5 py-0.5 rounded" style={{backgroundColor: `${colors.primary}40`, color: colors.light}}>
                                    Live
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { icon: <Cpu size={12} />, label: 'CPU', value: '67%', color: '#3b82f6' },
                                    { icon: <Activity size={12} />, label: 'Memory', value: '4.2GB', color: '#10b981' },
                                    { icon: <HardDrive size={12} />, label: 'Disk', value: '82%', color: '#f59e0b' },
                                    { icon: <Network size={12} />, label: 'Network', value: '12MB/s', color: colors.primary }
                                ].map((metric, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5">
                                        <div className="p-1 rounded" style={{backgroundColor: `${metric.color}30`}}>
                                            <div style={{color: metric.color}}>{metric.icon}</div>
                                        </div>
                                        <div>
                                            <div className="text-white/50 text-xs">{metric.label}</div>
                                            <div className="text-white text-xs font-bold">{metric.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Assistant Preview */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.3s'
                            }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1 rounded" style={{backgroundColor: `${colors.primary}30`}}>
                                    <Bot size={12} style={{color: colors.primary}} />
                                </div>
                                <span className="text-white/70 text-xs">AI Debug Assistant</span>
                            </div>

                            <div className="space-y-1.5">
                                <div className="p-1.5 rounded text-xs" style={{backgroundColor: `${colors.primary}20`}}>
                                    <p className="text-white/80">Why did camera feed stop?</p>
                                </div>
                                <div className="p-1.5 rounded text-xs" style={{backgroundColor: `${colors.forebackground}`}}>
                                    <p className="text-white/60 mb-1">USB bandwidth exhausted</p>
                                    <div className="flex gap-1">
                                        <button className="px-2 py-0.5 rounded text-xs" style={{backgroundColor: `${colors.primary}`, color: 'white'}}>
                                            Fix
                                        </button>
                                        <button className="px-2 py-0.5 rounded text-xs border" style={{borderColor: `${colors.primary}40`, color: colors.light}}>
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROS Topics Mini */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.4s'
                            }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white/70 text-xs">Active ROS Topics</span>
                                <span className="text-white/50 text-xs">24 topics</span>
                            </div>
                            <div className="space-y-1">
                                {[
                                    { name: '/camera/image_raw', hz: '30Hz', color: '#10b981' },
                                    { name: '/odom', hz: '50Hz', color: '#10b981' },
                                    { name: '/cmd_vel', hz: '5Hz', color: '#f59e0b' }
                                ].map((topic, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-1.5 rounded" style={{backgroundColor: `${colors.forebackground}`}}>
                                        <div className="flex items-center gap-1.5 flex-1 min-w-0">
                                            <div className="w-1 h-1 rounded-full animate-pulse" style={{backgroundColor: topic.color}} />
                                            <span className="text-white/70 font-mono text-xs truncate">{topic.name}</span>
                                        </div>
                                        <span className="text-white/40 text-xs">{topic.hz}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-3">

                        {/* Alerts */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.5s'
                            }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-1.5">
                                    <div className="p-1 rounded" style={{backgroundColor: '#ef444430'}}>
                                        <AlertTriangle size={12} style={{color: '#ef4444'}} />
                                    </div>
                                    <span className="text-white/70 text-xs">Active Alerts</span>
                                </div>
                                <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">3</span>
                            </div>

                            <div className="space-y-1.5">
                                {[
                                    { robot: 'Robot-03', issue: 'CPU threshold exceeded', time: '2m', color: '#ef4444' },
                                    { robot: 'Robot-01', issue: 'High memory usage', time: '15m', color: '#f59e0b' },
                                    { robot: 'Robot-04', issue: 'Network latency', time: '28m', color: '#f59e0b' }
                                ].map((alert, idx) => (
                                    <div
                                        key={idx}
                                        className="p-1.5 rounded border-l-2 text-xs"
                                        style={{
                                            backgroundColor: `${colors.forebackground}`,
                                            borderLeftColor: alert.color
                                        }}
                                    >
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className="text-white font-medium text-xs">{alert.robot}</span>
                                            <span className="text-white/50 text-xs">{alert.time}</span>
                                        </div>
                                        <p className="text-white/60 text-xs">{alert.issue}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Chart */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.6s'
                            }}
                        >
                            <div className="flex items-center gap-1.5 mb-2">
                                <div className="p-1 rounded" style={{backgroundColor: `${colors.primary}30`}}>
                                    <TrendingUp size={12} style={{color: colors.primary}} />
                                </div>
                                <span className="text-white/70 text-xs">Fleet CPU Usage</span>
                            </div>

                            <div className="h-16 md:h-20">
                                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.5" />
                                            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,45 L20,42 L40,38 L60,35 L80,32 L100,28 L120,25 L140,22 L160,20 L180,18 L200,20 L200,60 L0,60 Z"
                                        fill="url(#chartGrad)"
                                    />
                                    <path
                                        d="M0,45 L20,42 L40,38 L60,35 L80,32 L100,28 L120,25 L140,22 L160,20 L180,18 L200,20"
                                        fill="none"
                                        stroke={colors.primary}
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between text-xs text-white/40 mt-1">
                                <span>-6h</span>
                                <span>-3h</span>
                                <span>now</span>
                            </div>
                        </div>

                        {/* Activity Feed */}
                        <div
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: '0.7s'
                            }}
                        >
                            <div className="text-white/70 text-xs mb-2">Recent Activity</div>
                            <div className="space-y-1">
                                {[
                                    { text: 'Fleet diagnostic complete', time: '5m', color: '#10b981' },
                                    { text: 'Robot-01 firmware updated', time: '12m', color: '#10b981' },
                                    { text: 'Alert acknowledged', time: '1h', color: '#f59e0b' }
                                ].map((activity, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-1.5 rounded" style={{backgroundColor: `${colors.forebackground}`}}>
                                        <CheckCircle size={10} style={{color: activity.color}} />
                                        <span className="text-white/70 text-xs flex-1">{activity.text}</span>
                                        <span className="text-white/40 text-xs">{activity.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-20 blur-3xl"
                style={{backgroundColor: colors.primary}}
            />
        </div>
    );
};

export default DashboardIllustration;
