import React from 'react';
import { colors } from '../utils/colors';

const ROS2GraphExplorer = () => {
  // ROS2 nodes and topics
  const nodes = [
    { id: 'camera', x: 15, y: 50, label: '/camera_node' },
    { id: 'nav', x: 40, y: 30, label: '/navigation' },
    { id: 'ctrl', x: 40, y: 70, label: '/controller' },
    { id: 'fusion', x: 65, y: 50, label: '/sensor_fusion' },
    { id: 'exec', x: 85, y: 50, label: '/executor' },
  ];

  const edges = [
    { from: 'camera', to: 'fusion', topic: '/image_raw', type: 'Image', hz: '30' },
    { from: 'nav', to: 'fusion', topic: '/odom', type: 'Odometry', hz: '50' },
    { from: 'ctrl', to: 'fusion', topic: '/cmd_vel', type: 'Twist', hz: '50' },
    { from: 'fusion', to: 'exec', topic: '/plan', type: 'Path', hz: '10' },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] md:min-h-[320px]">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Gradient for connections */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
            <stop offset="50%" stopColor={colors.primary} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.3" />
          </linearGradient>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            fill={colors.primary}
          >
            <polygon points="0 0, 10 3, 0 6" opacity="0.6" />
          </marker>
        </defs>

        {/* Draw edges (connections/topics) */}
        <g>
          {edges.map((edge, idx) => {
            const fromNode = nodes.find(n => n.id === edge.from);
            const toNode = nodes.find(n => n.id === edge.to);

            return (
              <g key={idx}>
                {/* Connection line */}
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={colors.primary}
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                  opacity="0.4"
                  markerEnd="url(#arrowhead)"
                />

                {/* Animated data packet */}
                <circle r="0.5" fill={colors.primary} opacity="0.8">
                  <animateMotion
                    dur={`${3 + idx}s`}
                    repeatCount="indefinite"
                    path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur={`${3 + idx}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Topic label (midpoint) */}
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 - 1.5}
                  fontSize="2.5"
                  fill={colors.textSecondary}
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {edge.topic}
                </text>
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 + 2}
                  fontSize="2"
                  fill={colors.primary}
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {edge.hz}Hz
                </text>
              </g>
            );
          })}
        </g>

        {/* Draw nodes */}
        <g>
          {nodes.map(node => (
            <g key={node.id} className="hover:opacity-100 transition-opacity" opacity="0.95">
              {/* Node glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill={colors.primary}
                opacity="0.1"
              />

              {/* Node background */}
              <rect
                x={node.x - 6}
                y={node.y - 3}
                width="12"
                height="6"
                rx="1"
                fill={colors.background}
                stroke={colors.primary}
                strokeWidth="0.3"
              />

              {/* Node label */}
              <text
                x={node.x}
                y={node.y + 1}
                fontSize="2.2"
                fill={colors.text}
                textAnchor="middle"
                fontFamily="monospace"
                dominantBaseline="middle"
              >
                {node.label}
              </text>

              {/* Pulse animation on node */}
              <circle
                cx={node.x}
                cy={node.y}
                r="2"
                fill="none"
                stroke={colors.primary}
                strokeWidth="0.2"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="2;6;8"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 3}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.3;0"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 3}s`}
                />
              </circle>
            </g>
          ))}
        </g>
      </svg>

      {/* Legend/Stats */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
        <div style={{ color: colors.textSecondary }}>
          <span className="font-mono">5 nodes</span>
          <span className="mx-2">•</span>
          <span className="font-mono">4 active topics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.success }} />
          <span style={{ color: colors.success }}>All healthy</span>
        </div>
      </div>
    </div>
  );
};

export default ROS2GraphExplorer;
