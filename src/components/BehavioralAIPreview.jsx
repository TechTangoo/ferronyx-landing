import React from 'react';
import { colors } from '../utils/colors';
import { Brain, ArrowRight } from 'lucide-react';

const BehavioralAIPreview = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain size={16} style={{ color: colors.primary }} />
          <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
            BEHAVIORAL AI
          </span>
        </div>
        <div
          className="px-2 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${colors.primary}20`,
            color: colors.primary,
            border: `1px solid ${colors.primary}40`
          }}
        >
          Coming Q2 2026
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="flex-1 flex flex-col justify-center space-y-3 text-sm">
        {/* Intent */}
        <div
          className="p-3 rounded-lg border"
          style={{
            backgroundColor: colors.forebackground,
            borderColor: colors.border
          }}
        >
          <div className="text-xs font-medium mb-1" style={{ color: colors.textSecondary }}>
            Intent
          </div>
          <div className="text-white">Navigate to waypoint</div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight size={16} className="rotate-90" style={{ color: colors.textSecondary }} />
        </div>

        {/* Expected */}
        <div
          className="p-3 rounded-lg border"
          style={{
            backgroundColor: colors.forebackground,
            borderColor: colors.border
          }}
        >
          <div className="text-xs font-medium mb-1" style={{ color: colors.textSecondary }}>
            Expected
          </div>
          <div className="text-white">0.5 m/s linear velocity</div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight size={16} className="rotate-90" style={{ color: colors.textSecondary }} />
        </div>

        {/* Actual (Divergence) */}
        <div
          className="p-3 rounded-lg border-2"
          style={{
            backgroundColor: `${colors.error}10`,
            borderColor: colors.error
          }}
        >
          <div className="text-xs font-medium mb-1" style={{ color: colors.error }}>
            Actual ≠ Expected
          </div>
          <div className="text-white">Oscillating 0.2-0.8 m/s</div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center">
          <ArrowRight size={16} className="rotate-90" style={{ color: colors.textSecondary }} />
        </div>

        {/* AI Root Cause */}
        <div
          className="p-3 rounded-lg border"
          style={{
            backgroundColor: colors.forebackground,
            borderColor: colors.primary
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Brain size={12} style={{ color: colors.primary }} />
            <span className="text-xs font-medium" style={{ color: colors.primary }}>
              AI Root Cause
            </span>
          </div>
          <div className="text-sm" style={{ color: colors.text }}>
            PID tuning issue detected
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <button
          className="w-full px-4 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-80"
          style={{
            backgroundColor: `${colors.primary}20`,
            border: `1px solid ${colors.primary}40`,
            color: colors.primary
          }}
        >
          Join Beta Waitlist →
        </button>
      </div>
    </div>
  );
};

export default BehavioralAIPreview;
