import { motion } from "motion/react";
import { Database, Zap, Cpu, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants";
import profilePic from "../assets/ProfilePIC.jpg";

const FEATURES = [
  { icon: Database, title: "SQL Expert", desc: "Advanced MSSQL optimization" },
  { icon: Zap, title: "Performance", desc: "In-Memory OLTP & Tuning" },
  { icon: Cpu, title: "Scalability", desc: "Data pipeline architecture" },
  { icon: Award, title: "Certified", desc: "Azure & MS SQL Exams" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Optimizing <span className="text-brand-cyan">Foundations</span>,
            <br />Empowering Scale.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            {PORTFOLIO_DATA.bio}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((item, i) => (
              <div key={i} className="glass-card p-6 flex flex-col items-start gap-4 hover:border-brand-accent/50 transition-colors">
                <div className="p-3 bg-brand-accent/10 rounded-xl">
                  <item.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/40 to-brand-glow/40 blur-[80px] rounded-full animate-pulse" />
          <div className="relative h-full w-full rounded-full border-2 border-white/10 p-4 backdrop-blur-2xl">
                    <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
          />
            {/* Orbital stats */}
            <div className="absolute -top-4 -right-4 glass-card p-4 accent-glow">
              <span className="text-3xl font-display font-bold text-brand-accent">5+</span>
              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Years Experience</p>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-4 accent-glow">
              <span className="text-3xl font-display font-bold text-brand-cyan">100%</span>
              <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Query Optimization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
