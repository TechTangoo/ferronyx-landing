import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Features from './pages/features'
import Builtfor from './pages/builtfor'
import Footer from './pages/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen relative'>
        <Home />
        <Features />
        <Builtfor />
        <Footer />
    </div>
  )
}

export default App
