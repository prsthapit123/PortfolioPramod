import { motion } from "motion/react";
import { Gamepad2, Code, Laptop, Users } from "lucide-react";

const HOBBIES = [
  { icon: Code, name: "Coding Experiments", color: "text-brand-accent", glow: "shadow-brand-accent/30" },
  { icon: Gamepad2, name: "Competitive Gaming", color: "text-brand-glow", glow: "shadow-brand-glow/30" },
  { icon: Laptop, name: "Learning Tech", color: "text-brand-cyan", glow: "shadow-brand-cyan/30" },
  { icon: Users, name: "Family Time", color: "text-brand-accent", glow: "shadow-brand-accent/20" },
];

export function Hobbies() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Beyond the Terminal</h2>
        <div className="h-1 w-20 bg-brand-glow mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {HOBBIES.map((hobby, i) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring" }}
            whileHover={{ y: -10, scale: 1.05 }}
            className={`glass-card p-8 flex flex-col items-center justify-center gap-6 group hover:border-${hobby.color.split('-')[1]}/50 transition-all`}
          >
            <div className={`p-6 bg-white/5 rounded-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:bg-white/10 ${hobby.glow} shadow-xl`}>
              <hobby.icon className={`w-10 h-10 ${hobby.color}`} />
            </div>
            <span className="text-sm font-display font-bold uppercase tracking-widest text-center opacity-70 group-hover:opacity-100 transition-opacity">
               {hobby.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
