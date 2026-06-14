import heroBg from "../../imports/ssstik.io_1777353838642.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "brightness(0.45)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(61,32,16,0.3) 0%, rgba(61,32,16,0.55) 60%, rgba(253,246,240,1) 100%)",
      }} />

      <div style={{
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 5rem",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(200,96,122,0.2)",
          border: "1px solid rgba(200,96,122,0.4)",
          borderRadius: "999px",
          padding: "0.35rem 1rem",
          marginBottom: "1.5rem",
        }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", color: "#FFD6E3", fontWeight: 600, letterSpacing: "0.05em" }}>
            🍪 Fresh Baked Daily
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
          color: "#fff",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>
          Homemade Cookies<br />Made With Love
        </h1>

        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "rgba(255,220,225,0.92)",
          marginBottom: "2.5rem",
          maxWidth: 540,
          lineHeight: 1.7,
        }}>
          Freshly baked from our kitchen to your door — every bite tells a story
        </p>

        <button
          onClick={() => scrollTo("products")}
          style={{
            background: "#C8607A",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "0.85rem 2.5rem",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(200,96,122,0.5)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(200,96,122,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(200,96,122,0.5)"; }}
        >
          Explore Our Cookies ✨
        </button>
      </div>

      {/* Trust bar */}
      <div style={{ position: "relative", background: "rgba(253,246,240,0.0)", paddingBottom: "2rem" }}>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(1rem, 4vw, 3rem)",
          flexWrap: "wrap",
        }}>
          {[
            { icon: "🏠", label: "100% Homemade" },
            { icon: "🔥", label: "Baked Fresh Daily" },
            { icon: "💖", label: "Made With Love" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#3D2010" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
