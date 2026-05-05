import React, { useEffect, useState } from 'react'

const TYPED_WORDS = ['Full Stack Developer', 'Data Science Student', 'React Enthusiast', 'Problem Solver']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex]
    let timeout

    if (!isDeleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length)
    }

    setDisplayText(word.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-overlay"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/5 rounded-full blur-3xl animate-float delay-400 pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-accent/20 pointer-events-none" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r border-b border-accent2/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-xs font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Available for Internships & Freelance
        </div>

        {/* Main heading */}
        <h1 className="font-display font-800 leading-[1.05] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text opacity-0 animate-fade-up delay-100">
            Vivekanand
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text opacity-0 animate-fade-up delay-200">
            Kumawat
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-8 opacity-0 animate-fade-up delay-300">
          <span className="font-mono text-lg sm:text-xl text-accent">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 animate-pulse" />
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-xl mx-auto text-muted font-body text-base sm:text-lg leading-relaxed mb-12 opacity-0 animate-fade-up delay-400">
          Building scalable web apps & smart solutions — from IIT Madras to the real world.
          I turn complex problems into clean, deployable code.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-500">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-8 py-3.5 rounded-xl font-body font-medium text-bg bg-accent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 rounded-xl font-body font-medium text-text border border-border hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 hover:scale-105"
          >
            Contact Me →
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mt-20 opacity-0 animate-fade-up delay-600">
          {[
            { val: '3+', label: 'Projects Built' },
            { val: 'IIT', label: 'Madras Student' },
            { val: '9+', label: 'Technologies' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-700 text-2xl gradient-text">{val}</div>
              <div className="text-muted text-xs font-mono mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-muted text-xs font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
