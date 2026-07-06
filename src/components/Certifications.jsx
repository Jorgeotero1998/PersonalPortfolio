import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CERTS } from "../constants";

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section style={{ padding: "3rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "1.5rem" }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(226,232,240,0.35)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Also · supplementary credentials
        </p>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
            color: "rgba(226,232,240,0.75)",
            margin: 0,
          }}
        >
          Certifications
        </h3>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "0.75rem" }}>
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "10px",
              padding: "0.85rem 1rem",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.color, opacity: 0.7, flexShrink: 0 }} />
            <div>
              <p style={{ color: "rgba(226,232,240,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500, margin: 0 }}>
                {c.name}
              </p>
              <p style={{ color: "rgba(226,232,240,0.3)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", marginTop: "2px" }}>
                {c.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
