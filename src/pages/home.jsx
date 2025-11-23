import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import LightRays from '../components/LightRays';
import Header from '../components/Header';
import NetworkBackground from '../components/NetworkBackground';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import DashboardIllustration from '../components/DashboardIllustration';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToFooter = () => {
    const footerElement = document.getElementById('contact-footer');
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };


  return (
    <div ref={containerRef} className="relative min-h-screen w-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Connected fleet network background with parallax */}
      <motion.div
        style={{ y: y, opacity: opacity }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      >
        <NetworkBackground animate={true} density="normal" />
      </motion.div>

      {/* Subtle blue accent - parallax */}
      <motion.div
        style={{ y: y }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-10"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${colors.primary}30, transparent 70%)`
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 items-center">
        <Header />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto text-center mt-20 sm:mt-28 flex flex-col gap-16"
        >
          <div className="max-w-5xl mx-auto">
            {/* Animated badge */}
            <motion.div variants={itemVariants} className="inline-flex mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-sm font-medium border rounded-lg"
                style={{
                  color: colors.textSecondary,
                  borderColor: colors.border,
                  backgroundColor: colors.backgroundCard
                }}
              >
                Full-stack observability for robotic fleets
              </motion.div>
            </motion.div>

            {/* Animated headline */}
            <motion.h1
              variants={itemVariants}
              className="text-hero text-white mb-8 leading-[0.95] tracking-tight font-bold"
            >
              Observe. Diagnose. Heal.
            </motion.h1>

            {/* Animated subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-large mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
              style={{color: colors.textSecondary}}
            >
              A unified platform for robotics teams to monitor fleet health, debug issues with AI, and manage incidents with SRE-grade tooling.
            </motion.p>

            {/* Animated CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${colors.glow}` }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  className="w-full sm:w-auto font-semibold px-10 py-6 text-base rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: colors.primary,
                    color: 'white'
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-semibold px-10 py-6 text-base rounded-lg border transition-all duration-200"
                  style={{
                    color: colors.text,
                    borderColor: colors.border,
                    backgroundColor: 'transparent'
                  }}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated feature list */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-6 text-sm"
              style={{color: colors.textMuted}}
            >
              {[
                '10-minute setup',
                'ROS-native integration',
                'AI-assisted debugging'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full" style={{backgroundColor: colors.success}} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard illustration with slide-up + blur animation */}
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9]
            }}
            className="mt-8 relative"
          >
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative border rounded-lg overflow-hidden"
              style={{ borderColor: colors.border }}
            >
              <DashboardIllustration />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div >
  );
}

export default Home;
