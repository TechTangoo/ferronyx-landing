import React from 'react';
import LightRays from '../components/LightRays';
import Header from '../components/Header';
import { colors } from '../utils/colors';
import StarBorder from '../components/StarBorder';
import AnimatedContent from '../components/AnimatedContent';
import dashboard from '../assets/image31.png';

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
              <div
                className="inline-block px-5 py-2 rounded-full mb-6 border"
                style={{
                  backgroundColor: `${colors.primary}20`,
                  borderColor: `${colors.primary}60`
                }}
              >
                <p className="text-sm sm:text-base font-medium" style={{color: colors.light}}>
                  The Intelligence Layer for Robotics
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Observe. Diagnose.
                <br />
                <span style={{color: colors.primary}}>Heal.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{color: colors.textSecondary}}>
                Ferronyx gives robotics teams a unified view of their entire fleet — with AI-powered debugging, real-time telemetry, and SRE-grade incident management.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-4">
                <button
                  onClick={scrollToFooter}
                  className="w-full sm:w-auto font-semibold py-3 px-10 rounded-lg transition-all duration-200 cursor-pointer hover:scale-105 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    color: 'white'
                  }}
                >
                  Get Started
                </button>
                {/*<button
                  onClick={scrollToFooter}
                  className="w-full sm:w-auto text-white font-semibold py-3 px-10 rounded-lg border transition-all duration-200 cursor-pointer hover:scale-105 hover:bg-white/5"
                  style={{ borderColor: `${colors.primary}80` }}
                >
                  Book a Demo
                </button>*/}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{color: colors.textSecondary}}>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>10-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>ROS-native integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>AI-assisted debugging</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img
                src={dashboard}
                alt="Ferronyx Dashboard - Robot Fleet Monitoring"
                className='border-t-4 border-x-4 rounded-t-2xl w-full h-auto shadow-2xl'
                style={{borderColor: `${colors.primary}40`}}
              />
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div >
  );
}

export default Home;
