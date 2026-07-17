import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SITE } from "./constants";

const StarsCanvas = lazy(() => import("./components/StarsCanvas"));
const TechBalls = lazy(() => import("./components/TechBalls"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const SonotecaCaseStudy = lazy(() => import("./components/SonotecaCaseStudy"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const Contact = lazy(() => import("./components/Contact"));
const Certifications = lazy(() => import("./components/Certifications"));

function DeferredSection({ children, id, minHeight = 480 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} id={id} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

function DesktopStars() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 769px)").matches) return;
    const start = () => setEnabled(true);
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 4000 })
      : window.setTimeout(start, 2500);
    return () => window.cancelIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id);
  }, []);

  return enabled ? <Suspense fallback={null}><StarsCanvas /></Suspense> : null;
}

export default function App() {
  return (
    <div className="portfolio-root" style={{ background: "#06010f", minHeight: "100vh", position: "relative" }}>
      <div className="stars-canvas" aria-hidden="true">
        <div className="gradient-mesh gradient-mesh--hero" />
      </div>
      <DesktopStars />
      <div className="portfolio-content">
        <Navbar />
        <main>
          <Hero />
          <DeferredSection id="stack" minHeight={620}><TechBalls /></DeferredSection>
          <DeferredSection id="skills" minHeight={620}><Skills /></DeferredSection>
          <DeferredSection id="projects" minHeight={1200}><Projects /></DeferredSection>
          <DeferredSection id="sonoteca" minHeight={1000}><SonotecaCaseStudy /></DeferredSection>
          <DeferredSection minHeight={240}><SocialProof /></DeferredSection>
          <DeferredSection id="contact" minHeight={620}><Contact /></DeferredSection>
          <DeferredSection minHeight={420}><Certifications /></DeferredSection>
        </main>
        <footer className="site-footer">
          <p style={{ color: "rgba(226,232,240,0.72)", fontFamily: "var(--font-body)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
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
          <p style={{ color: "rgba(226,232,240,0.55)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
            Built with React + Three.js ·{" "}
            <span className="gradient-text">Jorge Otero</span> © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
