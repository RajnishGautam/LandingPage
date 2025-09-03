import './App.css'
import Header from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WebServices from './components/WebServices'
import Process from './components/Process'
import Testinomials from './components/Testimonials'
import WorkSection from './components/WorkSection'
import PartnersMarquee from './components/PartnersMarquee'
import ContactWithVideo from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <WorkSection />
      <Testinomials />
      <PartnersMarquee />
      <WebServices />
      <Process />
      <ContactWithVideo />
      <Footer />
    </div>
  )
}

export default App
