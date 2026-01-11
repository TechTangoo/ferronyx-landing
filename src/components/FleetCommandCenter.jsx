import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';
import { Activity, Terminal, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const FleetCommandCenter = () => {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullCommand = `$ ros2 topic list
/camera/image_raw
/odom
/scan
/cmd_vel
$ ros2 topic hz /scan
average rate: 30.012`;

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCommand.length) {
        setTerminalText(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Robot data
  const robots = [
    { id: '01', cpu: 67, status: 'online', cpuHistory: [45, 52, 48, 67, 65, 70, 67] },
    { id: '02', cpu: 45, status: 'online', cpuHistory: [38, 42, 40, 45, 43, 46, 45] },
    { id: '07', cpu: 89, status: 'critical', cpuHistory: [65, 72, 78, 85, 88, 90, 89] },
  ];

  // Network topology nodes
  const nodes = [
    { id: 1, x: 50, y: 40, label: '/camera' },
    { id: 2, x: 50, y: 60, label: '/lidar' },
    { id: 3, x: 25, y: 50, label: '/nav' },
    { id: 4, x: 75, y: 50, label: '/ctrl' },
  ];

  const topics = [
    { name: '/cmd_vel', hz: '50.2', type: 'Twist' },
    { name: '/odom', hz: '30.1', type: 'Odometry' },
    { name: '/scan', hz: '30.0', type: 'LaserScan' },
  ];

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative z-10 p-4 md:p-6 lg:p-8 h-full">

        {/* MOBILE: Simplified 2-panel layout */}
        <div className="md:hidden grid grid-cols-2 gap-3 h-full">
          {/* Left: Simplified robot list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <Activity size={14} style={{ color: colors.primary }} />
              <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
                FLEET
              </span>
            </div>

            {/* Show only critical robot */}
            {robots.filter(r => r.status === 'critical').slice(0, 1).map((robot) => (
              <div
                key={robot.id}
                className="p-2 rounded-lg border"
                style={{
                  backgroundColor: colors.forebackground,
                  borderColor: colors.error
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: colors.error,
                        boxShadow: `0 0 6px ${colors.error}`
                      }}
                    />
                    <span className="text-xs font-medium text-white">robot-{robot.id}</span>
                  </div>
                  <span className="text-xs text-red-400">Critical</span>
                </div>
                <div className="text-xs text-zinc-500">CPU: {robot.cpu}%</div>
              </div>
            ))}

            {/* Show 1-2 healthy robots */}
            {robots.filter(r => r.status === 'online').slice(0, 2).map((robot) => (
              <div
                key={robot.id}
                className="p-2 rounded-lg border"
                style={{
                  backgroundColor: colors.forebackground,
                  borderColor: colors.border
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: colors.success
                      }}
                    />
                    <span className="text-xs font-medium text-white">robot-{robot.id}</span>
                  </div>
                </div>
                <div className="text-xs text-zinc-500">CPU: {robot.cpu}%</div>
              </div>
            ))}
          </motion.div>

          {/* Right: Simplified terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={14} style={{ color: colors.primary }} />
              <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
                ROS2
              </span>
            </div>

            <div
              className="p-2 rounded-lg border space-y-1.5"
              style={{
                backgroundColor: colors.forebackground,
                borderColor: colors.border
              }}
            >
              {topics.slice(0, 3).map(topic => (
                <div key={topic.name} className="flex items-center justify-between text-xs">
                  <span className="font-mono text-white truncate">{topic.name}</span>
                  <span style={{ color: colors.primary }} className="font-mono text-xs">{topic.hz}Hz</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DESKTOP: Full 3-panel layout */}
        <div className="hidden md:grid md:grid-cols-10 gap-4 h-full">
        {/* LEFT PANEL: Robot List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-3 space-y-3"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity size={16} style={{ color: colors.primary }} />
            <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
              FLEET STATUS
            </span>
          </div>

          {robots.map((robot, idx) => (
            <div
              key={robot.id}
              className="p-3 rounded-lg border transition-all"
              style={{
                backgroundColor: colors.forebackground,
                borderColor: robot.status === 'critical' ? colors.error : colors.border
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${robot.status === 'critical' ? 'animate-pulse' : ''}`}
                    style={{
                      backgroundColor: robot.status === 'critical' ? colors.error : colors.success,
                      boxShadow: robot.status === 'critical' ? `0 0 8px ${colors.error}` : `0 0 8px ${colors.success}`
                    }}
                  />
                  <span className="text-sm font-medium text-white">robot-{robot.id}</span>
                </div>
                <span className="text-xs" style={{ color: colors.textSecondary }}>
                  {robot.status === 'critical' ? '🔴 Critical' : '● Online'}
                </span>
              </div>

              {/* CPU Info */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs" style={{ color: colors.textSecondary }}>CPU</span>
                  <span className="text-xs font-mono font-semibold text-white">{robot.cpu}%</span>
                </div>

                {/* Sparkline */}
                <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`gradient-${robot.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={robot.status === 'critical' ? colors.error : colors.primary} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={robot.status === 'critical' ? colors.error : colors.primary} stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d={`M0,${30 - (robot.cpuHistory[0] / 100 * 20)} ${robot.cpuHistory.map((v, i) =>
                      `L${(i / (robot.cpuHistory.length - 1)) * 100},${30 - (v / 100 * 20)}`
                    ).join(' ')} L100,30 L0,30 Z`}
                    fill={`url(#gradient-${robot.id})`}
                  />

                  {/* Line */}
                  <path
                    d={`M0,${30 - (robot.cpuHistory[0] / 100 * 20)} ${robot.cpuHistory.map((v, i) =>
                      `L${(i / (robot.cpuHistory.length - 1)) * 100},${30 - (v / 100 * 20)}`
                    ).join(' ')}`}
                    fill="none"
                    stroke={robot.status === 'critical' ? colors.error : colors.primary}
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CENTER PANEL: Network Topology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <Radio size={16} style={{ color: colors.primary }} />
            <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
              ROS2 NETWORK
            </span>
          </div>

          <div
            className="flex-1 rounded-lg border p-4 relative"
            style={{
              backgroundColor: colors.forebackground,
              borderColor: colors.border
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {/* Connections */}
              <g opacity="0.6">
                <line x1="50" y1="40" x2="25" y2="50" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="60" x2="25" y2="50" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="25" y1="50" x2="75" y2="50" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Nodes */}
              {nodes.map(node => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill={colors.background}
                    stroke={colors.primary}
                    strokeWidth="1.5"
                  >
                    <animate attributeName="r" values="4;4.5;4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    fontSize="4"
                    fill={colors.textSecondary}
                    fontFamily="monospace"
                  >
                    {node.label}
                  </text>
                </g>
              ))}

              {/* Animated data packet */}
              <circle r="1" fill={colors.primary}>
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#path1" />
                </animateMotion>
              </circle>
              <path id="path1" d="M50,40 L25,50 L75,50 L50,40" fill="none" opacity="0" />
            </svg>

            <div className="absolute bottom-4 right-4 text-xs" style={{ color: colors.textSecondary }}>
              <div>4 nodes • 3 topics</div>
              <div style={{ color: colors.success }}>All healthy</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: ROS2 Terminal & Topics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:col-span-3 space-y-3"
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={16} style={{ color: colors.primary }} />
            <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
              ROS2 TOPICS
            </span>
          </div>

          {/* Topic List */}
          <div
            className="p-3 rounded-lg border space-y-2"
            style={{
              backgroundColor: colors.forebackground,
              borderColor: colors.border
            }}
          >
            {topics.map(topic => (
              <div key={topic.name} className="flex items-center justify-between text-xs">
                <span className="font-mono text-white">{topic.name}</span>
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.primary }} className="font-mono">{topic.hz}Hz</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Window */}
          <div
            className="rounded-lg border overflow-hidden"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border
            }}
          >
            {/* Terminal Header */}
            <div
              className="px-3 py-2 border-b flex items-center gap-2"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.secondary
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs font-mono" style={{ color: colors.textSecondary }}>
                robot-01@ferronyx
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-3 font-mono text-xs leading-relaxed">
              <pre style={{ color: colors.success }}>
                {terminalText}
                {cursorVisible && <span style={{ color: colors.primary }}>_</span>}
              </pre>
            </div>
          </div>
        </motion.div>

        </div>
        {/* End desktop grid */}

      </div>
    </div>
  );
};

export default FleetCommandCenter;
