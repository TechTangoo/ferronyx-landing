import './App.css'
import Home from './pages/home'
import SocialProof from './pages/social-proof'
import PainPoints from './pages/pain-points'
import Features from './pages/features'
import Builtfor from './pages/builtfor'
import Footer from './pages/footer'
import Faqs from './pages/faqs'

function App() {
  return (
    <div className='min-h-screen relative'>
        <Home />
        <SocialProof />
        <PainPoints />
        <Features />
        <Builtfor />
        <Faqs />
        <Footer />
    </div>
  )
}

export default App
