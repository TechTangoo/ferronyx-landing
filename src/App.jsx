import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import PrivacyBanner from './components/PrivacyBanner'
import { trackPageView } from './lib/analytics'
import FerronyxHero from './components/FerronyxHero'
import FerronyxFeaturesScroll from './components/FerronyxFeaturesScroll'
import HowItWorks from './components/HowItWorks'
import FerronyxSolutions from './components/FerronyxSolutions'
import FerronyxPricing from './components/FerronyxPricing'
import FerronyxFAQ from './components/FerronyxFAQ'
import FerronyxFooter from './components/FerronyxFooter'
import HomePage from './pages/HomePage'
import UseCasesPage from './pages/UseCasesPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import BlogListingPage from './pages/blog/BlogListingPage'
import BlogPostPage from './pages/blog/BlogPostPage'
// import CaseStudiesListingPage from './pages/case-studies/CaseStudiesListingPage'
// import CaseStudyPage from './pages/case-studies/CaseStudyPage'

// Scroll to top and track page views on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.getElementById(hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0)
    }

    // Track page view for SPA navigation
    trackPageView(pathname, document.title)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className='min-h-screen relative bg-black text-white selection:bg-blue-500/30'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        {/* <Route path="/case-studies" element={<CaseStudiesListingPage />} /> */}
        {/* <Route path="/case-studies/:slug" element={<CaseStudyPage />} /> */}
      </Routes>
      <FerronyxFooter />
      <PrivacyBanner />
    </div>
  )
}

export default App
