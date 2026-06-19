import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../constants";
import { storageGet, storageSet } from "../utils/storage";

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function Attachments({ project }) {
  const storageKey = `proj-attach:${project.name}`;
  const [files, setFiles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef(null);

  // Load persisted attachments on mount.
  useEffect(() => {
    let active = true;
    storageGet(storageKey).then((saved) => {
      if (active) {
        if (Array.isArray(saved)) setFiles(saved);
        setLoaded(true);
      }
    });
    return () => {
      active = false;
    };
  }, [storageKey]);

  // Persist whenever files change (after initial load).
  useEffect(() => {
    if (loaded) storageSet(storageKey, files);
  }, [files, loaded, storageKey]);

  const handleSelect = async (e) => {
    const selected = Array.from(e.target.files || []);
    const next = [];
    for (const file of selected) {
      try {
        const dataUrl = await readFileAsDataUrl(file);
        next.push({
          id: `${Date.now()}-${file.name}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          type: file.type,
          dataUrl,
        });
      } catch (err) {
        console.log("[v0] file read error:", err?.message);
      }
    }
    if (next.length) setFiles((prev) => [...prev, ...next]);
    e.target.value = "";
  };

  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

  return (
    <div style={{ marginTop: "0.25rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(226,232,240,0.4)" }}>
          Attachments
        </span>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            background: `${project.color}15`,
            border: `1px solid ${project.color}40`,
            color: project.color,
            borderRadius: "7px",
            padding: "0.3rem 0.7rem",
            fontSize: "0.72rem",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Add file
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,application/pdf"
          multiple
          onChange={handleSelect}
          style={{ display: "none" }}
        />
      </div>

      {files.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <AnimatePresence>
            {files.map((f) => {
              const isImage = f.type?.startsWith("image/");
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  style={{ position: "relative" }}
                >
                  <a
                    href={f.dataUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={f.name}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {isImage ? (
                      <img
                        src={f.dataUrl || "/placeholder.svg"}
                        alt={f.name}
                        style={{ width: "64px", height: "64px", objectFit: "cover", borderRadius: "8px", border: `1px solid ${project.color}30`, display: "block" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "8px",
                          border: `1px solid ${project.color}30`,
                          background: "rgba(255,255,255,0.04)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "3px",
                          padding: "4px",
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        <span style={{ fontSize: "0.55rem", fontFamily: "'JetBrains Mono', monospace", color: "rgba(226,232,240,0.55)" }}>PDF</span>
                      </div>
                    )}
                  </a>
                  <button
                    type="button"
                    onClick={() => removeFile(f.id)}
                    title="Remove"
                    aria-label={`Remove ${f.name}`}
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "#06010f",
                      border: "1px solid rgba(244,114,182,0.6)",
                      color: "#f472b6",
                      cursor: "pointer",
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    }}
                  >
                    ×
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: (index % 3) * 0.15 }} whileHover={{ y: -8, boxShadow: `0 20px 60px ${project.color}20` }}
      style={{ background: project.gradient, border: `1px solid ${project.color}25`, borderRadius: "20px", padding: "2rem", backdropFilter: "blur(20px)", transition: "box-shadow 0.3s, transform 0.3s", display: "flex", flexDirection: "column", gap: "1rem", position: "relative", overflow: "hidden", cursor: "default" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.6rem" }}>{project.emoji}</span>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e2e8f0", fontWeight: 600, fontSize: "1.05rem" }}>{project.name}</h3>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {project.live && (
            <motion.a href={project.live} target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} title="Live demo"
              style={{ width: "34px", height: "34px", borderRadius: "8px", background: `${project.color}20`, border: `1px solid ${project.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: project.color, textDecoration: "none", fontSize: "1rem", fontWeight: 700 }}>↗</motion.a>
          )}
          <motion.a href={project.repo} target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} title="GitHub"
            style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(226,232,240,0.6)", textDecoration: "none", fontSize: "0.85rem" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </motion.a>
        </div>
      </div>
      <p style={{ color: "rgba(226,232,240,0.6)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, flex: 1 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ background: `${project.color}12`, border: `1px solid ${project.color}30`, color: project.color, borderRadius: "6px", padding: "2px 10px", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{tag}</span>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
        <Attachments project={project} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "4rem" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #fb923c, #f472b6)", display: "inline-block" }} />
          What I've built
        </p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e2e8f0" }}>
          Featured{" "}<span style={{ background: "linear-gradient(135deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
        </h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  );
}
