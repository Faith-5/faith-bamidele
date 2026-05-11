import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  floatSpeed?: 1 | 2 | 3;
  tilt?: boolean;
  hoverGlow?: boolean;
}

const GlassCard = ({ children, className = "", floatSpeed = 1, tilt = false, hoverGlow = true }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const floatClass = floatSpeed === 1 ? "animate-float1" : floatSpeed === 2 ? "animate-float2" : "animate-float3";

  const handleMouse = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`glass-card ${hoverGlow ? "glass-card-hover" : ""} ${floatClass} ${className}`}
      style={tilt ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
