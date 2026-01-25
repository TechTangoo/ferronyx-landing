import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FerronyxFooter from './components/FerronyxFooter'

// Scroll to top on route change
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
  }, [pathname, hash])

  return null
}

function Layout({ children }) {
  return (
    <div className='min-h-screen relative bg-black text-white selection:bg-blue-500/30'>
      <ScrollToTop />
      <Navbar />
      {children}
      <FerronyxFooter />
    </div>
  )
}

export default Layout
