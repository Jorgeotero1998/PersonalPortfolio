import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", id: "about" },
  { label: "Stack", id: "stack" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const navLinkStyle = (isActive) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: isActive ? "#fb923c" : "rgba(226,232,240,0.65)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "color 0.2s",
    textAlign: "left",
    padding: 0,
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`portfolio-nav${scrolled || menuOpen ? " portfolio-nav--scrolled" : ""}`}
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            background: "linear-gradient(135deg, #fb923c, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
        >
          JO<span style={{ WebkitTextFillColor: "#fb923c" }}>.</span>
        </motion.div>

        <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              onClick={() => scrollTo(link.id)}
              className="nav-link"
              style={{ color: active === link.id ? "#fb923c" : "rgba(226,232,240,0.65)" }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f472b6", fontSize: "0.7rem", marginRight: "4px" }}>
                0{i + 1}.
              </span>
              {link.label}
            </motion.button>
          ))}
          <motion.a
            href="https://github.com/Jorgeotero1998"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, borderColor: "#fb923c" }}
            className="nav-github-btn"
          >
            GitHub ↗
          </motion.a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#e2e8f0",
            padding: "0.25rem",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="nav-mobile-panel"
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 199,
              background: "rgba(6,1,15,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(251,146,60,0.15)",
              padding: "1.5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {links.map((link) => (
              <button key={link.id} type="button" onClick={() => scrollTo(link.id)} style={{ ...navLinkStyle(active === link.id), fontSize: "1.05rem" }}>
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/Jorgeotero1998"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "0.75rem 1rem",
                border: "1px solid rgba(251,146,60,0.5)",
                borderRadius: "8px",
                color: "#fb923c",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.88rem",
                textAlign: "center",
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
