import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Send, Mail, MessageSquare, Linkedin, Twitter, Copy, Check } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "bamidelefaith10@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: <MessageSquare size={24} />, label: "WhatsApp", href: "https://wa.me/+2349010641900", color: "text-green-400" },
    { icon: <Mail size={24} />, label: "Email", href: `mailto:${email}`, color: "text-red-400" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/bamidele-faith/", color: "text-blue-400" },
    { icon: <Twitter size={24} />, label: "X / Twitter", href: "https://x.com/FaithBamidele_", color: "text-slate-200" },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto text-center lg:text-left">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="section-tag">// let's build something</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-3">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className={`${s.color} group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </div>
                  <span className="font-medium text-sm">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-xs font-mono uppercase text-primary mb-2 tracking-widest font-bold">Primary Email</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono truncate">{email}</span>
                <button 
                  onClick={copyEmail}
                  className="p-2 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="p-3 rounded-full bg-primary/20 text-primary mb-4">
                  <Mail size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Email is the Best Way</h4>
                <p className="text-muted-foreground text-sm max-w-xs mb-6">
                  My automated messaging system is being upgraded. Please reach out directly via email for the fastest response.
                </p>
                <a 
                  href={`mailto:${email}`} 
                  className="btn-primary-glow px-8 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
                >
                  Click to Send Email <Send size={16} />
                </a>
              </div>

              {/* Blurred Form in background just for aesthetic */}
              <div className="space-y-4 opacity-20 pointer-events-none">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-12 bg-white/10 rounded-lg" />
                  <div className="h-12 bg-white/10 rounded-lg" />
                </div>
                <div className="h-12 bg-white/10 rounded-lg" />
                <div className="h-32 bg-white/10 rounded-lg" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;