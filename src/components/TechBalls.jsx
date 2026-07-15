import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  siReact,
  siPython,
  siFlask,
  siFastapi,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siVite,
  siPostgresql,
  siDocker,
  siGithub,
  siTailwindcss,
  siGithubactions,
  siLinux,
  siVercel,
  siRender,
} from "simple-icons";

const LIGHT = "#e2e8f0";
const TECH = [
  { icon: siPython, label: "Python" },
  { icon: siFastapi, label: "FastAPI" },
  { icon: siFlask, label: "Flask" },
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js", color: LIGHT },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siPostgresql, label: "PostgreSQL", color: "#6ba2e8" },
  { icon: siDocker, label: "Docker" },
  { icon: siGithubactions, label: "GitHub Actions", color: LIGHT },
  { icon: siVercel, label: "Vercel", color: LIGHT },
  { icon: siRender, label: "Render", color: LIGHT },
  { icon: siTailwindcss, label: "Tailwind" },
  { icon: siVite, label: "Vite", color: "#fb923c" },
  { icon: siGithub, label: "GitHub", color: LIGHT },
  { icon: siLinux, label: "Linux" },
];

function LogoChip({ tech }) {
  const color = tech.color || `#${tech.icon.hex}`;
  return (
    <div
      className="chip-logo"
      style={{}}
    >
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width={26}
        height={26}
        fill={color}
        style={{ display: "block", flexShrink: 0 }}
      >
        <path d={tech.icon.path} />
      </svg>
      <span
        style={{
          color: "rgba(226,232,240,0.85)",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 500,
        }}
      >
        {tech.label}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div style={{ display: "flex", overflow: "hidden", padding: "0.4rem 0" }}>
      <div className={`marquee-track${reverse ? " marquee-reverse" : ""}`}>
        {loop.map((tech, i) => (
          <LogoChip key={`${tech.label}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechBalls() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const half = Math.ceil(TECH.length / 2);
  const rowA = TECH.slice(0, half);
  const rowB = TECH.slice(half);

  return (
    <section className="section" style={{ position: "relative" }} aria-labelledby="tech-heading">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,146,60,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p className="eyebrow eyebrow--center">Technologies</p>
          <h2 id="tech-heading" className="heading-section">
            Core{" "}
            <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Python · React · PostgreSQL · Docker · CI/CD
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="marquee-mask marquee-glass"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            position: "relative",
          }}
        >
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </motion.div>
      </div>
    </section>
  );
}
