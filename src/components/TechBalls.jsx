import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  siReact,
  siPython,
  siFlask,
  siTypescript,
  siJavascript,
  siVite,
  siPostgresql,
  siSqlite,
  siDocker,
  siGithub,
  siTailwindcss,
  siBootstrap,
  siJsonwebtokens,
  siLinux,
  siSelenium,
  siVercel,
  siRender,
} from "simple-icons";

// Use each brand's official color, overriding logos whose brand color is too
// dark to read on the near-black background with a light tone.
const LIGHT = "#e2e8f0";
const TECH = [
  { icon: siReact, label: "React" },
  { icon: siPython, label: "Python" },
  { icon: siFlask, label: "Flask" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siVite, label: "Vite", color: "#fb923c" },
  { icon: siPostgresql, label: "PostgreSQL", color: "#6ba2e8" },
  { icon: siSqlite, label: "SQLite", color: "#6ba2e8" },
  { icon: siDocker, label: "Docker" },
  { icon: siGithub, label: "GitHub", color: LIGHT },
  { icon: siTailwindcss, label: "Tailwind" },
  { icon: siBootstrap, label: "Bootstrap" },
  { icon: siJsonwebtokens, label: "JWT", color: "#f472b6" },
  { icon: siLinux, label: "Linux" },
  { icon: siSelenium, label: "Selenium" },
  { icon: siVercel, label: "Vercel", color: LIGHT },
  { icon: siRender, label: "Render", color: LIGHT },
];

function LogoChip({ tech }) {
  const color = tech.color || `#${tech.icon.hex}`;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        padding: "0.9rem 1.5rem",
        margin: "0 0.6rem",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
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
    <section style={{ padding: "6rem 2rem", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,146,60,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
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
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, transparent, #fb923c)", display: "inline-block" }} />
            Technologies
            <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #f472b6, transparent)", display: "inline-block" }} />
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#e2e8f0",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fb923c, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arsenal
            </span>
          </h2>
          <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            The tools I reach for every day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            position: "relative",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </motion.div>
      </div>
    </section>
  );
}
