import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import { X, ExternalLink, Box } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Masterpiece Projects</h2>
        <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative aspect-video rounded-3xl overflow-hidden glass-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500 opacity-100 group-hover:opacity-0" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-4">
              <span className="text-xs font-mono text-brand-accent tracking-widest uppercase mb-2">Project 0{i + 1}</span>
              <h3 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 light:text-slate-600 text-sm max-w-xs">{project.description}</p>
            </div>
            
            <div className="absolute top-4 right-4 p-3 glass-card opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-5 h-5 text-brand-cyan" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-brand-primary/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-3xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-10 flex flex-col gap-6">
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">{selectedProject.title}</h3>
                    <p className="text-white/60 light:text-slate-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                     <h4 className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-3">Technology Stack</h4>
                     <div className="flex flex-wrap gap-2">
                       {selectedProject.tech.map(t => (
                         <span key={t} className="px-3 py-1 bg-white/5 light:bg-brand-primary/5 border border-white/10 light:border-brand-primary/10 rounded-full text-xs font-medium text-white/80 light:text-slate-700">
                           {t}
                         </span>
                       ))}
                     </div>
                  </div>

                  <div>
                     <h4 className="text-xs font-mono text-brand-cyan uppercase tracking-widest mb-3">Key Results</h4>
                     <ul className="space-y-2">
                        {selectedProject.results.map((r, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-white/70 light:text-slate-700">
                              <Box className="w-4 h-4 text-brand-cyan" />
                              <span>{r}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
