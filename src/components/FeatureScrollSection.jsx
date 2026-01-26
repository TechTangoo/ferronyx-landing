'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DashboardWindow from './DashboardWindow';

const FeatureScrollSection = ({ feature, direction = 'left-text', index }) => {
  const sectionRef = useRef(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Text animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -40]);

  // Mockup animations
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const mockupX = useTransform(
    scrollYProgress,
    [0, 0.3],
    direction === 'left-text' ? [100, 0] : [-100, 0] // Slide from right or left
  );
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -80]); // Parallax
  const mockupScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.95, 1, 0.98]);

  const MockupComponent = feature.mockup;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${direction === 'right-text' ? 'lg:grid-flow-dense' : ''}`}>

          {/* Text Column */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className={`lg:col-span-5 ${direction === 'right-text' ? 'lg:col-start-8' : ''}`}
          >
            <div className="lg:sticky lg:top-[25vh] space-y-6">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-${feature.badge.color}-500/30 bg-${feature.badge.color}-500/10 text-xs font-medium text-${feature.badge.color}-400`}>
                {feature.badge.icon && <feature.badge.icon className="h-3.5 w-3.5" />}
                {feature.badge.text}
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-[#8A8F98] leading-relaxed">
                {feature.description}
              </p>

              {/* Tech Details */}
              {feature.techDetails && feature.techDetails.length > 0 && (
                <ul className="space-y-2">
                  {feature.techDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#B4B4B8]">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>

          {/* Mockup Column */}
          <motion.div
            style={{
              opacity: mockupOpacity,
              x: mockupX,
              y: mockupY,
              scale: mockupScale
            }}
            className={`lg:col-span-7 ${direction === 'right-text' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <DashboardWindow
              title={feature.windowTitle || feature.title}
              icon={feature.badge.icon}
              accent={feature.badge.color}
              status={feature.status}
              className="transform-gpu will-change-transform"
            >
              <div className="min-h-[400px] p-4">
                <MockupComponent />
              </div>
            </DashboardWindow>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureScrollSection;
