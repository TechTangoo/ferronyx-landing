import React from 'react';
import { colors } from '../utils/colors';
import {
  Bot,
  Wifi,
  AlertTriangle,
  Battery,
  Settings,
  MapPin,
  TrendingUp,
  CheckCircle,
  Zap
} from 'lucide-react';

// Static mockup data matching the real dashboard
const metrics = [
  { label: 'Total Robots', value: '24', icon: Bot, color: colors.primary },
  { label: 'Active', value: '18', icon: Wifi, color: '#10b981' },
  { label: 'Alerts', value: '12', icon: AlertTriangle, color: '#f59e0b', subtext: '3 critical' },
  { label: 'Avg Battery', value: '73%', icon: Battery, color: '#3b82f6' },
  { label: 'Services', value: '12', icon: Settings, color: '#8b5cf6' },
];

const robotStatus = [
  { robot: 'RB-001', location: 'Warehouse A', status: 'active', battery: 85 },
  { robot: 'RB-003', location: 'Manufacturing Floor', status: 'active', battery: 92 },
  { robot: 'RB-007', location: 'Loading Dock', status: 'active', battery: 67 },
  { robot: 'RB-012', location: 'Outdoor Patrol', status: 'warning', battery: 18 },
  { robot: 'RB-015', location: 'Charging Station', status: 'charging', battery: 45 },
];

const activities = [
  { robot: 'RB-007', msg: 'Completed delivery task #4892', type: 'success', time: '5m ago' },
  { robot: 'RB-012', msg: 'Battery level below 20%', type: 'warning', time: '15m ago' },
  { robot: 'RB-003', msg: 'Robot came back online', type: 'info', time: '25m ago' },
];

// Performance chart data points
const chartPoints = [12, 8, 5, 15, 25, 32, 28, 35, 30, 22, 18, 14];

function DashboardMockup() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'warning': return '#f59e0b';
      case 'charging': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getBatteryColor = (battery) => {
    if (battery > 60) return '#10b981';
    if (battery > 30) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: '#0f0f14',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      {/* Browser-like header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 ml-4">
          <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-white/50 max-w-xs">
            app.ferronyx.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 space-y-4">
        {/* Metrics row */}
        <div className="grid grid-cols-5 gap-3">
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
              <div className="text-lg font-bold text-white">{metric.value}</div>
              {metric.subtext && (
                <div className="text-[9px] text-amber-500">{metric.subtext}</div>
              )}
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-7 gap-4">
          {/* Performance chart */}
          <div
            className="col-span-4 rounded-lg p-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white">Performance Overview</span>
              <div className="flex items-center gap-1 text-[10px] text-emerald-500">
                <TrendingUp className="w-3 h-3" />
                +2.1%
              </div>
            </div>

            {/* Mini metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-[10px] text-white/50">Efficiency Rate</div>
                <div className="text-xl font-bold text-white">94.5%</div>
              </div>
              <div>
                <div className="text-[10px] text-white/50">System Uptime</div>
                <div className="text-xl font-bold text-white">99.8%</div>
              </div>
            </div>

            {/* Chart visualization */}
            <div className="h-24 flex items-end gap-1">
              {chartPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${(point / 35) * 100}%`,
                    background: `linear-gradient(to top, ${colors.primary}80, ${colors.primary}20)`
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1 text-[8px] text-white/30">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>

          {/* Recent activities */}
          <div
            className="col-span-3 rounded-lg p-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="text-sm font-semibold text-white mb-3">Recent Activities</div>
            <div className="space-y-3">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5">
                    {activity.type === 'success' && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                    {activity.type === 'warning' && <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                    {activity.type === 'info' && <Wifi className="w-3.5 h-3.5 text-blue-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-white">{activity.robot}</span>
                      <span className="text-[9px] text-white/40">{activity.time}</span>
                    </div>
                    <p className="text-[10px] text-white/50 truncate">{activity.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Robot status table */}
        <div
          className="rounded-lg p-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="text-sm font-semibold text-white mb-3">Robot Status Overview</div>
          <div className="overflow-hidden rounded border border-white/10">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="border-b border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <th className="text-left p-2 text-white/50 font-medium">Robot</th>
                  <th className="text-left p-2 text-white/50 font-medium">Location</th>
                  <th className="text-left p-2 text-white/50 font-medium">Status</th>
                  <th className="text-left p-2 text-white/50 font-medium">Battery</th>
                </tr>
              </thead>
              <tbody>
                {robotStatus.map((robot, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0">
                    <td className="p-2 text-white font-medium">{robot.robot}</td>
                    <td className="p-2 text-white/60">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {robot.location}
                      </span>
                    </td>
                    <td className="p-2">
                      <span
                        className="flex items-center gap-1 capitalize"
                        style={{ color: getStatusColor(robot.status) }}
                      >
                        {robot.status === 'active' && <Wifi className="w-3 h-3" />}
                        {robot.status === 'warning' && <AlertTriangle className="w-3 h-3" />}
                        {robot.status === 'charging' && <Zap className="w-3 h-3" />}
                        {robot.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <span
                        className="flex items-center gap-1"
                        style={{ color: getBatteryColor(robot.battery) }}
                      >
                        <Battery className="w-3 h-3" />
                        {robot.battery}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent)'
        }}
      />
    </div>
  );
}

export default DashboardMockup;
