import React from 'react';
import { colors } from '../utils/colors';
import { AlertTriangle, CheckCircle, Clock, Bell, TrendingDown, Users } from 'lucide-react';

// Matches the real dashboard styling
const OnCallMockup = () => {
    const stats = [
        { label: 'MTTR', value: '12m', change: '-5m', positive: true },
        { label: 'Active Alerts', value: '3', change: '2 critical', positive: false },
        { label: 'Resolved Today', value: '18', change: '+3', positive: true },
    ];

    const incidents = [
        {
            robot: 'RB-001',
            message: 'CPU Threshold Exceeded',
            severity: 'critical',
            time: '2m ago',
            assignee: 'Alex Chen'
        },
        {
            robot: 'RB-003',
            message: 'High Memory Usage',
            severity: 'warning',
            time: '15m ago',
            assignee: 'Escalated to L2'
        },
        {
            robot: 'RB-007',
            message: 'Camera Feed Restored',
            severity: 'resolved',
            time: '32m ago',
            assignee: 'AI Assistant'
        },
    ];

    const getSeverityStyle = (severity) => {
        switch (severity) {
            case 'critical':
                return { bg: 'bg-red-500/20', text: 'text-red-400', border: '#ef4444', icon: AlertTriangle };
            case 'warning':
                return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: '#f59e0b', icon: Bell };
            case 'resolved':
                return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: '#10b981', icon: CheckCircle };
            default:
                return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: '#6b7280', icon: Bell };
        }
    };

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
                        app.ferronyx.com/incidents
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg p-3"
                            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="text-[10px] text-white/50 font-medium mb-1">{stat.label}</div>
                            <div className="text-xl font-bold text-white">{stat.value}</div>
                            <div className={`text-[10px] ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* On-call schedule preview */}
                <div
                    className="rounded-lg p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-white">Current On-Call</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Active</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                            <div className="text-white text-sm font-medium">Alex Chen</div>
                            <div className="text-white/50 text-[10px]">Primary • Ends in 4h 32m</div>
                        </div>
                    </div>
                </div>

                {/* Incidents list */}
                <div
                    className="rounded-lg p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                    <div className="text-sm font-semibold text-white mb-3">Active Incidents</div>
                    <div className="space-y-2">
                        {incidents.map((incident, idx) => {
                            const style = getSeverityStyle(incident.severity);
                            const Icon = style.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-3 rounded-lg border-l-4"
                                    style={{
                                        background: 'rgba(0,0,0,0.3)',
                                        borderLeftColor: style.border
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <Icon className={`w-4 h-4 mt-0.5 ${style.text}`} />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-white text-xs font-medium">{incident.robot}</span>
                                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${style.bg} ${style.text}`}>
                                                    {incident.severity}
                                                </span>
                                            </div>
                                            <div className="text-white/70 text-[10px] mb-1">{incident.message}</div>
                                            <div className="flex items-center gap-3 text-[9px] text-white/40">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {incident.time}
                                                </span>
                                                <span>{incident.assignee}</span>
                                            </div>
                                        </div>
                                        {incident.severity !== 'resolved' && (
                                            <button
                                                className="px-2 py-1 rounded text-[9px] font-medium"
                                                style={{ background: `${colors.primary}40`, color: 'white' }}
                                            >
                                                Ack
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnCallMockup;
