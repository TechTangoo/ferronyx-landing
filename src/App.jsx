import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FerronyxHero from './components/FerronyxHero'
import FerronyxFeaturesScroll from './components/FerronyxFeaturesScroll'
import HowItWorks from './components/HowItWorks'
import FerronyxSolutions from './components/FerronyxSolutions'
import FerronyxPricing from './components/FerronyxPricing'
import FerronyxFAQ from './components/FerronyxFAQ'
import FerronyxFooter from './components/FerronyxFooter'

function App() {
  return (
    <div className='min-h-screen relative bg-black text-white selection:bg-blue-500/30'>
        <Navbar />
        <FerronyxHero />
        <FerronyxFeaturesScroll />
        <HowItWorks />
        <FerronyxSolutions />
        <FerronyxPricing />
        <FerronyxFAQ />
        <FerronyxFooter />
    </div>
  )
}

export default App
