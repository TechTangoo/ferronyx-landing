import React from 'react';
import LightRays from '../components/LightRays';
import Header from '../components/Header';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import RobotHoneycomb from '../components/RobotHoneycomb';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

function Home() {

  const scrollToFooter = () => {
    const footerElement = document.getElementById('contact-footer');
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 w-full h-full z-0 gradient-mesh" style={{ backgroundColor: colors.background }} />

      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.primary}20, transparent)`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.accent}20, transparent)`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays />
      </div>

      {/* Hero Section - NewRelic-style two column layout */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <Header />
        <AnimatedContent duration={1.5}>
          <div className="max-w-7xl mx-auto mt-16 sm:mt-24 lg:mt-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column - Text content */}
              <div className="text-left">
                {/* Tagline badge */}
                <div className="inline-flex mb-6">
                  <Badge
                    variant="outline"
                    className="glass px-4 py-2 text-sm font-medium border-0"
                    style={{
                      color: colors.primaryLight,
                      borderColor: colors.borderLight
                    }}
                  >
                    <span className="relative z-10">Robot Fleet Management, Simplified</span>
                  </Badge>
                </div>

                {/* NewRelic-style question headline */}
                <h1 className="text-hero text-white mb-6 leading-[1.15] tracking-tight">
                  Is your robot offline? Battery dying?{' '}
                  <span
                    className="bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary})`
                    }}
                  >
                    Ferronyx knows.
                  </span>
                </h1>

                {/* Value proposition subheadline */}
                <p
                  className="text-lg mb-8 font-light leading-relaxed"
                  style={{color: colors.textSecondary}}
                >
                  Monitor, manage, and maintain your entire robot fleet from a single dashboard. Get instant alerts when issues arise, diagnose problems remotely, and keep your robots running 24/7.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <Button
                    onClick={scrollToFooter}
                    size="lg"
                    className="btn-glow font-semibold px-8 py-5 text-base rounded-lg hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundColor: colors.primary,
                      color: 'white',
                      boxShadow: `0 10px 30px ${colors.glow}`
                    }}
                  >
                    Start Monitoring Free
                  </Button>
                  <Button
                    onClick={scrollToFooter}
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 py-5 text-base rounded-lg hover:scale-105 transition-all duration-300"
                    style={{
                      color: colors.text,
                      borderColor: colors.borderLight,
                      backgroundColor: 'transparent'
                    }}
                  >
                    Book a Demo
                  </Button>
                </div>

                {/* Feature checkmarks */}
                <div className="flex flex-wrap items-center gap-6 text-sm" style={{color: colors.textSecondary}}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>10-minute setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>ROS-native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>AI-assisted debugging</span>
                  </div>
                </div>
              </div>

              {/* Right column - Robot Honeycomb visualization */}
              <div className="hidden lg:flex justify-center items-center">
                <RobotHoneycomb />
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div >
  );
}

export default Home;
