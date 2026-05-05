# Vivekanand Kumawat — Portfolio

A modern, responsive personal portfolio website built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The `dist/` folder will contain the production-ready files.

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

## 🌐 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Deploy ✅

## ✏️ Customization Checklist

| Task | File |
|------|------|
| Update email & social links | `Contact.jsx`, `Footer.jsx` |
| Add/edit projects | `Projects.jsx` → `projects` array |
| Update GitHub handle | `Projects.jsx`, `About.jsx` |
| Add resume PDF | `public/resume.pdf` |
| Change skills & levels | `Skills.jsx` → `skillCategories` |
| Update timeline | `Resume.jsx` → `timeline` |

## 🎨 Design System

- **Colors**: Dark theme (`#080C14` bg, `#00D4FF` accent, `#7B61FF` secondary)
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Effects**: Glassmorphism cards, scroll animations, cursor glow, typewriter
