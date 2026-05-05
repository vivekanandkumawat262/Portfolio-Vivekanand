import React, { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'projects', 'resume', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/30' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="font-display font-800 text-xl tracking-tight group"
        >
          <span className="gradient-text">VK</span>
          <span className="text-muted group-hover:text-text transition-colors duration-300">
            .dev
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`font-body text-sm tracking-wide underline-anim transition-colors duration-300 ${
                  activeSection === id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav('contact')}
              className="px-4 py-2 rounded-lg text-sm font-body font-medium border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`block h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`w-full text-left font-body text-sm ${
                  activeSection === id ? 'text-accent' : 'text-muted'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
