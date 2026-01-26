'use client'

import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';

const LinuxInfraMonitor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full min-h-[240px] rounded-lg overflow-hidden font-mono text-xs"
      style={{
        backgroundColor: colors.background,
        border: `1px solid ${colors.border}`
      }}
    >
      {/* Terminal Header */}
      <div
        className="px-3 py-2 border-b flex items-center justify-between"
        style={{
          borderColor: colors.border,
          backgroundColor: colors.secondary
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span style={{ color: colors.textSecondary }}>ubuntu@robot-01:~</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colors.success }} />
          <span style={{ color: colors.textSecondary }}>SSH</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-3 space-y-3 leading-relaxed">
        {/* Command 1: ROS2 daemon status */}
        <div>
          <div style={{ color: colors.success }}>
            <span style={{ color: colors.primary }}>$</span> systemctl status ros2-daemon
          </div>
          <div style={{ color: colors.textSecondary }} className="ml-2 mt-1">
            <div className="flex items-center gap-2">
              <span style={{ color: colors.success }}>●</span>
              <span>ros2-daemon.service - ROS2 Daemon</span>
            </div>
            <div className="ml-4">
              Active: <span style={{ color: colors.success }}>active (running)</span> since 2m 15s ago
            </div>
          </div>
        </div>

        {/* Command 2: Disk usage */}
        <div>
          <div style={{ color: colors.success }}>
            <span style={{ color: colors.primary }}>$</span> df -h /var/log
          </div>
          <div className="ml-2 mt-1">
            <div style={{ color: colors.textSecondary }}>
              <span>Filesystem</span>
              <span className="ml-8">Size</span>
              <span className="ml-6">Used</span>
              <span className="ml-4">Avail</span>
              <span className="ml-4">Use%</span>
            </div>
            <div style={{ color: colors.text }}>
              <span>/dev/sda1</span>
              <span className="ml-10">20G</span>
              <span className="ml-6">16G</span>
              <span className="ml-6">4G</span>
              <span className="ml-4" style={{ color: colors.warning }}>80%</span>
            </div>
          </div>
        </div>

        {/* Command 3: ROS2 port check */}
        <div>
          <div style={{ color: colors.success }}>
            <span style={{ color: colors.primary }}>$</span> netstat -tulpn | grep :11311
          </div>
          <div style={{ color: colors.text }} className="ml-2 mt-1">
            tcp  0.0.0.0:11311  LISTEN  ros2_master
          </div>
        </div>

        {/* Cursor */}
        <div style={{ color: colors.primary }}>
          <span>$</span>
          {cursorVisible && <span className="ml-1">_</span>}
        </div>
      </div>
    </div>
  );
};

export default LinuxInfraMonitor;
