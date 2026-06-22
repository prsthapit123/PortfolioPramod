import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../constants";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Cognitive Architecture</h2>
        <p className="text-brand-glow max-w-xl mx-auto font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
          Architecture / Optimization / Performance
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col gap-8 relative overflow-hidden group border-white/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-7xl font-display font-bold leading-none italic uppercase">{category.title[0]}</span>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-medium">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-brand-accent">{skill.level}%</span>
                  </div>
                  <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#5BB8F5] to-[#93D8FA] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
