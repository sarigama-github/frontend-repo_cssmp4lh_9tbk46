import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedGrid from "./components/FeaturedGrid";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <CTA />
      <footer className="py-12 text-center text-white/60 border-t border-white/10">
        © {new Date().getFullYear()} Lush Lace. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
