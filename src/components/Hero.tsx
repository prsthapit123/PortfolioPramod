import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";
import LOGOPIC from "../assets/claros_analytics_logo.jpg";
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl w-full z-10 grid lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 glass-card p-12 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute -right-4 -top-8 text-[160px] font-bold text-white/[0.03] select-none pointer-events-none italic uppercase leading-none transition-transform duration-1000 group-hover:scale-110">
            DBA
          </div>
          
          <div className="mb-6 inline-block px-4 py-1.5 glass-card text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase bg-white/5 border-white/10">
            Based in Kathmandu, Nepal
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-8 leading-none tracking-tighter">
            Pramod Ratna Sthapit
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light italic max-w-2xl">
            “Optimizing Data. Powering Decisions.”
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#projects"
              className="group relative px-10 py-4 bg-brand-accent rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 overflow-hidden transition-all shadow-lg shadow-blue-600/30 hover:bg-blue-500"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-10 py-4 glass-card font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-all text-white/80 border-white/20"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="lg:col-span-4 glass-card p-8 flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full border-2 border-brand-accent/50 p-1 flex items-center justify-center bg-brand-accent/10 shrink-0">
           <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                   src={LOGOPIC}
                    alt="LOGOPIC"
                  className="w-3/4 h-3/4 object-contain"
                />
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Current Role</p>
            <p className="text-sm font-semibold text-white/90">Software Engineer @ Claros Analytics</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <ChevronDown />
      </motion.div>
      
      {/* Decorative floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] w-32 h-32 glass-card rounded-3xl opacity-20 hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[5%] w-24 h-24 glass-card rounded-full opacity-20 hidden lg:block"
      />
    </section>
  );
}
