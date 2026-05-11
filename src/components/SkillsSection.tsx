import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Brain, Cpu, Database, Code2, BarChart, Terminal, Zap } from "lucide-react";

const categories = [
  {
    title: "Applied AI & ML",
    icon: <Brain className="text-primary" size={24} />,
    description: "Building the 'Brain' of the application.",
    skills: ["Python", "TensorFlow", "Scikit-Learn", "LLMs (Llama 3)", "LangChain", "RAG & Agents", "Time-Series Forecasting"],
    float: 1 as const,
  },
  {
    title: "Backend & Systems",
    icon: <Code2 className="text-primary" size={24} />,
    description: "Building the 'Body' - scaling and logic.",
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "Turso (SQLite)", "Async Programming", "Schema Validation", "System Design"],
    float: 2 as const,
  },
  {
    title: "Data & Analytics",
    icon: <BarChart className="text-primary" size={24} />,
    description: "Turning raw data into decisions.",
    skills: ["Pandas", "NumPy", "Data Pipelines", "Data Visualization", "Hugging Face Hub", "Automation Scripts", "Git & GitHub"],
    float: 3 as const,
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-tag font-mono">// technical arsenal</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">My Technical Stack</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 italic">
          Focused on the intersection of Machine Learning and scalable Backend Engineering.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div key={cat.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
            <GlassCard className="p-8 h-full border-b-4 border-b-transparent hover:border-b-primary/40 transition-all duration-500" floatSpeed={cat.float}>
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6">
                {cat.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-wider">{cat.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span 
                    key={s} 
                    className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Trust Signal for Clients */}
      <motion.div 
        variants={fadeUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/20 text-primary">
                <Zap size={24} />
            </div>
            <div>
                <h4 className="text-lg font-bold">Solution-Oriented Architecture</h4>
                <p className="text-sm text-muted-foreground">I choose the best tool for the problem, ensuring every product is scalable, secure, and smart.</p>
            </div>
        </div>
        <div className="flex -space-x-2">
            {/* These can be small text indicators of your 2-year background */}
            <div className="glass-pill px-4 py-2 text-[10px] font-bold border-primary/20">2+ YRS ML</div>
            <div className="glass-pill px-4 py-2 text-[10px] font-bold border-primary/20">FASTAPI EXPERT</div>
            <div className="glass-pill px-4 py-2 text-[10px] font-bold border-primary/20">PRODUCT FIRST</div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;