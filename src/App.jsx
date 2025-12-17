import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FerronyxHero from './components/FerronyxHero'
import FerronyxFeatures from './components/FerronyxFeatures'
import EcosystemSection from './components/EcosystemSection'
import FerronyxSolutions from './components/FerronyxSolutions'
import FerronyxFAQ from './components/FerronyxFAQ'
import FerronyxFooter from './components/FerronyxFooter'

function App() {
  return (
    <div className='min-h-screen relative bg-black text-white selection:bg-blue-500/30'>
        <Navbar />
        <FerronyxHero />
        <FerronyxFeatures />
        <EcosystemSection />
        <FerronyxSolutions />
        <FerronyxFAQ />
        <FerronyxFooter />
    </div>
  )
}

export default App
