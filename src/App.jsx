import StarsCanvas from "./components/StarsCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechBalls from "./components/TechBalls";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SonotecaCaseStudy from "./components/SonotecaCaseStudy";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import { SITE } from "./constants";

export default function App() {
  return (
    <div className="portfolio-root" style={{ background: "#06010f", minHeight: "100vh", position: "relative" }}>
      <StarsCanvas />
      <div className="portfolio-content">
        <Navbar />
        <Hero />
        <div id="stack">
          <TechBalls />
        </div>
        <Skills />
        <Projects />
        <SonotecaCaseStudy />
        <SocialProof />
        <Contact />
        <Certifications />
        <footer className="site-footer">
          <p style={{ color: "rgba(226,232,240,0.45)", fontFamily: "var(--font-body)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
            Buenos Aires, Argentina · Open to remote ·{" "}
            <a href={SITE.url}>Portfolio</a>
            {" · "}
            <a href={SITE.github} target="_blank" rel="noreferrer">GitHub</a>
            {" · "}
            <a href={SITE.cv}>CV</a>
            {" · "}
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {" · "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p style={{ color: "rgba(226,232,240,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            Built with React + Three.js ·{" "}
            <span className="gradient-text">Jorge Otero</span> © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
