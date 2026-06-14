import { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  { num: "01", icon: "🍪", title: "Pick Your Cookie", desc: "Browse our selection and choose your favorites from our delicious lineup." },
  { num: "02", icon: "💬", title: "Message Us on WhatsApp", desc: "Send us your order and we will confirm it with you right away." },
  { num: "03", icon: "📦", title: "Receive & Enjoy", desc: "We pack with love and deliver fresh to your doorstep." },
];

const faqs = [
  { q: "Do you accept custom orders?", a: "Yes! We love creating custom orders. Contact us on WhatsApp with your ideas and we will make it happen." },
  { q: "How long does delivery take?", a: "Usually 2–3 business days from the date of order confirmation." },
  { q: "What is your minimum order?", a: "No minimum! Order as little or as much as you like. Every single cookie is made with love." },
];

export function HowToOrder() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="how-to-order" style={{ background: "#FDF6F0", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#C8607A", letterSpacing: "0.1em", textTransform: "uppercase" }}>It's Easy</span>
          <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#3D2010", marginTop: "0.25rem" }}>How To Order</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#8C6070", marginTop: "0.5rem" }}>Simple, easy, and delivered to your door</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ textAlign: "center", position: "relative" }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: 34,
                  right: "-25%",
                  width: "50%",
                  height: 2,
                  background: "linear-gradient(to right, #C8607A, #D4B8E0)",
                  display: "none",
                }} className="step-arrow" />
              )}
              <div style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C8607A, #D4B8E0)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.5rem",
                fontWeight: 700,
                boxShadow: "0 8px 25px rgba(200,96,122,0.3)",
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.4rem", color: "#3D2010", marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "#8C6070", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ background: "#FFF5F8", borderRadius: "1.5rem", padding: "2rem", border: "1px solid rgba(200,96,122,0.1)" }}>
          <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.8rem", color: "#3D2010", marginBottom: "1.25rem", textAlign: "center" }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  border: "1px solid rgba(200,96,122,0.12)",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                  boxShadow: openFaq === i ? "0 8px 25px rgba(200,96,122,0.12)" : "0 2px 8px rgba(200,96,122,0.05)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.1rem 1.4rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#3D2010" }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{ color: "#C8607A", flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div style={{
                  maxHeight: openFaq === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "#8C6070", lineHeight: 1.7, padding: "0 1.4rem 1.1rem" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
