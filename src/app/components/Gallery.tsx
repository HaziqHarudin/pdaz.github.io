import { useState } from "react";
import { X } from "lucide-react";
import img1 from "../../imports/ssstik.io_1777354021495.jpg";
import img2 from "../../imports/ssstik.io_1777354028299.jpg";
import img3 from "../../imports/ssstik.io_1777354035222.jpg";
import img4 from "../../imports/ssstik.io_1777354039323.jpg";

const galleryImages = [
  { src: img1, alt: "Double Chocolate Chunk cookie" },
  { src: "https://images.unsplash.com/photo-1607975218250-7faaf3e36bbf?w=600&h=600&fit=crop&auto=format", alt: "Person holding fresh baked cookies" },
  { src: img2, alt: "Matcha Mellow cookie" },
  { src: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=600&h=600&fit=crop&auto=format", alt: "Packaged cookies ready for delivery" },
  { src: img3, alt: "Choco Fluff cookie close up" },
  { src: "https://images.unsplash.com/photo-1506184341422-6cc152ae474b?w=600&h=600&fit=crop&auto=format", alt: "Chocolate chip cookies on white surface" },
  { src: img4, alt: "Marshmallow Chunk cookie" },
  { src: "https://images.unsplash.com/photo-1607919966670-90622ba53a0b?w=600&h=600&fit=crop&auto=format", alt: "Cookies on brown paper packaging" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ background: "#FFF5F8", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Kitchen</span>
          <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem" }}>Fresh From Our Kitchen</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", marginTop: "0.5rem" }}>A peek into how we bake with love</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                background: "#F2B5A0",
                aspectRatio: i % 3 === 0 ? "1/1.2" : "1/1",
                boxShadow: "0 4px 15px rgba(200,96,122,0.1)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(200,96,122,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 15px rgba(200,96,122,0.1)"; }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", marginBottom: "1rem" }}>
            Want to see more?
          </p>
          <a
            href="https://instagram.com/uwkiyow"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "999px",
              padding: "0.75rem 2rem",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 8px 25px rgba(220,39,67,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            📸 Follow us @uwkiyow
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "1.5rem",
            animation: "fadeIn 0.25s ease",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              width: 44,
              height: 44,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={22} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              borderRadius: "1.25rem",
              objectFit: "contain",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              animation: "zoomIn 0.25s ease",
            }}
          />
          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes zoomIn { from { transform: scale(0.9); opacity: 0 } to { transform: scale(1); opacity: 1 } }
          `}</style>
        </div>
      )}
    </section>
  );
}
