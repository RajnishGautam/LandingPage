import './App.css'
import Header from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WebServices from './components/WebServices'
import Process from './components/Process'
import Testinomials from './components/Testimonials'
import WhyUs3DCards from './components/WhyUs'

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      
      <AboutSection />
      <WhyUs3DCards />
      <WebServices />
      
      <Process />
      <Testinomials />
    </div>
  )
}

export default App
