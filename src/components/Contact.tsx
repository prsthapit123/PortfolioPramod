import { motion } from "motion/react";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message received! I'll get back to you soon.");
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
          >
            Let's build the <span className="text-brand-accent">Future</span> of
            Data together.
          </motion.h2>
          <p className="text-xl text-white/60 mb-12">
            Interested in optimizing your backend performance or architecting a robust SQL database?
            Let's connect and discuss your next breakthrough.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-4 glass-card bg-brand-accent/10 group-hover:bg-brand-accent transition-colors">
                <Mail className="w-6 h-6 text-brand-accent group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs uppercase font-mono text-white/40 tracking-widest font-bold">Email Me</p>
                <p className="text-lg font-display">psthapit@clarosanalytics.com</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/pramod-sthapit-20468821/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card hover:bg-brand-accent/20 transition-all font-bold flex items-center gap-2 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-brand-accent transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/prsthapit123" target="_blank"
                rel="noopener noreferrer" className="p-4 glass-card hover:bg-brand-glow/20 transition-all font-bold flex items-center gap-2 group">
                <Github className="w-5 h-5 group-hover:text-brand-glow transition-colors" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-[60px] -translate-y-1/2 translate-x-1/2" />
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative group">
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-accent transition-all peer placeholder-transparent"
                id="name"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-accent uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent pointer-events-none font-bold"
              >
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-glow transition-all peer placeholder-transparent"
                id="email"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-glow uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-glow pointer-events-none font-bold"
              >
                Your Email
              </label>
            </div>

            <div className="relative group">
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-cyan transition-all peer placeholder-transparent resize-none"
                id="message"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-cyan uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-cyan pointer-events-none font-bold"
              >
                Project Details
              </label>
            </div>

            <button
              disabled={isSubmitting}
              className="w-full py-5 bg-white text-brand-primary font-display font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-accent hover:text-white transition-all duration-500 overflow-hidden relative group"
            >
              {isSubmitting ? (
                <div className="flex gap-1">
                   <span className="w-2 h-2 rounded-full bg-current animate-bounce" />
                   <span className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                   <span className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                </div>
              ) : (
                <>
                  <span>Transmit Signal</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
      
      <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-4 text-[10px] font-mono text-slate-600 opacity-50 uppercase tracking-[0.2em]">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
           <span>System Status: Optimized</span>
           <span>Data Buffer: Stable</span>
           <span>UI Version 2026.04.27</span>
        </div>
        <div className="text-center">
          © 2026 Pramod Ratna Sthapit • Crafted with Passion & Precision
        </div>
      </footer>
    </section>
  );
}
