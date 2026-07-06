export const SITE = {
  title: "Jorge Otero | Full Stack Engineer",
  description:
    "Full Stack Engineer · FastAPI/Flask + React · PostgreSQL · Docker · CI/CD. Buenos Aires. Live demos: Sonoteca, LaVerde, AI Orchestrator.",
  url: "https://portofolio-mu-lac.vercel.app/",
  email: "jorgotero4@gmail.com",
  linkedin: "https://linkedin.com/in/jorgeotero1998",
  github: "https://github.com/Jorgeotero1998",
};

export const ROLES = [
  "Full Stack Engineer · Backend-first",
  "FastAPI / Flask → React → PostgreSQL",
  "Docker · CI/CD · Vercel deploys",
  "Buenos Aires · Production apps",
];

export const FEATURED_PROJECTS = [
  {
    name: "Sonoteca",
    emoji: "🎵",
    featured: true,
    flagship: true,
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Vercel", "Deezer API"],
    desc: "Production music platform — Deezer API catalog, 30s previews, queue/shuffle/repeat player, JWT auth & RBAC.",
    impact: "Monorepo: React (Vite) + FastAPI on Vercel, Neon Postgres, Alembic migrations. Refs-only persistence.",
    architecture: "React → FastAPI /api → SQLAlchemy → Neon · Deezer API for catalog",
    live: "https://sonoteca-hzbi.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/Sonoteca",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "LaVerde Tienda",
    emoji: "🛒",
    featured: true,
    tags: ["React", "Flask", "PostgreSQL", "JWT", "Cloudinary", "Render"],
    desc: "E-commerce for fruits & vegetables — cart persistence, checkout, admin panel, Cloudinary uploads.",
    impact: "3-person capstone · 44 pytest tests · GitHub Actions CI. Frontend live; Render backend may sleep.",
    architecture: "React SPA → Flask REST API → PostgreSQL · JWT auth",
    live: "https://laverde-frontend.onrender.com",
    repo: "https://github.com/Jorgeotero1998/LaVerde-Tienda",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
  {
    name: "AI Task Orchestrator",
    emoji: "🤖",
    featured: true,
    tags: ["Python", "Flask", "React", "Groq API", "Llama 3.3", "Docker"],
    desc: "LLM orchestrator — decomposes complex goals into 5 executable steps via Groq Llama 3.3.",
    impact: "Docker Compose · Postgres · admin auth · PDF export · live on Vercel.",
    architecture: "React dashboard → Flask API → Groq LLM · Postgres task store",
    live: "https://ai-task-orchestrator-inky.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/ai-task-orchestrator",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "GlobalThree",
    emoji: "🌍",
    featured: true,
    tags: ["React", "Three.js", "React Three Fiber", "Framer Motion", "Vercel"],
    desc: "Interactive 3D globe — pulsating demographic nodes, animated arcs, navigable Earth textures.",
    impact: "React Three Fiber + REST Countries API · cinematic data visualization on Vercel.",
    architecture: "React → R3F/Three.js · REST Countries data layer",
    live: "https://global-three-one.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/GlobalThree",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
  {
    name: "Scraper",
    emoji: "🕷️",
    featured: true,
    sourceKind: "cli",
    tags: ["TypeScript", "Node", "Cheerio", "Playwright", "Vitest", "Docker"],
    desc: "CLI scraper for Peruvian legal databases (OEFA, Poder Judicial) — JSON/CSV export.",
    impact: "Playwright + Cheerio · exponential backoff · 23 Vitest tests · Docker · GitHub Actions.",
    architecture: "TypeScript CLI → Playwright/Cheerio · rate-limited fetch pipeline",
    live: null,
    repo: "https://github.com/Jorgeotero1998/Scraper",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
];

export const OTHER_PROJECTS = [
  {
    name: "FlowByte",
    emoji: "⚡",
    sourceKind: "source",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare Workers", "Tailwind"],
    desc: "Personal SaaS automation platform with real-time workflows, auth, and activity logging.",
    impact: "Modular architecture with Supabase backend and Cloudflare Workers for edge execution.",
    live: null,
    repo: null,
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "SentinelSoc",
    emoji: "🛡️",
    sourceKind: "source",
    tags: ["Python", "watchdog", "pywin32", "JSON logging"],
    desc: "Windows EDR engine with burst-rate ransomware detection and SIEM-ready JSON telemetry.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/SentinelSoc",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
  {
    name: "Security-SOAR",
    emoji: "🔐",
    sourceKind: "source",
    tags: ["Python", "VirusTotal API", "Telegram Bot API", "psutil", "Docker"],
    desc: "Automated incident response — enriches telemetry with VirusTotal and alerts via Telegram.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/Security-SOAR",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "MemorySentinel",
    emoji: "🧠",
    sourceKind: "source",
    tags: ["C++", "Windows API", "SIEM"],
    desc: "Native C++ security engine for protected file monitoring and SIEM telemetry on Windows.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/MemorySentinel",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
];

/** @deprecated use FEATURED_PROJECTS + OTHER_PROJECTS */
export const PROJECTS = [...FEATURED_PROJECTS, ...OTHER_PROJECTS];

export const SKILLS = {
  Languages:   { color: "#fb923c", items: ["Python", "TypeScript", "JavaScript"] },
  Frontend:    { color: "#f472b6", items: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS"] },
  Backend:     { color: "#fb923c", items: ["FastAPI", "Flask", "SQLAlchemy", "Alembic", "REST APIs", "JWT"] },
  "DB & DevOps": { color: "#f472b6", items: ["PostgreSQL", "Docker", "GitHub Actions", "Vercel", "Render", "Linux"] },
};

export const CERTS = [
  { name: "AWS Certified Security Specialty",         issuer: "Amazon Web Services", color: "#fb923c" },
  { name: "Azure AZ-500 Security Engineer",           issuer: "Microsoft",           color: "#f472b6" },
  { name: "Google Cloud Cybersecurity",               issuer: "Google",              color: "#fb923c" },
  { name: "Automate Cybersecurity with Python",       issuer: "Google · Oct 2025",   color: "#f472b6" },
  { name: "Penetration Testing & Cryptography",       issuer: "IBM · Oct 2025",      color: "#fb923c" },
  { name: "Cloud-Native with OpenShift & Kubernetes", issuer: "Red Hat",             color: "#f472b6" },
];
