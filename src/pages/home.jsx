import React from 'react';
import FerronyxHero from '../components/FerronyxHero';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Navbar />
      <FerronyxHero />
    </div>
  );
}

export default Home;
