import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function FeaturedGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BACKEND}/api/products?featured=true`);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        if (data.length === 0) {
          const seed = await fetch(`${BACKEND}/api/products/sample`);
          const seeded = await seed.json();
          setItems(seeded);
        } else {
          setItems(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="new" className="relative py-20 bg-gradient-to-b from-black to-rose-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">New & Noteworthy</h2>
          <a href="#" className="text-pink-300 hover:text-pink-200 transition">View all</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p, i) => (
              <motion.a
                key={p.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              >
                <img
                  src={p.images?.[0] || "https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1200&auto=format&fit=crop"}
                  alt={p.title}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-0 p-4 text-white">
                  <div className="text-sm text-white/70">{p.category}</div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-pink-300">${p.price.toFixed(2)}</div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
