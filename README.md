🚀 Portfolio Website (Full Stack)

A modern full-stack developer portfolio showcasing projects, skills, and contact functionality with a live backend API.
```
🌐 Live Demo
Frontend (Vercel): https://portfolio-vivekanand-mocha.vercel.app/
Backend (Render): https://portfolio-vivekanand.onrender.com/
```

```
📌 Features
✨ Modern responsive UI (React + Tailwind)
📂 Projects showcase with detailed cards
📄 Resume preview & download
📞 Contact form with backend integration
🟢 Floating WhatsApp button
📊 Skill visualization with animations
🔐 Secure backend with validation & PostgreSQL
⚡ Deployed on Vercel + Render
🏗️ Tech Stack
```

```
🔹 Frontend
React.js
Tailwind CSS
JavaScript (ES6+)
Vite
🔹 Backend
Flask
SQLAlchemy
PostgreSQL
Flask-CORS
🔹 Tools & Deployment
Vercel (Frontend Hosting)
Render (Backend Hosting)
Git & GitHub
```

```
📁 Project Structure
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── ...
│   └── index.html
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── config.py
│   ├── requirements.txt
│   └── ...

```


```
⚙️ Setup Instructions
🔹 1. Clone Repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
🖥️ Frontend Setup
cd frontend
npm install
npm run dev
Environment Variable

Create .env file:

VITE_API_URL=http://localhost:5000
⚙️ Backend Setup
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
Environment Variables

Create .env file:

DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
SECRET_KEY=your_secret_key
Run Backend
python app.py
🔗 API Endpoints
Health Check
GET /api/health
Contact Form
POST /api/contact
Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}

```

```
🚀 Deployment
🔹 Frontend (Vercel)
Push code to GitHub
Import project in Vercel
Add env variable:
VITE_API_URL=https://your-backend.onrender.com
🔹 Backend (Render)
Create new Web Service
Connect GitHub repo
Set:
Build Command: pip install -r requirements.txt
Start Command: python app.py
Add environment variables:
DATABASE_URL=your_render_db_url
SECRET_KEY=your_secret_key
⚠️ Important Notes
Render free tier sleeps after inactivity
First request may take 30–60 seconds
Use uptime monitoring tools to prevent sleep
📸 Screenshots

Add your portfolio screenshots here
```

```
📬 Contact
📧 Email: vivekanandkumawat261@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/vivekanand-kumawat-b042802aa
💻 GitHub: https://github.com/vivekanandkumawat262
⭐ Contributing

Feel free to fork this project and improve it.

📄 License

This project is open-source and available under the MIT License.
```