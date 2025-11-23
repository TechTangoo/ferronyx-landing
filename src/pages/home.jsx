import React from 'react';
import LightRays from '../components/LightRays';
import Header from '../components/Header';
import AnimatedContent from '../components/AnimatedContent';
import DashboardIllustration from '../components/DashboardIllustration';
import Button from '../components/Button';

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
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24">
        <AnimatedContent duration={1.2}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full stack observability tool for robotic fleets
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-[0.95]">
                Observe. Diagnose.{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Heal.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-muted-foreground">
                Ferronyx gives robotics teams a unified view of their entire fleet — with real-time telemetry, 
                SRE-grade incident management and AI-powered debugging.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
                <Button
                  onClick={scrollToFooter}
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto px-12 py-4 text-lg font-semibold"
                >
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                
                <Button
                  onClick={scrollToFooter}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-medium"
                >
                  Book a Demo
                </Button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                {[
                  '10-minute setup',
                  'Alert Setup', 
                  'ROS-native integration',
                  'AI-assisted debugging'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Illustration */}
            <div className="mt-16 lg:mt-24 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
                  <DashboardIllustration />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-sm animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-emerald-500/20 rounded-full blur-sm animate-pulse delay-500" />
            </div>

            {/* Social Proof */}
            <div className="mt-20 text-center">
              <p className="text-sm text-muted-foreground mb-6 font-medium">
                Trusted by robotics teams worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* You can add company logos here */}
                <div className="h-8 w-24 bg-muted rounded opacity-30" />
                <div className="h-8 w-32 bg-muted rounded opacity-30" />
                <div className="h-8 w-28 bg-muted rounded opacity-30" />
                <div className="h-8 w-36 bg-muted rounded opacity-30" />
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
}

export default Home;
