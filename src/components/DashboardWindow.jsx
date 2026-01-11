import React from 'react';

const DashboardWindow = ({ title, icon: Icon, accent = 'blue', status, children, className = '' }) => {
  const accentColors = {
    blue: 'text-blue-400 border-blue-500/30',
    purple: 'text-purple-400 border-purple-500/30',
    emerald: 'text-emerald-400 border-emerald-500/30',
    indigo: 'text-indigo-400 border-indigo-500/30',
    amber: 'text-amber-400 border-amber-500/30',
    cyan: 'text-cyan-400 border-cyan-500/30',
  };

  const accentClass = accentColors[accent] || accentColors.blue;

  return (
    <div className={`rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden hover:${accentClass.split(' ')[1]} transition-colors shadow-sm ${className}`}>
      {/* Window Chrome Header */}
      <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
        {/* Left: Window controls + Title */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
          </div>
          {Icon && <Icon className={`h-3.5 w-3.5 ${accentClass.split(' ')[0]}`} />}
          <span className="text-xs font-medium text-white">{title}</span>
        </div>

        {/* Right: Status badge */}
        {status && (
          <span className={`text-xs font-medium ${accentClass.split(' ')[0]} uppercase tracking-widest`}>
            {status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative bg-[#050505]/50">
        {children}
      </div>
    </div>
  );
};

export default DashboardWindow;
