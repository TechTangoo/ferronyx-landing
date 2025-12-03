import React from 'react';
import { colors } from '../utils/colors';

// Robot status colors
const statusColors = {
    online: '#10b981',      // Green - healthy
    warning: '#f59e0b',     // Orange - warning
    offline: '#6b7280',     // Gray - offline
    critical: '#ef4444',    // Red - critical
    idle: '#3b82f6',        // Blue - idle/standby
};

// Honeycomb grid data - represents robot fleet status
const honeycombData = [
    // Row 1
    { status: 'online', row: 0, col: 0 },
    { status: 'online', row: 0, col: 1 },
    { status: 'warning', row: 0, col: 2 },
    // Row 2 (offset)
    { status: 'online', row: 1, col: 0 },
    { status: 'idle', row: 1, col: 1 },
    { status: 'online', row: 1, col: 2 },
    { status: 'online', row: 1, col: 3 },
    // Row 3
    { status: 'online', row: 2, col: 0 },
    { status: 'online', row: 2, col: 1 },
    { status: 'critical', row: 2, col: 2 },
    { status: 'online', row: 2, col: 3 },
    // Row 4 (offset)
    { status: 'idle', row: 3, col: 0 },
    { status: 'online', row: 3, col: 1 },
    { status: 'online', row: 3, col: 2 },
    { status: 'warning', row: 3, col: 3 },
    // Row 5
    { status: 'online', row: 4, col: 1 },
    { status: 'online', row: 4, col: 2 },
    { status: 'online', row: 4, col: 3 },
];

function Hexagon({ status, style, delay = 0 }) {
    const color = statusColors[status];

    return (
        <div
            className="absolute transition-all duration-500"
            style={{
                ...style,
                animation: `fadeInScale 0.6s ease-out ${delay}s both`
            }}
        >
            <svg
                width="60"
                height="52"
                viewBox="0 0 60 52"
                className="drop-shadow-lg"
            >
                <defs>
                    <linearGradient id={`grad-${status}-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.6 }} />
                    </linearGradient>
                </defs>
                <polygon
                    points="30,2 56,15 56,37 30,50 4,37 4,15"
                    fill={`url(#grad-${status}-${delay})`}
                    stroke={color}
                    strokeWidth="1"
                    strokeOpacity="0.5"
                />
                {/* Robot icon inside hexagon */}
                <g transform="translate(22, 18)" fill="white" opacity="0.9">
                    <rect x="2" y="0" width="12" height="8" rx="2" />
                    <rect x="0" y="10" width="16" height="10" rx="1" />
                    <circle cx="5" cy="4" r="1.5" />
                    <circle cx="11" cy="4" r="1.5" />
                    <rect x="6" y="22" width="1.5" height="4" />
                    <rect x="9" y="22" width="1.5" height="4" />
                </g>
            </svg>
            {/* Status pulse for online/warning */}
            {(status === 'online' || status === 'warning' || status === 'critical') && (
                <div
                    className="absolute top-1 right-1 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: color }}
                />
            )}
        </div>
    );
}

function RobotHoneycomb() {
    const hexWidth = 60;
    const hexHeight = 52;
    const horizontalSpacing = hexWidth * 0.78;
    const verticalSpacing = hexHeight * 0.75;

    return (
        <div className="relative w-[320px] h-[280px]">
            {/* Glow effect behind honeycomb */}
            <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                    background: `radial-gradient(circle at center, ${colors.primary}50, transparent 70%)`
                }}
            />

            {honeycombData.map((hex, idx) => {
                const isOffsetRow = hex.row % 2 === 1;
                const x = hex.col * horizontalSpacing + (isOffsetRow ? horizontalSpacing / 2 : 0);
                const y = hex.row * verticalSpacing;

                return (
                    <Hexagon
                        key={idx}
                        status={hex.status}
                        delay={idx * 0.05}
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                        }}
                    />
                );
            })}

            {/* Alert popup mockup */}
            <div
                className="absolute -top-2 -right-4 bg-gray-900 rounded-lg px-3 py-2 shadow-xl border animate-pulse"
                style={{
                    borderColor: statusColors.warning,
                    animation: 'float 3s ease-in-out infinite'
                }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColors.warning }} />
                    <span className="text-xs text-white font-medium">Battery: 15%</span>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
            `}</style>
        </div>
    );
}

export default RobotHoneycomb;
