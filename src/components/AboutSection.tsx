import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Download, Search, Settings, Globe } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">// who I am</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-12">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Refined Image Section */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <GlassCard className="p-2 overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-auto" floatSpeed={3}>
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <img
                  src="/image2.png"
                  alt="Faith Bamidele"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 translate-y-4"
                />
                {/* Subtle Overlay Gradient to blend the bottom of the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </GlassCard>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                My journey didn’t start with the current AI hype. It began three years ago with 
                <strong className="text-foreground"> classical Machine Learning</strong>. I spent time cleaning data and building models from the ground up  transitioned to start building intelligent systems that makes humanity better.
              </p>

              <p>
                I’m a builder at heart. I don't just want to see a model work in a notebook; I want to see 
                it work in the hands of users. This drive led me into <strong className="text-foreground">Backend Engineering</strong>. 
                I fell in love with scaling, clean architecture, and the systems that turn a 
                raw idea into a production-ready solution.
              </p>

              <p>
                Today, I’m building toward becoming a <strong className="text-foreground">Full-Stack AI Systems Engineer</strong>—someone 
                who doesn't just build the "brain," but the entire body of a product. I’m focused 
                on building solutions that solve real human problems.
              </p>
            </div>

            {/* Cleaner Icon List */}
            <div className="grid gap-4 mb-10">
              {[
                { icon: <Search size={18} className="text-primary" />, title: "Curiosity", desc: "I research before I build" },
                { icon: <Settings size={18} className="text-primary" />, title: "Building", desc: "I need to see it work, not just understand it" },
                { icon: <Globe size={18} className="text-primary" />, title: "Impact", desc: "Solving real human problems" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-foreground font-semibold block">{item.title}</span>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary-glow px-8 py-3 inline-flex items-center gap-2 rounded-xl">
                <Download size={18} /> Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;