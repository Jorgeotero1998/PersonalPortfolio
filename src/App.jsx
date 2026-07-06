import StarsCanvas from "./components/StarsCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechBalls from "./components/TechBalls";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import { SITE } from "./constants";

export default function App() {
  return (
    <div style={{ background: "#06010f", minHeight: "100vh", position: "relative" }}>
      <StarsCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <div id="stack">
          <TechBalls />
        </div>
        <Skills />
        <Projects />
        <SocialProof />
        <Contact />
        <footer style={{ textAlign: "center", padding: "2.5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
            Open to remote roles in LATAM & worldwide ·{" "}
            <a href={`mailto:${SITE.email}`} style={{ color: "#fb923c", textDecoration: "none" }}>{SITE.email}</a>
            {" · "}
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#fb923c", textDecoration: "none" }}>LinkedIn</a>
          </p>
          <p style={{ color: "rgba(226,232,240,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            Built with React + Three.js ·{" "}
            <span style={{ background: "linear-gradient(90deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Jorge Otero
            </span>{" "}
            © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
