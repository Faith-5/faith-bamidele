import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">// what others say</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-12">Trusted By Real People</h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <GlassCard className="p-10 md:p-14 relative animate-glow-pulse" floatSpeed={3} hoverGlow={false}>
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-7xl font-heading text-primary/40 leading-none select-none">"</div>

            <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-8 mb-8">
              Faith approached our project with a level of seriousness and technical depth I didn't expect.
              She didn't just complete the task — she understood the problem, asked the right questions, and
              delivered something that actually worked beyond what we discussed. I'd work with her again without hesitation.
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(0,150,255,0.15), rgba(74,222,128,0.1))"
                    : "linear-gradient(135deg, rgba(200,240,255,0.5), rgba(22,163,74,0.1))",
                  border: isDark ? "1px solid rgba(74,222,128,0.3)" : "1px solid rgba(22,163,74,0.3)",
                  boxShadow: isDark ? "0 0 20px rgba(74,222,128,0.15)" : "0 0 20px rgba(22,163,74,0.1)",
                }}
              >
                MO
              </div>
              <div>
                <p className="font-heading font-semibold">Charity Ajayi</p>
                <p className="text-muted-foreground text-sm">Graduate</p>
                <a href="#" className="text-accent text-xs inline-flex items-center gap-1 mt-1 hover:underline">
                  LinkedIn Profile <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
