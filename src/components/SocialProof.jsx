import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SITE, SOCIAL_PROOF } from "../constants";

export default function SocialProof() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: "4rem" }} aria-label="Open source and project highlights">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="proof-bar section-inner"
      >
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Open source & project highlights
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e2e8f0", fontSize: "1.15rem", fontWeight: 600, margin: 0 }}>
            {SOCIAL_PROOF.repos} public repos · shipped to Vercel & Render
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {SOCIAL_PROOF.highlights.map((item) => (
            <span
              key={item}
              style={{
                background: "rgba(251,146,60,0.1)",
                border: "1px solid rgba(251,146,60,0.25)",
                color: "#fb923c",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "0.78rem",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <motion.a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03 }}
          className="btn-primary"
          style={{ whiteSpace: "nowrap", fontSize: "0.88rem", padding: "0.65rem 1.25rem" }}
        >
          View GitHub ↗
        </motion.a>
      </motion.div>
    </section>
  );
}
