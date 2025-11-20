import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-fuchsia-900 to-black opacity-60" />
        <img
          src="https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1887&auto=format&fit=crop"
          alt="Lingerie background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Elegant Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-lg md:text-xl text-white/85 max-w-xl"
          >
            Discover lingerie that celebrates you. Luxe fabrics, refined silhouettes, and cloud-soft comfort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#new" className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-medium shadow-lg shadow-pink-600/30 transition">Shop New Arrivals</a>
            <a href="#sets" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md border border-white/20 transition">Explore Sets</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-rose-500/20 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1595526114035-ff7582c6e4ed?q=80&w=1200&auto=format&fit=crop"
            alt="Featured piece"
            className="relative rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
        SCROLL
      </div>
    </section>
  );
}
