import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Features from './pages/features'
import Builtfor from './pages/builtfor'
import Footer from './pages/footer'
import Faqs from './pages/faqs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen relative'>
        <Home />
        <Features />
        <Builtfor />
        <Faqs />
        <Footer />
    </div>
  )
}

export default App
