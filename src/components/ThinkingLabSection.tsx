import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Lock, Sparkles } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ThinkingLabSection = () => {
  return (
    <section id="lab" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">// how I think</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">The Thinking Lab</h2>
          <p className="text-muted-foreground italic mb-12 max-w-2xl">
            This is where I document my journey - building RAG pipelines, testing AI agents, and exploring how to make models more useful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Topic 1: RAG */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <GlassCard className="p-6 h-full flex flex-col opacity-60 grayscale" floatSpeed={1}>
              <div className="flex items-center gap-2 mb-4">
                <Lock size={14} className="text-primary/70" />
                <span className="text-primary/70 text-[10px] font-mono uppercase tracking-widest font-bold">Coming Soon</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3 italic">
                Building a RAG Pipeline from Scratch
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                A look at how to connect an AI to your own PDF documents so it can answer questions with real context.
              </p>
            </GlassCard>
          </motion.div>

          {/* Topic 2: AI Agents */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <GlassCard className="p-6 h-full flex flex-col opacity-60 grayscale" floatSpeed={2}>
              <div className="flex items-center gap-2 mb-4">
                <Lock size={14} className="text-primary/70" />
                <span className="text-primary/70 text-[10px] font-mono uppercase tracking-widest font-bold">Coming Soon</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3 italic">
                AI Agents 101: Teaching AI to Use Tools
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                Exploring how to build simple agents that don't just talk, but can actually search the web or perform tasks for you.
              </p>
            </GlassCard>
          </motion.div>

          {/* Topic 3: The Placeholder */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <GlassCard className="p-6 h-full flex flex-col justify-center items-center border-dashed border-2 border-white/5 opacity-30" floatSpeed={3}>
              <Sparkles size={20} className="text-muted-foreground mb-2" />
              <p className="text-muted-foreground text-xs font-mono text-center">
                More topics <br/> loading soon...
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThinkingLabSection;