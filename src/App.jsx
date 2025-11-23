import React from 'react'
import './App.css'
import Home from './pages/home'
import Features from './pages/features'
import Builtfor from './pages/builtfor'
import Footer from './pages/footer'
import Faqs from './pages/faqs'

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground antialiased'>
      <Home />
      <Features />
      <Builtfor />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App
