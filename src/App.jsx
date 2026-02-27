import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThreeBackground from './ThreeBackground'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Certifications from './Certifications'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <Router>
      <ThreeBackground />
      <div className="flex flex-col min-h-screen relative z-10 w-full">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
