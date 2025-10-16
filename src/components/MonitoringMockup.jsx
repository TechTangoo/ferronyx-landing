import React from 'react';
import { colors } from '../utils/colors';
import { Activity, Cpu, HardDrive, Network } from 'lucide-react';

const MonitoringMockup = () => {
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
                        <h3 className="text-white font-semibold text-sm md:text-base">Robot-01 Metrics</h3>
                        <p className="text-white/50 text-xs">Real-time monitoring</p>
                    </div>
                    <div className="flex gap-1 md:gap-2 text-xs">
                        {['1h', '6h', '24h', '7d'].map((range, idx) => (
                            <button
                                key={range}
                                className="px-2 md:px-3 py-1 rounded transition-all"
                                style={{
                                    backgroundColor: idx === 1 ? `${colors.primary}40` : `${colors.secondary}`,
                                    color: idx === 1 ? colors.light : 'white/60'
                                }}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4">
                    {[
                        { icon: <Cpu size={16} />, label: 'CPU', value: '67%', color: 'blue' },
                        { icon: <Activity size={16} />, label: 'Memory', value: '4.2GB', color: 'green' },
                        { icon: <HardDrive size={16} />, label: 'Disk', value: '82%', color: 'yellow' },
                        { icon: <Network size={16} />, label: 'Network', value: '12 MB/s', color: 'purple' }
                    ].map((metric, idx) => (
                        <div
                            key={idx}
                            className="p-2 md:p-3 rounded-lg border animate-fadeIn"
                            style={{
                                backgroundColor: `${colors.secondary}`,
                                borderColor: `${colors.primary}30`,
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div
                                    className="p-1 rounded"
                                    style={{backgroundColor: `${colors.primary}30`}}
                                >
                                    <div style={{color: colors.light}}>
                                        {metric.icon}
                                    </div>
                                </div>
                                <span className="text-white/60 text-xs">{metric.label}</span>
                            </div>
                            <div className="text-white font-bold text-base md:text-lg">{metric.value}</div>
                            {/* Mini Progress Bar */}
                            <div className="mt-2 h-1 rounded-full bg-black/40 overflow-hidden">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: metric.value.includes('%') ? metric.value : '60%',
                                        backgroundColor: colors.primary
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">

                    {/* Live Chart */}
                    <div
                        className="p-3 md:p-4 rounded-lg border"
                        style={{
                            backgroundColor: `${colors.secondary}`,
                            borderColor: `${colors.primary}30`
                        }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-white/70 text-xs md:text-sm font-medium">CPU Usage</span>
                            <span className="text-xs px-2 py-0.5 rounded" style={{backgroundColor: `${colors.primary}40`, color: colors.light}}>
                                Live
                            </span>
                        </div>
                        <div className="relative h-16 md:h-20">
                            <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="cpuGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor={colors.primary} stopOpacity="0.5" />
                                        <stop offset="100%" stopColor={colors.primary} stopOpacity="0.0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,45 L15,40 L30,42 L45,35 L60,30 L75,33 L90,25 L105,28 L120,22 L135,20 L150,25 L165,18 L180,15 L200,20"
                                    fill="none"
                                    stroke={colors.primary}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M0,45 L15,40 L30,42 L45,35 L60,30 L75,33 L90,25 L105,28 L120,22 L135,20 L150,25 L165,18 L180,15 L200,20 L200,60 L0,60 Z"
                                    fill="url(#cpuGradient)"
                                />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/40 px-1">
                                <span>-6m</span>
                                <span>-3m</span>
                                <span>now</span>
                            </div>
                        </div>
                    </div>

                    {/* ROS Topics */}
                    <div
                        className="p-3 md:p-4 rounded-lg border"
                        style={{
                            backgroundColor: `${colors.secondary}`,
                            borderColor: `${colors.primary}30`
                        }}
                    >
                        <div className="text-white/70 text-xs md:text-sm font-medium mb-3">Active ROS Topics</div>
                        <div className="space-y-2">
                            {[
                                { name: '/camera/image_raw', hz: '30 Hz', status: 'healthy' },
                                { name: '/odom', hz: '50 Hz', status: 'healthy' },
                                { name: '/scan', hz: '10 Hz', status: 'healthy' },
                                { name: '/cmd_vel', hz: '5 Hz', status: 'warning' }
                            ].map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-2 rounded"
                                    style={{backgroundColor: `${colors.forebackground}`}}
                                >
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                            topic.status === 'healthy' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'
                                        }`} />
                                        <span className="text-white/80 font-mono text-xs truncate">{topic.name}</span>
                                    </div>
                                    <span className="text-white/50 text-xs ml-2 flex-shrink-0">{topic.hz}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="absolute -bottom-20 left-0 w-96 h-96 opacity-20 blur-3xl"
                style={{backgroundColor: colors.primary}}
            />
        </div>
    );
};

export default MonitoringMockup;
