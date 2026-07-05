import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../constants";

function ProjectCard({ project, index, compact }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.color}20` }}
      style={{
        background: project.gradient,
        border: `1px solid ${project.color}25`,
        borderRadius: "20px",
        padding: compact ? "1.5rem" : "2rem",
        backdropFilter: "blur(20px)",
        transition: "box-shadow 0.3s, transform 0.3s",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      {project.flagship && (
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontFamily: "'JetBrains Mono', monospace",
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

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingRight: project.flagship ? "4.5rem" : 0 }}>
        <span style={{ fontSize: "1.6rem" }}>{project.emoji}</span>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e2e8f0", fontWeight: 600, fontSize: "1.05rem", margin: 0 }}>
          {project.name}
        </h3>
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ color: "rgba(226,232,240,0.75)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
          {project.desc}
        </p>
        {project.impact && (
          <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.6, margin: "0.5rem 0 0" }}>
            {project.impact}
          </p>
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
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "0.55rem 1.1rem",
              background: `${project.color}20`,
              border: `1px solid ${project.color}50`,
              color: project.color,
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            Live Demo ↗
          </motion.a>
        )}
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
            fontFamily: "'Space Grotesk', sans-serif",
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
          GitHub
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #fb923c, #f472b6)", display: "inline-block" }} />
          Production work
        </p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e2e8f0", marginBottom: "0.75rem" }}>
          Featured{" "}
          <span style={{ background: "linear-gradient(135deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Projects
          </span>
        </h2>
        <p style={{ color: "rgba(226,232,240,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", maxWidth: "560px", lineHeight: 1.7 }}>
          Full-stack apps shipped to production — live demos where available, source on GitHub.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }}>
        {FEATURED_PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
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
              fontFamily: "'Space Grotesk', sans-serif",
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
                <ProjectCard key={p.name} project={p} index={i} compact />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
