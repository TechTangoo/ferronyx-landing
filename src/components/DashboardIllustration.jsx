import React from 'react';
import { colors } from '../utils/colors';

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
            <div className="relative z-10 p-6 md:p-8 h-full">

                {/* Header Bar */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-white/60 text-sm font-mono">Ferronyx Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-6 w-20 rounded border" style={{borderColor: `${colors.primary}40`, backgroundColor: `${colors.primary}20`}}>
                            <div className="flex items-center justify-center h-full text-xs" style={{color: colors.light}}>Live</div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                    {[
                        { label: 'Active Robots', value: '24', change: '+2', trend: 'up' },
                        { label: 'CPU Usage', value: '67%', change: '-5%', trend: 'down' },
                        { label: 'Alerts', value: '3', change: 'New', trend: 'alert' },
                        { label: 'Uptime', value: '99.9%', change: 'Good', trend: 'stable' }
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.primary}10`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <div className="text-white/50 text-xs mb-1">{stat.label}</div>
                            <div className="flex items-end justify-between">
                                <div className="text-white font-bold text-lg md:text-xl">{stat.value}</div>
                                <div className={`text-xs ${
                                    stat.trend === 'up' ? 'text-green-400' :
                                    stat.trend === 'down' ? 'text-blue-400' :
                                    stat.trend === 'alert' ? 'text-red-400' :
                                    'text-white/60'
                                }`}>
                                    {stat.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* CPU Chart */}
                    <div
                        className="p-4 rounded-lg border"
                        style={{
                            backgroundColor: `${colors.forebackground}`,
                            borderColor: `${colors.primary}30`
                        }}
                    >
                        <div className="text-white/70 text-sm mb-3">CPU Usage - Robot-01</div>
                        <div className="relative h-20">
                            {/* Animated Line Chart */}
                            <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
                                        <stop offset="100%" stopColor={colors.primary} stopOpacity="0.0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,40 L20,35 L40,38 L60,30 L80,25 L100,28 L120,20 L140,22 L160,18 L180,15 L200,17"
                                    fill="none"
                                    stroke={colors.primary}
                                    strokeWidth="2"
                                    className="animate-pulse"
                                />
                                <path
                                    d="M0,40 L20,35 L40,38 L60,30 L80,25 L100,28 L120,20 L140,22 L160,18 L180,15 L200,17 L200,50 L0,50 Z"
                                    fill="url(#gradient1)"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* ROS Topics */}
                    <div
                        className="p-4 rounded-lg border"
                        style={{
                            backgroundColor: `${colors.forebackground}`,
                            borderColor: `${colors.primary}30`
                        }}
                    >
                        <div className="text-white/70 text-sm mb-3">ROS Topics</div>
                        <div className="space-y-2">
                            {[
                                { name: '/camera/image', hz: '30 Hz', status: 'active' },
                                { name: '/odom', hz: '50 Hz', status: 'active' },
                                { name: '/cmd_vel', hz: '10 Hz', status: 'warning' }
                            ].map((topic, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${
                                            topic.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'
                                        }`} />
                                        <span className="text-white/80 font-mono">{topic.name}</span>
                                    </div>
                                    <span className="text-white/50">{topic.hz}</span>
                                </div>
                            ))}
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
