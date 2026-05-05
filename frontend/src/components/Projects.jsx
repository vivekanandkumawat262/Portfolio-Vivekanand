import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks'

const projects = [
  {
    id: 1,
    title: 'TaskForge',
    tagline: 'Jira-like Project Management SaaS',
    description:
      'Built a full-stack project management system with role-based dashboards, task assignment, and real-time progress tracking. Implemented JWT authentication with 20+ protected APIs using FastAPI and SQLAlchemy.',
    tech: ['React', 'FastAPI', 'SQLAlchemy', 'JWT', 'Redux', 'Tailwind'],
    github: 'https://github.com/vivekanandkumawat262',
    demo: '#',
    color: 'from-cyan-500/10 to-blue-500/5',
    accent: '#00D4FF',
    icon: '💻',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Lead Generation CRM',
    tagline: 'AI-Powered Sales Automation System',
    description:
      'Developed an AI-driven CRM automating the full sales lifecycle using Google Gemini API. Reduced manual effort by 70% with lead classification, email automation, and Stripe payment workflows.',
    tech: ['FastAPI', 'React', 'Gemini API', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/vivekanandkumawat262',
    demo: '#',
    color: 'from-purple-500/10 to-violet-500/5',
    accent: '#7B61FF',
    icon: '🚀',
    featured: true,
  },
  {
    id: 3,
    title: 'PrimeCoach',
    tagline: 'AI Fitness Coaching Platform',
    description:
      'Built an AI-powered fitness MVP generating personalized workout and nutrition plans using GPT API. Designed scalable SaaS architecture with structured onboarding and dashboard workflows.',
    tech: ['Python', 'GPT API', 'Flask', 'SaaS Architecture'],
    github: 'https://github.com/vivekanandkumawat262',
    demo: '#',
    color: 'from-emerald-500/10 to-teal-500/5',
    accent: '#10B981',
    icon: '🤖',
    featured: false,
  },
  {
    id: 4,
    title: 'Quiz Master',
    tagline: 'Role-Based Quiz Platform',
    description:
      'Developed a quiz management system with admin/user roles, secure authentication, and automated scoring. Built REST APIs and optimized database for performance tracking.',
    tech: ['Flask', 'SQLite', 'REST API', 'JWT'],
    github: 'https://github.com/vivekanandkumawat262',
    demo: '#',
    color: 'from-amber-500/10 to-orange-500/5',
    accent: '#F59E0B',
    icon: '🧠',
    featured: false,
  },
  {
    id: 5,
    title: 'Smart Parking System',
    tagline: 'Vehicle Slot Management Platform',
    description:
      'Built a web-based parking system enabling slot booking, real-time availability tracking, and admin approval workflows using JWT-based authentication.',
    tech: ['Flask', 'SQLite', 'REST API', 'JWT'],
    github: 'https://github.com/vivekanandkumawat262',
    demo: '#',
    color: 'from-red-500/10 to-pink-500/5',
    accent: '#EF4444',
    icon: '🚗',
    featured: false,
  },
];

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative group rounded-2xl border border-border/50 bg-gradient-to-br ${project.color} overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-opacity-60 hover:shadow-xl cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        borderColor: hovered ? `${project.accent}40` : undefined,
        boxShadow: hovered ? `0 20px 60px ${project.accent}15` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top bar */}
      <div
        className="h-0.5 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="font-display font-700 text-lg text-text leading-tight">{project.title}</h3>
              <p className="font-mono text-xs mt-0.5" style={{ color: project.accent }}>{project.tagline}</p>
            </div>
          </div>
          {project.featured && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-full border" style={{ borderColor: `${project.accent}50`, color: project.accent }}>
              featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-muted font-body text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-bg/50 border border-border/60 font-mono text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-text transition-colors duration-200 underline-anim"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200 underline-anim"
            style={{ color: project.accent }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none opacity-50" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-text">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>

        <p className={`text-muted font-body text-sm mb-12 ml-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Things I've built — from concept to deployment
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/vivekanandkumawat262"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-accent/40 text-muted hover:text-accent font-mono text-sm transition-all duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
