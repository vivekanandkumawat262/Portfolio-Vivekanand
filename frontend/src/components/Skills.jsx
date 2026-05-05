import React, { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'Redux Toolkit', level: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'JWT Authentication', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Database & APIs',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'SQLAlchemy', level: 85 },
      { name: 'SQLite', level: 80 },
      { name: 'API Design', level: 88 },
    ],
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'OpenAI / GPT API', level: 85 },
      { name: 'Google Gemini API', level: 82 },
      { name: 'Stripe Integration', level: 78 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Linux', level: 80 },
    ],
  },
];
const techBadges = [
  'React', 'Python', 'Flask', 'JavaScript', 'HTML', 'CSS',
  'SQLite', 'Linux', 'Git', 'Vite', 'Node.js', 'REST API', 'DSA', 'Tailwind',
]

function SkillCard({ category, visible, delay }) {
  const barsRef = useRef([])

  useEffect(() => {
    if (!visible) return
    const timeout = setTimeout(() => {
      barsRef.current.forEach((bar) => {
        if (bar) bar.classList.add('skill-bar-visible')
      })
    }, delay + 200)
    return () => clearTimeout(timeout)
  }, [visible, delay])

  return (
    <div
      className="glass-card rounded-2xl p-6 border border-border/50 hover:border-accent/25 transition-all duration-400 hover:-translate-y-1 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center text-lg`}>
          {category.icon}
        </div>
        <h3 className="font-display font-600 text-lg text-text">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-body text-sm text-muted group-hover:text-text/80 transition-colors">{skill.name}</span>
              <span className="font-mono text-xs text-accent">{skill.level}%</span>
            </div>
            <div className="h-0.5 bg-border rounded-full overflow-hidden">
              <div
                ref={(el) => (barsRef.current[i] = el)}
                className="skill-bar"
                style={{ '--skill-width': `${skill.level}%`, width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent2/30 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`flex items-center gap-4 mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-text">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              category={cat}
              visible={visible}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-muted text-center mb-5 uppercase tracking-widest">Tech I work with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg glass border border-border/60 font-mono text-xs text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
