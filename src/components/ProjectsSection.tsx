import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { ExternalLink, Github, Database, Cpu, Brain, Activity } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const otherProjects = [
  {
    title: "Arziki: Sales & Demand Forecast",
    desc: "A smart inventory tool for retail stores. It processes sales data to predict future demand and sends automatic alerts for stockout and overstock risks.",
    tags: ["Python", "Machine Learning", "Forecasting", "Pandas"],
    github: "https://github.com/Faith-5/Arziki-Inventory-Forecasting",
    demo: "https://huggingface.co/spaces/Faith10/retail-forecast-demo",
    icon: <Database className="text-blue-400" size={18} />
  },
  {
    title: "SmartMeter: Electricity Predictor",
    desc: "Tested 5 different models to predict home power usage. Focused on finding the best model that is accurate yet small enough to run on a mobile phone.",
    tags: ["TensorFlow", "Scikit-Learn", "Mobile AI", "FastAPI"],
    github: "https://github.com/Faith-5/smart-meter",
    demo: "https://smart-meter-cw6x.onrender.com/",
    icon: <Cpu className="text-orange-400" size={18} />
  },
  {
    title: "Lassa Fever Outbreak Tracker",
    desc: "An AI-powered dashboard that maps disease hotspots. It analyzes case trends to predict outbreaks 4 weeks in advance, helping health officials prepare.",
    tags: ["Clustering", "Data Visualization", "Plotly", "AI Integration"],
    github: "https://github.com/Faith-5/Lassa-Fever-Prediction",
    demo: "https://lassa-fever-gosd.onrender.com/",
    icon: <Activity className="text-emerald-400" size={18} />
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-tag font-mono">// what I've built</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-12">Featured Work</h2>
        </motion.div>

        {/* Featured: ULTREX */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <GlassCard className="p-8 mb-10 overflow-hidden" floatSpeed={2}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden border border-white/10 group bg-black shadow-2xl">
                <img 
                  src="/ultrex.png" 
                  alt="Ultrex AI Video Engine" 
                  className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                   <Brain className="text-primary" size={20} />
                   <span className="glass-chip text-primary">Featured: AI Video Production</span>
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">Ultrex: Turn Scripts into Viral Shorts</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A powerful engine that automates video creation. It uses Llama 3 to process scripts, generates AI visuals, and compiles everything into a finished video with professional captions in under 20 seconds.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Speed</p>
                      <p className="text-lg font-mono text-primary">&lt; 20s / Video</p>
                   </div>
                   <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Database</p>
                      <p className="text-lg font-mono text-primary">Turso SQLite</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Python", "FastAPI", "FFmpeg", "Llama 3", "AI Integration"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md text-xs font-mono">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/Faith-5/Ultrex" className="btn-primary-glow flex-1 text-center py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    View Source Code <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* The Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 * (i + 1) }}>
              <GlassCard className="p-6 h-full flex flex-col border-t-2 border-t-transparent hover:border-t-primary/50 transition-all duration-300">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded border border-white/10 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={p.demo} className="flex-1 btn-glass text-center py-2 text-xs font-bold rounded-lg hover:text-primary">Live Demo</a>
                  <a href={p.github} className="btn-glass px-4 py-2 rounded-lg"><Github size={14} /></a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;