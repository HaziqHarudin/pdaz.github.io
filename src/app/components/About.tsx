const aboutImg = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&h=700&fit=crop&auto=format";

const highlights = [
  { icon: "🤲", title: "Handcrafted", desc: "Made by hand with care" },
  { icon: "🌿", title: "Quality Ingredients", desc: "Only the best goes in" },
  { icon: "💝", title: "Packed With Love", desc: "Every order personally packed" },
];

export function About() {
  return (
    <section id="about" style={{ background: "#FFF5F8", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Who We Are</span>
          <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem", lineHeight: 1.2 }}>Our Story</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "center",
          marginBottom: "3rem",
        }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -10, background: "linear-gradient(135deg, #F2B5A0, #D4B8E0)",
              borderRadius: "1.5rem", opacity: 0.25,
            }} />
            <img
              src={aboutImg}
              alt="Fresh homemade cookies in a bowl"
              loading="lazy"
              style={{ width: "100%", borderRadius: "1.25rem", objectFit: "cover", aspectRatio: "1/1", position: "relative", boxShadow: "0 20px 60px rgba(200,96,122,0.2)" }}
            />
            <div style={{
              position: "absolute",
              bottom: 20,
              right: -15,
              background: "#C8607A",
              color: "#fff",
              borderRadius: "1rem",
              padding: "0.75rem 1.25rem",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              boxShadow: "0 8px 25px rgba(200,96,122,0.4)",
            }}>
              🍪 Baked with ❤️
            </div>
          </div>

          <div>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🥄</div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.05rem",
              color: "#5A3020",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}>
              Uwkiyow was born from a simple love of baking. Every cookie we make is crafted by hand, using quality ingredients and a whole lot of heart. We believe the best treats come from a home kitchen — and we want to share that warmth with you.
            </p>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1.5rem",
              color: "#C8607A",
              fontWeight: 600,
            }}>
              "Every bite is made with intention."
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {highlights.map((h) => (
            <div
              key={h.title}
              style={{
                background: "#fff",
                border: "1px solid rgba(200,96,122,0.15)",
                borderRadius: "1.25rem",
                padding: "1.75rem 1.5rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(200,96,122,0.07)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(200,96,122,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(200,96,122,0.07)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{h.icon}</div>
              <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.35rem", color: "#C8607A", marginBottom: "0.35rem" }}>{h.title}</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "#8C6070" }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
