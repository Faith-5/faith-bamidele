import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/hooks/useTheme";

const WaterBackground = () => {
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const lightBlobs = [
    { w: "60vw", h: "60vh", top: "10%", left: "5%", color: "rgba(255,255,255,0.4)", anim: "blob1 8s" },
    { w: "80vw", h: "80vh", top: "20%", right: "-10%", left: "auto", color: "rgba(180,240,255,0.3)", anim: "blob2 12s" },
    { w: "40vw", h: "40vh", top: "auto", bottom: "20%", left: "30%", color: "rgba(120,220,255,0.2)", anim: "blob3 15s" },
    { w: "50vw", h: "50vh", top: "40%", left: "10%", color: "rgba(200,245,255,0.25)", anim: "blob4 10s" },
  ];

  const darkBlobs = [
    { w: "60vw", h: "60vh", top: "10%", left: "5%", color: "rgba(0,150,255,0.06)", anim: "blob1 8s" },
    { w: "80vw", h: "80vh", top: "20%", right: "-10%", left: "auto", color: "rgba(0,200,255,0.04)", anim: "blob2 12s" },
    { w: "40vw", h: "40vh", top: "auto", bottom: "20%", left: "30%", color: "rgba(100,220,255,0.03)", anim: "blob3 15s" },
    { w: "50vw", h: "50vh", top: "40%", left: "10%", color: "rgba(0,100,200,0.08)", anim: "blob4 10s" },
  ];

  const blobs = isDark ? darkBlobs : lightBlobs;

  const lightOrbs = [
    { size: 400, color: "rgba(255,255,255,0.3)", top: "10%", left: "60%", anim: "blob1 20s" },
    { size: 350, color: "rgba(176,232,255,0.25)", top: "60%", left: "10%", anim: "blob2 18s" },
    { size: 500, color: "rgba(125,216,240,0.2)", top: "30%", left: "70%", anim: "blob3 22s" },
    { size: 300, color: "rgba(255,255,255,0.25)", top: "70%", left: "50%", anim: "blob4 16s" },
    { size: 450, color: "rgba(176,232,255,0.2)", top: "5%", left: "20%", anim: "blob2 25s" },
  ];

  const darkOrbs = [
    { size: 400, color: "rgba(0,102,255,0.04)", top: "10%", left: "60%", anim: "blob1 20s" },
    { size: 350, color: "rgba(0,170,255,0.03)", top: "60%", left: "10%", anim: "blob2 18s" },
    { size: 500, color: "rgba(0,68,204,0.05)", top: "30%", left: "70%", anim: "blob3 22s" },
    { size: 300, color: "rgba(0,150,255,0.04)", top: "70%", left: "50%", anim: "blob4 16s" },
    { size: 450, color: "rgba(0,102,255,0.03)", top: "5%", left: "20%", anim: "blob2 25s" },
  ];

  const orbs = isDark ? darkOrbs : lightOrbs;

  const bgGradient = isDark
    ? "radial-gradient(ellipse at 20% 50%, #001a2e 0%, #002a4a 25%, #003d5c 50%, #001520 100%)"
    : "radial-gradient(ellipse at 30% 40%, #e0f7ff 0%, #b8eeff 20%, #7dd8f0 45%, #a8e6f0 70%, #c5f0ff 100%)";

  const shimmerColor = isDark
    ? "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)"
    : "linear-gradient(135deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ transition: "background 0.4s ease" }}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: bgGradient, transition: "background 0.4s ease" }} />

      {/* Caustic blobs */}
      {blobs.map((b, i) => (
        <div
          key={`blob-${i}`}
          className="absolute rounded-full"
          style={{
            width: b.w, height: b.h, top: b.top, left: b.left,
            ...(b.right ? { right: b.right } : {}),
            ...(b.bottom ? { bottom: b.bottom } : {}),
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            animation: `${b.anim} ease-in-out infinite`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Floating light orbs */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: orb.size, height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top, left: orb.left,
            filter: "blur(60px)",
            animation: `${orb.anim} ease-in-out infinite`,
            willChange: "transform",
            mixBlendMode: isDark ? "screen" : "normal",
          }}
        />
      ))}

      {/* Shimmer sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: shimmerColor,
            animation: isDark ? "shimmer 6s linear infinite" : "shimmer 5s linear infinite",
            willChange: "transform",
          }}
        />
      </div>

      {/* Particles */}
      {ready && (
        <Particles
          key={theme}
          id="water-particles"
          options={{
            fullScreen: false,
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true } },
              color: { value: isDark ? ["#ffffff", "#88ccff"] : ["#ffffff", "#a0e0ff"] },
              opacity: { value: { min: isDark ? 0.1 : 0.15, max: isDark ? 0.4 : 0.5 } },
              size: { value: { min: 1, max: isDark ? 3 : 2.5 } },
              move: {
                enable: true,
                direction: "top" as const,
                speed: { min: 0.3, max: 0.8 },
                random: true,
                outModes: { default: "out" as const },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default WaterBackground;
