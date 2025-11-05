import React from 'react';
import { colors } from '../utils/colors';
import { LayoutDashboard, Bot, BellRing, Settings, Cpu, AlertTriangle, Clock } from 'lucide-react';

const DashboardIllustration = () => {
  return (
    <div className="relative w-full aspect-video rounded-xl h-[50%] border overflow-hidden"
         style={{
           backgroundColor: `${colors.background}`,
           borderColor: `${colors.border}`
         }}>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-auto"
             style={{
               backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
             }}
        />
      </div>

      {/* Left Sidebar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-12 md:w-14 border-r flex flex-col items-center py-4 z-20"
        style={{
          backgroundColor: `${colors.secondary}`,
          borderColor: `${colors.border}`
        }}
      >
        {/* Logo */}
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-6"
          style={{
            backgroundColor: `${colors.primary}20`,
            border: `1px solid ${colors.primary}`
          }}
        >
          <div className="text-white font-bold text-sm">F</div>
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer"
            style={{
              backgroundColor: `${colors.primary}20`,
              border: `1px solid ${colors.primary}`
            }}
          >
            <LayoutDashboard size={16} color={colors.light} />
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer opacity-50 hover:opacity-100"
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`
            }}
          >
            <Bot size={16} color={colors.textSecondary} />
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer opacity-50 hover:opacity-100"
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`
            }}
          >
            <BellRing size={16} color={colors.textSecondary} />
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer opacity-50 hover:opacity-100"
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`
            }}
          >
            <Settings size={16} color={colors.textSecondary} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pl-16 ml-4 md:pl-14 p-4 md:p-6 ">

        {/* Header Bar */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h1 className="text-white text-xl md:text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-2">
            <div className="h-6 px-3 rounded border flex items-center" style={{borderColor: colors.border, backgroundColor: colors.secondary}}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse mr-2" style={{backgroundColor: colors.success}} />
              <span className="text-xs font-medium" style={{color: colors.textSecondary}}>Live</span>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
          {[
            { icon: <Bot size={14} />, label: 'Active Robots', value: '24', percentage: '95%' },
            { icon: <Cpu size={14} />, label: 'CPU Usage', value: '67%', percentage: '67%' },
            { icon: <BellRing size={14} />, label: 'Active Alerts', value: '3', percentage: '30%' },
            { icon: <Clock size={14} />, label: 'Uptime', value: '99.9%', percentage: '99%' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-2 md:p-3 rounded-lg border animate-fadeIn"
              style={{
                backgroundColor: `${colors.forebackground}`,
                borderColor: `${colors.border}`,
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="p-1 rounded"
                  style={{backgroundColor: `${colors.secondary}`}}
                >
                  <div style={{color: colors.textSecondary}}>
                    {stat.icon}
                  </div>
                </div>
                <span className="text-white/60 text-xs">{stat.label}</span>
              </div>
              <div className="text-white font-bold text-base md:text-lg mb-2">{stat.value}</div>
              {/* Mini Progress Bar */}
              <div className="h-1 rounded-full overflow-hidden" style={{backgroundColor: colors.secondary}}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: stat.percentage,
                    backgroundColor: colors.primary
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {/* CPU Chart with Enhanced Graph */}
          <div
            className="p-3 md:p-4 rounded-lg border"
            style={{
              backgroundColor: `${colors.forebackground}`,
              borderColor: `${colors.border}`
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/70 text-xs md:text-sm font-medium">CPU Usage - Robot-01</span>
              <span className="text-xs px-2 py-0.5 rounded" style={{backgroundColor: `${colors.secondary}`, color: colors.textSecondary}}>
                Real-time
              </span>
            </div>
            <div className="relative h-16 md:h-20">
              {/* Enhanced Line Chart with Area Gradient */}
              <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cpuGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={colors.primary} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={colors.primary} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <path
                  d="M0,45 L15,40 L30,42 L45,35 L60,30 L75,33 L90,25 L105,28 L120,22 L135,20 L150,25 L165,18 L180,15 L200,20 L200,60 L0,60 Z"
                  fill="url(#cpuGradient)"
                />
                {/* Line */}
                <path
                  d="M0,45 L15,40 L30,42 L45,35 L60,30 L75,33 L90,25 L105,28 L120,22 L135,20 L150,25 L165,18 L180,15 L200,20"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="2"
                />
              </svg>
              {/* Time Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/40 px-1 mt-1">
                <span>-6m</span>
                <span>-3m</span>
                <span>now</span>
              </div>
            </div>
          </div>

          {/* Alerts Panel (Replacing ROS Topics) */}
          <div
            className="p-3 md:p-4 rounded-lg border"
            style={{
              backgroundColor: `${colors.forebackground}`,
              borderColor: `${colors.border}`
            }}
          >
            <div className="text-white/70 text-xs md:text-sm font-medium mb-3">Recent Alerts</div>
            <div className="space-y-2">
              {[
                { title: 'High CPU on Robot-03', time: '2m ago', severity: 'high' },
                { title: 'Network Latency Detected', time: '15m ago', severity: 'medium' },
                { title: 'Disk Space Low', time: '1h ago', severity: 'low' }
              ].map((alert, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded transition-all hover:border-l-2"
                  style={{
                    backgroundColor: `${colors.secondary}`,
                    borderLeft: `2px solid ${
                      alert.severity === 'high' ? colors.error :
                      alert.severity === 'medium' ? colors.warning :
                      colors.success
                    }`
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      <AlertTriangle
                        size={12}
                        className="flex-shrink-0 mt-0.5"
                        color={
                          alert.severity === 'high' ? colors.error :
                          alert.severity === 'medium' ? colors.warning :
                          colors.success
                        }
                      />
                      <span className="text-white/80 text-xs truncate">{alert.title}</span>
                    </div>
                    <span className="text-white/40 text-xs flex-shrink-0">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardIllustration;