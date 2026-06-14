const avatar1 = "https://images.unsplash.com/photo-1609185915416-cc61ad0a560d?w=100&h=100&fit=crop&auto=format";
const avatar2 = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=100&h=100&fit=crop&auto=format";

const reviews = [
  {
    id: 1,
    quote: "I ordered the Matcha Mellow and I am absolutely obsessed. The gooey marshmallow center is everything! Will definitely be ordering every week.",
    name: "Aisha R.",
    location: "Kuala Lumpur",
    stars: 5,
    avatar: null,
    avatarEmoji: "👩🏽",
  },
  {
    id: 2,
    quote: "Best homemade cookies I have ever tasted! The Double Chocolate Chunk melts in your mouth. Packaging was so cute and personal too.",
    name: "Liyana N.",
    location: "Petaling Jaya",
    stars: 5,
    avatar: avatar1,
    avatarEmoji: null,
  },
  {
    id: 3,
    quote: "Ordered the Mixed Box for my bestie's birthday and she was SO happy! Every flavor was amazing. Uwkiyow never disappoints 💕",
    name: "Farah Z.",
    location: "Shah Alam",
    stars: 5,
    avatar: avatar2,
    avatarEmoji: null,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#F7C030", fontSize: "1rem" }}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#FFF5F8", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Customer Love</span>
          <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem" }}>What Our Customers Say</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", marginTop: "0.5rem" }}>Real love from real customers 💬</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {reviews.map((r) => (
            <div
              key={r.id}
              style={{
                background: "#fff",
                borderRadius: "1.5rem",
                padding: "2rem",
                border: "1px solid rgba(200,96,122,0.12)",
                boxShadow: "0 4px 20px rgba(200,96,122,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "transform 0.25s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
            >
              <Stars count={r.stars} />
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#5A3020", lineHeight: 1.75, fontStyle: "italic" }}>
                "{r.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "auto" }}>
                {r.avatar ? (
                  <img src={r.avatar} alt={r.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid #F2B5A0" }} />
                ) : (
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FFF0F4", border: "2px solid #F2B5A0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                    {r.avatarEmoji}
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#3D2010" }}>{r.name}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.8rem", color: "#8C6070" }}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction bar */}
        <div style={{
          background: "linear-gradient(135deg, #FFF0F4, #EDE0F5)",
          borderRadius: "1.25rem",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(1.5rem, 5vw, 4rem)",
          flexWrap: "wrap",
          border: "1px solid rgba(200,96,122,0.1)",
        }}>
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "100%", label: "Repeat Orders" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2.5rem", color: "#C8607A", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", color: "#8C6070", fontWeight: 600, marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
