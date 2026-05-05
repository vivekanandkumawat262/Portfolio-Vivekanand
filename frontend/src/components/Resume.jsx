import React from 'react'
import { useScrollAnimation } from '../hooks'

const timeline = [
  {
    year: '2023 – Present',
    title: 'BS Data Science',
    org: 'IIT Madras',
    desc: 'Pursuing BS in Data Science with strong foundation in programming, statistics, and system design.',
    icon: '🎓',
    color: '#00D4FF',
  },
  {
    year: '2025',
    title: 'Backend Systems Development',
    org: 'Flask Projects',
    desc: 'Built Quiz Master and Vehicle Parking systems using Flask, JWT authentication, and REST APIs with optimized database design.',
    icon: '⚙️',
    color: '#7B61FF',
  },
  {
    year: 'Late 2025',
    title: 'AI Product Development',
    org: 'PrimeCoach',
    desc: 'Developed an AI-powered fitness MVP integrating GPT API for personalized recommendations and scalable SaaS workflows.',
    icon: '🤖',
    color: '#10B981',
  },
  {
    year: '2026',
    title: 'Full Stack SaaS Systems',
    org: 'TaskForge',
    desc: 'Built a Jira-like project management system with 20+ REST APIs, JWT security, and scalable architecture using FastAPI, React, and SQLAlchemy.',
    icon: '💻',
    color: '#F59E0B',
  },
  {
    year: '2026',
    title: 'AI CRM & Automation',
    org: 'Lead Generation Engine',
    desc: 'Created an AI-powered CRM system with Gemini API and Stripe integration, automating lead handling and reducing manual work by 70%.',
    icon: '🚀',
    color: '#EF4444',
  },
];



export default function Resume() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="resume" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent2/30 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-text">Resume</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div>
            <h3 className="font-display font-600 text-lg text-text mb-8">Journey So Far</h3>
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />
              {timeline.map(({ year, title, org, desc, icon, color }, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="absolute -left-[29px] w-3.5 h-3.5 rounded-full border-2 border-bg"
                    style={{ background: color, top: '3px' }}
                  />
                  <div className="font-mono text-xs mb-1" style={{ color }}>{year}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{icon}</span>
                    <h4 className="font-display font-600 text-text text-base">{title}</h4>
                  </div>
                  <div className="font-mono text-xs text-accent/70 mb-2">{org}</div>
                  <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resume download card */}
          <div>
            <h3 className="font-display font-600 text-lg text-text mb-8">Download CV</h3>
            <div className="glass-card rounded-2xl p-8 border border-border/50 text-center">
              {/* File icon */}
              <div className="w-20 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent2/20 border border-accent/30 flex items-center justify-center">
                  <div className="absolute top-0 right-0 w-5 h-5 bg-bg rounded-bl-lg border-l border-b border-accent/30" />
                  <div className="text-center pt-2">
                    <div className="font-mono text-accent text-xs font-bold">PDF</div>
                    <div className="font-mono text-muted text-[10px] mt-1">Resume</div>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-accent/5 rounded-xl blur-lg animate-pulse" />
              </div>

              <h4 className="font-display font-700 text-xl text-text mb-2">Vivekanand Kumawat</h4>
              <p className="font-mono text-xs text-muted mb-1">Full Stack Developer</p>
              <p className="font-mono text-xs text-accent/70 mb-8">IIT Madras BS Data Science</p>

              <a
                href="https://drive.google.com/file/d/1uGnSDVqZFzY1NYlBeOmBrHjg2giXd9P8/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-bg font-body font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 hover:bg-gradient-to-r hover:from-accent hover:to-accent2"
              >
                <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                View Resume
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1uGnSDVqZFzY1NYlBeOmBrHjg2giXd9P8"
                className="..."
              >
                Download Resume
              </a>

              <p className="font-mono text-xs text-muted/60 mt-4">Last updated: May 2026</p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { val: '3+', label: 'Projects' },
                { val: '9+', label: 'Tech Skills' },
                { val: '1+', label: 'Years Exp' },
              ].map(({ val, label }) => (
                <div key={label} className="glass-card rounded-xl p-3 text-center border border-border/40">
                  <div className="font-display font-700 text-xl gradient-text">{val}</div>
                  <div className="font-mono text-xs text-muted mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
