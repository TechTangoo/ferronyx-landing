import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Bot, Terminal, CircleGauge, BellRing, Brain } from 'lucide-react';
import DashboardWindow from './DashboardWindow';
import ROS2GraphExplorer from './ROS2GraphExplorer';
import AIDebugMockup from './AIDebugMockup';
import LinuxInfraMonitor from './LinuxInfraMonitor';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';
import BehavioralAIPreview from './BehavioralAIPreview';

const FerronyxFeaturesScroll = () => {
  const containerRef = useRef(null);

  // Track overall scroll through entire features section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      id: 'ros2',
      windowTitle: 'ROS2 Computation Graph',
      mockup: ROS2GraphExplorer,
      badge: { icon: Network, text: 'Zero Config', color: 'indigo' },
      status: 'ROS2-Native',
    },
    {
      id: 'ai-debug',
      windowTitle: 'AI Debug Assistant',
      mockup: AIDebugMockup,
      badge: { icon: Bot, text: 'AI-Powered', color: 'purple' },
      status: 'GPT-4',
    },
    {
      id: 'linux',
      windowTitle: 'Remote Terminal',
      mockup: LinuxInfraMonitor,
      badge: { icon: Terminal, text: 'Root Access', color: 'emerald' },
      status: 'SSH-Free',
    },
    {
      id: 'monitoring',
      windowTitle: 'Fleet Monitoring',
      mockup: MonitoringMockup,
      badge: { icon: CircleGauge, text: 'Real-time', color: 'blue' },
      status: 'Sub-second',
    },
    {
      id: 'oncall',
      windowTitle: 'Incident Manager',
      mockup: OnCallMockup,
      badge: { icon: BellRing, text: 'SRE-Grade', color: 'amber' },
      status: 'Alerts',
    },
    {
      id: 'behavioral',
      windowTitle: 'Behavioral AI',
      mockup: BehavioralAIPreview,
      badge: { icon: Brain, text: 'Coming Q2 2026', color: 'purple' },
      status: 'Beta',
    },
  ];

  // Calculate opacity and scale for each feature based on scroll progress
  const getFeatureAnimations = (index) => {
    const total = features.length;
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;
    const fadeInStart = start;
    const fadeInEnd = start + step * 0.15;
    const fadeOutStart = end - step * 0.15;
    const fadeOutEnd = end;

    const opacity = useTransform(
      scrollYProgress,
      [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
      [0, 1, 1, 0]
    );

    const scale = useTransform(
      scrollYProgress,
      [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
      [1.05, 1, 1, 0.95]
    );

    const y = useTransform(
      scrollYProgress,
      [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
      [20, 0, 0, -20]
    );

    return { opacity, scale, y };
  };

  return (
    <section id="features" ref={containerRef} className="relative bg-[#050505] border-t border-white/[0.05]" style={{ height: `${features.length * 100}vh` }}>
      {/* Header Section (Non-scrolling) */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Engineer-Grade Observability Stack
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-xl leading-relaxed">
            From Linux infra to ROS2 topics. Full-stack visibility with zero config.
          </p>
        </div>
      </div>

      {/* Sticky Container - Cards Stack Here */}
      <div className="sticky top-[15vh] h-[70vh] flex items-center justify-center px-4">
        <div className="relative w-full max-w-6xl h-full">

          {/* All feature cards in same position - absolutely positioned */}
          {features.map((feature, index) => {
            const { opacity, scale, y } = getFeatureAnimations(index);
            const MockupComponent = feature.mockup;

            return (
              <motion.div
                key={feature.id}
                style={{ opacity, scale, y }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <DashboardWindow
                  title={feature.windowTitle}
                  icon={feature.badge.icon}
                  accent={feature.badge.color}
                  status={feature.status}
                  className="w-full max-w-5xl pointer-events-auto"
                >
                  <div className="min-h-[400px] md:min-h-[500px] p-4 md:p-6">
                    <MockupComponent />
                  </div>
                </DashboardWindow>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FerronyxFeaturesScroll;
