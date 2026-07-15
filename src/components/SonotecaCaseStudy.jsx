import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LINKS = {
  live: "https://sonoteca-hzbi.vercel.app/",
  api: "https://sonoteca-hzbi.vercel.app/api/docs",
  health: "https://sonoteca-hzbi.vercel.app/api/health",
  repo: "https://github.com/Jorgeotero1998/Sonoteca",
};

const DECISIONS = [
  {
    title: "Refs-only persistence",
    detail: "Store Deezer track IDs and metadata — no audio hosting, legal compliance, lower storage cost.",
  },
  {
    title: "Vercel monorepo",
    detail: "Single deploy: React at `/`, FastAPI at `/api/*` via vercel.json — one domain, simpler CORS.",
  },
  {
    title: "JWT + RBAC",
    detail: "Role-based access for playlists and admin flows; secrets in Vercel env, never in git.",
  },
  {
    title: "Alembic migrations",
    detail: "Schema changes versioned and applied against Neon Postgres — reproducible prod setup.",
  },
];

export default function SonotecaCaseStudy() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="sonoteca" className="section section-inner" aria-labelledby="sonoteca-heading">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <p className="eyebrow">Flagship case study</p>
        <h2 id="sonoteca-heading" className="heading-section" style={{ marginBottom: "0.75rem" }}>
          Sonoteca —{" "}
          <span className="gradient-text">Music Library</span>
        </h2>
        <p className="lead">
          Full-stack music platform with Deezer catalog browsing, 30s previews, auth, and playlists, built as a React + FastAPI monorepo on Vercel + Neon.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="glass-card glass-card--accent"
        >
          <p className="case-label">Problem</p>
          <p style={{ color: "rgba(226,232,240,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            Build a personal music library without hosting audio — browse, preview, and organize tracks from a real catalog with persistent user data.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="glass-card glass-card--accent"
        >
          <p className="case-label">Solution</p>
          <p style={{ color: "rgba(226,232,240,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            React + FastAPI monorepo: Deezer API for catalog/previews, Neon Postgres for refs-only storage, JWT auth, player with queue and playlists.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="glass-panel"
        style={{ marginBottom: "2rem", overflowX: "auto" }}
      >
        <p className="case-label" style={{ color: "rgba(226,232,240,0.45)" }}>Architecture</p>
        <pre className="arch-pre">
{`┌─────────────┐     ┌──────────────────┐     ┌─────────────────────┐     ┌──────────────┐
│ React (Vite)│────▶│ FastAPI  /api    │────▶│ SQLAlchemy + Alembic│────▶│ Neon Postgres│
│  TypeScript │     │ JWT · RBAC · API │     │   asyncpg · PyJWT   │     │  refs-only   │
└─────────────┘     └────────┬─────────┘     └─────────────────────┘     └──────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Deezer API    │
                    │ catalog · 30s   │
                    └─────────────────┘`}
        </pre>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {DECISIONS.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 + i * 0.05 }}
            className="glass-card"
          >
            <p style={{ color: "#e2e8f0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              {d.title}
            </p>
            <p style={{ color: "rgba(226,232,240,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
              {d.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="glass-card"
        >
          <p className="case-label">Challenges</p>
          <p style={{ color: "rgba(226,232,240,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
            CORS across Vercel frontend + API routes, async Postgres on serverless cold starts, and Deezer preview URL edge cases, handled with monorepo routing, connection pooling, and graceful player fallbacks.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card glass-card--accent"
        >
          <p className="case-label">Results</p>
          <p style={{ color: "rgba(226,232,240,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
            Live at sonoteca-hzbi.vercel.app with OpenAPI docs, CI, JWT auth, playlists, and 30s previews from the Deezer catalog — the flagship example of my full-stack work.
          </p>
        </motion.div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "App UI", sub: "Browse, player, playlists", href: LINKS.live },
          { label: "OpenAPI docs", sub: "/api/docs", href: LINKS.api },
        ].map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            className="link-card"
            aria-label={`${item.label} — opens in new tab`}
          >
            <p className="link-card__title">{item.label} ↗</p>
            <p className="link-card__sub">{item.sub}</p>
          </motion.a>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }} role="group" aria-label="Sonoteca links">
        {[
          { label: "Live app", href: LINKS.live, primary: true },
          { label: "API docs", href: LINKS.api, primary: false },
          { label: "GitHub", href: LINKS.repo, primary: false },
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className={link.primary ? "btn-primary" : "btn-secondary"}
            style={link.primary ? {} : { padding: "0.65rem 1.25rem", fontSize: "0.88rem" }}
            aria-label={`${link.label} — opens in new tab`}
          >
            {link.label} ↗
          </motion.a>
        ))}
      </div>
    </section>
  );
}
