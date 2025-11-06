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
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Primary gradient background from bottom to top */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(to top, ${colors.primary},${colors.background},  ${colors.background})`
        }}
      />

      <div className="absolute inset-0 w-full h-full z-0">
        <LightRays />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 items-center">
        <Header />
        <AnimatedContent duration={1.5}>
          <div className="max-w-7xl mx-auto text-center mt-16 flex flex-col gap-8">
            <div className="max-w-5xl mx-auto">
              <Badge
                variant="outline"
                className="px-5 py-2 mb-6 text-sm sm:text-base font-medium border"
                style={{
                  backgroundColor: `${colors.primary}15`,
                  borderColor: `${colors.border}`,
                  color: colors.light
                }}
              >
                Full stack observability tool for robotic fleets.
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Observe. Diagnose. <span style={{color: colors.light}}>Heal.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed" style={{color: colors.textSecondary}}>
                Ferronyx gives robotics teams a unified view of their entire fleet — with real-time telemetry, SRE-grade incident management and AI-powered debugging.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-4">
                <Button
                  onClick={scrollToFooter}
                  size="lg"
                  className="w-full sm:w-auto font-semibold px-10 shadow-lg"
                  style={{
                    backgroundColor: colors.primary,
                    color: 'white'
                  }}
                >
                  Get Started
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{color: colors.textSecondary}}>
                <div className="flex items-center gap-2">
                  <span style={{color: colors.success}}>✓</span>
                  <span>10-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{color: colors.success}}>✓</span>
                  <span>Alert Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{color: colors.success}}>✓</span>
                  <span>ROS-native integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{color: colors.success}}>✓</span>
                  <span>AI-assisted debugging</span>
                </div>
              </div>
            </div>

            <div className="mt-8 h-[50%]">
              <DashboardIllustration />
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div >
  );
}

export default Home;
