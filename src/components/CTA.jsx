import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(217,70,239,0.25),transparent_40%)]" />
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.h3
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Feel confident in your own skin
        </motion.h3>
        <p className="mt-4 text-white/80">
          Soft-touch, day-to-night comfort. Free shipping over $75. Free 30-day returns.
        </p>
        <div className="mt-8">
          <a href="#new" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-pink-50 transition">Shop Bestsellers</a>
        </div>
      </div>
    </section>
  );
}
