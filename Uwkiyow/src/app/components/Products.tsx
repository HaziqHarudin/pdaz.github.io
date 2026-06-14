import { useState, useEffect } from "react";
import { X, ShoppingBag } from "lucide-react";
import img1 from "../../imports/ssstik.io_1777354021495.jpg";
import img2 from "../../imports/ssstik.io_1777354028299.jpg";
import img3 from "../../imports/ssstik.io_1777354031998.jpg";
import img4 from "../../imports/ssstik.io_1777354035222.jpg";
import img5 from "../../imports/ssstik.io_1777354039323.jpg";
import img6 from "../../imports/ssstik.io_1777354042153.jpg";

interface Product {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  ingredients: string[];
  sizes: { label: string; qty: string }[];
  price: string;
  img: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Double Chocolate Chunk",
    shortDesc: "Rich bittersweet dough with dark choco chunks and a hint of sea salt.",
    fullDesc: "A chocoholic's dream come true. Our Double Chocolate Chunk cookie is built on a dense, fudgy bittersweet dough packed with generous dark chocolate chunks throughout. Each cookie is finished with a sprinkle of Maldon sea salt flakes that coax out every layer of chocolate intensity — crisp edges, a soft center, and puddles of melted chocolate in every bite.",
    ingredients: ["Bittersweet cocoa dough", "Dark chocolate chunks", "Maldon sea salt flakes", "Unsalted butter", "Brown sugar"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 8 / pc · RM 44 / 6 pcs · RM 85 / 12 pcs",
    img: img1,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Matcha Mellow",
    shortDesc: "Earthy matcha dough with gooey melted marshmallow and dark choco chunks.",
    fullDesc: "The Matcha Mellow is a harmony of earthy and sweet. A soft matcha cookie dough base cradles a pool of gooey, toasted marshmallow at its heart, surrounded by dark chocolate chunks that add a rich bitter contrast. Finished with Maldon sea salt for that final pop of flavour — it's indulgent, unique, and completely unforgettable.",
    ingredients: ["Premium matcha powder", "Cookie dough base", "Gooey marshmallow centre", "Dark chocolate chunks", "Maldon sea salt"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 9 / pc · RM 50 / 6 pcs · RM 95 / 12 pcs",
    img: img2,
    badge: "Fan Favourite",
  },
  {
    id: 3,
    name: "Matcha Chunk",
    shortDesc: "Crispy earthy matcha base with dark chocolate and Maldon sea salt flakes.",
    fullDesc: "Clean, classic, and deeply satisfying. The Matcha Chunk strips it back to the essentials — a thick, slightly crisp matcha dough loaded with dark chocolate chunks and crowned with glistening Maldon sea salt crystals. Every bite delivers a bold earthy matcha flavour balanced by smooth, bittersweet chocolate and that signature salty-sweet finish.",
    ingredients: ["Premium matcha powder", "Dark chocolate chunks", "Crisp Maldon sea salt", "Unsalted butter", "Brown sugar"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 9 / pc · RM 50 / 6 pcs · RM 95 / 12 pcs",
    img: img3,
  },
  {
    id: 4,
    name: "Choco Fluff",
    shortDesc: "Rich chocolate dough with toasty marshmallow centre and dark choco chunks.",
    fullDesc: "The Choco Fluff is where chocolate meets campfire magic. A deeply rich chocolate cookie dough forms the base, and tucked inside is a crown of toasted, fluffy marshmallow that caramelises beautifully in the oven. Dark chocolate chunks melt into the dough, and a dusting of sea salt ties everything together into one cloud-like, decadent bite.",
    ingredients: ["Rich chocolate dough", "Toasted marshmallow centre", "Melted dark chocolate chunks", "Maldon sea salt", "Unsalted butter"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 9 / pc · RM 50 / 6 pcs · RM 95 / 12 pcs",
    img: img4,
  },
  {
    id: 5,
    name: "Marshmallow Chunk",
    shortDesc: "Homie cookie dough base with toasty marshmallow and crisp Maldon sea salt.",
    fullDesc: "Warm, nostalgic, and deeply comforting — the Marshmallow Chunk is our most homespun cookie. A classic, golden homie cookie dough base is studded with soft marshmallow pieces that toast and puff in the oven, creating soft pockets of sweetness throughout. Topped with crisp Maldon sea salt for that irresistible sweet-salty contrast.",
    ingredients: ["Classic homie cookie dough", "Toasty marshmallow pieces", "Crisp Maldon sea salt", "Brown butter", "Vanilla extract"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 8 / pc · RM 44 / 6 pcs · RM 85 / 12 pcs",
    img: img5,
  },
  {
    id: 6,
    name: "Signature Sea Salt Chunk",
    shortDesc: "Heavenly cookie dough with dark choco chunks and generous sea salt crystals.",
    fullDesc: "This is the one that started it all. Our Signature Sea Salt Chunk is the cookie Uwkiyow was built around — a heavenly golden cookie dough base loaded with chunky dark chocolate pieces and finished with a generous crown of Maldon sea salt crystals that crack under your teeth. Perfectly chewy in the centre, golden on the edges, salty-sweet in every bite.",
    ingredients: ["Heavenly cookie dough base", "Dark chocolate chunks", "Generous Maldon sea salt", "Brown butter", "Brown sugar"],
    sizes: [{ label: "Single", qty: "1 pc" }, { label: "Half Dozen", qty: "6 pcs" }, { label: "Full Box", qty: "12 pcs" }],
    price: "RM 8 / pc · RM 44 / 6 pcs · RM 85 / 12 pcs",
    img: img6,
    badge: "Our Classic",
  },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 280);
  };

  const whatsappOrder = () => {
    window.open(`https://wa.me/?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(product.name)}%20from%20Uwkiyow%20🍪`, "_blank");
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(61,32,16,0.55)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3000,
        padding: "1.5rem",
        animation: closing ? "modalFadeOut 0.28s ease forwards" : "modalFadeIn 0.28s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#FFF8F5",
          borderRadius: "1.75rem",
          maxWidth: 800,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 30px 80px rgba(61,32,16,0.25)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          animation: closing ? "modalSlideOut 0.28s ease forwards" : "modalSlideIn 0.28s ease",
          position: "relative",
        }}
        className="product-modal-grid"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: 38,
            height: 38,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(200,96,122,0.2)",
            zIndex: 10,
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#FFF0F4"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <X size={18} color="#C8607A" />
        </button>

        {/* Image side */}
        <div style={{ position: "relative", background: "#F5E8F0", borderRadius: "1.75rem 0 0 1.75rem", overflow: "hidden", minHeight: 320 }}>
          {product.badge && (
            <div style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: "#C8607A",
              color: "#fff",
              borderRadius: "999px",
              padding: "0.3rem 0.9rem",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "0.75rem",
              zIndex: 5,
              letterSpacing: "0.04em",
            }}>
              {product.badge}
            </div>
          )}
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Details side */}
        <div style={{ padding: "2rem 2rem 2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", color: "#3D2010", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              {product.name}
            </h2>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem", color: "#5A3020", lineHeight: 1.75 }}>
              {product.fullDesc}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#C8607A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Key Ingredients
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {product.ingredients.map((ing) => (
                <span key={ing} style={{
                  background: "#FFF0F4",
                  border: "1px solid rgba(200,96,122,0.18)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "0.78rem",
                  color: "#8C6070",
                  fontWeight: 600,
                }}>
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#C8607A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Available Sizes
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.sizes.map((s) => (
                <div key={s.label} style={{
                  background: "#fff",
                  border: "1.5px solid rgba(200,96,122,0.2)",
                  borderRadius: "0.75rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  minWidth: 80,
                }}>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.8rem", color: "#3D2010" }}>{s.label}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.75rem", color: "#8C6070" }}>{s.qty}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div style={{
            background: "linear-gradient(135deg, #FFF0F4, #EDE0F5)",
            borderRadius: "1rem",
            padding: "0.85rem 1.1rem",
            border: "1px solid rgba(200,96,122,0.12)",
          }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.78rem", color: "#C8607A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              Price
            </div>
            <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.1rem", color: "#3D2010", lineHeight: 1.6 }}>
              {product.price}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={whatsappOrder}
            style={{
              background: "linear-gradient(135deg, #C8607A, #D4809A)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "0.9rem 1.5rem",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              boxShadow: "0 8px 25px rgba(200,96,122,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              marginTop: "auto",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 35px rgba(200,96,122,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(200,96,122,0.35)"; }}
          >
            <ShoppingBag size={18} />
            Order Now via WhatsApp
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalFadeOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes modalSlideIn { from { opacity: 0; transform: translateY(24px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes modalSlideOut { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(20px) scale(0.97) } }
        .product-modal-grid::-webkit-scrollbar { width: 4px; }
        .product-modal-grid::-webkit-scrollbar-thumb { background: rgba(200,96,122,0.25); border-radius: 4px; }
        @media (max-width: 600px) {
          .product-modal-grid { grid-template-columns: 1fr !important; }
          .product-modal-grid > div:first-child { border-radius: 1.75rem 1.75rem 0 0 !important; min-height: 220px !important; }
        }
      `}</style>
    </div>
  );
}

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  const whatsappOrder = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    window.open(`https://wa.me/?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(name)}%20from%20Uwkiyow%20🍪`, "_blank");
  };

  return (
    <section id="products" style={{ background: "#FDF6F0", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>Fresh From The Oven</span>
          <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem" }}>Our Cookies</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", fontSize: "1rem", marginTop: "0.5rem" }}>Each one baked fresh, just for you</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                background: "#fff",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(200,96,122,0.12)",
                boxShadow: "0 4px 20px rgba(200,96,122,0.08)",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(200,96,122,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(200,96,122,0.08)"; }}
            >
              <div style={{ overflow: "hidden", height: 240, position: "relative" }}>
                {p.badge && (
                  <div style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    background: "#C8607A",
                    color: "#fff",
                    borderRadius: "999px",
                    padding: "0.25rem 0.75rem",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.72rem",
                    zIndex: 2,
                    letterSpacing: "0.04em",
                  }}>
                    {p.badge}
                  </div>
                )}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(61,32,16,0.35) 0%, transparent 50%)",
                  zIndex: 1,
                  opacity: 0,
                  transition: "opacity 0.25s",
                }} className="card-overlay" />
                <div style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "999px",
                  padding: "0.3rem 0.9rem",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "#C8607A",
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.25s",
                  whiteSpace: "nowrap",
                }} className="card-hint">
                  🔍 Click to view details
                </div>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
                />
              </div>
              <div style={{ padding: "1.4rem 1.5rem" }}>
                <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.45rem", color: "#3D2010", marginBottom: "0.4rem" }}>{p.name}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "#8C6070", lineHeight: 1.6, marginBottom: "1.1rem" }}>{p.shortDesc}</p>
                <button
                  onClick={(e) => whatsappOrder(e, p.name)}
                  style={{
                    background: "linear-gradient(135deg, #C8607A, #D4809A)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.6rem 1.5rem",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    width: "100%",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Order Now 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mixed box banner */}
        <div style={{
          background: "linear-gradient(135deg, #C8607A 0%, #D4B8E0 100%)",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 12px 40px rgba(200,96,122,0.25)",
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎁</div>
          <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", marginBottom: "0.5rem" }}>
            Can't decide?
          </h3>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem", opacity: 0.9, marginBottom: "1.5rem" }}>
            Order our Mixed Box and try them all!
          </p>
          <button
            onClick={() => window.open("https://wa.me/?text=Hi!%20I'd%20like%20to%20order%20a%20Mixed%20Box%20from%20Uwkiyow%20🍪🎁", "_blank")}
            style={{
              background: "#fff",
              color: "#C8607A",
              border: "none",
              borderRadius: "999px",
              padding: "0.8rem 2.25rem",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Get Mixed Box 🎀
          </button>
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}

      <style>{`
        div:hover > div.card-overlay { opacity: 1 !important; }
        div:hover > div.card-hint { opacity: 1 !important; }
        div:hover > img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
