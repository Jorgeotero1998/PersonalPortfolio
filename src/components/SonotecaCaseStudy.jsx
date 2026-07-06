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
    <section id="sonoteca" style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3rem" }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#fb923c",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #fb923c, #f472b6)", display: "inline-block" }} />
          Flagship case study
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#e2e8f0",
            marginBottom: "0.75rem",
          }}
        >
          Sonoteca —{" "}
          <span style={{ background: "linear-gradient(135deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Music Library
          </span>
        </h2>
        <p style={{ color: "rgba(226,232,240,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", maxWidth: "640px", lineHeight: 1.75 }}>
          Full-stack music platform with real Deezer catalog, 30s previews, auth, and playlists — designed and shipped as a production monorepo on Vercel + Neon.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(251,146,60,0.2)",
            borderRadius: "16px",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Problem
          </p>
          <p style={{ color: "rgba(226,232,240,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            Build a personal music library without hosting audio — browse, preview, and organize tracks from a real catalog with persistent user data.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(251,146,60,0.2)",
            borderRadius: "16px",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Solution
          </p>
          <p style={{ color: "rgba(226,232,240,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            React + FastAPI monorepo: Deezer API for catalog/previews, Neon Postgres for refs-only storage, JWT auth, player with queue and playlists.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        style={{
          background: "rgba(6,1,15,0.6)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "1.5rem 1.75rem",
          marginBottom: "2rem",
          overflowX: "auto",
        }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(226,232,240,0.45)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Architecture
        </p>
        <pre
          style={{
            margin: 0,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            lineHeight: 1.6,
            color: "rgba(226,232,240,0.65)",
            whiteSpace: "pre",
          }}
        >
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {DECISIONS.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 + i * 0.05 }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "1.25rem",
            }}
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
            whileHover={{ scale: 1.02, borderColor: "rgba(251,146,60,0.4)" }}
            style={{
              display: "block",
              padding: "1.25rem 1.5rem",
              background: "linear-gradient(135deg, rgba(251,146,60,0.08), rgba(249,115,22,0.03))",
              border: "1px solid rgba(251,146,60,0.25)",
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            <p style={{ color: "#fb923c", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, margin: "0 0 0.35rem" }}>
              {item.label} ↗
            </p>
            <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", margin: 0 }}>
              {item.sub}
            </p>
          </motion.a>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {[
          { label: "Live app", href: LINKS.live },
          { label: "API docs", href: LINKS.api },
          { label: "GitHub", href: LINKS.repo },
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            style={{
              padding: "0.65rem 1.25rem",
              background: link.label === "Live app" ? "linear-gradient(135deg, #fb923c, #f472b6)" : "rgba(255,255,255,0.04)",
              color: link.label === "Live app" ? "#06010f" : "rgba(226,232,240,0.8)",
              border: link.label === "Live app" ? "none" : "1px solid rgba(255,255,255,0.12)",
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            {link.label} ↗
          </motion.a>
        ))}
      </div>
    </section>
  );
}
