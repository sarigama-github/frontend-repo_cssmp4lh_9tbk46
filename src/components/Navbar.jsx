import { useState } from "react";
import { Menu, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
          <a href="#" className="text-white font-semibold tracking-widest text-xl">LUSH LACE</a>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90">
          <a className="hover:text-white transition" href="#new">New</a>
          <a className="hover:text-white transition" href="#bras">Bras</a>
          <a className="hover:text-white transition" href="#panties">Panties</a>
          <a className="hover:text-white transition" href="#sets">Sets</a>
        </div>
        <div className="flex items-center gap-4 text-white/90">
          <button className="hover:text-white transition" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="relative hover:text-white transition" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-[10px] rounded-full px-1.5 py-0.5">2</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden backdrop-blur-xl bg-black/60 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 text-white/90 space-y-3">
              {[
                { label: "New", href: "#new" },
                { label: "Bras", href: "#bras" },
                { label: "Panties", href: "#panties" },
                { label: "Sets", href: "#sets" },
              ].map((l) => (
                <a key={l.label} className="block" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
