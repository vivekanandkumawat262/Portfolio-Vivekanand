import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import InfoCard from './components/InfoCard'

export default function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    setShowCursor(true)
    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg">
      {/* Custom cursor glow */}
      {showCursor && (
        <div
          className="pointer-events-none fixed z-[9998] w-64 h-64 rounded-full opacity-[0.06] bg-accent blur-3xl transition-transform duration-100"
          style={{
            left: cursorPos.x - 128,
            top: cursorPos.y - 128,
          }}
        />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
      {/* <InfoCard />
 
      <WhatsAppButton /> */}

       {/* Button to open InfoCard */}
      <button
        onClick={() => setShowInfo(true)}
        className="fixed bottom-24 right-5 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Message Me
      </button>

      <InfoCard show={showInfo} setShow={setShowInfo} />

      <WhatsAppButton />
    </div>
  )
}
