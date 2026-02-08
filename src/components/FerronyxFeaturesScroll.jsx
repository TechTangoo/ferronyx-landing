import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Bot, Terminal, CircleGauge, BellRing, Brain } from 'lucide-react';
import DashboardWindow from './DashboardWindow';
import ROS2GraphExplorer from './ROS2GraphExplorer';
import AIDebugMockup from './AIDebugMockup';
import LinuxInfraMonitor from './LinuxInfraMonitor';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';
import BehavioralAIPreview from './BehavioralAIPreview';

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

const VH_PER_FEATURE = 85;

// Custom hook: overlapping cross-fade so screen is never blank between features
function useFeatureAnimation(index, total, scrollYProgress) {
  const step = 1 / total;
  const overlap = step * 0.25; // 25% overlap on each side

  const center = (index + 0.5) * step;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Fade in: previous boundary minus overlap → center - half step
  // Fade out: center + half step → next boundary plus overlap
  const fadeInStart = isFirst ? 0 : center - step * 0.5 - overlap;
  const fadeInEnd = isFirst ? 0 : center - step * 0.5 + overlap;
  const fadeOutStart = isLast ? 1 : center + step * 0.5 - overlap;
  const fadeOutEnd = isLast ? 1 : center + step * 0.5 + overlap;

  const opacity = useTransform(
    scrollYProgress,
    isFirst && isLast
      ? [0, 1]
      : isFirst
        ? [fadeOutStart, fadeOutEnd]
        : isLast
          ? [fadeInStart, fadeInEnd]
          : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    isFirst && isLast
      ? [1, 1]
      : isFirst
        ? [1, 0]
        : isLast
          ? [0, 1]
          : [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst && isLast
      ? [0, 1]
      : isFirst
        ? [fadeOutStart, fadeOutEnd]
        : isLast
          ? [fadeInStart, fadeInEnd]
          : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    isFirst && isLast
      ? [1, 1]
      : isFirst
        ? [1, 0.97]
        : isLast
          ? [0.97, 1]
          : [0.97, 1, 1, 0.97]
  );

  const y = useTransform(
    scrollYProgress,
    isFirst && isLast
      ? [0, 1]
      : isFirst
        ? [fadeOutStart, fadeOutEnd]
        : isLast
          ? [fadeInStart, fadeInEnd]
          : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    isFirst && isLast
      ? [0, 0]
      : isFirst
        ? [0, -30]
        : isLast
          ? [30, 0]
          : [30, 0, 0, -30]
  );

  return { opacity, scale, y };
}

// Sub-component: text column item (calls hook at top level)
function FeatureTextItem({ feature, index, total, scrollYProgress }) {
  const { opacity, y } = useFeatureAnimation(index, total, scrollYProgress);

  return (
    <motion.div
      key={`text-${feature.id}`}
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center space-y-6 will-change-[transform,opacity] transform-gpu"
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
}

// Sub-component: mockup column item (calls hook at top level)
function FeatureMockupItem({ feature, index, total, scrollYProgress }) {
  const { opacity, scale } = useFeatureAnimation(index, total, scrollYProgress);
  const MockupComponent = feature.mockup;

  return (
    <motion.div
      key={`mockup-${feature.id}`}
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center will-change-[transform,opacity] transform-gpu"
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
}

// Scroll progress dots (desktop only)
function ScrollProgressDots({ scrollYProgress }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const step = 1 / features.length;
      const idx = Math.min(Math.floor(v / step), features.length - 1);
      setActiveIndex(idx);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-50">
      {features.map((feature, index) => (
        <div key={feature.id} className="group flex items-center gap-3">
          {/* Tooltip: feature title on hover */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-white/70 whitespace-nowrap max-w-[140px] truncate pointer-events-none">
            {feature.title}
          </span>
          {/* Dot */}
          <div
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'w-2.5 h-2.5 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
            }`}
          />
        </div>
      ))}
    </div>
  );
}

const FerronyxFeaturesScroll = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="features" ref={containerRef} className="relative bg-[#050505] border-t border-white/[0.05]" style={{ height: `${features.length * VH_PER_FEATURE}vh` }}>
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

      {/* Scroll Progress Dots */}
      <ScrollProgressDots scrollYProgress={scrollYProgress} />

      {/* Sticky Container - Split Layout */}
      <div className="sticky top-[15vh] h-auto min-h-[800px] lg:h-[70vh] flex items-center justify-center px-4 md:px-8">
        <div className="relative w-full max-w-7xl h-full">

          {/* Grid: Left Text + Right Mockup */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">

            {/* LEFT COLUMN: Text Content (changes on scroll) */}
            <div className="relative min-h-[400px] lg:h-full flex items-center w-full">
              {features.map((feature, index) => (
                <FeatureTextItem
                  key={`text-${feature.id}`}
                  feature={feature}
                  index={index}
                  total={features.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* RIGHT COLUMN: Mockup (changes on scroll) */}
            <div className="relative min-h-[400px] lg:h-full flex items-center w-full">
              {features.map((feature, index) => (
                <FeatureMockupItem
                  key={`mockup-${feature.id}`}
                  feature={feature}
                  index={index}
                  total={features.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FerronyxFeaturesScroll;
