import logoImg from "../../imports/logo.png";

export function Contact() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="contact" style={{ background: "linear-gradient(180deg, #FDF6F0 0%, #FFF5F8 100%)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Say Hello</span>
            <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem" }}>Get In Touch</h2>
            <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", marginTop: "0.5rem" }}>We would love to hear from you</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                border: "1px solid rgba(200,96,122,0.12)",
                borderRadius: "1.5rem",
                padding: "2rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(200,96,122,0.07)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(37,211,102,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(200,96,122,0.07)"; }}
            >
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#E8F9EE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>💬</div>
              <div>
                <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.5rem", color: "#3D2010", marginBottom: "0.4rem" }}>WhatsApp</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "#8C6070", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Chat with us directly for orders and enquiries
                </p>
              </div>
              <div style={{
                background: "#25D366",
                color: "#fff",
                borderRadius: "999px",
                padding: "0.65rem 1.75rem",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}>
                Chat on WhatsApp
              </div>
            </a>

            <a
              href="https://instagram.com/uwkiyow"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                border: "1px solid rgba(200,96,122,0.12)",
                borderRadius: "1.5rem",
                padding: "2rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(200,96,122,0.07)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(220,39,67,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(200,96,122,0.07)"; }}
            >
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#FFF0F4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>📸</div>
              <div>
                <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.5rem", color: "#3D2010", marginBottom: "0.4rem" }}>Instagram</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "#8C6070", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Follow us for updates, new flavors and promotions
                </p>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "#fff",
                borderRadius: "999px",
                padding: "0.65rem 1.75rem",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}>
                Follow @uwkiyow
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#3D2010", color: "#FDF6F0", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <img src={logoImg} alt="Uwkiyow" style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", color: "#F2B5A0", fontWeight: 700 }}>Uwkiyow</span>
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "rgba(242,181,160,0.75)", fontStyle: "italic" }}>
              Baked with love, delivered with care
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              {["Home", "About", "Products", "Gallery", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l.toLowerCase())}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "rgba(253,246,240,0.65)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F2B5A0")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(253,246,240,0.65)")}
                >
                  {l}
                </button>
              ))}
            </div>
            <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.08)" }} />
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.8rem", color: "rgba(253,246,240,0.4)" }}>
              © 2025 Uwkiyow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
