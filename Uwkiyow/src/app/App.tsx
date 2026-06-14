import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { HowToOrder } from "./components/HowToOrder";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", overflowX: "hidden" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,96,122,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(200,96,122,0.6); }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <HowToOrder />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
