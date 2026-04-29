import { motion } from "motion/react";
import { EXPERIENCE } from "../constants";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional Journey</h2>
        <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
      </motion.div>

      {/* Timeline wrapper — center line on md+ */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        {EXPERIENCE.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative mb-12 flex items-start md:justify-center"
            >
              {/* Dot — pinned to the center line */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_8px_#3b82f6] z-10" />

              {/* Card — alternates left / right on md+ */}
              <div
                className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                  isEven
                    ? "md:mr-[55%]"   // sits on the LEFT half
                    : "md:ml-[55%]"   // sits on the RIGHT half
                }`}
              >
                <div className="glass-card p-8 hover:border-brand-accent/30 transition-all group">
                  <div className={`flex items-center gap-2 mb-4 flex-wrap ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                    <h3 className="text-xl font-display font-bold tracking-tight group-hover:text-brand-accent transition-colors flex-1">
                      {item.company}
                    </h3>
                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40 uppercase tracking-widest font-bold shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className={`text-brand-accent font-mono text-[10px] mb-4 uppercase tracking-[0.2em] font-bold ${isEven ? "md:text-right" : ""}`}>
                    {item.role}
                  </p>

                  <ul className="space-y-3 text-white/50 text-[11px] leading-relaxed">
                    {item.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}