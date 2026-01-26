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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      id: 'ros2',
      title: 'Zero-Config ROS2 Discovery',
      description: 'Automatically discovers your entire ROS2 computation graph. Nodes, topics, services, and message types — all mapped in real-time with zero configuration required.',
      windowTitle: 'ROS2 Computation Graph',
      mockup: ROS2GraphExplorer,
      badge: { icon: Network, text: 'Zero Config', color: 'indigo' },
      status: 'ROS2-Native',
      techDetails: [
        'Auto-discovers all nodes, topics, and services',
        'Real-time graph visualization with data flow',
        'Message type introspection'
      ]
    },
    {
      id: 'ai-debug',
      title: 'AI-Powered Debugging',
      description: 'Ask questions in plain English and get AI-powered root cause analysis. Ferronyx analyzes logs, metrics, and ROS2 state to suggest fixes in seconds.',
      windowTitle: 'AI Debug Assistant',
      mockup: AIDebugMockup,
      badge: { icon: Bot, text: 'AI-Powered', color: 'purple' },
      status: 'GPT-4',
      techDetails: [
        'Natural language incident queries',
        'Multi-layer analysis (infra + ROS + behavior)',
        'Code suggestions with context'
      ]
    },
    {
      id: 'linux',
      title: 'Full Linux System Access',
      description: 'Remote terminal access and system monitoring without SSH/VPN hell. Execute commands, check logs, and monitor system resources across your entire fleet.',
      windowTitle: 'Remote Terminal',
      mockup: LinuxInfraMonitor,
      badge: { icon: Terminal, text: 'Root Access', color: 'emerald' },
      status: 'SSH-Free',
      techDetails: [
        'Remote command execution on any robot',
        'System metrics (CPU, memory, disk, network)',
        'Log streaming and search'
      ]
    },
    {
      id: 'monitoring',
      title: 'Real-Time Fleet Telemetry',
      description: 'Track every metric that matters across your robot fleet. CPU, GPU, memory, network, ROS topics — all with sub-second latency and historical data retention.',
      windowTitle: 'Fleet Monitoring',
      mockup: MonitoringMockup,
      badge: { icon: CircleGauge, text: 'Real-time', color: 'blue' },
      status: 'Sub-second',
      techDetails: [
        'Infrastructure metrics (CPU, GPU, memory)',
        'ROS2 topic frequency and latency',
        '1-year data retention'
      ]
    },
    {
      id: 'oncall',
      title: 'SRE-Grade Incident Management',
      description: 'Threshold-based alerts with escalation policies. Track incidents from detection to resolution with detailed timelines and MTTR metrics.',
      windowTitle: 'Incident Manager',
      mockup: OnCallMockup,
      badge: { icon: BellRing, text: 'SRE-Grade', color: 'amber' },
      status: 'Alerts',
      techDetails: [
        'Customizable alert thresholds',
        'Escalation policies and on-call rotation',
        'MTTR tracking and analytics'
      ]
    },
    {
      id: 'behavioral',
      title: 'Behavioral Observability',
      description: 'Coming Q2 2026: Understand the gap between what your robot intended to do and what it actually did. AI-powered behavioral analysis for debugging complex robot failures.',
      windowTitle: 'Behavioral AI',
      mockup: BehavioralAIPreview,
      badge: { icon: Brain, text: 'Coming Q2 2026', color: 'purple' },
      status: 'Beta',
      techDetails: [
        'Intent vs execution gap detection',
        'AI root cause for behavioral failures',
        'Fleet-wide pattern recognition'
      ]
    },
  ];

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
      {/* Header */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Engineer-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
              Observability Stack
            </span>
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-xl leading-relaxed">
            From Linux infra to ROS2 topics. Full-stack visibility with zero config.
          </p>
        </div>
      </div>

      {/* Sticky Container - Split Layout */}
      <div className="sticky top-[15vh] h-auto min-h-[800px] lg:h-[70vh] flex items-center justify-center px-4 md:px-8">
        <div className="relative w-full max-w-7xl h-full">

          {/* Grid: Left Text + Right Mockup */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">

            {/* LEFT COLUMN: Text Content (changes on scroll) */}
            <div className="relative min-h-[400px] lg:h-full flex items-center w-full">
              {features.map((feature, index) => {
                const { opacity, y } = getFeatureAnimations(index);

                return (
                  <motion.div
                    key={`text-${feature.id}`}
                    style={{ opacity, y }}
                    className="absolute inset-0 flex flex-col justify-center space-y-6"
                  >
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-${feature.badge.color}-500/30 bg-${feature.badge.color}-500/10 text-xs font-medium text-${feature.badge.color}-400 w-fit`}>
                      <feature.badge.icon className="h-3.5 w-3.5" />
                      {feature.badge.text}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-[#8A8F98] leading-relaxed max-w-xl">
                      {feature.description}
                    </p>

                    {/* Tech Details */}
                    <ul className="space-y-2">
                      {feature.techDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#B4B4B8]">
                          <span className="text-blue-400 mt-0.5">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Mockup (changes on scroll) */}
            <div className="relative min-h-[400px] lg:h-full flex items-center w-full">
              {features.map((feature, index) => {
                const { opacity, scale } = getFeatureAnimations(index);
                const MockupComponent = feature.mockup;

                return (
                  <motion.div
                    key={`mockup-${feature.id}`}
                    style={{ opacity, scale }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <DashboardWindow
                      title={feature.windowTitle}
                      icon={feature.badge.icon}
                      accent={feature.badge.color}
                      status={feature.status}
                      className="w-full"
                    >
                      <div className="h-[350px] md:h-[450px] p-4">
                        <MockupComponent />
                      </div>
                    </DashboardWindow>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FerronyxFeaturesScroll;
