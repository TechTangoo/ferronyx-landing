import React from 'react';
import LightRays from '../components/LightRays';
import Header from '../components/Header';
import { colors } from '../utils/colors';
import AnimatedContent from '../components/AnimatedContent';
import DashboardIllustration from '../components/DashboardIllustration';
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

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.primary}40, transparent)`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.accent}40, transparent)`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 items-center">
        <Header />
        <AnimatedContent duration={1.5}>
          <div className="max-w-7xl mx-auto text-center mt-12 sm:mt-20 flex flex-col gap-12">
            <div className="max-w-6xl mx-auto">
              {/* Modern glassmorphic badge */}
              <div className="inline-flex mb-8">
                <Badge
                  variant="outline"
                  className="glass px-6 py-3 text-base font-medium border-0"
                  style={{
                    color: colors.primaryLight,
                    borderColor: colors.borderLight
                  }}
                >
                  <span className="relative z-10">🤖 Full stack observability for robotic fleets</span>
                </Badge>
              </div>

              {/* Massive hero headline */}
              <h1 className="text-hero text-white mb-8 leading-[0.95] tracking-tight">
                Observe. Diagnose.{' '}
                <span
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary}, ${colors.accent})`
                  }}
                >
                  Heal.
                </span>
              </h1>

              {/* Larger, clearer subheadline */}
              <p
                className="text-large mb-10 max-w-3xl mx-auto font-light"
                style={{color: colors.textSecondary}}
              >
                Give your robotics team a <strong className="font-semibold text-white">unified view</strong> of their entire fleet with real-time telemetry, SRE-grade incident management, and AI-powered debugging.
              </p>

              {/* Modern CTA with glow effect */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  className="btn-glow w-full sm:w-auto font-semibold px-12 py-6 text-lg rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: colors.primary,
                    color: 'white',
                    boxShadow: `0 20px 40px ${colors.glow}`
                  }}
                >
                  Get Started Free
                </Button>
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  variant="outline"
                  className="glass w-full sm:w-auto font-semibold px-12 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
                  style={{
                    color: colors.primaryLight,
                    borderColor: colors.borderLight
                  }}
                >
                  Book a Demo
                </Button>
              </div>

              {/* Refined feature checkmarks with better spacing */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-base" style={{color: colors.textSecondary}}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">10-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">ROS-native</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{color: colors.success}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">AI-assisted debugging</span>
                </div>
              </div>
            </div>

            {/* Dashboard illustration with modern styling */}
            <div className="mt-12 relative">
              <div className="absolute inset-0 blur-3xl opacity-30" style={{backgroundColor: colors.primary}} />
              <div className="relative">
                <DashboardIllustration />
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
