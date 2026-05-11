import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <div
        className={`glass-pill px-4 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={
          scrolled
            ? { background: isDark ? "rgba(0,20,40,0.85)" : "rgba(255,255,255,0.7)" }
            : undefined
        }
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg border border-primary/50 flex items-center justify-center font-heading font-bold text-primary text-sm"
            style={{ boxShadow: isDark ? "0 0 12px rgba(74,222,128,0.3)" : "0 0 12px rgba(22,163,74,0.3)" }}
          >
            FB
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Theme toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="glass-pill w-9 h-9 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="btn-primary-glow px-5 py-2 text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="glass-pill w-9 h-9 flex items-center justify-center text-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card mt-2 p-4 flex flex-col gap-3 lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary-glow px-5 py-2 text-sm text-center mt-2">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
