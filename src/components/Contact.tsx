import { motion } from "motion/react";
import { Send, Mail } from "lucide-react";

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubSVG = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
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
          <p className="text-xl text-white/60 light:text-slate-600 mb-12">
            Interested in optimizing your backend performance or architecting a robust SQL database?
            Let's connect and discuss your next breakthrough.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-4 glass-card bg-brand-accent/10 group-hover:bg-brand-accent transition-colors">
                <Mail className="w-6 h-6 text-brand-accent group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs uppercase font-mono text-white/40 light:text-slate-400 tracking-widest font-bold">Email Me</p>
                <a href="mailto:psthapit@clarosanalytics.com" className="text-lg font-display hover:text-brand-accent transition-colors">psthapit@clarosanalytics.com</a>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/pramod-sthapit-20468821/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card hover:bg-brand-accent/20 transition-all font-bold flex items-center gap-2 group"
              >
                <LinkedInSVG className="w-5 h-5 group-hover:text-brand-accent transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/prsthapit123" target="_blank"
                rel="noopener noreferrer" className="p-4 glass-card hover:bg-brand-glow/20 transition-all font-bold flex items-center gap-2 group">
                <GitHubSVG className="w-5 h-5 group-hover:text-brand-glow transition-colors" />
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
                className="w-full bg-transparent border-b border-white/20 light:border-brand-primary/20 py-3 focus:outline-none focus:border-brand-accent transition-all peer placeholder-transparent"
                id="name"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-accent uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 light:peer-placeholder-shown:text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent pointer-events-none font-bold"
              >
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 light:border-brand-primary/20 py-3 focus:outline-none focus:border-brand-glow transition-all peer placeholder-transparent"
                id="email"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-glow uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 light:peer-placeholder-shown:text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-glow pointer-events-none font-bold"
              >
                Your Email
              </label>
            </div>

            <div className="relative group">
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 light:border-brand-primary/20 py-3 focus:outline-none focus:border-brand-cyan transition-all peer placeholder-transparent resize-none"
                id="message"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-4 text-xs font-mono text-brand-cyan uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 light:peer-placeholder-shown:text-slate-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-cyan pointer-events-none font-bold"
              >
                Project Details
              </label>
            </div>

            <button
              disabled={isSubmitting}
              className="w-full py-5 bg-white light:bg-brand-primary text-brand-primary light:text-white font-display font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-accent hover:text-white transition-all duration-500 overflow-hidden relative group"
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
      
      <footer className="mt-24 pt-12 border-t border-white/10 light:border-brand-primary/10 flex flex-col items-center gap-4 text-[10px] font-mono text-white/50 light:text-slate-500 uppercase tracking-[0.2em]">
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
