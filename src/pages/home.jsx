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
        <AnimatedContent duration={2}>
          <div className="max-w-7xl mx-auto text-center mt-20 flex flex-col gap-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Monitor, Debug, and Fix Your ROS 2 Robots — From Anywhere.
              </h1>
              <p className="text-xl sm:text-xl text-white mb-6 max-w-3xl mx-auto leading-relaxed">
                Real-time fleet observability and AI-assisted troubleshooting for every robot, all in one cloud dashboard.
              </p>
              <div className="flex items-center gap-6 justify-center">
                <button
                  onClick={scrollToFooter}
                  className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-8 rounded-md transition-colors duration-200 cursor-pointer"
                >
                  Contact us
                </button>
                <button
                  onClick={scrollToFooter}
                  className={`text-white font-semibold py-2 px-8 rounded-md border transition-colors duration-200 cursor-pointer`}
                  style={{ borderColor: colors.primary }}
                >
                  Book a demo
                </button>
              </div>
            </div>
            <img src={dashboard} alt="dashboard" className='border-t-5 border-x-5 border-white/20 rounded-t-xl w-full h-auto' />
          </div>
        </AnimatedContent>
      </section>
    </div >
  );
}

export default Home;
