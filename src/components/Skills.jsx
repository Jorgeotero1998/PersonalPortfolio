import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../constants";

function SkillCard({ category, color, items, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6, borderColor: `${color}60` }}
      className="glass-card"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, boxShadow: `0 0 10px ${color}` }} />
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color, fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{category}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {items.map((skill, i) => (
          <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.1 + i * 0.04 + 0.2 }} whileHover={{ background: `${color}25`, color }}
            style={{ background: `${color}10`, border: `1px solid ${color}25`, color: "rgba(226,232,240,0.75)", borderRadius: "6px", padding: "3px 10px", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", transition: "all 0.2s", cursor: "default" }}>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="skills" className="section section-inner" aria-labelledby="skills-heading">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="section-header">
        <p className="eyebrow">What I work with</p>
        <h2 id="skills-heading" className="heading-section">
          Tech{" "}<span className="gradient-text">Stack</span>
        </h2>
        <p className="lead" style={{ marginTop: "0.75rem" }}>
          Full stack — APIs, databases, React UIs, and cloud deployment. Portfolio evidence over title inflation.
        </p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
        {Object.entries(SKILLS).map(([cat, { color, items }], i) => (
          <SkillCard key={cat} category={cat} color={color} items={items} index={i} />
        ))}
      </div>
    </section>
  );
}
