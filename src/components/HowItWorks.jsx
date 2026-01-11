import React from 'react';
import { colors } from '../utils/colors';
import ScrollReveal from './ScrollReveal';
import { Terminal, Network, Wrench } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-[#050505] px-4 py-32 border-t border-white/[0.05]">
      {/* Header */}
      <ScrollReveal className="max-w-3xl w-full text-center flex flex-col items-center gap-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Three Commands. Full Observability.
        </h2>
        <p className="text-lg text-[#8A8F98] max-w-xl leading-relaxed">
          Zero configuration. Production-ready in 10 minutes.
        </p>
      </ScrollReveal>

      {/* 3-Step Flow */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Step 1: Install */}
        <ScrollReveal delay={0.1}>
          <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden hover:border-emerald-500/30 transition-colors">
            {/* Window chrome */}
            <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                </div>
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-white">Step 1: Install</span>
              </div>
              <span className="text-xs text-zinc-500">~2 min</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-xs space-y-4" style={{ backgroundColor: colors.background }}>
              <div>
                <div style={{ color: colors.primary }}>$</div>
                <div style={{ color: colors.success }} className="mt-1">
                  curl -sL ferronyx.sh | bash
                </div>
              </div>

              <div style={{ color: colors.textSecondary }} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.success }}>✓</span>
                  <span>Detecting Linux distribution...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.success }}>✓</span>
                  <span>Installing agent daemon...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: colors.success }}>✓</span>
                  <span>Agent online</span>
                </div>
              </div>

              <div style={{ color: colors.primary }}>
                Dashboard: ferronyx.com/fleet
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2: Auto-Discover */}
        <ScrollReveal delay={0.2}>
          <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden hover:border-blue-500/30 transition-colors">
            {/* Window chrome */}
            <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                </div>
                <Network className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs font-medium text-white">Step 2: Discover</span>
              </div>
              <span className="text-xs text-zinc-500">~30 sec</span>
            </div>

            {/* Discovery content */}
            <div className="p-6 space-y-4">
              <div className="text-sm" style={{ color: colors.textSecondary }}>
                ROS2 Environment Detected
              </div>

              <div className="space-y-2 text-xs" style={{ color: colors.text }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.success }} />
                  <span className="font-mono">/camera_node</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.success }} />
                  <span className="font-mono">/navigation_stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.success }} />
                  <span className="font-mono">/controller</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.success }} />
                  <span className="font-mono">/sensor_fusion</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-1 text-xs" style={{ color: colors.textSecondary }}>
                <div>✓ Found 12 nodes</div>
                <div>✓ Found 28 topics</div>
                <div>✓ Monitoring CPU, Memory, Disk</div>
                <div style={{ color: colors.primary }}>✓ Zero config needed</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3: Debug & Heal */}
        <ScrollReveal delay={0.3}>
          <div className="h-full rounded-xl bg-[#0A0A0B] border border-white/[0.08] overflow-hidden hover:border-purple-500/30 transition-colors">
            {/* Window chrome */}
            <div className="h-12 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2E]"></div>
                </div>
                <Wrench className="h-3.5 w-3.5 text-purple-400" />
                <span className="text-xs font-medium text-white">Step 3: Debug</span>
              </div>
              <span className="text-xs text-zinc-500">~20 sec</span>
            </div>

            {/* Incident timeline */}
            <div className="p-6 space-y-3">
              <div className="text-sm" style={{ color: colors.textSecondary }}>
                Issue Detected → AI Analysis → Fix
              </div>

              <div className="space-y-3 text-xs">
                {/* Timeline events */}
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.error }} />
                    <div className="w-px h-full bg-white/[0.1] mt-1" />
                  </div>
                  <div className="flex-1">
                    <div style={{ color: colors.text }}>Camera feed stopped</div>
                    <div style={{ color: colors.textSecondary }}>00:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.warning }} />
                    <div className="w-px h-full bg-white/[0.1] mt-1" />
                  </div>
                  <div className="flex-1">
                    <div style={{ color: colors.text }}>AI analyzing logs...</div>
                    <div style={{ color: colors.textSecondary }}>00:05</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
                    <div className="w-px h-full bg-white/[0.1] mt-1" />
                  </div>
                  <div className="flex-1">
                    <div style={{ color: colors.text }}>Root cause identified</div>
                    <div style={{ color: colors.textSecondary }}>00:12</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.success }} />
                  </div>
                  <div className="flex-1">
                    <div style={{ color: colors.success }}>✓ Feed restored</div>
                    <div style={{ color: colors.textSecondary }}>00:20</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs">
                <div style={{ color: colors.textSecondary }}>MTTR: <span style={{ color: colors.primary }} className="font-mono font-semibold">20 seconds</span></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default HowItWorks;
