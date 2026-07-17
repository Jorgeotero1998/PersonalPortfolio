import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FEATURED_PROJECTS, OTHER_PROJECTS, STATUS_COLORS } from "../constants";

const SHOWCASE_METRICS = [
  { value: "5", label: "Live demos" },
  { value: "44 + 23", label: "Tests in 2 repos" },
  { value: "5", label: "Featured repos" },
];

const showcaseStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

const showcaseItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ project, index, compact, displayIndex }) {
  const cardRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const isFlagship = project.flagship && !compact;
  const isShowcase = !compact;

  const setRefs = (el) => {
    cardRef.current = el;
    inViewRef(el);
  };

  const handlePointer = (e) => {
    if (!isShowcase || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--spot-x", `${x}%`);
    cardRef.current.style.setProperty("--spot-y", `${y}%`);
    const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    cardRef.current.style.setProperty("--tilt-x", `${tiltX}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${tiltY}deg`);
  };

  const resetPointer = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--spot-x", "50%");
    cardRef.current.style.setProperty("--spot-y", "50%");
    cardRef.current.style.setProperty("--tilt-x", "0deg");
    cardRef.current.style.setProperty("--tilt-y", "0deg");
  };

  const indexLabel = displayIndex != null ? String(displayIndex).padStart(2, "0") : null;

  return (
    <motion.div
      ref={setRefs}
      initial={isShowcase ? false : { opacity: 0, y: 50 }}
      animate={isShowcase ? undefined : inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: isShowcase ? 0 : (index % 3) * 0.12 }}
      onMouseMove={isShowcase ? handlePointer : undefined}
      onMouseLeave={isShowcase ? resetPointer : undefined}
      className={`project-card${isFlagship ? " project-card--flagship" : ""}${isShowcase ? " project-card--showcase" : ""}`}
      style={{
        background: project.gradient,
        border: `1px solid ${project.color}${isFlagship ? "40" : "25"}`,
        borderRadius: isFlagship ? "24px" : "20px",
        padding: compact ? "1.5rem" : isFlagship ? "2.5rem 2.75rem" : "2rem",
        ["--card-accent"]: project.color,
      }}
    >
      {isFlagship && <span className="project-card__ribbon" aria-hidden="true">Flagship</span>}

      <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
        {project.flagship && !isFlagship && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: project.color,
              background: `${project.color}18`,
              border: `1px solid ${project.color}40`,
              borderRadius: "6px",
              padding: "3px 8px",
            }}
          >
            Flagship
          </span>
        )}
        {project.status && STATUS_COLORS[project.status] && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: STATUS_COLORS[project.status].text,
              background: STATUS_COLORS[project.status].bg,
              border: `1px solid ${STATUS_COLORS[project.status].border}`,
              borderRadius: "6px",
              padding: "3px 8px",
            }}
          >
            {project.statusLabel}
          </span>
        )}
      </div>

      {indexLabel && (
        <p className={`project-card__index${isFlagship ? " project-card__index--flagship" : ""}`}>
          {indexLabel}{isFlagship ? " · Flagship" : ""}
        </p>
      )}

      <div className="project-card__title-row">
        <span className="project-card__emoji">{project.emoji}</span>
        <h3 className={`project-card__title${isFlagship ? " project-card__title--flagship" : " project-card__title--standard"}`}>
          {project.name}
        </h3>
      </div>

      <div className={isFlagship ? "project-card__body" : undefined} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <p className={`project-card__desc${isFlagship ? " project-card__desc--flagship" : ""}`}>
            {project.desc}
          </p>
          {project.impact && (
            <p className={`project-card__impact${isFlagship ? " project-card__impact--flagship" : ""}`} style={{ marginTop: "0.65rem" }}>
              {project.impact}
            </p>
          )}
          {project.demoLogin && (
            <p style={{ color: "rgba(226,232,240,0.35)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", margin: "0.65rem 0 0" }}>
              Demo: {project.demoLogin}
            </p>
          )}
        </div>

        {isFlagship && (
          <div className="project-card__stack-panel">
            <p className="project-card__stack-label">Stack & delivery</p>
            <div className="project-card__highlights">
              {["Monorepo", "Neon Postgres", "JWT / RBAC", "Alembic", "Vercel CI"].map((item) => (
                <span key={item} className="project-card__highlight">{item}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              color: project.color,
              borderRadius: "6px",
              padding: "2px 10px",
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginTop: "0.25rem", alignItems: "center" }}>
        {project.live ? (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`${project.name} live demo — opens in new tab`}
            style={{
              padding: isFlagship ? "0.7rem 1.35rem" : "0.55rem 1.1rem",
              background: `${project.color}20`,
              border: `1px solid ${project.color}50`,
              color: project.color,
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontSize: isFlagship ? "0.9rem" : "0.82rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            Live Demo ↗
          </motion.a>
        ) : project.sourceKind === "cli" ? (
          <span
            style={{
              padding: "0.55rem 1.1rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(226,232,240,0.55)",
              borderRadius: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            CLI Tool
          </span>
        ) : (
          <span
            style={{
              padding: "0.55rem 1.1rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(226,232,240,0.55)",
              borderRadius: "8px",
              fontFamily: "var(--font-display)",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            Source only
          </span>
        )}
        {project.repo && (
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "0.55rem 1.1rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(226,232,240,0.75)",
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontSize: "0.82rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {project.sourceKind === "cli" ? "GitHub · CLI" : "GitHub"}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="section section-inner" aria-labelledby="projects-heading">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-header">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-heading" className="heading-section">
          Featured{" "}
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="lead" style={{ marginTop: "0.75rem", maxWidth: "42rem" }}>
          Practical full-stack projects with live demos, automated tests, and CI where it adds confidence.
        </p>
      </motion.div>

      <div className="projects-showcase">
        <div className="projects-showcase__intro">
          <div className="projects-showcase__metrics" aria-label="Portfolio metrics">
            {SHOWCASE_METRICS.map(({ value, label }) => (
              <div key={label} className="projects-metric">
                <span className="projects-metric__value">{value}</span>
                <span className="projects-metric__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="projects-showcase__grid"
          variants={showcaseStagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              variants={showcaseItem}
              className={p.flagship ? "projects-showcase__flagship" : "projects-showcase__card"}
            >
              <ProjectCard project={p} index={i} displayIndex={i + 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {OTHER_PROJECTS.length > 0 && (
        <div style={{ marginTop: "3rem" }}>
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(226,232,240,0.7)",
              borderRadius: "10px",
              padding: "0.75rem 1.25rem",
              fontFamily: "var(--font-display)",
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(251,146,60,0.4)";
              e.currentTarget.style.color = "#fb923c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(226,232,240,0.7)";
            }}
          >
            {showMore ? "Hide" : "View"} other projects ({OTHER_PROJECTS.length})
          </button>

          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "1.25rem",
                marginTop: "1.5rem",
              }}
            >
              {OTHER_PROJECTS.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} compact displayIndex={FEATURED_PROJECTS.length + i + 1} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
