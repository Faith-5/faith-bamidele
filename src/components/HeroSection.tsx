import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { useTheme } from "@/hooks/useTheme";

const roles = ["AI & Backend Engineer", "ML Engineer", "AI Integration Specialist", "Product-Driven Developer"];

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

const badges = ["Python", "FastAPI", "AI Integration", "Machine Learning"];

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="section-tag mb-4 inline-block">Hello, I'm 👋</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
            Faith Bamidele
          </h1>
          <div className="text-2xl md:text-3xl font-heading font-medium text-accent mb-6 h-10">
            {text}
            <span className="animate-pulse ml-0.5">|</span>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            I build systems that think, automate, and ship from backend infrastructure to AI that solves real problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="btn-primary-glow px-7 py-3 text-base inline-flex items-center gap-2">
              View My Work <span>▶</span>
            </a>
            <a href="#contact" className="btn-glass px-7 py-3 text-base inline-flex items-center gap-2">
              Let's Talk <span>→</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: "🧠", label: "5+ Projects Built" },
              { icon: "⚙️", label: "10+ Tools Mastered" },
              { icon: "🎯", label: "3+ Clients Served" },
            ].map((s) => (
              <div key={s.label} className="glass-pill px-4 py-2 text-sm flex items-center gap-2 text-muted-foreground">
                <span>{s.icon}</span> {s.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center relative"
        >
          <GlassCard className="p-8 relative" tilt floatSpeed={2}>
            {/* Ripple rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-56 h-56 rounded-full border"
                style={{
                  borderColor: isDark ? "rgba(0,212,255,0.2)" : "rgba(100,200,255,0.4)",
                  animation: "pulse-ring 3s ease-out infinite",
                }}
              />
              <div
                className="absolute w-56 h-56 rounded-full border"
                style={{
                  borderColor: isDark ? "rgba(0,212,255,0.1)" : "rgba(100,200,255,0.2)",
                  animation: "pulse-ring 3s ease-out infinite 1.5s",
                }}
              />
            </div>

            {/* Profile photo */}
            <div
              className="w-48 h-48 mx-auto rounded-full relative overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(0,150,255,0.2), rgba(0,212,255,0.1))"
                  : "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(150,230,255,0.3))",
                boxShadow: isDark
                  ? "0 0 40px rgba(0,212,255,0.2), inset 0 0 40px rgba(0,100,200,0.1)"
                  : "0 0 40px rgba(56,189,248,0.2), inset 0 0 40px rgba(200,240,255,0.3)",
              }}
            >
              <img
                src="/image.png"
                alt="Faith Bamidele"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {badges.map((b, i) => (
                <motion.span
                  key={b}
                  className="glass-chip"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
