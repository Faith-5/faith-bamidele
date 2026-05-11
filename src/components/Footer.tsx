import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="relative pt-16 pb-8 px-4">
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(74,222,128,0.3), transparent)"
            : "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), rgba(22,163,74,0.3), transparent)",
        }}
      />

      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-lg border border-primary/50 flex items-center justify-center font-heading font-bold text-primary text-xs"
                style={{ boxShadow: isDark ? "0 0 10px rgba(74,222,128,0.3)" : "0 0 10px rgba(22,163,74,0.2)" }}
              >
                FB
              </div>
              <span className="font-heading font-semibold">Faith Bamidele</span>
            </div>
            <p className="text-muted-foreground text-sm">Engineering intelligent systems, one build at a time.</p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-end gap-3">
            <a href="https://wa.me/+2349010641900" className="glass-chip text-xs hover:text-foreground transition-colors">WhatsApp</a>
            <a href="https://www.linkedin.com/in/bamidele-faith/" className="glass-chip text-xs hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://github.com/Faith-5" className="glass-chip text-xs hover:text-foreground transition-colors">GitHub</a>
            <a href="https://x.com/FaithBamidele_" className="glass-chip text-xs hover:text-foreground transition-colors">X</a>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs">Designed & Built by Faith Bamidele · 2026</p>
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center bottom, rgba(0,100,200,0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center bottom, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />
    </footer>
  );
};

export default Footer;
