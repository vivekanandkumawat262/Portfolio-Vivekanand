import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks'

const socials = [
  {
    label: 'GitHub',
    handle: 'github.com/vivekanandkumawat262',
    href: 'https://github.com/vivekanandkumawat262',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.810 1.095.810 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.690.825.570A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: '#fff',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/vivekanand-kumawat-b042802aa',
    href: 'https://www.linkedin.com/in/vivekanand-kumawat-b042802aa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.900 1.637-1.850 3.37-1.850 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.200 24 24 23.227 24 22.271V1.729C24 .774 23.200 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0A66C2',
  },
  {
    label: 'Email',
    handle: 'vivekanandkumawat261@gmail.com',
    href: 'mailto:vivekanandkumawat261@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#00D4FF',
  },
];

export default function Contact() {
  const [ref, visible] = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        alert(data.error || "Failed to send message")
      }

    } catch (err) {
      console.error(err)
      alert("Server error")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none opacity-60" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-text">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </div>
        <p className="text-muted font-body text-sm mb-14 ml-10">
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-600 text-xl text-text mb-3">Let's work together</h3>
              <p className="font-body text-muted text-sm leading-relaxed">
                I'm currently open to internship roles and freelance projects. If you need a developer who can
                ship clean, scalable code — let's connect.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ label, handle, href, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 rounded-xl border border-border/50 hover:border-accent/30 group transition-all duration-300 hover:-translate-x-1"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, color }}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-body font-medium text-sm text-text">{label}</div>
                    <div className="font-mono text-xs text-muted truncate">{handle}</div>
                  </div>
                  <div className="ml-auto text-muted group-hover:text-accent transition-colors duration-300 text-lg">→</div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-2xl p-8 border border-border/50">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h4 className="font-display font-700 text-xl text-text">Message sent!</h4>
                  <p className="font-body text-muted text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                    className="font-mono text-xs text-accent underline-anim mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wide">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-bg/60 border border-border rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-bg/60 border border-border rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-bg/60 border border-border rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-body font-medium text-sm bg-accent text-bg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
