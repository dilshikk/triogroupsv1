import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils.ts";

const NAV_LINKS = [
  { label: "Finance", href: "#finance" },
  { label: "Logistics", href: "#logistics" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-8">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-display text-2xl tracking-wider text-white md:text-3xl cursor-pointer"
      >
        TRIO&nbsp;GROUP
      </a>

      <nav className="hidden items-center gap-10 md:flex">
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="cursor-pointer text-sm font-medium tracking-widest text-white/70 uppercase transition-colors hover:text-white"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("#contact")}
          className="cursor-pointer rounded-full border border-white/30 px-5 py-2 text-sm font-medium tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          Talk To Us
        </button>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-white md:hidden"
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "absolute top-full left-0 right-0 flex flex-col gap-1 bg-black/90 p-6 backdrop-blur-lg md:hidden",
            )}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="cursor-pointer py-3 text-left text-lg font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
