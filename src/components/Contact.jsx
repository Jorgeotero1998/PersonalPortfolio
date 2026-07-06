import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { CERTS, SITE } from "../constants";

function GlobeShape() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <Sphere ref={ref} args={[1.4, 64, 64]}>
        <MeshDistortMaterial color="#06010f" distort={0.25} speed={1.5} roughness={0} metalness={1} />
      </Sphere>
      <Sphere args={[1.42, 32, 32]}>
        <meshStandardMaterial color="#fb923c" wireframe transparent opacity={0.15} />
      </Sphere>
      <Sphere args={[1.6, 16, 16]}>
        <meshStandardMaterial color="#f472b6" wireframe transparent opacity={0.06} />
      </Sphere>
    </Float>
  );
}

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: SITE.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Download CV",
    href: "/JORGE_OTERO_CV.pdf",
    download: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, #fb923c, #f472b6)", display: "inline-block" }} />
            Certifications
          </p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e2e8f0" }}>
            Cloud &{" "}
            <span style={{ background: "linear-gradient(135deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Security
            </span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: `${c.color}50`, x: 4 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "1rem 1.25rem", transition: "all 0.2s" }}
            >
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: c.color, boxShadow: `0 0 10px ${c.color}`, flexShrink: 0 }} />
              <div>
                <p style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 500 }}>{c.name}</p>
                <p style={{ color: "rgba(226,232,240,0.4)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", marginTop: "2px" }}>{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "7rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
          <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="contact-globe" style={{ width: "280px", height: "280px", flexShrink: 0 }}>
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={1} color="#fb923c" />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#f472b6" />
              <Suspense fallback={null}>
                <GlobeShape />
              </Suspense>
            </Canvas>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ flex: "1 1 360px", maxWidth: "520px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(251,146,60,0.2)", borderRadius: "24px", padding: "3rem 2.5rem", backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #fb923c, #f472b6, transparent)" }} />

            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#fb923c", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: "20px", height: "1px", background: "linear-gradient(90deg, #fb923c, #f472b6)", display: "inline-block" }} />
              Contact
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e2e8f0", marginBottom: "1rem" }}>
              Get in{" "}
              <span style={{ background: "linear-gradient(135deg, #fb923c, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Touch
              </span>
            </h2>
            <p style={{ color: "rgba(226,232,240,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Portfolio, live demos, and source code above. Reach out if you'd like to discuss the work.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  download={link.download ? "" : undefined}
                  target={link.href.startsWith("mailto") || link.download ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") || link.download ? undefined : "noreferrer"}
                  whileHover={{ scale: 1.02, borderColor: link.primary ? undefined : "rgba(251,146,60,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "0.85rem 1.25rem",
                    background: link.primary ? "linear-gradient(135deg, #fb923c, #f472b6)" : "rgba(255,255,255,0.03)",
                    color: link.primary ? "#06010f" : "rgba(226,232,240,0.85)",
                    fontWeight: link.primary ? 700 : 600,
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.9rem",
                    border: link.primary ? "none" : "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    transition: "border-color 0.2s",
                  }}
                >
                  {link.icon}
                  {link.label}
                  {!link.primary && <span style={{ marginLeft: "auto", opacity: 0.5 }}>↗</span>}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
