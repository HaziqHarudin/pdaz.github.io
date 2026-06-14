import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/logo.png";

const links = ["Home", "About", "Products", "Testimonials", "How To Order", "Gallery", "Contact"];

const linkId = (l: string) => l.toLowerCase().replace(/\s+/g, "-");

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(253,246,240,0.96)" : "rgba(253,246,240,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(200,96,122,0.12)" : "none",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(200,96,122,0.12)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer" }}>
          <img src={logoImg} alt="Uwkiyow Logo" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.6rem", color: "#C8607A", fontWeight: 700 }}>Uwkiyow</span>
        </button>

        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(linkId(l))}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#3D2010",
                padding: "0.25rem 0",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C8607A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3D2010")}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#C8607A", display: "none" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{
          background: "rgba(253,246,240,0.98)",
          backdropFilter: "blur(12px)",
          padding: "1rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          borderTop: "1px solid rgba(200,96,122,0.1)",
        }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(linkId(l))}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#3D2010",
                textAlign: "left",
                padding: "0.6rem 0.5rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFF0F4"; e.currentTarget.style.color = "#C8607A"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#3D2010"; }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
