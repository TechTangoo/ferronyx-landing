import React from 'react';
import { Network, Bot, Terminal, CircleGauge, BellRing, Brain } from 'lucide-react';
import FeatureScrollSection from './FeatureScrollSection';
import ROS2GraphExplorer from './ROS2GraphExplorer';
import AIDebugMockup from './AIDebugMockup';
import LinuxInfraMonitor from './LinuxInfraMonitor';
import MonitoringMockup from './MonitoringMockup';
import OnCallMockup from './OnCallMockup';
import BehavioralAIPreview from './BehavioralAIPreview';

const FerronyxFeaturesScroll = () => {
  const features = [
    {
      id: 'ros2',
      windowTitle: 'ROS2 Computation Graph',
      title: 'Zero-Config ROS2 Discovery',
      description: 'Ferronyx automatically discovers your entire ROS2 computation graph. Nodes, topics, services, and message types — all mapped in real-time with zero configuration required.',
      mockup: ROS2GraphExplorer,
      badge: { icon: Network, text: 'Zero Config', color: 'indigo' },
      status: 'ROS2-Native',
      techDetails: [
        'Auto-discovers all nodes, topics, and services',
        'Real-time graph visualization with data flow',
        'Message type introspection',
        'Works with any ROS2 distribution'
      ]
    },
    {
      id: 'ai-debug',
      windowTitle: 'AI Debug Assistant',
      title: 'Debug with AI',
      description: 'Ask questions in plain English and get AI-powered root cause analysis. Ferronyx analyzes logs, metrics, and ROS2 state to suggest fixes in seconds.',
      mockup: AIDebugMockup,
      badge: { icon: Bot, text: 'AI-Powered', color: 'purple' },
      status: 'GPT-4',
      techDetails: [
        'Natural language incident queries',
        'Multi-layer analysis (infra + ROS + behavior)',
        'Code suggestions with context',
        'Learn from historical incidents'
      ]
    },
    {
      id: 'linux',
      windowTitle: 'Remote Terminal',
      title: 'Full Linux System Access',
      description: 'Remote terminal access and system monitoring without SSH/VPN hell. Execute commands, check logs, and monitor system resources across your entire fleet.',
      mockup: LinuxInfraMonitor,
      badge: { icon: Terminal, text: 'Root Access', color: 'emerald' },
      status: 'SSH-Free',
      techDetails: [
        'Remote command execution on any robot',
        'System metrics (CPU, memory, disk, network)',
        'Log streaming and search',
        'Secure agent-based architecture'
      ]
    },
    {
      id: 'monitoring',
      windowTitle: 'Fleet Monitoring',
      title: 'Real-Time Telemetry',
      description: 'Track every metric that matters across your robot fleet. CPU, GPU, memory, network, ROS topics — all with sub-second latency and historical data retention.',
      mockup: MonitoringMockup,
      badge: { icon: CircleGauge, text: 'Real-time', color: 'blue' },
      status: 'Sub-second',
      techDetails: [
        'Infrastructure metrics (CPU, GPU, memory)',
        'ROS2 topic frequency and latency',
        'Custom metric support',
        '1-year data retention'
      ]
    },
    {
      id: 'oncall',
      windowTitle: 'Incident Manager',
      title: 'SRE-Grade Incident Management',
      description: 'Threshold-based alerts with escalation policies. Track incidents from detection to resolution with detailed timelines and MTTR metrics.',
      mockup: OnCallMockup,
      badge: { icon: BellRing, text: 'SRE-Grade', color: 'amber' },
      status: 'Slack/Email',
      techDetails: [
        'Customizable alert thresholds',
        'Escalation policies and on-call rotation',
        'Incident timeline visualization',
        'MTTR tracking and analytics'
      ]
    },
    {
      id: 'behavioral',
      windowTitle: 'Behavioral AI',
      title: 'Behavioral Observability',
      description: 'Coming Q2 2026: Understand the gap between what your robot intended to do and what it actually did. AI-powered behavioral analysis for debugging complex robot failures.',
      mockup: BehavioralAIPreview,
      badge: { icon: Brain, text: 'Coming Q2 2026', color: 'purple' },
      status: 'Beta',
      techDetails: [
        'Intent vs execution gap detection',
        'AI root cause for behavioral failures',
        'Fleet-wide pattern recognition',
        'Environment-specific failure analysis'
      ]
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#050505] border-t border-white/[0.05]">
      {/* Header Section (Non-scrolling) */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 py-32">
        <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Engineer-Grade Observability Stack
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-xl leading-relaxed">
            From Linux infra to ROS2 topics. Full-stack visibility with zero config.
          </p>
        </div>
      </div>

      {/* Scroll-Based Feature Sections */}
      {features.map((feature, index) => (
        <FeatureScrollSection
          key={feature.id}
          feature={feature}
          direction={index % 2 === 0 ? 'left-text' : 'right-text'}
          index={index}
        />
      ))}
    </section>
  );
};

export default FerronyxFeaturesScroll;
