import React from 'react'
import { useScrollAnimation } from '../hooks'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'IIT Madras — BS Data Science' },
  { icon: '🌍', label: 'Location', value: 'Rajasthan, India' },
  { icon: '💼', label: 'Open To', value: 'Internships & Freelance' },
  { icon: '🚀', label: 'Focus', value: 'Full Stack + Data' },
]

export default function About() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-text">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-text/90 font-body leading-relaxed text-base">
              Hi! I'm <span className="text-accent font-medium">Vivekanand Kumawat</span>, a passionate
              Full Stack Developer currently pursuing a{' '}
              <span className="text-accent font-medium">BS in Data Science from IIT Madras</span>.
              I love transforming ideas into production-ready applications that solve real-world problems.
            </p>
            <p className="text-muted font-body leading-relaxed text-base">
              My journey spans building interactive quiz platforms, MERN stack apps, and Python automation
              tools. I'm equally comfortable architecting a React frontend or designing a Flask REST API —
              whatever the project demands, I adapt and deliver.
            </p>
            <p className="text-muted font-body leading-relaxed text-base">
              I'm actively seeking <span className="text-text">internship opportunities</span> and{' '}
              <span className="text-text">freelance projects</span> where I can contribute meaningfully,
              learn from real engineering challenges, and keep pushing my limits as a developer.
            </p>

            <div className="pt-4">
              <div className="font-mono text-xs text-muted mb-3 uppercase tracking-widest">Currently studying</div>
              <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl w-fit">
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="text-text font-body font-medium text-sm">IIT Madras — BS Data Science</div>
                  <div className="text-muted font-mono text-xs">Indian Institute of Technology, Madras</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map(({ icon, label, value }, i) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-4 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-muted font-mono text-xs mb-1 uppercase tracking-wide">{label}</div>
                <div className="text-text font-body text-sm font-medium leading-snug">{value}</div>
              </div>
            ))}

            {/* Terminal-style card */}
            <div className="col-span-2 glass-card rounded-2xl p-4 border border-border/50 font-mono text-xs">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="text-muted ml-2">terminal</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-accent">$</span> <span className="text-muted">whoami</span></div>
                <div className="text-text pl-2">vivekanand_kumawat</div>
                <div><span className="text-accent">$</span> <span className="text-muted">status</span></div>
                <div className="text-green-400 pl-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  open_to_opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
