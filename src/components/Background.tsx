import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-brand-primary transition-colors duration-500 light:bg-[#f8fafc]">
      {/* Mesh Background */}
      <div 
        className="absolute inset-0 opacity-40 light:opacity-0"
        style={{
          background: `radial-gradient(circle at 20% 30%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 80% 70%, #1e1b4b 0%, transparent 50%)`
        }}
      />

      {/* Glow Spheres */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px] light:opacity-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-brand-glow/5 blur-[120px] light:opacity-0" />

      {/* Data Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] light:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Light mode grid */}
      <div 
        className="absolute inset-0 opacity-0 light:opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 2 + 1,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, "-100%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }}
          />
        ))}
      </div>
    </div>
  );
}
