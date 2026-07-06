export const SITE = {
  title: "Jorge Otero | Junior+ Full Stack Developer",
  description:
    "Junior+ Full Stack Developer · ~3 años construyendo apps con Python + React · Demos en producción. Buenos Aires · Remote.",
  url: "https://portofolio-mu-lac.vercel.app/",
  email: "jorgotero4@gmail.com",
  linkedin: "https://linkedin.com/in/jorgeotero1998",
  github: "https://github.com/Jorgeotero1998",
  cv: "/JORGE_OTERO_CV.pdf",
};

export const ROLES = [
  "Junior+ Full Stack Developer",
  "Python · FastAPI · React",
  "~3 años construyendo apps",
  "Portfolio en producción",
];

export const SOCIAL_PROOF = {
  repos: "20+",
  highlights: ["CI/CD", "Docker", "PostgreSQL", "Live demos", "Vitest & pytest"],
};

export const FEATURED_PROJECTS = [
  {
    name: "Sonoteca",
    emoji: "🎵",
    featured: true,
    flagship: true,
    status: "live",
    statusLabel: "Live",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Vercel", "Deezer API", "JWT/RBAC"],
    desc: "Flagship music platform — real Deezer catalog, 30s previews, built-in player (queue, shuffle, repeat), playlists, favorites, and listening history.",
    impact: "Monorepo on Vercel + Neon Postgres: FastAPI API under /api, Alembic migrations, JWT auth, refs-only persistence.",
    live: "https://sonoteca-hzbi.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/Sonoteca",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
  {
    name: "AI Task Orchestrator",
    emoji: "🤖",
    featured: true,
    status: "live",
    statusLabel: "Live",
    demoLogin: "admin@example.com / change-me",
    tags: ["Python", "Flask", "React", "Groq API", "Llama 3.3", "Docker", "PostgreSQL"],
    desc: "LLM platform that decomposes complex goals into 5 actionable steps using Groq's Llama 3.3 — with PDF export and task history dashboard.",
    impact: "Docker Compose stack, secure admin auth, Postgres persistence, deployed on Vercel.",
    live: "https://ai-task-orchestrator-inky.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/ai-task-orchestrator",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.12), rgba(139,92,246,0.04))",
  },
  {
    name: "LaVerde Tienda",
    emoji: "🛒",
    featured: true,
    status: "frontend",
    statusLabel: "Frontend Demo",
    tags: ["React", "Flask", "PostgreSQL", "JWT", "Cloudinary", "pytest"],
    desc: "Production e-commerce for fruits & vegetables — cart, checkout, admin panel, Cloudinary media, and order management.",
    impact: "3-person team capstone with 44 pytest tests and GitHub Actions CI. Backend on Render may sleep — frontend UI is live.",
    live: "https://laverde-frontend.onrender.com",
    repo: "https://github.com/Jorgeotero1998/LaVerde-Tienda",
    color: "#4ade80",
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.12), rgba(34,197,94,0.04))",
  },
  {
    name: "Scraper",
    emoji: "🕷️",
    featured: true,
    status: "cli",
    statusLabel: "CLI",
    tags: ["TypeScript", "Playwright", "Cheerio", "Vitest", "Docker", "GitHub Actions"],
    desc: "Production-grade CLI scraper for Peruvian legal databases (OEFA, Poder Judicial) — JSON/CSV export, rate limiting, retry/backoff.",
    impact: "23 Vitest tests, Docker packaging, exponential backoff, GitHub Actions CI pipeline.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/Scraper",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(236,72,153,0.04))",
  },
];

export const OTHER_PROJECTS = [
  {
    name: "GlobalThree",
    emoji: "🌍",
    status: "live",
    statusLabel: "Live",
    tags: ["React", "Three.js", "React Three Fiber", "Vercel"],
    desc: "Interactive 3D globe with pulsating demographic nodes and animated arcs simulating global data flows.",
    live: "https://global-three-one.vercel.app/",
    repo: "https://github.com/Jorgeotero1998/GlobalThree",
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(59,130,246,0.04))",
  },
  {
    name: "SentinelSoc",
    emoji: "🛡️",
    status: "repo",
    statusLabel: "Repo",
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
    status: "repo",
    statusLabel: "Repo",
    tags: ["Python", "VirusTotal API", "Telegram Bot API", "Docker"],
    desc: "Automated incident response — enriches telemetry with VirusTotal and alerts via Telegram.",
    live: null,
    repo: "https://github.com/Jorgeotero1998/Security-SOAR",
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(249,115,22,0.04))",
  },
];

/** @deprecated use FEATURED_PROJECTS + OTHER_PROJECTS */
export const PROJECTS = [...FEATURED_PROJECTS, ...OTHER_PROJECTS];

export const SKILLS = {
  Backend: {
    color: "#fb923c",
    items: ["FastAPI", "Flask", "SQLAlchemy", "Alembic", "Pydantic", "JWT/RBAC", "REST APIs", "pytest"],
  },
  Frontend: {
    color: "#f472b6",
    items: ["React", "TypeScript", "Vite", "Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
  },
  Platform: {
    color: "#60a5fa",
    items: ["PostgreSQL", "Neon", "Docker", "GitHub Actions", "Vercel", "Render", "Linux", "CI/CD"],
  },
};

export const CERTS = [
  { name: "Cloud-Native with OpenShift & Kubernetes", issuer: "Red Hat", color: "#60a5fa" },
  { name: "Automate Cybersecurity with Python", issuer: "Google · Oct 2025", color: "#f472b6" },
  { name: "Crash Course on Python", issuer: "Google", color: "#fb923c" },
  { name: "AWS / Azure / GCP security credentials", issuer: "See LinkedIn for full list", color: "#94a3b8" },
];

export const STATUS_COLORS = {
  live: { bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.4)", text: "#4ade80" },
  frontend: { bg: "rgba(251,146,60,0.15)", border: "rgba(251,146,60,0.4)", text: "#fb923c" },
  cli: { bg: "rgba(96,165,250,0.15)", border: "rgba(96,165,250,0.4)", text: "#60a5fa" },
  repo: { bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.3)", text: "#94a3b8" },
};
