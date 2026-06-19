export const ROLES = [
  "Full Stack Developer",
  "Python Developer",
  "React Developer",
  "Backend Engineer",
  "Open Source Contributor",
  "Builder of things",
];

export const PROJECTS = [
  {
    name: "LaVerde Tienda",
    emoji: "🛒",
    tags: ["React", "Flask", "PostgreSQL", "JWT", "Cloudinary", "Render"],
    desc: "Production e-commerce platform for fruits & vegetables. Built with a 3-person team — full cart, order flow, admin panel, CI/CD deployment on Render.",
    live: "https://laverde-frontend.onrender.com",
    repo: "https://github.com/Jorgeotero1998/LaVerde-Tienda",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "AI Task Orchestrator",
    emoji: "🤖",
    tags: ["Python", "Flask", "React", "Groq API", "Llama 3.3", "Docker"],
    desc: "LLM-powered platform that decomposes complex goals into actionable steps using Groq's Llama 3.3. Docker Compose, PDF export, secure admin login.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/ai-task-orchestrator",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
  {
    name: "FlowByte",
    emoji: "⚡",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare Workers", "Tailwind"],
    desc: "Personal SaaS automation platform — real-time data, workflow execution engine, auth system, activity logging, and modular architecture.",
    live: null,
    repo: "https://github.com/Jorgeotero1998",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "SentinelSoc",
    emoji: "🛡️",
    tags: ["Python", "watchdog", "pywin32", "JSON logging"],
    desc: "Lightweight Windows EDR engine. Detects ransomware patterns with burst-rate analysis and outputs SIEM-ready JSON telemetry logs.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/SentinelSoc",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
  {
    name: "Security-SOAR",
    emoji: "🔐",
    tags: ["Python", "VirusTotal API", "Telegram Bot API", "psutil", "Docker"],
    desc: "Automated incident response — reads telemetry, enriches with VirusTotal intel, suspends malicious processes, alerts via Telegram.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/Security-SOAR",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "MemorySentinel",
    emoji: "🧠",
    tags: ["C++", "Windows API", "SIEM"],
    desc: "Native C++ security engine for protected file monitoring and SIEM-ready telemetry generation built for Windows system security.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/MemorySentinel",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
];

export const SKILLS = {
  Frontend:    { color: "#fb923c", items: ["React", "TypeScript", "JavaScript", "Vite", "HTML/CSS", "Bootstrap", "Tailwind CSS"] },
  Backend:     { color: "#f472b6", items: ["Python", "Flask", "REST APIs", "SQLAlchemy", "JWT", "Werkzeug"] },
  Databases:   { color: "#fb923c", items: ["PostgreSQL", "SQLite"] },
  DevOps:      { color: "#f472b6", items: ["Docker", "Docker Compose", "GitHub Actions", "Render", "Vercel", "Linux"] },
  "AI / APIs": { color: "#fb923c", items: ["Groq API", "Cloudinary", "VirusTotal API", "Telegram Bot API"] },
  Automation:  { color: "#f472b6", items: ["Selenium", "Playwright", "Python scripting"] },
};

export const CERTS = [
  { name: "AWS Certified Security Specialty",         issuer: "Amazon Web Services", color: "#fb923c" },
  { name: "Azure AZ-500 Security Engineer",           issuer: "Microsoft",           color: "#f472b6" },
  { name: "Google Cloud Cybersecurity",               issuer: "Google",              color: "#fb923c" },
  { name: "Automate Cybersecurity with Python",       issuer: "Google · Oct 2025",   color: "#f472b6" },
  { name: "Penetration Testing & Cryptography",       issuer: "IBM · Oct 2025",      color: "#fb923c" },
  { name: "Cloud-Native with OpenShift & Kubernetes", issuer: "Red Hat",             color: "#f472b6" },
];
