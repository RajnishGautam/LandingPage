import './App.css'
import Header from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WebServices from './components/WebServices'
import Process from './components/Process'
import Testinomials from './components/Testimonials'
import WorkSection from './components/WorkSection'

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Testinomials />
      <WorkSection />
      <WebServices />
      <Process />
      <AboutSection />
    </div>
  )
}

export default App
