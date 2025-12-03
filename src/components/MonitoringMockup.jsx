import React from 'react';
import { colors } from '../utils/colors';
import { Activity, Cpu, HardDrive, Wifi, Bot, Battery, MapPin, TrendingUp } from 'lucide-react';

// Matches the real dashboard styling
const MonitoringMockup = () => {
    const metrics = [
        { icon: Bot, label: 'Total Robots', value: '24', color: colors.primary },
        { icon: Wifi, label: 'Active', value: '18', color: '#10b981' },
        { icon: Battery, label: 'Avg Battery', value: '73%', color: '#3b82f6' },
    ];

    const robots = [
        { id: 'RB-001', location: 'Warehouse A', status: 'active', cpu: '45%', memory: '2.1GB' },
        { id: 'RB-003', location: 'Manufacturing', status: 'active', cpu: '67%', memory: '3.4GB' },
        { id: 'RB-007', location: 'Loading Dock', status: 'active', cpu: '32%', memory: '1.8GB' },
        { id: 'RB-012', location: 'Outdoor', status: 'warning', cpu: '89%', memory: '4.2GB' },
    ];

    const chartPoints = [12, 18, 25, 32, 28, 35, 30, 42, 38, 45, 40, 48];

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
                        app.ferronyx.com/monitoring
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                    {metrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg p-3"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] text-white/50 font-medium">{metric.label}</span>
                                <metric.icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                            </div>
                            <div className="text-xl font-bold text-white">{metric.value}</div>
                        </div>
                    ))}
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* CPU Chart */}
                    <div
                        className="rounded-lg p-4"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-white">Fleet CPU Usage</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">Live</span>
                        </div>
                        <div className="h-20 flex items-end gap-1">
                            {chartPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 rounded-t transition-all duration-300"
                                    style={{
                                        height: `${(point / 50) * 100}%`,
                                        background: point > 40
                                            ? 'linear-gradient(to top, #f59e0b80, #f59e0b20)'
                                            : `linear-gradient(to top, ${colors.primary}80, ${colors.primary}20)`
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-[8px] text-white/30">
                            <span>-6h</span>
                            <span>-3h</span>
                            <span>now</span>
                        </div>
                    </div>

                    {/* ROS Topics */}
                    <div
                        className="rounded-lg p-4"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                        <div className="text-sm font-semibold text-white mb-3">Active ROS Topics</div>
                        <div className="space-y-2">
                            {[
                                { name: '/camera/image_raw', hz: '30 Hz', ok: true },
                                { name: '/odom', hz: '50 Hz', ok: true },
                                { name: '/scan', hz: '10 Hz', ok: true },
                                { name: '/cmd_vel', hz: '5 Hz', ok: false },
                            ].map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-2 rounded"
                                    style={{ background: 'rgba(0,0,0,0.3)' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${topic.ok ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
                                        <span className="text-white/70 font-mono text-[10px]">{topic.name}</span>
                                    </div>
                                    <span className="text-white/40 text-[10px]">{topic.hz}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Robot table */}
                <div
                    className="rounded-lg p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <div className="text-sm font-semibold text-white mb-3">Robot Metrics</div>
                    <div className="overflow-hidden rounded border border-white/10">
                        <table className="w-full text-[10px]">
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <th className="text-left p-2 text-white/50 font-medium">Robot</th>
                                    <th className="text-left p-2 text-white/50 font-medium">Location</th>
                                    <th className="text-left p-2 text-white/50 font-medium">CPU</th>
                                    <th className="text-left p-2 text-white/50 font-medium">Memory</th>
                                </tr>
                            </thead>
                            <tbody>
                                {robots.map((robot, idx) => (
                                    <tr key={idx} className="border-t border-white/5">
                                        <td className="p-2 text-white font-medium">{robot.id}</td>
                                        <td className="p-2 text-white/60 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {robot.location}
                                        </td>
                                        <td className="p-2">
                                            <span className={parseInt(robot.cpu) > 80 ? 'text-amber-400' : 'text-emerald-400'}>
                                                {robot.cpu}
                                            </span>
                                        </td>
                                        <td className="p-2 text-white/60">{robot.memory}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitoringMockup;
